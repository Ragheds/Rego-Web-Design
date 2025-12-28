import { Link } from "wouter";
import { Mail, Phone, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <h3 className="text-xl font-bold">RegoWebDesign</h3>
            <p className="text-primary-foreground/70 max-w-xs leading-relaxed">
              Premium websites for small businesses without the risk. 
              Built first, paid later.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-primary-foreground/70 hover:text-white transition-colors">Home</Link>
              <Link href="/examples" className="text-primary-foreground/70 hover:text-white transition-colors">Examples</Link>
              <Link href="/contact" className="text-primary-foreground/70 hover:text-white transition-colors">Contact</Link>
              <Link href="/request" className="text-primary-foreground/70 hover:text-white transition-colors">Get Started</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="flex items-center gap-3 text-primary-foreground/70">
              <Mail className="h-5 w-5 text-accent" />
              <span>contact@regowebdesign.com</span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/70">
              <Phone className="h-5 w-5 text-accent" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-primary-foreground/70">
              <Globe className="h-5 w-5 text-accent" />
              <span>Remote / Worldwide</span>
            </div>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} RegoWebDesign. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
