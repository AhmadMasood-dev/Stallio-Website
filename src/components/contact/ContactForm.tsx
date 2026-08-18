"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

import { BezelShell } from "@/components/ui/bezel-shell";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AuthField } from "@/components/auth/AuthField";
import { motionEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FormErrors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export function ContactForm() {
  const reduce = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  function validate(data = formData) {
    const nextErrors: FormErrors = {};
    if (!data.name.trim()) nextErrors.name = "Name is required.";
    if (!data.email.trim()) nextErrors.email = "Email is required.";
    else if (!isValidEmail(data.email))
      nextErrors.email = "Enter a valid email address.";
    if (!data.subject.trim()) nextErrors.subject = "Subject is required.";
    if (!data.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      setSubmitMessage({
        type: "error",
        text: "Please fill out all fields correctly.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitMessage({
        type: "success",
        text: "Thank you for your message! We'll get back to you shortly.",
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTouched({});
    } catch {
      setSubmitMessage({
        type: "error",
        text: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.div
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: reduce ? 0 : 0.1 },
        },
      }}
    >
      <BezelShell className="rounded-2xl">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-[calc(1rem-0.375rem)] p-6 sm:p-8"
          noValidate
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: motionEase },
              },
            }}
          >
            <h3 className="text-lg font-semibold text-foreground">
              Send a message
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              All fields are required so we can respond with context.
            </p>
          </motion.div>

          {submitMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "rounded-lg px-4 py-3 text-sm font-medium",
                submitMessage.type === "success"
                  ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                  : "bg-destructive/10 text-destructive",
              )}
            >
              {submitMessage.text}
            </motion.div>
          )}

          <motion.div
            className="space-y-4"
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: motionEase },
              },
            }}
          >
            <AuthField
              id="contact-name"
              label="Name"
              required
              error={touched.name ? errors.name : undefined}
            >
              <Input
                id="contact-name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                  if (touched.name) {
                    setErrors(validate({ ...formData, name: e.target.value }));
                  }
                }}
                onBlur={() => setTouched({ ...touched, name: true })}
              />
            </AuthField>

            <AuthField
              id="contact-email"
              label="Email"
              required
              error={touched.email ? errors.email : undefined}
            >
              <Input
                id="contact-email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (touched.email) {
                    setErrors(validate({ ...formData, email: e.target.value }));
                  }
                }}
                onBlur={() => setTouched({ ...touched, email: true })}
              />
            </AuthField>

            <AuthField
              id="contact-subject"
              label="Subject"
              required
              error={touched.subject ? errors.subject : undefined}
            >
              <Input
                id="contact-subject"
                type="text"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={(e) => {
                  setFormData({ ...formData, subject: e.target.value });
                  if (touched.subject) {
                    setErrors(validate({ ...formData, subject: e.target.value }));
                  }
                }}
                onBlur={() => setTouched({ ...touched, subject: true })}
              />
            </AuthField>

            <AuthField
              id="contact-message"
              label="Message"
              required
              error={touched.message ? errors.message : undefined}
            >
              <textarea
                id="contact-message"
                placeholder="Your message..."
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (touched.message) {
                    setErrors(
                      validate({ ...formData, message: e.target.value }),
                    );
                  }
                }}
                onBlur={() => setTouched({ ...touched, message: true })}
                className={cn(
                  "h-32 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-2 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 resize-none",
                  touched.message && errors.message ? "aria-invalid:true" : "",
                )}
              />
            </AuthField>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 18 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.65, ease: motionEase },
              },
            }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
        </form>
      </BezelShell>
    </motion.div>
  );
}
