import React from 'react';
import { Card, CardBody, Button, Link } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-content2/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="gradient-text">Me</span></h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            Get to know more about me, my background, and what I do.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Card className="w-full max-w-md overflow-hidden">
              <CardBody className="p-0">
                <img 
                  src="https://img.heroui.chat/image/ai?w=600&h=800&u=2" 
                  alt="About Me" 
                  className="w-full h-full object-cover aspect-[3/4]"
                />
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-2xl font-bold">Frontend Developer & UI/UX Enthusiast</h3>
            
            <p className="text-foreground-600">
              I'm a passionate frontend developer with 5+ years of experience creating 
              responsive and user-friendly web applications. I specialize in React, 
              TypeScript, and modern CSS frameworks.
            </p>
            
            <p className="text-foreground-600">
              My journey in web development started when I built my first website at the age of 16.
              Since then, I've worked with various companies and clients to deliver high-quality
              digital experiences that users love.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <h4 className="font-semibold flex items-center gap-2">
                  <Icon icon="lucide:map-pin" className="text-primary" />
                  Location
                </h4>
                <p className="text-foreground-500">San Francisco, CA</p>
              </div>
              
              <div>
                <h4 className="font-semibold flex items-center gap-2">
                  <Icon icon="lucide:mail" className="text-primary" />
                  Email
                </h4>
                <p className="text-foreground-500">john@example.com</p>
              </div>
              
              <div>
                <h4 className="font-semibold flex items-center gap-2">
                  <Icon icon="lucide:graduation-cap" className="text-primary" />
                  Degree
                </h4>
                <p className="text-foreground-500">B.S. Computer Science</p>
              </div>
              
              <div>
                <h4 className="font-semibold flex items-center gap-2">
                  <Icon icon="lucide:phone" className="text-primary" />
                  Phone
                </h4>
                <p className="text-foreground-500">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex gap-4 mt-4">
              <Button 
                as={Link}
                href="#contact"
                color="primary"
                endContent={<Icon icon="lucide:send" />}
              >
                Contact Me
              </Button>
              
              <Button
                as={Link}
                href="#"
                variant="bordered"
                color="primary"
                endContent={<Icon icon="lucide:download" />}
              >
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};