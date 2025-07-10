"use client"

import { FeatureSteps } from "@/components/sections/2ndSection/feature-section"


const features = [
  { 
    step: 'Step 1', 
    title: 'Get Responses from Employers in a day.',
    content: 'Employers get notified everytime you apply, They can easily see your profile and review it in just 10 minutes.', 
    image: '/2ndSec/popimage1.png'
  },
  { 
    step: 'Step 2',
    title: 'Check out where you are in the review process.',
    content: "Application statuses can be seen in a page on the platform. Check out whether you're accepted or bound for an interview!",
    image: '/2ndSec/popimage2.png'
  },
  { 
    step: 'Step 3',
    title: 'Find the Listings you can take for credit.',
    content: "Need internships for OJT credits in school? We got you covered. We've labeled and tagged the companies with an ongoing MOA with your school.",
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


