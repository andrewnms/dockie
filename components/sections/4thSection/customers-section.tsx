"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from "@/hooks/use-in-view"
import { animations, motionVariants } from "@/lib/animations"

export function CustomersSection() {
  const [sectionRef, isVisible] = useInView(0.3)

  return (
    <section ref={sectionRef} className="py-20 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Direct employer connections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            {...motionVariants.fadeInLeft}
          >
            <div className="text-sm text-gray-400 mb-4">Direct employer connections</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect directly with hiring managers and skip the traditional recruitment bottleneck.
            </h3>
            <p className="text-gray-300 text-lg">
              Our platform enables direct communication between students and employers, streamlining the hiring process.
            </p>
          </motion.div>
          <motion.div 
            {...motionVariants.fadeInRight}
            transition={{ ...motionVariants.fadeInRight.transition, delay: 0.2 }}
          >
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="w-16 h-10 bg-white rounded flex items-center justify-center">
                    <div className="text-black font-bold text-xs">CHAT</div>
                  </div>
                </div>
                <div className="text-white font-medium">Direct Messaging</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Multi-industry reach */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className={animations.fadeInLeft(isVisible, 400)}>
            <div className="bg-gray-100 rounded-2xl p-8 h-64 flex items-center justify-center border">
              <div className="grid grid-cols-3 gap-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">💻</div>
                <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">🏥</div>
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">🏦</div>
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">🎯</div>
                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-black font-bold">🏭</div>
                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold">🎓</div>
              </div>
            </div>
          </div>
          <div className={animations.fadeInRight(isVisible, 600)}>
            <div className="text-sm text-gray-500 mb-4">Multi-industry coverage</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find opportunities across tech, healthcare, finance, marketing, engineering, and education sectors.
            </h3>
            <p className="text-gray-600 text-lg">
              Our platform connects students with internship opportunities spanning all major industries in the Philippines.
            </p>
          </div>
        </div>

        {/* Powered by the world's best checkout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={animations.fadeInLeft(isVisible, 800)}>
            <div className="text-sm text-gray-500 mb-4">Powered by the world's best application system</div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              BetterInternship applications are fast, fully customizable, and optimized to connect talent.
            </h3>
            <p className="text-gray-600 text-lg">
              BetterInternship applications are fast, fully customizable, and optimized to connect talent.
            </p>
          </div>
          <div className={animations.fadeInRight(isVisible, 1000)}>
            <div className="bg-white rounded-2xl p-8 h-64 border-2 border-gray-200 flex items-center justify-center">
              <div className="w-full max-w-sm">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Cover letter</span>
                  </div>
                  <div className="bg-white border rounded p-2 mb-2 text-sm text-gray-800">
                    I'm excited to bring my programming experience to Quickdog and help out with the team.
                  </div>
                </div>
                <div className="bg-blue-600 text-white rounded-lg p-3 text-center font-semibold">
                  Apply Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
