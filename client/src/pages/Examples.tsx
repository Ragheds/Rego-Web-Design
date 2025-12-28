import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ExternalLink } from "lucide-react";

const examples = [
  {
    title: "Mokanco",
    url: "https://mokanco.com",
    category: "Corporate / Business",
    description: "A professional corporate site focusing on clean typography and clear messaging.",
    color: "bg-blue-500"
  },
  {
    title: "Laza Dessert Cafe",
    url: "https://lazadessert.cafe",
    category: "Food & Beverage",
    description: "Vibrant, appetizing design for a local dessert cafe with menu integration.",
    color: "bg-pink-500"
  },
  {
    title: "Safaa Arabian Market",
    url: "https://safaaarabianmarket.com",
    category: "Retail / E-commerce",
    description: "Clean layout for a market showcasing products and location information.",
    color: "bg-green-600"
  },
  {
    title: "The Bubbly Aesthetic",
    url: "https://thebubblyaesthetic.com",
    category: "Blog / Portfolio",
    description: "A visually rich, aesthetic-focused site for a creative professional.",
    color: "bg-purple-500"
  }
];

export default function Examples() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Recent Work</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore some of the websites I've built. Every site is custom-made to fit the unique brand of the business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {examples.map((example, idx) => (
              <a 
                key={idx}
                href={example.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-accent/50 transition-all duration-300"
              >
                {/* Placeholder for screenshot - using colored div */}
                <div className={`h-64 w-full ${example.color} opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  <span className="text-white font-bold text-3xl drop-shadow-md tracking-tight">
                    {example.title}
                  </span>
                  
                  <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    View Live Site <ExternalLink className="w-3 h-3 inline ml-1" />
                  </div>
                </div>

                <div className="p-8">
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                    {example.category}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                    {example.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {example.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
