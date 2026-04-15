"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
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
            button={{ text: "Call Now", href: "tel:+18005550199" }}
          />
        </div>

        <div id="home" data-section="home">
          <HeroSplit
            background={{ variant: "plain" }}
            title="Stop Overpaying for Your Monthly Bills"
            description="We compare your internet, cable, and phone plans to find you the best deals. No hard credit checks, no upfront payments. Call us today and let us beat your current offer."
            buttons={[{ text: "Call Now", href: "tel:+18005550199" }]}
            imageSrc="http://img.b2bpic.net/free-photo/person-uses-tablet-governmental-cyber-security-room-working-russian-flag_482257-90680.jpg"
            imageAlt="digital bill comparison interface modern"
            mediaAnimation="slide-up"
            avatars={[
              { src: "http://img.b2bpic.net/free-photo/smiling-pretty-young-woman-posing-camera_1262-18333.jpg", alt: "Smiling pretty young woman posing at camera" },
              { src: "http://img.b2bpic.net/free-photo/young-beautiful-girl-smiling-sitting-floor-white-wall_176420-8542.jpg", alt: "Young beautiful girl smiling sitting on floor over white wall." },
              { src: "http://img.b2bpic.net/free-photo/medium-shot-smiley-man-posing_23-2149271087.jpg", alt: "Medium shot smiley man posing" },
              { src: "http://img.b2bpic.net/free-photo/happy-woman-grey-jacket-laughing-brown-background-cheerful-young-girl-oversize-stylish-suit-smiles-poses-isolated_197531-18578.jpg", alt: "Happy woman in grey jacket laughing on brown background" },
              { src: "http://img.b2bpic.net/free-photo/young-handsome-african-american-man-posing-outdoors-paris-happy-smile-fashion-style_1321-3388.jpg", alt: "Young handsome african american man posing outdoors" }
            ]}
            avatarText="Trusted by 5,000+ satisfied customers"
            marqueeItems={[
              { type: "text", text: "No Hard Credit Checks" },
              { type: "text", text: "Zero Upfront Costs" },
              { type: "text", text: "Guaranteed Lower Rates" },
              { type: "text", text: "Fast Negotiation" },
              { type: "text", text: "Expert Support" }
            ]}
          />
        </div>

        <div id="about" data-section="about">
          <TextAbout
            useInvertedBackground={true}
            title="We Work For You, Not The Service Providers"
            buttons={[{ text: "Call For A Free Audit", href: "tel:+18005550199" }]}
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTwentyFour
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              { id: "f1", title: "Free Bill Analysis", author: "Step 1", description: "Send us your current monthly bills. We conduct a deep-dive analysis against all market rates.", imageSrc: "http://img.b2bpic.net/free-photo/two-businesspersons_23-2147626401.jpg", imageAlt: "hand holding smartphone reviewing documents", tags: [] },
              { id: "f2", title: "Expert Negotiation", author: "Step 2", description: "Our experts contact providers to negotiate the best possible rates, beating your existing offer.", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-browsing-documents-ring-binder_329181-10985.jpg", imageAlt: "magnifying glass on utility bill", tags: [] },
              { id: "f3", title: "Service Implementation", author: "Step 3", description: "We ensure the transition is smooth with zero service gaps and no upfront costs to you.", imageSrc: "http://img.b2bpic.net/free-photo/inclusive-workspace-atmosphere-office-job_23-2149571033.jpg", imageAlt: "diverse team collaborating professional", tags: [] }
            ]}
            title="How Our Savings Process Works"
            description="A simple, stress-free path to lower monthly expenses."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardFive
            textboxLayout="default"
            useInvertedBackground={true}
            testimonials={[
              { id: "t1", name: "Elena R.", date: "Jan 2025", title: "Homeowner", quote: "They cut my internet bill by 40% and found me a better TV package. Best decision ever!", tag: "Savings", avatarSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-woman-with-copy-space_23-2149636314.jpg", imageSrc: "http://img.b2bpic.net/free-photo/person-uses-tablet-governmental-cyber-security-room-working-russian-flag_482257-90680.jpg" },
              { id: "t2", name: "Mark S.", date: "Dec 2024", title: "Renter", quote: "Super simple process. No hard credit check, and I start saving immediately.", tag: "Convenience", avatarSrc: "http://img.b2bpic.net/free-photo/confident-handsome-man-stands-isolated-white-wall_141793-68183.jpg", imageSrc: "http://img.b2bpic.net/free-photo/two-businesspersons_23-2147626401.jpg" },
              { id: "t3", name: "Sarah J.", date: "Dec 2024", title: "Retiree", quote: "Very friendly service. They really beat my previous phone plan by a significant amount.", tag: "Excellent", avatarSrc: "http://img.b2bpic.net/free-photo/smiling-arab-man-pointing-with-hands-side-while-advertising-product-looking-camera-joyful-person-with-positive-facial-expression-showing-left-with-arms-portrait_482257-65221.jpg", imageSrc: "http://img.b2bpic.net/free-photo/young-woman-browsing-documents-ring-binder_329181-10985.jpg" },
              { id: "t4", name: "David W.", date: "Nov 2024", title: "Parent", quote: "I didn't have time to call providers, they did it all for me. Saved my family hundreds annually.", tag: "Service", avatarSrc: "http://img.b2bpic.net/free-photo/teen-girl-with-short-hair-posing-couch-inside-charming-brunette-woman-pink-sunglasses-denim-beige-outfit-looking-into-camera-cafe_197531-29429.jpg", imageSrc: "http://img.b2bpic.net/free-photo/inclusive-workspace-atmosphere-office-job_23-2149571033.jpg" },
              { id: "t5", name: "Kimberly T.", date: "Nov 2024", title: "Homeowner", quote: "No upfront payments required, just instant savings on my recurring bills.", tag: "Trust", avatarSrc: "http://img.b2bpic.net/free-photo/outdoor-close-up-portrait-brunette-charming-lady-is-posing-camera-sunlight-warn-spring-day-sport-square_291650-2320.jpg", imageSrc: "http://img.b2bpic.net/free-photo/african-american-trader-works-from-home-using-laptop-study-stock-prices_482257-121736.jpg" }
            ]}
            title="Families Who Switched And Saved"
            description="See how we've helped households across the country slash their monthly bills."
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqSplitText
            useInvertedBackground={false}
            faqs={[
              { id: "q1", title: "Is there a credit check?", content: "No, we do not perform hard credit checks for our comparison services." },
              { id: "q2", title: "Do I have to pay upfront?", content: "No, our service requires zero upfront payments. You only benefit from the savings found." },
              { id: "q3", title: "Which services do you compare?", content: "We cover internet, cable TV, home phone, cell plans, and home security systems." }
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
            title="Ready To Slash Your Monthly Bills?"
            description="Give us a call now or sign up to have an expert reach out. Start saving today without any hard credit checks."
            buttonText="Call Now"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterCard
            logoText="BillSaver Expert"
            copyrightText="© 2025 BillSaver Expert. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
