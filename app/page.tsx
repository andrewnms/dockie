"use client"

import {
  HeroSection,
  PlatformSection,
  CustomersSection,
  Testimonials,
  LogoCarouselBasic,
  FeatureDemo
} from "@/components/sections"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <Navigation />
      {/* Hero Section */}
      <HeroSection />
      {/* Apply Fast */}
      <FeatureDemo />

      {/* Benefits clickable */}
      <PlatformSection />
      
      
      {/* Numbers section */}
      <CustomersSection />

      {/* Companies showcase */}
      <LogoCarouselBasic />
     
      
    </div>
  )
}
