import React from 'react';
import { Button, Link } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <motion.span 
              className="text-primary-500 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello, I'm
            </motion.span>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              John <span className="gradient-text">Developer</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl sm:text-3xl text-foreground-600 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Frontend Developer
            </motion.h2>
            
            <motion.p 
              className="text-foreground-500 max-w-md mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              I build exceptional and accessible digital experiences for the web.
              Passionate about creating beautiful, functional, and user-friendly interfaces.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button 
                as={Link}
                href="#projects"
                color="primary" 
                size="lg"
                endContent={<Icon icon="lucide:arrow-right" />}
                className="font-medium"
              >
                View My Work
              </Button>
              
              <Button
                as={Link}
                href="#contact"
                variant="bordered"
                color="primary"
                size="lg"
                className="font-medium"
              >
                Contact Me
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex gap-4 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Link href="https://github.com" isExternal aria-label="GitHub">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Icon icon="logos:github-icon" className="text-2xl" />
                </motion.div>
              </Link>
              <Link href="https://linkedin.com" isExternal aria-label="LinkedIn">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Icon icon="logos:linkedin-icon" className="text-2xl" />
                </motion.div>
              </Link>
              <Link href="https://twitter.com" isExternal aria-label="Twitter">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Icon icon="logos:twitter" className="text-2xl" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-primary">
              <img 
                src="https://img.heroui.chat/image/avatar?w=400&h=400&u=1" 
                alt="Developer Portrait" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};