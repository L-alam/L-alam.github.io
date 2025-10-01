"use client"

import Navigation from '../components/Navigation';
import Masonry from '../components/Masonry';

const galleryItems = [
  {
    id: "1",
    img: "/images/gallery/hike.png",
    caption: "Hiking in Glouster, MA",
    height: 500,
    position: "center" as const,
    zoom: 1.2, 
  },
  {
    id: "2",
    img: "/images/gallery/kayak.png",
    caption: "Kayak on the Charles",
    height: 300,
    positionY: 20, 
  },
  {
    id: "3",
    img: "/images/gallery/surfing.png",
    caption: "Surfing in LA",
    height: 600,
    positionY: 15, 
    zoom: 1, 
  },
  {
    id: "4",
    img: "/images/gallery/mt-wash-frank.png",
    caption: "Hiking Mt.Washington NH",
    height: 350,
    positionX: 10, 
    positionY: -10, 
  },
  {
    id: "5",
    img: "/images/gallery/basketball.png",
    caption: "Pickup Basketball",
    height: 450,
    position: "center" as const, 
    zoom: 1.1, 
    positionY: -10, 
  },
  {
    id: "6",
    img: "/images/gallery/bsa.png",
    caption: "BU Bengali Students Association",
    height: 300,
    positionX: -15,
  },
  {
    id: "7",
    img: "/images/gallery/mt-wash-top.png",
    caption: "Top of Mt.Washington NH",
    height: 300,
    positionX: -15, 
  },
  {
    id: "8",
    img: "/images/gallery/amsterdam-cards.png",
    caption: "I collect playing cards while traveling",
    height: 500,
    position: "center" as const,
  },
  {
    id: "9",
    img: "/images/gallery/bike-snow.png",
    caption: "Biking in Boston",
    height: 500,
    position: "center" as const,
  },
  {
    id: "10",
    img: "/images/gallery/catan.png",
    caption: "Catan",
    height: 400,
    position: "center" as const,
  },
  {
    id: "11",
    img: "/images/gallery/bu-hockey.png",
    caption: "Boston Univerity Hockey",
    height: 300,
    position: "center" as const,
  },
  {
    id: "13",
    img: "/images/gallery/mt-reiner.png",
    caption: "Mt.Rainier",
    height: 350,
    position: "center" as const,
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
            {/* <h1 className="text-4xl font-bold mb-8">Blog</h1> */}
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