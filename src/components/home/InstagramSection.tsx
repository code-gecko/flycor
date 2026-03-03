import { Instagram, Facebook } from "lucide-react";
import greenhouseSeedlings from "@/assets/farm/greenhouse-seedlings.jpg";
import hotPepperSeedlings from "@/assets/farm/hot-pepper-seedlings.jpg";
import pepperPlants from "@/assets/farm/pepper-plants.jpg";
import africanFarmer from "@/assets/farm/african-farmer.jpg";

const instagramPosts = [
  { id: 1, image: greenhouseSeedlings, alt: "Greenhouse seedlings" },
  { id: 2, image: hotPepperSeedlings, alt: "Hot pepper seedlings" },
  { id: 3, image: pepperPlants, alt: "Pepper plants growing" },
  { id: 4, image: africanFarmer, alt: "African farmer working in the field" },
];

export function InstagramSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Follow Us On Instagram
          </h2>
          <a 
            href="https://instagram.com/flycorpfarms" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span className="font-medium">@flycorpfarms</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com/flycorpfarms"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors flex items-center justify-center">
                <Instagram className="h-8 w-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://facebook.com/flycorpfarms"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-background rounded-full shadow-sm hover:shadow-md transition-shadow text-foreground hover:text-primary"
          >
            <Facebook className="h-5 w-5" />
            <span className="font-medium">Facebook</span>
          </a>
          <a
            href="https://instagram.com/flycorpfarms"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-background rounded-full shadow-sm hover:shadow-md transition-shadow text-foreground hover:text-primary"
          >
            <Instagram className="h-5 w-5" />
            <span className="font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
