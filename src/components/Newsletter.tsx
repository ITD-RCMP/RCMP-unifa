import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
});

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const result = emailSchema.safeParse({ email });
      
      if (!result.success) {
        setError(result.error.errors[0].message);
        return;
      }

      setIsSubmitting(true);
      
      // Temporary workaround until Supabase types regenerate
      const supabaseAny = supabase as any;
      const { error: insertError } = await supabaseAny
        .from('newsletter_subscribers')
        .insert([{ email: result.data.email }]);
      
      if (insertError) {
        if (insertError.code === '23505') {
          setError("This email is already subscribed.");
        } else {
          setError("Something went wrong. Please try again.");
        }
        return;
      }
      
      toast.success("Thank you for subscribing!");
      setEmail("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="newsletter-section" className="bg-secondary border-y py-16 md:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display uppercase tracking-tight text-foreground mb-4">
          Never Miss a Bite
        </h2>
        <p className="text-sm md:text-base text-muted-foreground tracking-wide mb-8 max-w-2xl mx-auto">
          Get the latest restaurant reviews, food trends, and culinary tips delivered to your inbox weekly.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="Your email"
              required
              className={`flex-1 px-4 py-3 bg-background border text-foreground text-sm focus:outline-none transition-colors duration-200 ${
                error ? "border-red-500 focus:border-red-500" : "border-input focus:border-primary"
              }`}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed transition-colors duration-200 py-3 px-8 text-xs uppercase tracking-label font-bold whitespace-nowrap min-w-[120px]"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
          </div>
          {error && (
            <p className="text-red-500 text-sm text-left animate-fade-in">{error}</p>
          )}
        </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
