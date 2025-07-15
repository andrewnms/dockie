"use client";
import { CardStack } from "@/components/sections/3rdSection/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-full flex items-center justify-center w-full cursor-pointer">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700  px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Project Management Intern",
    designation: "BetterInternship",
    content: (
      <p>
           Hey there! We're looking for a <Highlight>Project manager intern</Highlight> who is organized, can stay calm in chaos, and help lead our team to success.
      </p>
    ),
    link: "https://www.betterinternship.com/search?q=Asian%20Institute%20of%20Management"
  },
{
    id: 1,
    name: "Marketing Internship",
    designation: "Jollibee",
    content: (
      <p>
        Apply for our <Highlight>Marketing Internship</Highlight> at Jollibee! Work on 3 different projects, enjoy a hybrid setup, and earn ₱2600/week. Full-time role—details depend on your initial interview.
      </p>
    ),
    link: "https://www.betterinternship.com/search?q=Asian%20Institute%20of%20Management"
  },
{
    id: 2,
    name: "Software Developer Intern",
    designation: "Oracle Philippines",
    content: (
      <p>
        Join Oracle as a <Highlight>Software Developer Intern</Highlight>! Work face-to-face with experts, earn ₱14,000/month, and get full-time training and mentorship.
      </p>
    ),
    link: "https://www.betterinternship.com/search?q=Asian%20Institute%20of%20Management"
  },
  {
    id: 3,
    name: "Marketing Internship",
    designation: "Alaska Milk Corporation",
    content: (
      <p>
        Join our <Highlight>Marketing Internship</Highlight> at Alaska Milk! Assist in brand management, support marketing projects, and gain hands-on experience with a flexible hybrid setup and a supportive team. Earn ₱720/day, full-time.
      </p>
    ),
    link: "https://www.betterinternship.com/search?q=Asian%20Institute%20of%20Management"
  },
  {
    id: 4,
    name: "SRF Intern",
    designation: "Asian Institute of Management",
    content: (
      <p>
        Be an <Highlight>SRF Intern</Highlight> at AIM! Assist in daily operations of the Scientific Research Foundation, focusing on events management and research activities. Face-to-face, full-time.
      </p>
    ),
    link: "https://www.betterinternship.com/search?q=Asian%20Institute%20of%20Management"
  },
];
