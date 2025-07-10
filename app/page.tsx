"use client"

import {
  HeroSection,
  PlatformSection,
  SoftwareSection,
  CustomersSection,
  Testimonials,
} from "@/components/sections"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <Navigation />
      {/* Hero Section */}
      <HeroSection />
      {/* Benefits clickable */}
      <PlatformSection />
      {/* Apply Fast */}
      <SoftwareSection />
      {/* Numbers section */}
      <CustomersSection />
      {/* Companies showcase */}
      <Testimonials />
    </div>
  )
}
