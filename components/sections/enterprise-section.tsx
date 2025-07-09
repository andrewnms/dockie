"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const stories = [
  {
    title: "Start your journey",
    company: "Maria Santos, DLSU Computer Science",
    description: "Found her dream software engineering internship at a tech startup within 24 hours of signing up.",
    image: "person-1"
  },
  {
    title: "Scale your hiring", 
    company: "TechCorp Philippines",
    description: "Hired 50+ interns across 3 months, reducing their recruitment time by 80% with our streamlined platform.",
    image: "team-photo"
  },
  {
    title: "Enterprise solutions",
    company: "Globe Telecom", 
    description: "Manages their entire internship program through BetterInternship, processing 500+ applications efficiently.",
    image: "building"
  }
]

export function EnterpriseSection() {
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
            For students and companies of every size
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Thousands of students and hundreds of companies have collectively found over{" "}
            <strong className="text-white">10,000</strong> successful internship matches on BetterInternship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-300 overflow-hidden">
                <div className="h-48 bg-gray-800 flex items-center justify-center text-gray-400 font-medium border-b border-gray-700">
                  {story.image === "person-1" && "🎓"}
                  {story.image === "team-photo" && "🏢"}
                  {story.image === "building" && "🏗️"}
                  <span className="ml-2 text-white">{story.title}</span>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-white mb-2 text-lg">
                    {story.company}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {story.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button className="bg-white hover:bg-gray-200 text-black px-8 py-3 font-semibold">
            Start finding internships
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
