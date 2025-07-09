"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export function PlatformSection() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative -mt-32 z-20 py-20 bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            The complete internship platform for students and employers
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            <span className="text-gray-500">Find opportunities across all industries.</span>{" "}
            <span className="text-white font-semibold">Apply with one click.</span>{" "}
            <span className="text-gray-500">Connect directly with employers. Track your progress seamlessly.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Student Portal */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 h-64">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">🎓 Student Portal</span>
                    <span className="text-xs text-gray-500">✨</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-blue-900/30 border border-blue-800 p-3 rounded">
                      <div className="text-sm font-medium text-white">Software Development</div>
                      <div className="text-xs text-gray-400">25 open positions</div>
                    </div>
                    <div className="bg-green-900/30 border border-green-800 p-2 rounded">
                      <div className="text-xs text-green-400">✓ Applied • ✓ Interview • 📅 Offer</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center space-x-1 mt-auto pt-4">
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Employer Dashboard */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 h-64 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="w-20 h-12 bg-purple-600 rounded mx-auto mb-4 flex items-center justify-center">
                    <div className="text-white text-xs font-bold">HIRE</div>
                  </div>
                  <div className="text-white text-sm font-medium">Employer Dashboard</div>
                  <div className="text-gray-400 text-xs">Post jobs • Review candidates</div>
                  <div className="bg-orange-900/30 border border-orange-800 px-2 py-1 rounded text-xs text-orange-400">
                    142 applications today
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Mobile App */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300 overflow-hidden">
              <CardContent className="p-6 h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">📱</div>
                  <div className="text-white text-sm font-medium">Mobile Ready</div>
                  <div className="text-gray-400 text-xs mt-2 max-w-32">
                    Apply on the go and get instant notifications
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
