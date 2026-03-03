import { Layout } from "@/components/layout";
import {
  HeroSection,
  ServicesSection,
  ProductsSection,
  PartnersSection,
  TestimonialsSection,
  InstagramSection,
  AboutSection,
  CTASection,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <PartnersSection />
      <TestimonialsSection />
      <CTASection />
      <InstagramSection />
    </Layout>
  );
};

export default Index;
