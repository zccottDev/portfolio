import React from 'react';
import { Card, CardBody, CardFooter, Button, Chip, Link } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A responsive admin dashboard for e-commerce platforms with analytics, product management, and order tracking.",
      image: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=1",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
      image: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=2",
      tags: ["React", "Redux", "Firebase", "Styled Components"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 3,
      title: "Fitness Tracker",
      description: "A mobile-responsive fitness tracking application with workout plans, progress charts, and nutrition logging.",
      image: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=3",
      tags: ["React Native", "TypeScript", "GraphQL", "MongoDB"],
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      id: 4,
      title: "Weather Forecast App",
      description: "A weather application with 7-day forecasts, location-based weather data, and interactive maps.",
      image: "https://img.heroui.chat/image/dashboard?w=800&h=600&u=4",
      tags: ["JavaScript", "React", "Weather API", "Leaflet"],
      demoUrl: "#",
      codeUrl: "#"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-content2/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Projects</span></h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            Explore some of my recent work and personal projects.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            as={Link}
            href="https://github.com"
            isExternal
            color="primary"
            variant="flat"
            size="lg"
            startContent={<Icon icon="logos:github-icon" />}
          >
            See More Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="project-card h-full">
      <CardBody className="p-0 overflow-hidden">
        <div className="relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-48 object-cover"
          />
          <div className="project-overlay absolute inset-0 bg-black/60 opacity-0 transition-opacity flex items-center justify-center">
            <div className="flex gap-2">
              <Button 
                as={Link}
                href={project.demoUrl}
                isExternal
                color="primary"
                size="sm"
                startContent={<Icon icon="lucide:external-link" />}
              >
                Live Demo
              </Button>
              <Button 
                as={Link}
                href={project.codeUrl}
                isExternal
                variant="flat"
                color="primary"
                size="sm"
                startContent={<Icon icon="lucide:code" />}
              >
                View Code
              </Button>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-foreground-500 mb-4">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <Chip key={index} color="primary" variant="flat" size="sm">{tag}</Chip>
            ))}
          </div>
        </div>
      </CardBody>
      
      <CardFooter className="flex justify-between">
        <Button 
          as={Link}
          href={project.demoUrl}
          isExternal
          color="primary"
          variant="light"
          size="sm"
          endContent={<Icon icon="lucide:external-link" />}
        >
          Live Demo
        </Button>
        
        <Button 
          as={Link}
          href={project.codeUrl}
          isExternal
          variant="light"
          color="primary"
          size="sm"
          endContent={<Icon icon="lucide:github" />}
        >
          Source Code
        </Button>
      </CardFooter>
    </Card>
  );
};