import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { BellRing } from "lucide-react";
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

      const supabaseAny = supabase as any;
      const { error: insertError } = await supabaseAny
        .from("newsletter_subscribers")
        .insert([{ email: result.data.email }]);

      if (insertError) {
        if (insertError.code === "23505") {
          setError("This email is already on the list.");
        } else {
          setError("Something went wrong. Please try again.");
        }
        return;
      }

      toast.success("You're on the list. We'll email you when a window opens.");
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="reminders-section"
      className="mt-16 bg-secondary text-secondary-foreground p-8 md:p-10 scroll-mt-20"
    >
      <div className="max-w-2xl">
        <div className="flex items-center gap-2">
          <BellRing className="w-4 h-4 text-gold" aria-hidden="true" />
          <p className="text-[10px] uppercase tracking-label text-gold font-semibold">Deadline reminders</p>
        </div>
        <h2 className="mt-3 text-2xl md:text-3xl text-secondary-foreground">
          Don't miss a window
        </h2>
        <p className="mt-3 text-sm text-secondary-foreground/80 leading-relaxed">
          Leave your email and the aid office will send you a short reminder before each
          application window closes — one message per deadline, nothing else.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
          <label htmlFor="reminder-email" className="sr-only">
            Email address for deadline reminders
          </label>
          <input
            id="reminder-email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="your.email@student.rcmp"
            required
            className={`flex-1 px-4 py-3 bg-background text-foreground text-sm focus:outline-none focus:ring-2 transition-colors duration-200 ${
              error ? "border border-destructive focus:ring-destructive" : "border border-input focus:ring-ring"
            }`}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-gold text-navy hover:bg-gold-soft disabled:bg-muted disabled:cursor-not-allowed transition-colors duration-200 px-6 py-3 text-[11px] uppercase tracking-label font-bold whitespace-nowrap"
          >
            {isSubmitting ? "Adding you..." : "Remind me"}
          </button>
        </form>
        {error && <p className="mt-3 text-destructive text-sm animate-fade-in">{error}</p>}
      </div>
    </section>
  );
};

export default Newsletter;
