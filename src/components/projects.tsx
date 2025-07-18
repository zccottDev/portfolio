import React from "react";
import { Card, CardBody, CardFooter, Button, Chip, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { devProfile } from "../data/devProfile";

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
      title: "Gemini-Powered AI Assistant with Image Understanding & Generation",
      description: `A multi-functional AI assistant web app built with Streamlit that integrates Google's Gemini and OpenAI's APIs. The app features three modes: text-based Q&A, image understanding for analyzing uploaded images, and AI image generation from text prompts. This project demonstrates how different AI capabilities can be combined into a seamless, interactive user experience.`,
      image: "assets/gemini.png",
      tags: ["Python", "Streamlit", "Gemini API", "OpenAI API", "Generative AI"],
      demoUrl: `${devProfile.socialLinks[0].href}/Gemini`,
      codeUrl: `${devProfile.socialLinks[0].href}/Gemini`,
    },
    {
      id: 2,
      title: "AI-Powered Symptom Checker & Clinic Locator",
      description: "Built EasyDiagno, a smart mobile app using Flutter that provides users with potential health insights based on their symptoms. It features an ML-powered chatbot (Python, Scikit-learn) for diagnosis suggestions and an integrated locator for nearby clinics. Includes a full admin panel for medical institutions and uses Firebase for backend services.",
      image: "assets/easydiagno.png",
      tags: ["Flutter", "Python", "Firebase", "Machine Learning", "Scikit-learn", "Mobile App"],
      demoUrl: `${devProfile.socialLinks[0].href}/EasyDiagno`,
      codeUrl: `${devProfile.socialLinks[0].href}/EasyDiagno`, 
    },
    {
      id: 3,
      title: "Gemini-Powered Webpage Summarizer",
      description: "A lightweight AI summarization tool built with Streamlit and BeautifulSoup. Users can input any URL, and the application scrapes the webpage content, using the Gemini API to provide an instant, AI-generated summary. Ideal for quickly understanding long articles, blogs, or research papers.",
      image: "assets/webpageSummarizer.png",
      tags: ["Python", "Streamlit", "BeautifulSoup", "Gemini API", "Web Scraping"],
      demoUrl: `${devProfile.socialLinks[0].href}/WebPageAiSummarizer`,
      codeUrl: `${devProfile.socialLinks[0].href}/WebPageAiSummarizer`,
    },
    {
      id: 4,
      title: "Gemini PDF Resume Analyzer",
      description: "An intelligent web application built with Streamlit and Google’s Gemini 1.5 Pro model. The tool allows users to upload a PDF resume, which is then parsed and analyzed to generate a structured, human-like narrative summary. Especially useful for HR and recruitment workflows.",
      image: "assets/GeminiPDFResumeAnalyzer.png",
      tags: ["Python", "Streamlit", "Google Gemini API", "PyPDF2", "Prompt Engineering"],
      demoUrl: `${devProfile.socialLinks[0].href}/ResumeParserAI`,
      codeUrl: `${devProfile.socialLinks[0].href}/ResumeParserAI`,
    },
    {
      id: 5,
      title: "Employee Management System",
      description: "A responsive Employee Management System built with Angular 19 and Bootstrap 5. The project focuses on modern web development best practices, including a scalable UI, clean code, and efficient CRUD operations via external APIs. Served as a practical foundation for mastering advanced Angular techniques.",
      image: "assets/employee.png",
      tags: ["Angular", "TypeScript", "Bootstrap", "RESTful APIs"],
      demoUrl: `${devProfile.socialLinks[0].href}/EmployeeManagementAngular19`,
      codeUrl: `${devProfile.socialLinks[0].href}/EmployeeManagementAngular19`,
    },
    {
      id: 6,
      title: "Streamify",
      description: "A social app for making friends, learning languages, and communicating via chat, video calls, and screen sharing, built with Stream Chat.",
      image: "assets/streamify.png",
      tags: ["React", "Express", "Tailwind CSS", "Stream Chat", "MongoDB"],
      demoUrl: `${devProfile.socialLinks[0].href}/streamify`,
      codeUrl: `${devProfile.socialLinks[0].href}/streamify`,
    },
];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
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
            href={`${devProfile.socialLinks[0].href}?tab=repositories`}
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
            loading="lazy"
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
              <Chip key={index} color="primary" variant="flat" size="sm">
                {tag}
              </Chip>
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
