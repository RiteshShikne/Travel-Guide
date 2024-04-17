'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Aarti Singh',
      designation: 'Tropical Trails of Andaman: Your Island Odyssey Unfolds!',
      image:
        'https://images.unsplash.com/photo-1591980896142-4e36328411ec?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Akash Patel',
      designation: "Spiritual Sojourn in Varanasi: Your Ganges Gateway!",
      image:
        'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=2706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Meera Desai',
      designation: 'Himalayan Hideaways in Himachal: Your Shimla Sanctuary',
      image:
        'https://images.unsplash.com/photo-1607189200597-4d0923ef98c6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      name: 'Sanjay Kumar',
      designation: 'Historical Hues of Delhi: Your Capital Chronicle!',
      image:
        'https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Travel Guides</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Travel with Insight: Your Insider&apos;s Companion</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors