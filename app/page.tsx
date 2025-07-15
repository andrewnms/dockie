"use client"

import {
  HeroSection,
  PlatformSection,
  CustomersSection,
  Testimonials,
  LogoCarouselBasic,
  Feature
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
      <Feature />

      {/* Benefits clickable */}
      <PlatformSection />
      
      
      {/* Numbers section */}
      <CustomersSection />

      {/* Companies showcase */}
      <LogoCarouselBasic />
     
      
    </div>
  )
}
