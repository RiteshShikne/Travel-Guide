
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: 'Discover Destinations:',
      description:

              "From the sun-kissed beaches of Bali to the majestic peaks of the Himalayas, ExploreWorld offers a diverse range of destinations to satisfy every traveler's wanderlust. Dive into our destination guides to uncover hidden gems, iconic landmarks, and insider tips to make the most of your trip.",
    },
    {
      title: "Plan Your Adventure:",
      description:
      "Ready to turn your travel dreams into reality? Our comprehensive planning resources make it easy to create your perfect itinerary. ExploreWorld provides practical advice on everything from flights and accommodations to transportation and activities, ensuring a seamless and stress-free travel experience.",
    },
    {
      title: "Start Your Journey:",
      description:

          "Whether you're a seasoned globetrotter or a first-time traveler, ExploreWorld is here to inspire, inform, and guide you on your next adventure. Join us as we explore the world together, one destination at a time. Start your journey with ExploreWorld today!",
    },
    
    
  ];

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs