import React, { useEffect, useLayoutEffect, useMemo, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
  // FIX 1: Wrap 'get' in useCallback to fix the dependency warning
  const get = useCallback(() => {
    if (typeof window === 'undefined') return defaultValue;
    return values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;
  }, [queries, values, defaultValue]);

  const [value, setValue] = useState<number>(defaultValue);

  useEffect(() => {
    setValue(get());
    const handler = () => setValue(get());
    queries.forEach(q => matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
  }, [queries, get]); // Now 'get' is stable and included

  return value;
};

const useMeasure = <T extends HTMLElement>() => {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]): Promise<void> => {
  await Promise.all(
    urls.map(
      src =>
        new Promise<void>(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

interface Item {
  id: string;
  img: string;
  caption: string;
  height: number;
  position?: 'center' | 'top' | 'bottom';
  // Fine-tuned positioning (percentage values)
  positionX?: number; // -50 to 50 (negative = left, positive = right)
  positionY?: number; // -50 to 50 (negative = up, positive = down)
  zoom?: number; // 1 = normal, 1.2 = 120% zoom, 0.8 = 80% zoom
}

interface GridItem extends Item {
  x: number;
  y: number;
  w: number;
  h: number;
}

interface MasonryProps {
  items: Item[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'bottom' | 'top' | 'left' | 'right' | 'center' | 'random';
  blurToFocus?: boolean;
}

const Masonry: React.FC<MasonryProps> = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  blurToFocus = true
}) => {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure<HTMLDivElement>();
  const [imagesReady, setImagesReady] = useState(false);

  // FIX 2: Wrap getInitialPosition in useCallback
  const getInitialPosition = useCallback((item: GridItem) => {
    if (typeof window === 'undefined') return { x: item.x, y: item.y };
    
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === 'random') {
      const dirs = ['top', 'bottom', 'left', 'right'];
      direction = dirs[Math.floor(Math.random() * dirs.length)] as typeof animateFrom;
    }

    switch (direction) {
      case 'top':
        return { x: item.x, y: -200 };
      case 'bottom':
        return { x: item.x, y: window.innerHeight + 200 };
      case 'left':
        return { x: -200, y: item.y };
      case 'right':
        return { x: window.innerWidth + 200, y: item.y };
      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  }, [animateFrom, containerRef]);

  useEffect(() => {
    preloadImages(items.map(i => i.img)).then(() => setImagesReady(true));
  }, [items]);

  const grid = useMemo<GridItem[]>(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const gap = 16;
    const totalGaps = (columns - 1) * gap;
    const columnWidth = (width - totalGaps) / columns;

    return items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * (columnWidth + gap);
      const height = child.height / 2;
      const y = colHeights[col];

      colHeights[col] += height + gap;
      return { ...child, x, y, w: columnWidth, h: height };
    });
  }, [columns, items, width]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const start = getInitialPosition(item);
        gsap.fromTo(
          selector,
          {
            opacity: 0,
            x: start.x,
            y: start.y,
            width: item.w,
            height: item.h,
            ...(blurToFocus && { filter: 'blur(10px)' })
          },
          {
            opacity: 1,
            ...animProps,
            ...(blurToFocus && { filter: 'blur(0px)' }),
            duration: 0.8,
            ease: 'power3.out',
            delay: index * stagger
          }
        );
      } else {
        gsap.to(selector, {
          ...animProps,
          duration,
          ease,
          overwrite: 'auto'
        });
      }
    });

    hasMounted.current = true;
  }, [grid, imagesReady, stagger, animateFrom, blurToFocus, duration, ease, getInitialPosition]); // Added getInitialPosition

  const handleMouseEnter = (id: string) => {
    const imageContainer = document.querySelector(`[data-key="${id}"] .image-bg`);
    const captionOverlay = document.querySelector(`[data-key="${id}"] .caption-overlay`);
    
    if (imageContainer) {
      gsap.to(imageContainer, {
        filter: 'blur(4px) brightness(0.4)',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    
    if (captionOverlay) {
      gsap.to(captionOverlay, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  const handleMouseLeave = (id: string) => {
    const imageContainer = document.querySelector(`[data-key="${id}"] .image-bg`);
    const captionOverlay = document.querySelector(`[data-key="${id}"] .caption-overlay`);
    
    if (imageContainer) {
      gsap.to(imageContainer, {
        filter: 'blur(0px) brightness(1)',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
    
    if (captionOverlay) {
      gsap.to(captionOverlay, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };

  const getBackgroundPosition = (item: Item) => {
    // Start with preset position
    let basePosition = 'center center';
    switch (item.position) {
      case 'top':
        basePosition = 'center top';
        break;
      case 'bottom':
        basePosition = 'center bottom';
        break;
      case 'center':
      default:
        basePosition = 'center center';
    }

    // Apply fine-tuned adjustments if provided
    if (item.positionX !== undefined || item.positionY !== undefined) {
      const x = 50 + (item.positionX || 0); // Convert -50 to 50 range to 0-100%
      const y = 50 + (item.positionY || 0);
      return `${x}% ${y}%`;
    }

    return basePosition;
  };

  const getBackgroundSize = (zoom?: number) => {
    if (!zoom) return 'cover';
    const percentage = zoom * 100;
    return `${percentage}%`;
  };

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {grid.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          className="absolute box-content"
          style={{ willChange: 'transform, width, height, opacity' }}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={() => handleMouseLeave(item.id)}
        >
          <div className="relative w-full h-full rounded-[10px] shadow-[0px_10px_50px_-10px_rgba(0,0,0,0.2)] overflow-hidden">
            <div
              className="image-bg absolute inset-0 bg-cover"
              style={{ 
                backgroundImage: `url(${item.img})`,
                backgroundPosition: getBackgroundPosition(item),
                backgroundSize: getBackgroundSize(item.zoom)
              }}
            />
            
            <div className="caption-overlay absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none px-6 z-10">
              <p className="text-white text-center text-base font-medium leading-relaxed drop-shadow-lg">
                {item.caption}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Masonry;