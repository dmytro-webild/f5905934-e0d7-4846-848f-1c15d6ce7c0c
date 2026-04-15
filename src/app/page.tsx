"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { Phone, Users, Star, CheckCircle } from "lucide-react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="aurora"
        cardStyle="soft-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="layered"
        headingFontWeight="bold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Home", id: "home" },
              { name: "About", id: "about" },
              { name: "Features", id: "features" },
              { name: "Testimonials", id: "testimonials" },
              { name: "FAQ", id: "faq" },
              { name: "Contact", id: "contact" }
            ]}
            brandName="BillSaver Expert"
            button={{ text: "Call 855-477-9866", href: "tel:+18554779866" }}
          />
        </div>

        <div id="home" data-section="home">
          <HeroSplit
            background={{ variant: "plain" }}
            title="Stop Overpaying for Your Monthly Bills"
            description="We compare your internet, cable, and phone plans to find you the best deals. Call us today at 855-477-9866 to start saving!"
            buttons={[{ text: "Call Now", href: "tel:+18554779866" }]}
            imageSrc="http://img.b2bpic.net/free-photo/person-uses-tablet-governmental-cyber-security-room-working-russian-flag_482257-90680.jpg?_wi=1"
            imageAlt="digital bill comparison interface modern"
            mediaAnimation="slide-up"
            avatarText="Trusted by 5,000+ satisfied customers"
            marqueeItems={[
              { type: "text", text: "No Hard Credit Checks" },
              { type: "text", text: "Zero Upfront Costs" },
              { type: "text", text: "Guaranteed Lower Rates" }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TextAbout
            useInvertedBackground={true}
            title="We Work For You, Not The Service Providers"
            buttons={[{ text: "Call Now: 855-477-9866", href: "tel:+18554779866" }]}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTwentyFour
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { id: "f1", title: "Free Bill Analysis", author: "Step 1", description: "Send us your current monthly bills. We conduct a deep-dive analysis.", imageSrc: "http://img.b2bpic.net/free-photo/two-businesspersons_23-2147626401.jpg?_wi=1", imageAlt: "document review", tags: [] },
              { id: "f2", title: "Expert Negotiation", author: "Step 2", description: "Our team negotiates the best market rates directly with your providers.", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-browsing-documents-ring-binder_329181-10985.jpg?_wi=1", imageAlt: "magnifying glass", tags: [] },
              { id: "f3", title: "Service Implementation", author: "Step 3", description: "Smooth transition with no service gaps and zero upfront costs.", imageSrc: "http://img.b2bpic.net/free-photo/inclusive-workspace-atmosphere-office-job_23-2149571033.jpg?_wi=1", imageAlt: "teamwork", tags: [] }
            ]}
            title="How Our Savings Process Works"
            description="A simple, stress-free path to lower monthly expenses."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardSix
            animationType="slide-up"
            title="Customer Success Stories"
            description="Real families saving thousands with BillSaver Expert. Call 855-477-9866 to join them."
            textboxLayout="split"
            useInvertedBackground={true}
            testimonials={[
              { id: "t1", name: "Elena R.", handle: "@elena", testimonial: "They cut my internet bill by 40%! Professional and fast.", icon: Star },
              { id: "t2", name: "Mark S.", handle: "@marks", testimonial: "No credit check, just pure savings. Highly recommend calling them.", icon: Star },
              { id: "t3", name: "Sarah J.", handle: "@sarah", testimonial: "They beat my previous phone plan by a significant amount.", icon: Star },
              { id: "t4", name: "David W.", handle: "@david", testimonial: "Easy process, saved me hundreds annually.", icon: Star }
            ]}
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            useInvertedBackground={false}
            faqs={[
              { id: "q1", title: "Is there a credit check?", content: "No, we do not perform hard credit checks." },
              { id: "q2", title: "Do I have to pay upfront?", content: "No, our service requires zero upfront payments." },
              { id: "q3", title: "Which services do you compare?", content: "Internet, cable, phone, and home security systems." }
            ]}
            sideTitle="Common Questions"
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCenter
            useInvertedBackground={true}
            background={{ variant: "gradient-bars" }}
            tag="Get Started"
            title="Call Us Today: 855-477-9866"
            description="Ready to slash your bills? Our experts are standing by to help you save."
            buttonText="Call Now"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterCard
            logoText="BillSaver Expert"
            copyrightText="© 2025 BillSaver Expert. Call 855-477-9866 for help."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
