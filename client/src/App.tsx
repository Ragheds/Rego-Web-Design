import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import NotFound from "@/pages/not-found";

// Pages
import Home from "@/pages/Home";
import RequestPage from "@/pages/Request";
import Contact from "@/pages/Contact";
import Examples from "@/pages/Examples";

// Wrapper for pages that need standard layout (Nav + Footer)
// Note: Home, Contact, Examples include their own layout structure for specific design needs
// but we can wrap generic pages here if needed.
// Currently, Navigation is included inside page components to handle layout specifics (like transparency on home)

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => (
        <div className="min-h-screen bg-background flex flex-col">
          <Navigation />
          <Home />
          <Footer />
        </div>
      )} />
      
      <Route path="/request" component={RequestPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/examples" component={Examples} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
