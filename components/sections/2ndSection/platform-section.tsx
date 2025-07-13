"use client"

import { FeatureSteps } from "@/components/sections/2ndSection/feature-section"


const features = [
  { 
    step: 'Step 1', 
    title: 'Get a response in a day',
    content: 'Employers get notified every time an application goes in', 
    image: '/2ndSec/popimage1.png'
  },
  { 
    step: 'Step 2',
    title: 'Check Application process',
    content: 'Check Application process whether bound for an interview or in review',
    image: '/2ndSec/popimage2.png'
  },
  { 
    step: 'Step 3',
    title: 'Find listings for school credit',
    content: 'Find listings where you can get it credited with your school',
    image: '/2ndSec/popimage3.png'
  },
]

export function PlatformSection() {
  return (
        <div className="mb-8">
          <FeatureSteps 
            features={features}
            title="The complete internship platform for students."
            autoPlayInterval={4000}
            imageHeight="h-[500px]"
          />
        </div>
  )
}


