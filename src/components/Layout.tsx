import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Menu",
    "href": "#menu"
  },
  {
    "name": "Reviews",
    "href": "#testimonials"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Comparison",
    "href": "#comparison"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  }
];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="noise" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="Ocho Rios"
      ctaButton={{
        text: "Order Online",
        href: "https://www.ubereats.com/",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="Ocho Rios Jamaican Cuisine"
      columns={[
        {
          title: "Location",
          items: [
            {
              label: "2102 Williamson Rd NE, Roanoke, VA 24012",
              href: "#",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "(540) 988-5560",
              href: "tel:5409885560",
            },
            {
              label: "ochoriosjamaicancuisine.com",
              href: "#",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Order Online",
              href: "https://www.ubereats.com/",
            },
            {
              label: "Feedback",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2024 Ocho Rios Jamaican Cuisine. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
