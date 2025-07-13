"use client"

import {
  HeroSection,
  PlatformSection,
  SoftwareSection,
  CustomersSection,
  Testimonials,
  LogoCarouselBasic
} from "@/components/sections"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <Navigation />
      {/* Hero Section */}
      <HeroSection />
       {/* Companies showcase */}
      <LogoCarouselBasic />
      {/* Benefits clickable */}
      <PlatformSection />
      {/* Apply Fast */}
      <SoftwareSection />
      {/* Numbers section */}
      <CustomersSection />
     
      
    </div>
  )
}
