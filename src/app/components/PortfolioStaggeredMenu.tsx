"use client"

import type React from "react"
import { useCallback, useLayoutEffect, useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import Image from "next/image"

export interface PortfolioItem {
  id: string
  title: string
  company: string
  time?: string | null
  skillColor: string
  skills: string[]
  links: { label: string; url: string;}[]
  description: string
  photo?: string | null
}

export interface PortfolioStaggeredMenuProps {
  position?: "left" | "right"
  colors?: string[]
  itemData: PortfolioItem
  accentColor?: string
  onMenuClose?: () => void
  autoOpen?: boolean
  isTransitioning?: boolean
}

export const PortfolioStaggeredMenu: React.FC<PortfolioStaggeredMenuProps> = ({
  position = "right",
  colors = ["#B19EEF", "#5227FF"],
  itemData,
  accentColor = "#5227FF",
  onMenuClose,
  autoOpen = false,
  isTransitioning = false,
}) => {
  const [open, setOpen] = useState(false)
  const openRef = useRef(false)

  const panelRef = useRef<HTMLDivElement | null>(null)
  const preLayersRef = useRef<HTMLDivElement | null>(null)
  const preLayerElsRef = useRef<HTMLElement[]>([])

  const openTlRef = useRef<gsap.core.Timeline | null>(null)
  const closeTweenRef = useRef<gsap.core.Tween | null>(null)
  const busyRef = useRef(false)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current
      const preContainer = preLayersRef.current

      if (!panel) return

      let preLayers: HTMLElement[] = []
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll(".sm-prelayer")) as HTMLElement[]
      }
      preLayerElsRef.current = preLayers

      const offscreen = position === "left" ? -100 : 100
      gsap.set([panel, ...preLayers], { xPercent: offscreen })
    })
    return () => ctx.revert()
  }, [position])

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current
    const layers = preLayerElsRef.current
    if (!panel) return null

    openTlRef.current?.kill()
    if (closeTweenRef.current) {
      closeTweenRef.current.kill()
      closeTweenRef.current = null
    }

    const titleEls = Array.from(panel.querySelectorAll(".sm-panel-itemLabel")) as HTMLElement[]
    const socialLinks = Array.from(panel.querySelectorAll(".sm-socials-link")) as HTMLElement[]
    const descriptionEl = panel.querySelector(".portfolio-description") as HTMLElement | null
    const photoEl = panel.querySelector(".portfolio-photo") as HTMLElement | null
    const skillsEls = Array.from(panel.querySelectorAll(".skill-bubble")) as HTMLElement[]

    const layerStates = layers.map((el) => ({ el, start: Number(gsap.getProperty(el, "xPercent")) }))
    const panelStart = Number(gsap.getProperty(panel, "xPercent"))

    // Set initial states for animations
    if (titleEls.length) gsap.set(titleEls, { yPercent: 140, rotate: 10 })
    if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 })
    if (descriptionEl) gsap.set(descriptionEl, { x: 30, opacity: 0 })
    if (photoEl) gsap.set(photoEl, { x: 30, opacity: 0 })
    if (skillsEls.length) gsap.set(skillsEls, { y: 25, opacity: 0 })

    const tl = gsap.timeline({ paused: true })

    // Animate background layers with stagger
    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: "power4.out" }, i * 0.07)
    })

    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0)
    const panelDuration = 0.65

    // Animate main panel
    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: "power4.out" },
      panelInsertTime,
    )

    if (titleEls.length) {
      const itemsStartRatio = 0.15
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio

      tl.to(
        titleEls,
        { yPercent: 0, rotate: 0, duration: 1, ease: "power4.out", stagger: { each: 0.1, from: "start" } },
        itemsStart,
      )
    }

    if (socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4

      tl.to(
        socialLinks,
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
          stagger: { each: 0.08, from: "start" },
        },
        socialsStart + 0.04,
      )
    }

    if (skillsEls.length) {
      const skillsStart = panelInsertTime + panelDuration * 0.5

      tl.to(
        skillsEls,
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          ease: "power3.out",
          stagger: { each: 0.08, from: "start" },
        },
        skillsStart + 0.04,
      )
    }

    if (descriptionEl) {
      tl.to(
        descriptionEl,
        { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        panelInsertTime + panelDuration * 0.6,
      )
    }

    if (photoEl) {
      tl.to(photoEl, { x: 0, opacity: 1, duration: 0.4, ease: "power2.out" }, panelInsertTime + panelDuration * 0.7)
    }

    openTlRef.current = tl
    return tl
  }, [position])

  const playOpen = useCallback(() => {
    if (busyRef.current) return
    busyRef.current = true
    const tl = buildOpenTimeline()
    if (tl) {
      tl.eventCallback("onComplete", () => {
        busyRef.current = false
      })
      tl.play(0)
    } else {
      busyRef.current = false
    }
  }, [buildOpenTimeline])

  const playClose = useCallback(
    (shouldCallOnMenuClose = true) => {
      openTlRef.current?.kill()
      openTlRef.current = null

      const panel = panelRef.current
      const layers = preLayerElsRef.current
      if (!panel) return

      const all: HTMLElement[] = [...layers, panel]
      closeTweenRef.current?.kill()

      const offscreen = position === "left" ? -100 : 100

      closeTweenRef.current = gsap.to(all, {
        xPercent: offscreen,
        duration: 0.32,
        ease: "power3.in",
        overwrite: "auto",
        onComplete: () => {
          busyRef.current = false
          if (shouldCallOnMenuClose) {
            onMenuClose?.()
          }
        },
      })
    },
    [position, onMenuClose],
  )

  // FIX: Move useEffect hooks AFTER function definitions to avoid hoisting issues
  useEffect(() => {
    if (isTransitioning && open) {
      // Slide out current panel
      playClose(false) // Don't call onMenuClose during transition
    }
  }, [isTransitioning, open, playClose])

  // Auto-open when component mounts if autoOpen is true
  useEffect(() => {
    if (autoOpen && itemData && !openRef.current && !isTransitioning) {
      openRef.current = true
      setOpen(true)
      setTimeout(() => playOpen(), 100) // Small delay to ensure DOM is ready
    }
  }, [autoOpen, itemData, isTransitioning, playOpen])

  const handleClose = () => {
    openRef.current = false
    setOpen(false)
    playClose()
  }

  return (
    <div className="sm-scope w-full h-full">
      <div
        className="staggered-menu-wrapper relative w-full h-full z-40"
        style={accentColor ? ({ ["--sm-accent"]: accentColor } as React.CSSProperties) : undefined}
        data-position={position}
        data-open={open || undefined}
      >
        {/* Background layers with original colors */}
        <div
          ref={preLayersRef}
          className="sm-prelayers absolute top-0 right-0 bottom-0 pointer-events-none z-[5]"
          aria-hidden="true"
        >
          {(() => {
            const raw = colors && colors.length ? colors.slice(0, 4) : ["#B19EEF", "#5227FF"]
            const arr = [...raw]
            if (arr.length >= 3) {
              const mid = Math.floor(arr.length / 2)
              arr.splice(mid, 1)
            }
            return arr.map((c, i) => (
              <div
                key={i}
                className="sm-prelayer absolute top-0 right-0 h-full w-full translate-x-0"
                style={{ background: c }}
              />
            ))
          })()}
        </div>

        {/* Main panel with original styling */}
        <aside
          ref={panelRef}
          className="staggered-menu-panel absolute top-0 right-0 h-full bg-white flex flex-col p-[6em_2em_2em_2em] overflow-y-auto z-10 backdrop-blur-[12px] pointer-events-auto"
          style={{ WebkitBackdropFilter: "blur(12px)" }}
          aria-hidden={!open}
          data-menu-panel="true"
        >
          <div className="sm-panel-inner flex-1 flex flex-col gap-5">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-8 right-8 text-black hover:text-[var(--sm-accent)] transition-colors text-2xl font-bold"
            >
              ×
            </button>

            {/* Title and Company with original menu styling but smaller text */}
            <ul className="sm-panel-list list-none m-0 p-0 flex flex-col gap-2" role="list">
              <li className="sm-panel-itemWrap relative overflow-hidden leading-none">
                <div className="sm-panel-item relative text-black font-semibold text-[2.5rem] leading-none tracking-[-2px] uppercase inline-block pr-[1.4em]">
                  <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                    {itemData.company}
                  </span>
                </div>
              </li>
              {itemData.title && itemData.title.length > 0 && (
                <li className="sm-panel-itemWrap relative overflow-hidden leading-none mt-4">
                  <div className="sm-panel-item relative text-black font-semibold text-[2rem] leading-none tracking-[-1px] uppercase inline-block pr-[1.4em]">
                    <span className="sm-panel-itemLabel inline-block [transform-origin:50%_100%] will-change-transform">
                      {itemData.title}
                    </span>
                  </div>
                </li>
              )}
            </ul>

            {/* Links with original social styling and animations */}
            {itemData.links && itemData.links.length > 0 && (
              <div className="sm-socials mt-6 pt-4 flex flex-col gap-3" aria-label="Project links">
                <h3 className="sm-socials-title m-0 text-base font-medium text-[var(--sm-accent)]">Links</h3>
                <ul className="sm-socials-list list-none m-0 p-0 flex flex-row items-center gap-4 flex-wrap" role="list">
                  {itemData.links.map((link, i) => (
                    <li key={link.label + i} className="sm-socials-item">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm-socials-link text-[0.8rem] font-sm text-[#111] no-underline relative inline-block py-[2px] transition-[color,opacity] duration-300 ease-linear"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Skills as small subtle bubbles */}
            {itemData.skills && itemData.skills.length > 0 && (
              <div className="mt-4">
                <div className="flex flex-wrap gap-2">
                  {itemData.skills.map((skill, i) => (
                    <span
                      key={skill + i}
                      className="skill-bubble px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Description - simple slide in */}
            <div className="portfolio-description mt-6">
              <h3 className="text-base font-medium text-[var(--sm-accent)] mb-4">About</h3>
              <p className="text-black text-base leading-relaxed">{itemData.description}</p>
            </div>

            {/* Photo - simple slide in */}
            {itemData.photo && (
              <div className="portfolio-photo mt-6">
                <Image
                  src={itemData.photo || "/placeholder.svg"}
                  alt={`${itemData.title} preview`}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Original component styles */}
      <style>{`
.sm-scope .staggered-menu-wrapper { position: relative; width: 100%; height: 100%; z-index: 40; }
.sm-scope .staggered-menu-panel { position: absolute; top: 0; right: 0; width: clamp(400px, 50vw, 600px); height: 100%; background: white; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); display: flex; flex-direction: column; padding: 6em 2em 2em 2em; overflow-y: auto; z-index: 10; }
.sm-scope [data-position='left'] .staggered-menu-panel { right: auto; left: 0; }
.sm-scope .sm-prelayers { position: absolute; top: 0; right: 0; bottom: 0; width: clamp(400px, 50vw, 600px); pointer-events: none; z-index: 5; }
.sm-scope [data-position='left'] .sm-prelayers { right: auto; left: 0; }
.sm-scope .sm-prelayer { position: absolute; top: 0; right: 0; height: 100%; width: 100%; transform: translateX(0); }
.sm-scope .sm-panel-inner { flex: 1; display: flex; flex-direction: column; gap: 1.25rem; }
.sm-scope .sm-socials { margin-top: auto; padding-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem; }
.sm-scope .sm-socials-title { margin: 0; font-size: 1rem; font-weight: 500; color: var(--sm-accent, #ff0000); }
.sm-scope .sm-socials-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: row; align-items: center; gap: 1rem; flex-wrap: wrap; }
.sm-scope .sm-socials-link { font-size: 1.2rem; font-weight: 500; color: #111; text-decoration: none; position: relative; padding: 2px 0; display: inline-block; transition: color 0.3s ease, opacity 0.3s ease; }
.sm-scope .sm-socials-link:hover { color: var(--sm-accent, #ff0000); }
.sm-scope .sm-panel-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.sm-scope .sm-panel-item { position: relative; color: #000; font-weight: 600; cursor: default; line-height: 1; letter-spacing: -2px; text-transform: uppercase; display: inline-block; text-decoration: none; padding-right: 1.4em; }
.sm-scope .sm-panel-itemLabel { display: inline-block; will-change: transform; transform-origin: 50% 100%; }
.sm-scope .sm-panel-itemWrap { position: relative; overflow: hidden; line-height: 1; }
.skill-bubble { display: inline-block; margin-right: 4px; }
@media (max-width: 1024px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; } }
@media (max-width: 640px) { .sm-scope .staggered-menu-panel { width: 100%; left: 0; right: 0; } }
      `}</style>
    </div>
  )
}

export default PortfolioStaggeredMenu