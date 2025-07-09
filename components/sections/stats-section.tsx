"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { animations, motionVariants } from "@/lib/animations"

/**
 * Stats component for displaying key metrics
 */
interface StatItemProps {
  icon: string
  value: string
  label: string
  delay?: number
}

function StatItem({ icon, value, label, delay = 0 }: StatItemProps) {
  return (
    <motion.div 
      {...motionVariants.fadeInUp}
      transition={{ ...motionVariants.fadeInUp.transition, delay: delay * 0.1 }}
      className="text-center"
    >
      <div className="flex items-center justify-center mb-4">
        <span className="text-sm text-gray-400 mr-2">{icon}</span>
      </div>
      <div className="text-6xl md:text-8xl font-bold text-black mb-2">{value}</div>
      <div className="text-lg text-gray-400">{label}</div>
    </motion.div>
  )
}

export function StatsSection() {
  const [sectionRef, isVisible] = useInView(0.3)

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-bold text-black mb-6 ${animations.fadeInUp(isVisible)}`}>
            The fastest way to launch your career
          </h2>
        </div>

        {/* Checkout Stats */}
        <div className="text-center mb-16">
          <motion.h3 
            {...motionVariants.fadeInUp}
            transition={{ ...motionVariants.fadeInUp.transition, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-black mb-8"
          >
            The most successful student matching platform
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-8">
            <StatItem 
              icon="⬆️ HIGHER SUCCESS RATE"
              value="92%"
              label="Match Success Rate"
              delay={4}
            />
            <StatItem 
              icon="📈 ACTIVE STUDENTS"
              value="50K+"
              label="Active Students"
              delay={5}
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-600 mb-4">
              Our platform achieves a 92% match success rate with students landing internships 3x faster than traditional job boards, connecting with 50,000+ active students.
            </p>
            <p className="text-sm text-gray-500">
              Based on internal analytics and student feedback surveys from 2024.
            </p>
          </motion.div>
        </div>

        {/* Internship Application Demo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 max-w-md mx-auto shadow-lg">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-white mb-3">Apply for Internship</h4>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">Software Engineering Intern</span>
                  </div>
                  <div className="border border-gray-600 rounded p-3 bg-gray-700 text-gray-300 text-sm">
                    TechCorp Philippines
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Your Profile</h4>
                  <div className="border border-gray-600 rounded p-3 bg-gray-700">
                    <div className="text-sm text-gray-400">Student at University of the Philippines</div>
                    <div className="text-sm text-gray-300">Computer Science • 3rd Year</div>
                    <div className="text-xs text-green-400 mt-1">92% Profile Match</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Application Status</h4>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">Ready to submit</div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-4 font-semibold text-lg transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Performance Section */}
        <div className="text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-black mb-6"
          >
            Lightning fast connections
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Our platform connects students with employers in <strong className="text-black">under 24 hours</strong>, with smart matching that gets better with every application.
          </motion.p>

          {/* Globe Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <div className="max-w-md mx-auto">
              <div className="relative">
                <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-900 to-green-900 rounded-full flex items-center justify-center text-6xl">
                  🌍
                </div>
                <div className="absolute -top-2 -right-2 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-blue-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: "1s"}}></div>
                <div className="absolute top-1/2 -right-4 w-12 h-12 bg-green-400 rounded-full opacity-25 animate-pulse" style={{animationDelay: "2s"}}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
