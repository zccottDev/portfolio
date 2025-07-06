import React from "react";
import { Card, CardBody, Link, Chip, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Position {
  title: string;
  startDate: string;
  endDate: string | null;
  achievements: string[];
}

interface Experience {
  company: string;
  website: string;
  positions: Position[];
}

const experiences: Experience[] = [
  {
    company: "AOT Technologies",
    website: "https://www.aot-technologies.com/",
    positions: [
      {
        title: "Junior Software Engineer",
        startDate: "Jun 2024",
        endDate: null,
        achievements: [
          "Developed responsive UI components using Angular and TypeScript, and implemented automation workflows with Puppeteer",
          "Built backend services with FastAPI and Python, integrating Generative AI APIs for intelligent features",
          "Collaborated with cross-functional teams in an Agile environment to deliver production-ready features",
          "Created documentation for workflows, automation scripts, and onboarding processes",
        ],
      },
    ],
  },
  {
    company: "Nexus Technologies",
    website: "https://www.linkedin.com/company/the-nexus-technologies/",
    positions: [
      {
        title: "Software Engineering Intern",
        startDate: "Sep 2023",
        endDate: "Feb 2024",
        achievements: [
          "Designed the layout for an AI-powered symptom checker app",
          "Curated training datasets for symptom classification",
          "Collaborated with team members to improve AI model precision",
          "Contributed to architecture planning and MVP documentation",
        ],
      },
    ],
  },
];

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            Explore my career path and key achievements over the years.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ originY: 0 }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 md:mb-24 relative"
            >
              <div
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 px-4 mb-6 md:mb-0">
                  <Card className="experience-card hover:shadow-lg transition-shadow duration-300">
                    <CardBody className="p-6">
                      <Link
                        href={exp.website}
                        isExternal
                        className="text-xl font-bold hover:text-primary transition-colors flex items-center gap-2 mb-2"
                      >
                        {exp.company}
                        <Icon icon="lucide:external-link" className="text-sm" />
                      </Link>
                      {exp.positions.map((position, posIndex) => (
                        <div key={posIndex} className="mb-4 last:mb-0">
                          <h4 className="text-lg font-semibold">
                            {position.title}
                          </h4>
                          <p className="text-sm text-foreground-500 flex items-center gap-2">
                            <Icon
                              icon="lucide:calendar"
                              className="text-primary"
                            />
                            {position.startDate} -{" "}
                            {position.endDate || "Present"}
                            {!position.endDate && (
                              <Chip color="success" variant="flat" size="sm">
                                Current
                              </Chip>
                            )}
                          </p>
                          <ul className="mt-2 space-y-1">
                            {position.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <Icon
                                  icon="lucide:check-circle"
                                  className="text-primary mt-1 mr-2 flex-shrink-0"
                                />
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </CardBody>
                  </Card>
                </div>
                <div className="w-8 h-8 bg-primary rounded-full z-10 flex items-center justify-center absolute left-0 md:left-1/2 transform md:-translate-x-1/2">
                  <Icon
                    icon="lucide:briefcase"
                    className="text-white text-sm"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
