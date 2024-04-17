'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

  const featuredWebinars = [
    {
      title: 'Golden Triangle Tour',
      description:
        "Explore India's heritage with Taj Mahal, forts, palaces, Rajasthan's vibrance."  ,
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'Kerala Backwaters Cruise',
      description:
        "Experience Kerala's backwaters: houseboat cruise, lush landscapes, serene villages.",
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Leh-Ladakh Adventure',
      description:
        "Adventure to Leh, Ladakh: monasteries, trekking, Himalayan culture, breathtaking landscapes.",
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Goa Beach Retreat',
      description:
        "Relax in Goa: beaches, sun, seafood, laid-back vibe, vibrant nightlife.",
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Ranthambore Safari',
      description:
        "Discover Ranthambore: Bengal tigers, diverse wildlife, thrilling jeep safaris.",
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Varanasi Spiritual Experience',
      description:"Varanasi: Spiritual city, Ganga Aarti, ancient temples, sacred atmosphere.",
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Musical Journey</p>
        </div>

        <div className="mt-10">
          <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link href={"/"}
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Destinations
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpcomingWebinars