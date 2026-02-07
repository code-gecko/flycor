import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Working with Flycorp Farms has transformed how we approach agriculture. Their innovative methods and sustainable practices have helped us increase yields while reducing costs. The team is knowledgeable, passionate, and always willing to share their expertise.",
    author: "Sarah Nakato",
    role: "Kampala Farmer",
    avatar: "👩🏾‍🌾",
  },
  {
    id: 2,
    quote: "The training I received from Flycorp Farms on hydroponics has completely changed my farming business. I now grow vegetables year-round and have doubled my income. Their support team is always available when I need help.",
    author: "John Ochieng",
    role: "Greenhouse Farmer",
    avatar: "👨🏾‍🌾",
  },
  {
    id: 3,
    quote: "The quality of produce from Flycorp Farms is exceptional. As a restaurant owner, I appreciate their consistency and reliability. Their delivery is always on time, and the vegetables are always fresh.",
    author: "Grace Auma",
    role: "Restaurant Owner",
    avatar: "👩🏾‍🍳",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-4xl mb-4 block">🐔</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-lg bg-card">
            <CardContent className="p-8 md:p-12">
              <Quote className="h-12 w-12 text-secondary/30 mb-6" />
              
              <blockquote className="font-display text-xl md:text-2xl text-foreground italic leading-relaxed mb-8">
                "{current.quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <span className="text-4xl">{current.avatar}</span>
                <div>
                  <p className="font-semibold text-foreground">{current.author}</p>
                  <p className="text-sm text-muted-foreground">{current.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary w-6" 
                      : "bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
