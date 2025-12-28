import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions before starting? Feel free to reach out directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-border/50 bg-secondary/20 shadow-none">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground mb-2">Best for detailed inquiries.</p>
                    <a href="mailto:contact@regowebdesign.com" className="text-accent font-medium hover:underline">
                      contact@regowebdesign.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-secondary/20 shadow-none">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone / WhatsApp</h3>
                    <p className="text-muted-foreground mb-2">Mon-Fri from 9am to 5pm.</p>
                    <a href="tel:+15551234567" className="text-accent font-medium hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 bg-secondary/20 shadow-none">
                <CardContent className="p-8 flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-accent flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Based remotely. Serving clients worldwide.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Form */}
            <div className="bg-white p-8 rounded-2xl border border-border shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="General Inquiry" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="How can I help you?" className="min-h-[150px]" />
                </div>
                <Button className="w-full bg-primary" onClick={() => alert("For this demo, please use the main Request form!")}>
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
