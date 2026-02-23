import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { api } from "@/lib/api";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined })); // clear error
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      await api.post("/api/leads", formData);

      toast.success("Thank you! We'll be in touch soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      // Laravel validation errors
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors);
        toast.error("Please fix the highlighted errors.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-32 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* LEFT COLUMN */}
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
            </motion.div>

            {/* RIGHT COLUMN – FORM */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">

                {/* NAME */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Name
                  </label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input-underline w-full ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.name[0]}
                    </p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-underline w-full ${
                      errors.email ? "border-red-500" : ""
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.email[0]}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`input-underline w-full resize-none ${
                      errors.message ? "border-red-500" : ""
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.message[0]}
                    </p>
                  )}
                </div>

                {/* SUBMIT */}
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
