"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, ArrowRight } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { animations } from "@/lib/animations"

export function DeveloperSection() {
  const [sectionRef, isVisible] = useInView(0.3)

  return (
    <section ref={sectionRef} className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={animations.fadeInLeft(isVisible)}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">By developers, for developers</h2>
            <p className="text-xl text-gray-300 mb-8">
              Build custom commerce experiences with our powerful APIs, extensive documentation, and developer tools.
            </p>
            <Button className="bg-white hover:bg-gray-100 text-black">
              Explore developer tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <Card className={`bg-gray-900 border-gray-700 ${animations.fadeInRight(isVisible, 200)}`}>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-white mr-2" />
                <span className="text-gray-400 text-sm">GraphQL API</span>
              </div>
              <pre className="text-white text-sm overflow-x-auto">
                {`query = """
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
        }
      }
    }
  }
"""`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
