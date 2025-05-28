import React from 'react';
import { Card, CardBody, Input, Textarea, Button, Link } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      alert('Thank you for your message! I will get back to you soon.');
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "lucide:mail",
      title: "Email",
      value: "john@example.com",
      link: "mailto:john@example.com"
    },
    {
      icon: "lucide:phone",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "lucide:map-pin",
      title: "Location",
      value: "San Francisco, CA",
      link: "https://maps.google.com/?q=San+Francisco,+CA"
    }
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
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
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="p-3 bg-primary-500/10 rounded-medium">
                        <Icon icon={item.icon} className="text-primary text-xl" />
                      </div>
                      <div>
                        <h4 className="font-medium">{item.title}</h4>
                        <Link href={item.link} isExternal className="text-foreground-500">
                          {item.value}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <h4 className="font-medium mb-3">Follow Me</h4>
                  <div className="flex gap-4">
                    <Link href="https://github.com" isExternal aria-label="GitHub">
                      <motion.div 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-default-100 rounded-full"
                      >
                        <Icon icon="logos:github-icon" className="text-xl" />
                      </motion.div>
                    </Link>
                    <Link href="https://linkedin.com" isExternal aria-label="LinkedIn">
                      <motion.div 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-default-100 rounded-full"
                      >
                        <Icon icon="logos:linkedin-icon" className="text-xl" />
                      </motion.div>
                    </Link>
                    <Link href="https://twitter.com" isExternal aria-label="Twitter">
                      <motion.div 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-default-100 rounded-full"
                      >
                        <Icon icon="logos:twitter" className="text-xl" />
                      </motion.div>
                    </Link>
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
                      startContent={!isSubmitting && <Icon icon="lucide:send" />}
                      className="font-medium"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
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