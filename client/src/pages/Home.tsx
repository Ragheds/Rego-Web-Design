import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ShieldCheck, DollarSign, Clock, Layout } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-pattern -z-10" />
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-success/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-8 border border-accent/20">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Risk Free Guarantee</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary mb-6 leading-[1.1]">
              I Build Your Website <span className="text-accent">First</span>. <br className="hidden md:block"/>
              You Only Pay If You <span className="text-success">Like It</span>.
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Modern websites for small businesses. No upfront cost. No contracts. 
              If it’s not good enough to pay for, it’s free.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/request">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-accent hover:bg-accent/90 shadow-lg shadow-accent/25 hover:-translate-y-1 transition-all">
                  Get My Free Website Preview
                </Button>
              </Link>
              <Link href="/examples">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary/50">
                  See Real Examples
                </Button>
              </Link>
            </motion.div>

            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" /> Free Preview</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" /> Fast Delivery</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-success" /> Pay Only If Approved</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">Simple, transparent, and completely risk-free.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Layout className="w-8 h-8 text-accent" />, 
                title: "1. Tell Me About Your Business", 
                desc: "Fill out a quick form or chat with me. I'll learn what you need and what style you like." 
              },
              { 
                icon: <Clock className="w-8 h-8 text-accent" />, 
                title: "2. I Build It For Free", 
                desc: "I'll design and build a full preview of your website. No deposit required." 
              },
              { 
                icon: <DollarSign className="w-8 h-8 text-success" />, 
                title: "3. Pay Only If You Like It", 
                desc: "Approve the design and we go live. Don't like it? You owe absolutely nothing." 
              },
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative p-8 rounded-2xl bg-secondary/30 border border-border hover:border-accent/30 transition-all hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6 text-accent">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SNIPPET */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Businesses. Real Results.</h2>
              <p className="text-primary-foreground/70 text-lg">Not generic templates. Custom built for growth.</p>
            </div>
            <Link href="/examples">
              <Button size="lg" variant="secondary" className="group">
                View All Examples <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "mokanco.com",
              "lazadessert.cafe",
              "safaaarabianmarket.com",
              "thebubblyaesthetic.com"
            ].map((site, i) => (
              <a 
                key={i}
                href={`https://${site}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="group block p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent/50 transition-all"
              >
                <div className="h-32 rounded-lg bg-gradient-to-br from-white/5 to-white/0 mb-4 flex items-center justify-center border border-white/5 group-hover:scale-[1.02] transition-transform">
                  <span className="text-accent font-mono text-sm">Preview</span>
                </div>
                <h4 className="font-semibold text-lg truncate group-hover:text-accent transition-colors">{site}</h4>
                <p className="text-sm text-white/50 mt-1">Visit Live Site →</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple Pricing (Only After Approval)</h2>
            <p className="text-xl text-muted-foreground mb-12">
              You don't pay anything until you approve the website. No hidden fees.
            </p>

            <div className="p-8 md:p-12 rounded-3xl border-2 border-accent/20 bg-accent/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent text-white text-xs font-bold px-3 py-1 rounded-bl-xl">NO RISK</div>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-2">
                <span className="text-5xl font-extrabold text-primary">$300 - $800</span>
              </div>
              <p className="text-muted-foreground mb-8">One-time payment. Depends on features required.</p>

              <div className="grid sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto mb-10">
                {[
                  "Mobile-friendly design",
                  "Contact forms & Booking",
                  "SEO Optimization",
                  "Fast loading speeds",
                  "Basic support included",
                  "Domain connection"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-accent" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/request">
                <Button size="lg" className="w-full sm:w-auto px-12 h-14 text-lg bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20 rounded-full">
                  Start My Website Risk-Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-24 h-24 rounded-full bg-primary mx-auto mb-6 flex items-center justify-center text-3xl font-bold text-white">
            RS
          </div>
          <h2 className="text-3xl font-bold mb-6">Hi, I'm Raghed Soliman.</h2>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            I build clean, modern websites for small businesses. I offer a free preview because 
            I believe good work should speak for itself. You shouldn't have to pay for something 
            you haven't seen yet.
          </p>
          <div className="inline-flex gap-4">
            <Link href="/contact">
              <Button variant="outline">Contact Me</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to see your website?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            No upfront cost. No obligation. Just a great website waiting for you.
          </p>
          <Link href="/request">
            <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all">
              Start Risk-Free Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
