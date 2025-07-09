"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { animations } from "@/lib/animations"
import { SectionHeader } from "@/components/ui/section-header"

export function BusinessSection() {
  const [sectionRef, isVisible] = useInView()

  return (
    <section ref={sectionRef} className="py-20 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader 
          subtitle="Dashboard and mobile"
          title="Manage your career journey"
        />

        {/* Manage everything in one place */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className={animations.fadeInLeft(isVisible)}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Track everything in one dashboard
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              From applications to interviews, manage your entire internship search with our comprehensive student dashboard.
            </p>
          </div>
          <div className={animations.fadeInRight(isVisible, 200)}>
            <div className="bg-gray-100 rounded-2xl p-6 border">
              {/* Job Listing Interface */}
              <div className="bg-white rounded-xl overflow-hidden border">
                <div className="bg-gray-800 p-3 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="ml-4 text-white text-sm">betterinternship.com</div>
                </div>
                
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-black">BetterInternship</span>
                  </div>
                  <button className="text-gray-500 text-sm">Sign in</button>
                </div>

                <div className="flex">
                  {/* Left sidebar */}
                  <div className="w-64 bg-gray-50 p-4">
                    <div className="relative mb-4">
                      <input 
                        type="text" 
                        placeholder="Search Job Listings"
                        className="w-full p-2 pr-8 border rounded text-sm text-black"
                      />
                      <div className="absolute right-2 top-2 text-gray-400">🔍</div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded p-3">
                        <div className="font-semibold text-black text-sm mb-2">Community Manager</div>
                        <div className="text-xs text-gray-600 mb-1">BetterInternship</div>
                        <div className="flex items-center text-xs text-gray-500 mb-2">
                          📍 DLSU
                        </div>
                        <div className="flex space-x-1 mb-2">
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">DLSU MOA</span>
                          <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">Part-time</span>
                        </div>
                      </div>
                      
                      <div className="p-3 border-l-2 border-transparent hover:border-blue-500 hover:bg-gray-50 rounded">
                        <div className="font-medium text-black text-sm mb-1">IT Business Analyst</div>
                        <div className="text-xs text-gray-600 mb-1">BARKERO INC</div>
                        <div className="flex items-center text-xs text-gray-500">
                          📍 BGC
                        </div>
                      </div>
                      
                      <div className="p-3 border-l-2 border-transparent hover:border-blue-500 hover:bg-gray-50 rounded">
                        <div className="font-medium text-black text-sm mb-1">Full Stack Development Intern</div>
                        <div className="text-xs text-gray-600 mb-1">LeapFroggr</div>
                        <div className="flex items-center text-xs text-gray-500">
                          📍 BGC
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-6">
                    <div className="mb-4">
                      <h1 className="text-2xl font-bold text-black mb-2">Community Manager</h1>
                      <div className="text-blue-600 font-medium mb-1">BetterInternship</div>
                      <div className="flex items-center text-gray-600 text-sm mb-4">
                        📍 DLSU
                      </div>
                      
                      <div className="flex space-x-3 mb-6">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm">Apply</button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm">Save</button>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-black mb-3">Job Details</h3>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <div className="text-gray-600 mb-1">Work Mode:</div>
                          <div className="text-black">Hybrid</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">Salary:</div>
                          <div className="text-black">10000/Month</div>
                        </div>
                        <div>
                          <div className="text-gray-600 mb-1">Work Load:</div>
                          <div className="text-black">Part-time</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-black mb-3">Description</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Think you can handle our crazy community and channel people's complaints into productive energy? Think you can help us market this website into the most viral website in la Salle and beyond? We'd love to hear from you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manage applications from anywhere */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={animations.fadeInLeft(isVisible, 400)}>
            <div className="flex justify-center">
              {/* Mobile Interface */}
              <div className="w-72">
                <div className="bg-black rounded-3xl p-2">
                  <div className="bg-blue-900 rounded-2xl overflow-hidden">
                    {/* Mobile Status Bar */}
                    <div className="bg-black text-white p-2 flex justify-between items-center text-sm">
                      <div className="flex items-center space-x-1">
                        <div className="text-xs">📶</div>
                        <div className="text-xs">📶</div>
                        <div className="text-xs">📶</div>
                      </div>
                      <div className="font-bold">9:38</div>
                      <div className="flex items-center space-x-1">
                        <div className="text-xs">🔋</div>
                        <div className="text-xs">100%</div>
                      </div>
                    </div>
                    
                    {/* Mobile Content */}
                    <div className="p-6 text-center text-white">
                      <div className="text-6xl font-bold mb-2">9:38</div>
                      <div className="text-sm mb-6">Tuesday, July 8</div>
                      
                      <div className="bg-white/10 backdrop-blur rounded-2xl p-4 text-left">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs font-bold">BI</span>
                          </div>
                          <div>
                            <div className="font-semibold">BetterInternship</div>
                            <div className="text-xs opacity-75">9:38</div>
                          </div>
                        </div>
                        <div className="text-sm">
                          <strong>Denis!</strong> You have a new internship application for Software Engineering position
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={animations.fadeInRight(isVisible, 600)}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Apply on the go
            </h3>
            <p className="text-gray-600 text-lg">
              Never miss an opportunity with our mobile app. Apply to internships, track your applications, and get instant notifications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
