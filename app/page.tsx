"use client"

import {
  HeroSection,
  PlatformSection,
  EnterpriseSection,
  SoftwareSection,
  CustomersSection,
  BusinessSection,
  EcosystemSection,
} from "@/components/sections"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <HeroSection />
      <PlatformSection />
      <EnterpriseSection />
      <SoftwareSection />
      <CustomersSection />
      <BusinessSection />
      <EcosystemSection />
    </div>
  )
}
