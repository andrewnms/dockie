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

        {/* CardSwap Section */}
        <motion.div 
          {...motionVariants.fadeInUp}
          transition={{ ...motionVariants.fadeInUp.transition, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative min-h-[700px] flex items-center justify-center"
        >
          <CardSwap
            width={400}
            height={500}
            cardDistance={60}
            verticalDistance={80}
            delay={3500}
            pauseOnHover={true}
            skewAmount={5}
            easing="elastic"
          >
            <Card className="bg-gradient-to-br from-blue-600 to-blue-800 border-blue-500/50 p-8">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">New</span>
                  <span className="text-sm text-blue-200">Just posted</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">Software Engineer Intern</h4>
                <p className="text-blue-100 mb-4 text-lg">TechCorp Philippines</p>
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-blue-200">
                    <span className="mr-3">💰</span>
                    <span>₱25,000/month</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <span className="mr-3">📍</span>
                    <span>Makati, Metro Manila</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <span className="mr-3">⏰</span>
                    <span>3-6 months</span>
                  </div>
                  <div className="flex items-center text-blue-200">
                    <span className="mr-3">🎓</span>
                    <span>Computer Science</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-blue-200 mb-3 flex items-center justify-between">
                    <span>Match Score:</span>
                    <span className="font-bold">85%</span>
                  </div>
                  <Button className="w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-green-800 border-green-500/50 p-8">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Hot</span>
                  <span className="text-sm text-green-200">2 days ago</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">Marketing Intern</h4>
                <p className="text-green-100 mb-4 text-lg">Global Marketing Inc.</p>
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-green-200">
                    <span className="mr-3">💰</span>
                    <span>₱20,000/month</span>
                  </div>
                  <div className="flex items-center text-green-200">
                    <span className="mr-3">📍</span>
                    <span>BGC, Taguig</span>
                  </div>
                  <div className="flex items-center text-green-200">
                    <span className="mr-3">⏰</span>
                    <span>4-6 months</span>
                  </div>
                  <div className="flex items-center text-green-200">
                    <span className="mr-3">🎓</span>
                    <span>Marketing/Business</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-green-200 mb-3 flex items-center justify-between">
                    <span>Match Score:</span>
                    <span className="font-bold">92%</span>
                  </div>
                  <Button className="w-full bg-white text-green-600 hover:bg-green-50 font-semibold py-3">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600 to-purple-800 border-purple-500/50 p-8">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                  <span className="text-sm text-purple-200">5 days ago</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">Data Science Intern</h4>
                <p className="text-purple-100 mb-4 text-lg">Analytics Solutions Co.</p>
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-purple-200">
                    <span className="mr-3">💰</span>
                    <span>₱30,000/month</span>
                  </div>
                  <div className="flex items-center text-purple-200">
                    <span className="mr-3">📍</span>
                    <span>Quezon City</span>
                  </div>
                  <div className="flex items-center text-purple-200">
                    <span className="mr-3">⏰</span>
                    <span>6 months</span>
                  </div>
                  <div className="flex items-center text-purple-200">
                    <span className="mr-3">🎓</span>
                    <span>Data Science/Stats</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-purple-200 mb-3 flex items-center justify-between">
                    <span>Match Score:</span>
                    <span className="font-bold">78%</span>
                  </div>
                  <Button className="w-full bg-white text-purple-600 hover:bg-purple-50 font-semibold py-3">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-orange-600 to-red-600 border-orange-500/50 p-8">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">Urgent</span>
                  <span className="text-sm text-orange-200">1 week ago</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">UX Design Intern</h4>
                <p className="text-orange-100 mb-4 text-lg">Creative Design Studio</p>
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-orange-200">
                    <span className="mr-3">💰</span>
                    <span>₱22,000/month</span>
                  </div>
                  <div className="flex items-center text-orange-200">
                    <span className="mr-3">📍</span>
                    <span>Pasig City</span>
                  </div>
                  <div className="flex items-center text-orange-200">
                    <span className="mr-3">⏰</span>
                    <span>3-4 months</span>
                  </div>
                  <div className="flex items-center text-orange-200">
                    <span className="mr-3">🎓</span>
                    <span>Design/Arts</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-orange-200 mb-3 flex items-center justify-between">
                    <span>Match Score:</span>
                    <span className="font-bold">88%</span>
                  </div>
                  <Button className="w-full bg-white text-orange-600 hover:bg-orange-50 font-semibold py-3">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-600 to-indigo-800 border-indigo-500/50 p-8">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">Premium</span>
                  <span className="text-sm text-indigo-200">3 days ago</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">Finance Intern</h4>
                <p className="text-indigo-100 mb-4 text-lg">Investment Bank Corp</p>
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-indigo-200">
                    <span className="mr-3">💰</span>
                    <span>₱35,000/month</span>
                  </div>
                  <div className="flex items-center text-indigo-200">
                    <span className="mr-3">📍</span>
                    <span>Makati CBD</span>
                  </div>
                  <div className="flex items-center text-indigo-200">
                    <span className="mr-3">⏰</span>
                    <span>6-12 months</span>
                  </div>
                  <div className="flex items-center text-indigo-200">
                    <span className="mr-3">🎓</span>
                    <span>Finance/Economics</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-indigo-200 mb-3 flex items-center justify-between">
                    <span>Match Score:</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 font-semibold py-3">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-teal-600 to-teal-800 border-teal-500/50 p-8">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">Remote</span>
                  <span className="text-sm text-teal-200">4 days ago</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">Content Writer Intern</h4>
                <p className="text-teal-100 mb-4 text-lg">Digital Media Agency</p>
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-teal-200">
                    <span className="mr-3">💰</span>
                    <span>₱18,000/month</span>
                  </div>
                  <div className="flex items-center text-teal-200">
                    <span className="mr-3">📍</span>
                    <span>Remote/Hybrid</span>
                  </div>
                  <div className="flex items-center text-teal-200">
                    <span className="mr-3">⏰</span>
                    <span>3-6 months</span>
                  </div>
                  <div className="flex items-center text-teal-200">
                    <span className="mr-3">🎓</span>
                    <span>English/Journalism</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-teal-200 mb-3 flex items-center justify-between">
                    <span>Match Score:</span>
                    <span className="font-bold">91%</span>
                  </div>
                  <Button className="w-full bg-white text-teal-600 hover:bg-teal-50 font-semibold py-3">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>
          </CardSwap>
        </motion.div>
      </div>
    </section>
  )
}
