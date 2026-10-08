import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import FeaturesComparison from '@/components/sections/features/FeaturesComparison';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroOverlayMarquee from '@/components/sections/hero/HeroOverlayMarquee';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import { Award, CheckCircle, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlayMarquee
      tag="Authentic Jamaican Cuisine"
      title="Taste the Soul of Jamaica in Roanoke"
      description="Traditional jerk chicken, oxtails, and curry goat made with love and fresh ingredients."
      primaryButton={{
        text: "Order Online",
        href: "https://www.ubereats.com/",
      }}
      secondaryButton={{
        text: "View Menu",
        href: "#menu",
      }}
      items={[
        {
          text: "100% Authentic",
          icon: CheckCircle,
        },
        {
          text: "Fresh Ingredients",
          icon: Zap,
        },
        {
          text: "Traditional Recipes",
          icon: Award,
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/table-set-dinning-table_1339-3434.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="A Passion for Tradition"
      descriptions={[
        "Ocho Rios Jamaican Cuisine was founded with a simple goal: to share the vibrant, authentic flavors of Jamaica with the Roanoke community. Every recipe is rooted in tradition, passed down through generations.",
        "We take pride in our spotless, relaxing environment and our commitment to friendly, personable service. Whether you're a long-time lover of jerk chicken or trying curry goat for the first time, we invite you to experience a true island meal.",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="menu" data-section="menu">
    <SectionErrorBoundary name="menu">
          <FeaturesImageBento
      tag="Our Favorites"
      title="Flavor-Packed Jamaican Classics"
      description="Explore our most loved dishes, prepared fresh daily."
      items={[
        {
          title: "Jerk Chicken",
          description: "Succulent, spice-rubbed chicken grilled to perfection.",
          imageSrc: "http://img.b2bpic.net/free-photo/baked-pumpkin-with-chicken-paprika_2829-13657.jpg",
        },
        {
          title: "Oxtails",
          description: "Tender oxtail slow-cooked in a rich, flavorful gravy.",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-delicious-goulash-olive-oil_23-2149388119.jpg",
        },
        {
          title: "Curry Goat",
          description: "A Jamaican staple cooked with aromatic spices.",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-goulash-ready-dinner_23-2149370900.jpg",
        },
        {
          title: "Brown Stew Chicken",
          description: "Classic Jamaican comfort in a savory dark stew.",
          imageSrc: "http://img.b2bpic.net/free-photo/cod-with-potatoes_123827-37163.jpg",
        },
        {
          title: "Fried Plantains",
          description: "Sweet, golden-fried slices of heaven.",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-recipe-with-plantain_23-2151062818.jpg",
        },
        {
          title: "Beef Patties",
          description: "Flaky crust filled with perfectly seasoned beef.",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-heap-chocolate-chip-cookies-with-cereals-nuts-cocoa-wooden_141793-6227.jpg",
        },
        {
          title: "Rice and Peas",
          description: "Our signature side dish, essential for every meal.",
          imageSrc: "http://img.b2bpic.net/free-photo/black-rice-plate-with-pumpkin-peas-carrots-baby-corn_1150-20973.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="comparison" data-section="comparison">
    <SectionErrorBoundary name="comparison">
          <FeaturesComparison
      tag="Why Choose Us?"
      title="The Authentic Difference"
      description="What sets Ocho Rios apart in the Roanoke culinary scene."
      negativeItems={[
        "No pre-packaged or mass-produced meals",
        "No shortcut shortcuts in traditional prep",
        "Not just another generic restaurant",
        "No compromise on quality standards",
      ]}
      positiveItems={[
        "Authentic Jamaican spices and seasonings",
        "Generous, satisfying portion sizes",
        "Spotless and welcoming atmosphere",
        "Fast and professional service",
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Our Growth"
      title="Serving Smiles Daily"
      description="We are proud to serve our vibrant community."
      metrics={[
        {
          value: "4.8",
          title: "Google Rating",
          description: "Based on 194 reviews and happy customers.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-woman-bringing-food-table-having-fun-with-her-friends-lunch-time-home_637285-3146.jpg",
        },
        {
          value: "15+",
          title: "Authentic Recipes",
          description: "Time-honored family recipes crafted daily.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-chef-cooking_23-2148471935.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Voices of Our Guests"
      title="Trusted by Locals"
      description="Hear what our wonderful guests have to say about their experience."
      testimonials={[
        {
          name: "Black Star Dust",
          role: "Local Guide",
          quote: "Hands down, the absolute best Jamaican spot between DC and Atlanta! The flavors are incredibly savory and perfectly balanced.",
          imageSrc: "http://img.b2bpic.net/free-photo/older-friends-eating-restaurant_23-2149316782.jpg",
        },
        {
          name: "Nita Bur",
          role: "Local Guide",
          quote: "The oxtails are delicious! The rice and peas and curry goat are yummy. I'm glad we were able to order beef patties.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-smiling-watching-man-playing-guitar-party_23-2149187061.jpg",
        },
        {
          name: "Don Marlowe",
          role: "Local Guide",
          quote: "Extraordinary customer service. Reasonable prices. Highly recommend this restaurant.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-smiley-woman-with-notebook_23-2148877764.jpg",
        },
        {
          name: "Sarah J.",
          role: "Guest",
          quote: "Everything I have tried here is authentic and cooked to perfection. The staff is so friendly!",
          imageSrc: "http://img.b2bpic.net/free-photo/friends-having-fun-while-traveling_52683-88086.jpg",
        },
        {
          name: "Michael K.",
          role: "Guest",
          quote: "The portions are generous and the flavors are just like home. My favorite spot in Roanoke.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-meat-with-baked-potatoes-eggplant-tomato-pepper-decorated-with-pomegranate-plate-served-table_176474-2442.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Got Questions?"
      title="Frequently Asked Questions"
      description="Learn more about our services and operating hours."
      items={[
        {
          question: "Do you offer delivery?",
          answer: "Yes, we partner with Uber Eats for fast delivery to your door.",
        },
        {
          question: "What are your operating hours?",
          answer: "We are typically open from 12:30 PM. Please check our Google profile for real-time updates.",
        },
        {
          question: "Do you offer takeout?",
          answer: "Absolutely! You can call us to place an order for pickup.",
        },
        {
          question: "Do you offer catering?",
          answer: "We do accommodate catering requests. Please give us a call to discuss your event.",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Visit Us Today"
      text="Ready for an authentic island meal? Join us at 2102 Williamson Rd NE, Roanoke, VA."
      primaryButton={{
        text: "Call Now",
        href: "tel:5409885560",
      }}
      secondaryButton={{
        text: "Get Directions",
        href: "https://maps.google.com/?q=2102+Williamson+Rd+NE+Roanoke+VA",
      }}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
