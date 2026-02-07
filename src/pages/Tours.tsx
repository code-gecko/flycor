import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin, Check } from "lucide-react";
import { useState } from "react";

const tourPackages = [
  {
    id: 1,
    name: "Farm Discovery Tour",
    duration: "2 hours",
    price: "UGX 50,000",
    priceNote: "per person",
    description: "A guided walk through our farm showcasing sustainable farming practices.",
    includes: [
      "Guided farm tour",
      "Introduction to hydroponics",
      "Animal interaction",
      "Fresh produce samples",
    ],
    maxGroup: 15,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Farming Workshop",
    duration: "4 hours",
    price: "UGX 150,000",
    priceNote: "per person",
    description: "Hands-on workshop covering sustainable farming techniques.",
    includes: [
      "Full farm tour",
      "Hands-on planting session",
      "Composting workshop",
      "Lunch included",
      "Take-home seedlings",
    ],
    maxGroup: 10,
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    popular: true,
  },
  {
    id: 3,
    name: "School Group Visit",
    duration: "3 hours",
    price: "UGX 30,000",
    priceNote: "per student",
    description: "Educational farm visit designed for school groups.",
    includes: [
      "Age-appropriate tour",
      "Interactive learning stations",
      "Animal feeding experience",
      "Snacks included",
      "Educational materials",
    ],
    maxGroup: 30,
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

const Tours = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTour, setSelectedTour] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Visit Our Farm
          </h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Experience sustainable farming firsthand. Book a guided tour and learn
            about our climate-smart agricultural practices.
          </p>
        </div>
      </section>

      {/* Tour Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
              Choose Your Experience
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Tour Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tourPackages.map((tour) => (
              <Card
                key={tour.id}
                className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${
                  selectedTour === tour.id ? "ring-2 ring-primary" : ""
                }`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.name}
                    className="w-full h-full object-cover"
                  />
                  {tour.popular && (
                    <Badge className="absolute top-3 right-3 bg-secondary text-secondary-foreground">
                      Most Popular
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-display text-xl">{tour.name}</CardTitle>
                  <CardDescription>{tour.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Max {tour.maxGroup}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {tour.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="font-bold text-xl text-primary">
                        {tour.price}
                      </span>
                      <span className="text-sm text-muted-foreground ml-1">
                        {tour.priceNote}
                      </span>
                    </div>
                    <Button
                      onClick={() => setSelectedTour(tour.id)}
                      variant={selectedTour === tour.id ? "default" : "outline"}
                      className={
                        selectedTour === tour.id
                          ? "bg-primary text-primary-foreground"
                          : ""
                      }
                    >
                      {selectedTour === tour.id ? "Selected" : "Select"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Booking Form */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="font-display text-2xl">
                  Book Your Visit
                </CardTitle>
                <CardDescription>
                  Select a date and fill in your details to book a tour
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>

                  {/* Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="+256 XXX XXX XXX"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Number of Visitors *
                      </label>
                      <input
                        type="number"
                        min="1"
                        placeholder="Number of people"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Special Requests
                      </label>
                      <textarea
                        placeholder="Any dietary requirements or special needs?"
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>
                    <Button
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={!selectedTour}
                    >
                      Book Tour
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Location Info */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-muted rounded-full">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="font-medium">Located in Kampala, Uganda</span>
            </div>
            <p className="text-muted-foreground mt-4">
              Directions will be sent upon booking confirmation
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tours;
