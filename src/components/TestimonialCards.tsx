'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      quote:
      "I've always dreamed of exploring exotic destinations, and ExploreWorld helped turn those dreams into reality! From booking my flights to finding the perfect accommodations, their website made planning my trip a breeze. Thanks to ExploreWorld, I had the adventure of a lifetime in Thailand!",
      name: 'Sarah H',
      
    },
    {
      quote:
      "I've been using ExploreWorld for years, and they never disappoint! Whether I'm hiking in the mountains or relaxing on a beach, their destination guides always provide valuable insights and recommendations. I highly recommend ExploreWorld to any traveler looking for unforgettable experiences.",
      name: 'John D',
      
    },
    {
      quote:
      "As a solo traveler, safety is always a top priority for me. ExploreWorld's community forum allowed me to connect with other travelers and get insider tips on navigating unfamiliar destinations. Thanks to their resources, I felt confident exploring new places and making lifelong memories.",
      name: 'Emily W',
      
    },
    {
      quote:
      "I recently used ExploreWorld to plan a family vacation, and I couldn't be happier with the experience. Their website made it easy to find family-friendly activities and accommodations that suited our needs. Thanks to ExploreWorld, we had an incredible trip that the whole family will cherish forever!",
      name: 'David M',

    },
    {
      quote:
      "ExploreWorld's blog has become my go-to resource for travel inspiration and advice. Whether I'm daydreaming about my next getaway or planning a trip, their articles provide valuable insights and recommendations that always leave me feeling inspired and excited to explore new destinations.",
      name: 'Lisa T',

    },
  ];

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full bg-zinc-700  relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials