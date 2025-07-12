"use client"

import { motion } from "framer-motion"
import { motionVariants } from "@/lib/animations"
import { Feature } from "@/components/sections/3rdSection/feature-with-image"

export function SoftwareSection() {
  return (
    <section className="w-full bg-black min-h-screen flex items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <motion.div 
          {...motionVariants.fadeInUp}
          transition={{ ...motionVariants.fadeInUp.transition, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="w-full flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              Apply fast, get hired faster
            </h2>
            <p className="text-gray-300 max-w-3xl text-lg leading-relaxed text-center mb-2">
              No more lost emails in spam folders. Our CRM puts you directly in front of hiring managers without the email runaround.
            </p>
          </div>
          <div className="w-full">
            <Feature />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
