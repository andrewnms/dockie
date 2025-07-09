"use client"

import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const footerSections = [
  {
    title: "BetterInternship",
    links: ["About", "Careers", "Investors", "Press and Media", "Partners", "Affiliates", "Legal", "Service status"],
  },
  {
    title: "Support", 
    links: ["Student Support", "BetterInternship Help Center", "Find a Mentor", "BetterInternship Academy", "BetterInternship Community"],
  },
  {
    title: "Developers",
    links: ["BetterInternship dev", "API Documentation", "Internship Degree"],
  },
  {
    title: "Products",
    links: ["Student Portal", "BetterInternship Plus", "BetterInternship for Enterprise"],
  },
  {
    title: "Solutions",
    links: ["Internship Portal", "Profile Builder", "Career Platform"],
  },
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-white mb-4 lowercase">betterinternship</div>
            <p className="text-gray-400 mb-6">Making internships better for everyone.</p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">© 2024 BetterInternship Inc. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
