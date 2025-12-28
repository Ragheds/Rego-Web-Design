import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertRequestSchema } from "@shared/schema";
import { useCreateRequest } from "@/hooks/use-requests";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Loader2, ShieldCheck, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "wouter";
import { z } from "zod";

// Extend schema with string conversions for select/radio
const formSchema = insertRequestSchema.extend({
  hasWebsite: z.coerce.boolean(),
  wantsBookingOrForms: z.coerce.boolean(),
});

export default function RequestPage() {
  const [, setLocation] = useLocation();
  const { mutate, isPending } = useCreateRequest();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessName: "",
      businessEmail: "",
      phoneNumber: "",
      businessType: "",
      hasWebsite: false,
      desiredPages: "",
      wantsBookingOrForms: false,
      styleReferences: "",
      location: "",
      specificRequirements: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values, {
      onSuccess: () => {
        // We handle toast in the hook, but we can redirect or show success state here too
        form.reset();
        window.scrollTo(0,0);
        // Optional: redirect to success page
      },
    });
  }

  if (form.formState.isSubmitSuccessful) {
    return (
      <div className="min-h-screen bg-secondary/30 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center border border-border"
        >
          <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-primary">Request Received!</h2>
          <p className="text-muted-foreground mb-8">
            Thanks for trusting me with your project. I'll review your details and start building your preview. I'll be in touch shortly via email or phone.
          </p>
          <Link href="/">
            <Button className="w-full">Return Home</Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="border-border shadow-lg">
            <CardHeader className="bg-primary text-primary-foreground rounded-t-xl p-8">
              <CardTitle className="text-2xl md:text-3xl text-white">Request Your Free Website</CardTitle>
              <CardDescription className="text-primary-foreground/70 text-lg mt-2">
                Tell me about your business. I'll build a preview for free. No credit card required.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  
                  {/* Business Info Section */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold border-b pb-2">Business Details</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Joe's Coffee" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="businessType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type of Business</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Cafe, Barber, Plumber" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="businessEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="you@company.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="City, State" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Website Requirements Section */}
                  <div className="space-y-6 pt-4">
                    <h3 className="text-lg font-semibold border-b pb-2">Website Needs</h3>

                    <FormField
                      control={form.control}
                      name="hasWebsite"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Do you currently have a website?</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={(val) => field.onChange(val === 'true')}
                              defaultValue={field.value ? 'true' : 'false'}
                              className="flex gap-4"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="true" />
                                </FormControl>
                                <FormLabel className="font-normal">Yes</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="false" />
                                </FormControl>
                                <FormLabel className="font-normal">No</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="desiredPages"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>What pages do you need?</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="e.g. Home, About, Services, Contact, Menu, Booking..." 
                              className="min-h-[100px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="wantsBookingOrForms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              I need online booking or complex forms
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="styleReferences"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Any websites you like the style of? (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Paste links here..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="specificRequirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Anything else I should know? (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Specific colors, specific features, timeline..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="pt-6">
                    <Button 
                      type="submit" 
                      className="w-full h-14 text-lg bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20"
                      disabled={isPending}
                    >
                      {isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Start Building My Website (Risk-Free)"
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground mt-4">
                      By submitting, you agree to receive communication about your website request. No spam.
                    </p>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
