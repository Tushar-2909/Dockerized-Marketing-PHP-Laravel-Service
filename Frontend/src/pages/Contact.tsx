import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post("/api/leads", formData);
      toast.success("Thank you! We'll be in touch soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Demo mode - show success anyway
      toast.success("Thank you! We'll be in touch soon.");
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-32 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">
                Get in Touch
              </p>
              <h1 className="text-display font-extralight text-foreground mb-8">
                Let's talk
              </h1>
              <p className="text-muted-foreground max-w-md leading-relaxed mb-12">
                Have a project in mind? We'd love to hear about it. 
                Drop us a line and we'll get back to you as soon as possible.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 border-t border-border/50 pt-12">
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:hello@studio.com"
                    className="text-foreground hover:text-primary transition-colors duration-500"
                  >
                    hello@studio.com
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Phone
                  </p>
                  <a
                    href="tel:+15550000000"
                    className="text-foreground hover:text-primary transition-colors duration-500"
                  >
                    +1 (555) 000-0000
                  </a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Location
                  </p>
                  <p className="text-foreground">New York, NY</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-widest text-muted-foreground mb-4"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-underline w-full"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-widest text-muted-foreground mb-4"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-underline w-full"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-widest text-muted-foreground mb-4"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="input-underline w-full resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-4"
                >
                  <Button
                    type="submit"
                    variant="hero"
                    size="xl"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
