"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/ui/section-header"
import { motionVariants } from "@/lib/animations"
import CardSwap, { Card } from "@/components/CardSwap/CardSwap"

export function SoftwareSection() {
  return (
    <section className="py-20 bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Smart matching system"
          title="Apply fast, get hired faster"
          description="Our intelligent platform matches students with perfect internship opportunities using advanced algorithms and real-time company needs."
        />

        {/* Application Interface with CardSwap */}
        <motion.div 
          {...motionVariants.fadeInUp}
          transition={{ ...motionVariants.fadeInUp.transition, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative min-h-[600px] mb-8 overflow-hidden"
        >
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-gray-800 rounded-2xl"></div>
          
          {/* Content overlay */}
          <div className="relative z-10 p-8">
            {/* Interface Header */}
            <div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 mb-8 flex items-center justify-between max-w-2xl">
              <div className="flex items-center space-x-4">
                <span className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium">Live Dashboard</span>
                <span className="text-gray-300">Internship Applications</span>
              </div>
              <Button variant="outline" size="sm" className="text-gray-300 border-gray-600 hover:bg-gray-700">
                View All Applications
              </Button>
            </div>

            {/* Left side content */}
            <div className="max-w-lg">
              <h3 className="text-3xl font-bold text-white mb-4">
                Smart Application Management
              </h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Track your internship applications with our intelligent dashboard. Get real-time updates, interview schedules, and company responses all in one place.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">📊</span>
                  </div>
                  <span className="text-gray-300">Real-time application tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">🎯</span>
                  </div>
                  <span className="text-gray-300">AI-powered job matching</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">⚡</span>
                  </div>
                  <span className="text-gray-300">One-click applications</span>
                </div>
              </div>

              <Button className="bg-white hover:bg-gray-200 text-black px-8 py-3">
                Start Applying Today
              </Button>
            </div>
          </div>

          {/* CardSwap with internship application cards */}
          <CardSwap
            width={320}
            height={400}
            cardDistance={50}
            verticalDistance={60}
            delay={4000}
            pauseOnHover={true}
            skewAmount={4}
            easing="elastic"
          >
            <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-blue-500/50 p-6">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-medium">New</span>
                  <span className="text-xs text-blue-200">Just posted</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Software Engineer Intern</h4>
                <p className="text-blue-100 mb-3">TechCorp Philippines</p>
                <div className="space-y-2 mb-4 flex-1">
                  <div className="text-sm text-blue-200">💰 ₱25,000/month</div>
                  <div className="text-sm text-blue-200">📍 Makati, Metro Manila</div>
                  <div className="text-sm text-blue-200">⏰ 3-6 months</div>
                </div>
                <div className="mt-auto">
                  <div className="text-xs text-blue-200 mb-2">85% match</div>
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Apply Now</Button>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-green-800 border-green-500/50 p-6">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">Hot</span>
                  <span className="text-xs text-green-200">2 days ago</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Marketing Intern</h4>
                <p className="text-green-100 mb-3">Global Marketing Inc.</p>
                <div className="space-y-2 mb-4 flex-1">
                  <div className="text-sm text-green-200">� ₱20,000/month</div>
                  <div className="text-sm text-green-200">📍 BGC, Taguig</div>
                  <div className="text-sm text-green-200">⏰ 4-6 months</div>
                </div>
                <div className="mt-auto">
                  <div className="text-xs text-green-200 mb-2">92% match</div>
                  <Button className="w-full bg-white text-green-600 hover:bg-green-50">Apply Now</Button>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-purple-800 border-purple-500/50 p-6">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-medium">Featured</span>
                  <span className="text-xs text-purple-200">5 days ago</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Data Science Intern</h4>
                <p className="text-purple-100 mb-3">Analytics Solutions Co.</p>
                <div className="space-y-2 mb-4 flex-1">
                  <div className="text-sm text-purple-200">💰 ₱30,000/month</div>
                  <div className="text-sm text-purple-200">📍 Quezon City</div>
                  <div className="text-sm text-purple-200">⏰ 6 months</div>
                </div>
                <div className="mt-auto">
                  <div className="text-xs text-purple-200 mb-2">78% match</div>
                  <Button className="w-full bg-white text-purple-600 hover:bg-purple-50">Apply Now</Button>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-orange-600 to-red-600 border-orange-500/50 p-6">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-medium">Urgent</span>
                  <span className="text-xs text-orange-200">1 week ago</span>
                </div>
                <h4 className="text-xl font-bold mb-2">UX Design Intern</h4>
                <p className="text-orange-100 mb-3">Creative Design Studio</p>
                <div className="space-y-2 mb-4 flex-1">
                  <div className="text-sm text-orange-200">💰 ₱22,000/month</div>
                  <div className="text-sm text-orange-200">📍 Pasig City</div>
                  <div className="text-sm text-orange-200">⏰ 3-4 months</div>
                </div>
                <div className="mt-auto">
                  <div className="text-xs text-orange-200 mb-2">88% match</div>
                  <Button className="w-full bg-white text-orange-600 hover:bg-orange-50">Apply Now</Button>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-600 to-indigo-800 border-indigo-500/50 p-6">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-indigo-500 text-white px-2 py-1 rounded text-xs font-medium">Premium</span>
                  <span className="text-xs text-indigo-200">3 days ago</span>
                </div>
                <h4 className="text-xl font-bold mb-2">Finance Intern</h4>
                <p className="text-indigo-100 mb-3">Investment Bank Corp</p>
                <div className="space-y-2 mb-4 flex-1">
                  <div className="text-sm text-indigo-200">💰 ₱35,000/month</div>
                  <div className="text-sm text-indigo-200">📍 Makati CBD</div>
                  <div className="text-sm text-indigo-200">⏰ 6-12 months</div>
                </div>
                <div className="mt-auto">
                  <div className="text-xs text-indigo-200 mb-2">95% match</div>
                  <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50">Apply Now</Button>
                </div>
              </div>
            </Card>
          </CardSwap>
        </motion.div>

        {/* Bottom Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            {...motionVariants.fadeInUp}
            transition={{ ...motionVariants.fadeInUp.transition, delay: 0.4 }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6"
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">⚡</span>
              </div>
              <div>
                <div className="font-semibold text-white">Average Response Time</div>
                <div className="text-green-400 font-medium">24 hours</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            {...motionVariants.fadeInUp}
            transition={{ ...motionVariants.fadeInUp.transition, delay: 0.5 }}
            className="bg-gray-900 border border-gray-800 rounded-xl p-6"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="font-semibold text-white mb-2">Success Rate</div>
              <div className="text-white font-medium mb-4">85%</div>
              <Button className="w-full bg-white hover:bg-gray-200 text-black mb-2">
                View Success Stories
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Start Your Journey
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
