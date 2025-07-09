"use client"

import { motion } from "framer-motion"

export function EcosystemSection() {
  const automationFeatures = [
    { icon: "📝", label: "I-9 Forms" },
    { icon: "🏢", label: "Company Profiles" },
    { icon: "📋", label: "Application Forms" },
    { icon: "🔒", label: "Confidentiality Agreements" },
    { icon: "⚡", label: "Auto-Processing" },
    { icon: "📊", label: "Status Tracking" },
    { icon: "🔔", label: "Smart Notifications" },
    { icon: "📁", label: "Document Storage" },
    { icon: "✅", label: "Compliance Checks" },
    { icon: "📧", label: "Email Automation" },
    { icon: "🚀", label: "Instant Deployment" },
    { icon: "📈", label: "Progress Analytics" }
  ]

  return (
    <section className="py-20 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Paperwork Automation Ecosystem
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto">
            Eliminate the 15-30 day manual paperwork bottleneck. Our automation platform processes <strong className="text-white">all internship forms instantly</strong> - from I-9 verification to company profiles, applications, and compliance documents. What used to take weeks now happens in seconds.
          </p>
        </motion.div>

        {/* Automation Features Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-12 max-w-5xl mx-auto">
            {automationFeatures.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 hover:bg-gray-700 transition-colors cursor-pointer group"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform text-center">
                  {feature.icon}
                </div>
                <div className="text-xs text-gray-400 font-medium text-center">
                  {feature.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Automation Process Section */}
        <div className="mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              From 15-30 days to instant processing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See how our automation transforms the tedious paperwork process that typically bottlenecks internship programs into seamless, instant workflows.
            </p>
          </motion.div>

          {/* Automation Process Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                {/* Form Processing */}
                <div className="mb-6">
                  <div className="text-white text-sm mb-3">📝 Smart Form Processing</div>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">✓</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">I-9 Verification</div>
                        <div className="text-green-400 text-sm">Auto-validated in 2.3 seconds</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Document Flow */}
                <div>
                  <div className="text-white text-sm mb-3">⚡ Instant Document Flow</div>
                  <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white">🚀</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">Paperwork Pipeline</div>
                        <div className="text-blue-400 text-sm font-mono">Status: Deployed & Ready</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <div className="text-white font-semibold text-xl mb-2">Automation Engine</div>
                  <div className="text-gray-400 mb-4">Process forms 99.7% faster</div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <div className="text-sm text-gray-300">
                      <div className="flex justify-between mb-1">
                        <span>Traditional Process:</span>
                        <span className="text-red-400">15-30 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span>BetterInternship:</span>
                        <span className="text-green-400">2-5 seconds</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="bg-white hover:bg-gray-200 text-black px-8 py-4 rounded-lg font-semibold transition-colors">
              See automation in action
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
