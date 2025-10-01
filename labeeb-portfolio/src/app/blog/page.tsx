// pages/portfolio.tsx (or app/portfolio/page.tsx if using app router)
"use client"

import Navigation from '../components/Navigation';
import Masonry from '../components/Masonry';

const galleryItems = [
  {
    id: "1",
    img: "/images/gallery/image1.jpg",
    url: "#",
    height: 400,
  },
  {
    id: "2",
    img: "/images/gallery/image2.jpg",
    url: "#",
    height: 250,
  },
  {
    id: "3",
    img: "/images/gallery/image3.jpg",
    url: "#",
    height: 600,
  },
  {
    id: "4",
    img: "/images/gallery/image4.jpg",
    url: "#",
    height: 350,
  },
  {
    id: "5",
    img: "/images/gallery/image5.jpg",
    url: "#",
    height: 450,
  },
  {
    id: "6",
    img: "/images/gallery/image6.jpg",
    url: "#",
    height: 300,
  },
  {
    id: "7",
    img: "/images/gallery/image7.jpg",
    url: "#",
    height: 500,
  },
  {
    id: "8",
    img: "/images/gallery/image8.jpg",
    url: "#",
    height: 380,
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-[#297373]"></div>
      
      {/* Content overlay */}
      <div className="relative z-10">
        <Navigation />
        <main className="container mx-auto px-4 py-20 max-w-7xl">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            {/* Your portfolio content here */}
          </div>

          {/* Gallery Section */}
          <div className="mt-16 text-white">
            <h2 className="text-3xl font-bold mb-8">More about me</h2>
            <div className="h-[800px]">
              <Masonry
                items={galleryItems}
                ease="power3.out"
                duration={0.6}
                stagger={0.05}
                animateFrom="bottom"
                scaleOnHover={true}
                hoverScale={0.95}
                blurToFocus={true}
                colorShiftOnHover={false}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}