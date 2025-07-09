"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export function HeroSection() {
  const videos = [
    "/celebrate_hero.mp4",
    "/code_ex.mp4", 
    "/happy_students.mp4",
    "/wave_student.mp4",
    "/wee_closeup.mp4"
  ]
  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [nextVideoIndex, setNextVideoIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      
      // After transition starts, update indices
      setTimeout(() => {
        setCurrentVideoIndex(nextVideoIndex)
        setNextVideoIndex((nextVideoIndex + 1) % videos.length)
        setIsTransitioning(false)
      }, 1000) // Half of transition duration
    }, 3000) // Change video every 3 seconds
    
    return () => clearInterval(interval)
  }, [nextVideoIndex, videos.length])
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background videos with crossfade transition */}
      <div className="absolute inset-0 w-full h-full">
        {/* Current video */}
        <video
          key={`current-${currentVideoIndex}`}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>
        
        {/* Next video (preloaded and ready) */}
        <video
          key={`next-${nextVideoIndex}`}
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-2000 ${
            isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src={videos[nextVideoIndex]} type="video/mp4" />
        </video>
      </div>
      
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-6"
          >
            Internship? <br />
            Done in 48 Hours.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-lg"
          >
            The largest platform connecting Filipino students with internship opportunities. Apply fast, get hired faster.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 items-start items-center"
          >
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-black px-8 py-4 text-lg font-semibold rounded-full"
            >
              Find Internships
            </Button>
            
            <button className="text-white hover:opacity-70 transition-opacity text-lg font-medium flex items-center">
              → For Employers
            </button>
          </motion.div>
        </div>
      </div>

      {/* Subtle animated elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full"
      >
        <div className="w-full h-full bg-gradient-to-l from-white/5 to-transparent" />
      </motion.div>
    </section>
  )
}
