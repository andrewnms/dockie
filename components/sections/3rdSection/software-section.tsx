"use client"

import { motion } from "framer-motion"
import { motionVariants } from "@/lib/animations"
import { StackedCardsInteraction } from "@/components/sections/3rdSection/stacked-cards-interaction"

export function SoftwareSection() {
  return (
    <section className="w-full bg-black pl-10 mb-8 ">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Layout with Header Left and Cards Center-Right */}
        <motion.div 
          {...motionVariants.fadeInUp}
          transition={{ ...motionVariants.fadeInUp.transition, delay: 0.2 }}
          viewport={{ once: true }}
          className="min-h-[700px] flex flex-col lg:flex-row items-center"
        >
          {/* Left Side - Header and Description */}
          <div className="flex-1 max-w-5xl w-full pl-5">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Apply fast, get hired faster
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our intelligent platform matches students with perfect internship opportunities using advanced algorithms and real-time company needs.
            </p>
            
            {/* Additional Features */}
            <div className="space-y-4 px-3">
              <div className="flex items-center space-x-3">
                <span className="py-3 px-8 bg-blue-600 rounded-full flex items-center justify-center">One-Stop-Shop Listings</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="py-3 px-8 bg-green-600 rounded-full flex items-center justify-center">One-click applications</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="py-3 px-8 bg-purple-600 rounded-full flex items-center justify-center">Real-time tracking</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center pt-12 pb-16 mb-8">
            <StackedCardsInteraction
                cards={[
                  {
                    image:
                      "https://images.unsplash.com/photo-1528741254566-d718e868201f?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Software Engineering Intern",
                    description: ".",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "Card 2",
                    description: "This is the second card",
                  },
                  {
                    image:
                      "https://images.unsplash.com/photo-1526827826797-7b05204a22ef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
                    title: "Card 3",
                    description: "This is the third card",
                  },
                ]}
              />
          </div>
           
        </motion.div>
      </div>
    </section>
  )
}
