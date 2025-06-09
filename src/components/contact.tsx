import React from "react";
import { Card, CardBody, Input, Textarea, Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { devProfile } from "../data/devProfile";
import { sendEmail } from '../utils/email';

export const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await sendEmail(templateParams);
      setFormData({ name: "", email: "", subject: "", message: "" });
      alert("Thank you for your message! I will get back to you soon.");
    } catch (error) {
      console.error("Email send failed:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = devProfile.about.info;
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-1"
          >
            <Card className="h-full">
              <CardBody className="flex flex-col gap-6 p-6">
                <h3 className="text-xl font-bold">Contact Information</h3>

                <div className="flex flex-col gap-6">
                  {contactInfo
                    .filter((item) => item.link)
                    .map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="p-3 bg-primary-500/10 rounded-medium">
                          <Icon
                            icon={item.icon}
                            className="text-primary text-xl"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.label}</h4>
                          <Link
                            href={item.link}
                            isExternal
                            className="text-foreground-500"
                          >
                            {item.value}
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>

                <div className="mt-auto">
                  <h4 className="font-medium mb-3">Follow Me</h4>
                  <div className="flex gap-4">
                    {devProfile.socialLinks.map((link, index) => (
                      <Link
                        href={link.href}
                        isExternal
                        aria-label={link.label}
                        key={index}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-default-100 rounded-full"
                        >
                          <Icon icon={link.icon} className="text-xl" />
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2"
          >
            <Card>
              <CardBody className="p-6">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="bordered"
                      isRequired
                    />

                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="bordered"
                      isRequired
                    />
                  </div>

                  <Input
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="bordered"
                    isRequired
                  />

                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="bordered"
                    minRows={5}
                    isRequired
                  />

                  <div className="mt-2">
                    <Button
                      type="submit"
                      color="primary"
                      isLoading={isSubmitting}
                      startContent={
                        !isSubmitting && <Icon icon="lucide:send" />
                      }
                      className="font-medium"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
