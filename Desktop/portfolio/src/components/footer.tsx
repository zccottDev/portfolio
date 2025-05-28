import React from 'react';
import { Link, Divider } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];
  
  const socialLinks = [
    { name: "GitHub", icon: "logos:github-icon", href: "https://github.com" },
    { name: "LinkedIn", icon: "logos:linkedin-icon", href: "https://linkedin.com" },
    { name: "Twitter", icon: "logos:twitter", href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-content3/50 py-12">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-2">
              <Icon icon="lucide:code" className="text-primary text-2xl" />
              <p className="font-bold text-inherit text-lg">Dev<span className="text-primary">Portfolio</span></p>
            </div>
            
            <p className="text-foreground-500">
              Building beautiful, responsive, and user-friendly web experiences.
            </p>
            
            <div className="flex gap-4 mt-2">
              {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} isExternal aria-label={link.name}>
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Icon icon={link.icon} className="text-xl" />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-bold text-lg">Quick Links</h3>
            <div className="flex flex-col gap-2">
              {footerLinks.map((link, index) => (
                <Link key={index} href={link.href} className="text-foreground-500 hover:text-primary">
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-foreground-500">
                <Icon icon="lucide:mail" className="text-primary" />
                <span>john@example.com</span>
              </div>
              
              <div className="flex items-center gap-2 text-foreground-500">
                <Icon icon="lucide:phone" className="text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center gap-2 text-foreground-500">
                <Icon icon="lucide:map-pin" className="text-primary" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <Divider className="my-6" />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-foreground-500 text-sm"
        >
          <p>© {currentYear} John Developer. All rights reserved.</p>
          <p className="mt-2">
            Built with React, TypeScript, and HeroUI
          </p>
        </motion.div>
      </div>
    </footer>
  );
};