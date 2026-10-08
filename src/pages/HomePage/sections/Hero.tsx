// Created by add_section_from_catalog (HeroBillboardCarousel).

import React from 'react';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';

export default function HeroSection(): React.JSX.Element {
  return (
    <div data-webild-section="hero" data-section="hero" id="hero">
      <HeroBillboardCarousel
        tag="Authentic Jamaican Cuisine"
        secondaryButton={{"text":"View Menu","href":"#menu"}}
        items={[{"imageSrc":"https://storage.googleapis.com/webild/users/user_3KNGJggyMvLu5MUfmY2A4FopH9u/uploaded-1791473772444-6trfzam3.png"},{"imageSrc":"http://img.b2bpic.net/free-photo/baked-pumpkin-with-chicken-paprika_2829-13657.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/top-view-delicious-goulash-olive-oil_23-2149388119.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/delicious-goulash-ready-dinner_23-2149370900.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/cod-with-potatoes_123827-37163.jpg"},{"imageSrc":"http://img.b2bpic.net/free-photo/still-life-recipe-with-plantain_23-2151062818.jpg"}]}
        textAnimation="fade-blur"
        primaryButton={{"href":"https://www.ubereats.com/","text":"Order Online"}}
        description="Traditional jerk chicken, oxtails, and curry goat made with love and fresh ingredients."
        title="Taste the Soul of Jamaica in Roanoke"
      />
    </div>
  );
}
