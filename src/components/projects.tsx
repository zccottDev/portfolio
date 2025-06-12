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
      title:
        "Gemini-Powered AI Assistant with Image Understanding & Generation",
      description: `This is a multi-functional AI assistant web app built using Streamlit, designed to interact with both Google's Gemini API and OpenAI's API. The app supports, Text-based Q&A using Gemini models.Image understanding, where users upload an image and ask questions about its content.Image generation, where users input a prompt and the app returns an AI-generated image. The user can select the desired mode from a sidebar, enter a prompt or upload an image, and receive intelligent responses or visuals powered by large language mo dels and diffusion models.`,
      image: "assets/gemini.png",
      tags: [" Python", "Streamlit", "Gemini", "OpenAI API", "Gen AI"],
      demoUrl: `${devProfile.socialLinks[0].href}/Gemini`,
      codeUrl: `${devProfile.socialLinks[0].href}/Gemini`,
    },
    {
      id: 2,
      title: "Gemini-Powered Webpage Summarizer",
      description:
        "Built a simple AI tool using Streamlit, BeautifulSoup, and Google’s Gemini API (Gemma 3 12B) that allows users to enter any URL, scrape the content from the webpage, and instantly receive a summarized version of the text. Great for quick insights from lengthy articles, blogs, or research papers.",
      image: "assets/webpageSummarizer.png",
      tags: [
        "Python",
        "Artificial Intelligence (AI)",
        "Web Scraping",
        "Gemini",
        "Streamlit",
      ],
      demoUrl: `${devProfile.socialLinks[0].href}/WebPageAiSummarizer`,
      codeUrl: `${devProfile.socialLinks[0].href}/WebPageAiSummarizer`,
    },
    {
      id: 3,
      title: "Streamify",
      description:
        "A social app for making friends, learning languages, and communicating via chat, video calls, and screen sharing, built with Stream Chat.",
      image: "assets/streamify.png",
      tags: ["React", "Express", "Tailwind CSS", "Stream Chat", "MongoDB"],
      demoUrl: `${devProfile.socialLinks[0].href}/streamify`,
      codeUrl: `${devProfile.socialLinks[0].href}/streamify`,
    },
    {
      id: 4,
      title: "PasskeyLogin",
      description:
        "A secure Angular application featuring fingerprint-based authentication and a Material-UI interface.",
      image: "assets/passkey.png",
      tags: ["Angular", "Express", "MongoDB", "Material-UI"],
      demoUrl: "https://passkey-login-flame.vercel.app/login",
      codeUrl: `${devProfile.socialLinks[0].href}/passkeyLogin`,
    },
    {
      id: 5,
      title: "Temporal PDF Processor with Gemini Summarization",
      description:
        "I designed a Temporal workflow that continuously processes PDF files. I used PyPDF2 to extract text from the PDFs within Temporal activities and connected the Google Gemini API to summarize large amounts of text efficiently. The system takes advantage of Temporal’s workflow and activity architecture to manage tasks reliably and at scale.I worked extensively with asynchronous processing and built a solution that is both fault-tolerant and capable of handling real-time PDF extraction and summarization. This project gave me valuable hands-on experience with building distributed applications using Temporal, while ensuring clean separation between the text extraction and AI-driven summarization processes.",
      image: "assets/temporalpdfGemini.png",
      tags: ["Temporal.io", "PyPDF2", "Google Gemini API"],
      demoUrl: `${devProfile.socialLinks[0].href}/TemporalGeminiWorkflow`,
      codeUrl: `${devProfile.socialLinks[0].href}/TemporalGeminiWorkflow`,
    },
    {
      id: 6,
      title: "EmployeeManagement",
      description:
        "An Angular 19 application for managing employee data with a modern TypeScript-based architecture.",
      image: "assets/employee.png",
      tags: ["Angular 19", "TypeScript", "GerasimAPI"],
      demoUrl: `${devProfile.socialLinks[0].href}/EmployeeManagementAngular19`,
      codeUrl: `${devProfile.socialLinks[0].href}/EmployeeManagementAngular19`,
    },
    {
      id: 7,
      title: "Gemini PDF Resume Analyze",
      description:
        "I built the Gemini PDF Resume Analyzer, an intelligent Streamlit-based application that leverages Google’s Gemini 1.5 models to extract and summarize resume content in a structured, human-like narrative.",
      image: "assets/webpageSummarizer.png",
      tags: ["python", "streamlit","Google Gemini API", "PyPDF2", "Prompt Engineering"],
      demoUrl: `${devProfile.socialLinks[0].href}/ResumeParserAI`,
      codeUrl: `${devProfile.socialLinks[0].href}/ResumeParserAI`,
    },
    {
      id: 8,
      title: "ExpenseTracker",
      description:
        "A front-end React application for tracking daily expenses with basic CRUD operations.",
      image: "assets/expenseTracker.png",
      tags: ["TypeScript", "React", "Vite", "Lovable"],
      demoUrl: "https://zccottexpensetracker.vercel.app/",
      codeUrl: `${devProfile.socialLinks[0].href}/ExpenseTracker`,
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
    <section id="projects" className="py-16 md:py-24 bg-content2/50">
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
