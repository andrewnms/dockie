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
        {/* Main Layout with Header Left and Cards Center-Right */}
        <motion.div 
          {...motionVariants.fadeInUp}
          transition={{ ...motionVariants.fadeInUp.transition, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative min-h-[700px] flex items-center overflow-hidden"
        >
          {/* Left Side - Header and Description */}
          <div className="flex-1 max-w-lg pr-8">
            <div className="mb-4">
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Apply fast, get hired faster
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our intelligent platform matches students with perfect internship opportunities using advanced algorithms and real-time company needs.
            </p>
            
            {/* Additional Features */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">🎯</span>
                </div>
                <span className="text-gray-300">One-Stop-Shop Listings</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">⚡</span>
                </div>
                <span className="text-gray-300">One-click applications</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
                <span className="text-gray-300">Real-time tracking</span>
              </div>
            </div>
          </div>

          {/* Right Side - CardSwap */}
          <div className="flex-1 flex relative justify-center">
            <div className="relative" style={{ transform: 'translate(200px, 180px)' }}>
              <CardSwap
                width={450}
                height={500}
                cardDistance={60}
                verticalDistance={80}
                delay={3500}
                pauseOnHover={true}
                skewAmount={5}
                easing="elastic"
              >
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700/50 p-8">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">New</span>
                  <span className="text-sm text-slate-300">Just posted</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">Software Engineer Intern</h4>
                <p className="text-slate-200 mb-4 text-lg">TechCorp Philippines</p>
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-slate-300">
                    <span className="mr-3">💰</span>
                    <span>₱25,000/month</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <span className="mr-3">📍</span>
                    <span>Makati, Metro Manila</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <span className="mr-3">⏰</span>
                    <span>3-6 months</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <span className="mr-3">🎓</span>
                    <span>Computer Science</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-slate-300 mb-3 flex items-center justify-between">
                    <span>Match Score:</span>
                    <span className="font-bold">85%</span>
                  </div>
                  <Button className="w-full bg-white text-slate-800 hover:bg-slate-100 font-semibold py-3">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-zinc-800 to-zinc-900 border-zinc-700/50 p-8">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-zinc-600 text-white px-3 py-1 rounded-full text-sm font-medium">Hot</span>
                  <span className="text-sm text-zinc-300">2 days ago</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">Marketing Intern</h4>
                <p className="text-zinc-200 mb-4 text-lg">Global Marketing Inc.</p>
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-zinc-300">
                    <span className="mr-3">💰</span>
                    <span>₱20,000/month</span>
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <span className="mr-3">📍</span>
                    <span>BGC, Taguig</span>
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <span className="mr-3">⏰</span>
                    <span>4-6 months</span>
                  </div>
                  <div className="flex items-center text-zinc-300">
                    <span className="mr-3">🎓</span>
                    <span>Marketing/Business</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <Button className="w-full bg-white text-zinc-800 hover:bg-zinc-100 font-semibold py-3">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-neutral-800 to-neutral-900 border-neutral-700/50 p-8">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-neutral-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                  <span className="text-sm text-neutral-300">5 days ago</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">Data Science Intern</h4>
                <p className="text-neutral-200 mb-4 text-lg">Analytics Solutions Co.</p>
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-neutral-300">
                    <span className="mr-3">💰</span>
                    <span>₱30,000/month</span>
                  </div>
                  <div className="flex items-center text-neutral-300">
                    <span className="mr-3">📍</span>
                    <span>Quezon City</span>
                  </div>
                  <div className="flex items-center text-neutral-300">
                    <span className="mr-3">⏰</span>
                    <span>6 months</span>
                  </div>
                  <div className="flex items-center text-neutral-300">
                    <span className="mr-3">🎓</span>
                    <span>Data Science/Stats</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-neutral-300 mb-3 flex items-center justify-between">
                    <span>Match Score:</span>
                    <span className="font-bold">78%</span>
                  </div>
                  <Button className="w-full bg-white text-neutral-800 hover:bg-neutral-100 font-semibold py-3">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-stone-800 to-stone-900 border-stone-700/50 p-8">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-stone-600 text-white px-3 py-1 rounded-full text-sm font-medium">Urgent</span>
                  <span className="text-sm text-stone-300">1 week ago</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">UX Design Intern</h4>
                <p className="text-stone-200 mb-4 text-lg">Creative Design Studio</p>
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-stone-300">
                    <span className="mr-3">💰</span>
                    <span>₱22,000/month</span>
                  </div>
                  <div className="flex items-center text-stone-300">
                    <span className="mr-3">📍</span>
                    <span>Pasig City</span>
                  </div>
                  <div className="flex items-center text-stone-300">
                    <span className="mr-3">⏰</span>
                    <span>3-4 months</span>
                  </div>
                  <div className="flex items-center text-stone-300">
                    <span className="mr-3">🎓</span>
                    <span>Design/Arts</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-stone-300 mb-3 flex items-center justify-between">
                    <span>Match Score:</span>
                    <span className="font-bold">88%</span>
                  </div>
                  <Button className="w-full bg-white text-stone-800 hover:bg-stone-100 font-semibold py-3">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-800/50 p-8">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium">Premium</span>
                  <span className="text-sm text-gray-300">3 days ago</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">Finance Intern</h4>
                <p className="text-gray-200 mb-4 text-lg">Investment Bank Corp</p>
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-gray-300">
                    <span className="mr-3">💰</span>
                    <span>₱35,000/month</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="mr-3">📍</span>
                    <span>Makati CBD</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="mr-3">⏰</span>
                    <span>6-12 months</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="mr-3">🎓</span>
                    <span>Finance/Economics</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-gray-300 mb-3 flex items-center justify-between">
                    <span>Match Score:</span>
                    <span className="font-bold">95%</span>
                  </div>
                  <Button className="w-full bg-white text-gray-800 hover:bg-gray-100 font-semibold py-3">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-slate-900 to-black border-slate-800/50 p-8">
              <div className="text-white h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-slate-700 text-white px-3 py-1 rounded-full text-sm font-medium">Remote</span>
                  <span className="text-sm text-slate-300">4 days ago</span>
                </div>
                <h4 className="text-2xl font-bold mb-3">Content Writer Intern</h4>
                <p className="text-slate-200 mb-4 text-lg">Digital Media Agency</p>
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-slate-300">
                    <span className="mr-3">💰</span>
                    <span>₱18,000/month</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <span className="mr-3">📍</span>
                    <span>Remote/Hybrid</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <span className="mr-3">⏰</span>
                    <span>3-6 months</span>
                  </div>
                  <div className="flex items-center text-slate-300">
                    <span className="mr-3">🎓</span>
                    <span>English/Journalism</span>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-sm text-slate-300 mb-3 flex items-center justify-between">
                    <span>Match Score:</span>
                    <span className="font-bold">91%</span>
                  </div>
                  <Button className="w-full bg-white text-slate-800 hover:bg-slate-100 font-semibold py-3">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>
              </CardSwap>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
