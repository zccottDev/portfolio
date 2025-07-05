import React from 'react';
import { Card, CardBody, Link, Chip, Button } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  website: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    company: "TechCorp",
    position: "Senior Frontend Developer",
    startDate: "Jan 2022",
    endDate: null,
    website: "https://techcorp.com",
    achievements: [
      "Led the development of a new customer dashboard, improving user engagement by 40%",
      "Implemented a component library that reduced development time by 30%",
      "Mentored junior developers, improving team productivity by 25%",
      "Optimized application performance, reducing load times by 50%",
      "Introduced automated testing, increasing code coverage to 85%"
    ]
  },
  {
    company: "WebSolutions Inc.",
    position: "Frontend Developer",
    startDate: "Mar 2019",
    endDate: "Dec 2021",
    website: "https://websolutions.com",
    achievements: [
      "Developed responsive web applications for clients across various industries",
      "Implemented state management using Redux, improving application stability",
      "Created reusable UI components, enhancing consistency across projects",
      "Collaborated with UX designers to implement pixel-perfect designs",
      "Integrated third-party APIs to extend application functionality"
    ]
  },
  {
    company: "StartupX",
    position: "Junior Web Developer",
    startDate: "Jun 2017",
    endDate: "Feb 2019",
    website: "https://startupx.com",
    achievements: [
      "Assisted in the development of the company's main product website",
      "Implemented responsive designs using HTML, CSS, and JavaScript",
      "Collaborated with the backend team to integrate RESTful APIs",
      "Participated in code reviews and improved code quality",
      "Learned and implemented modern frontend frameworks like React"
    ]
  }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            A journey through my professional growth and key achievements.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-500/20"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`mb-12 flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className="w-1/2 px-4">
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardBody className="p-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="flex flex-col mb-4"
                    >
                      <Link 
                        href={exp.website} 
                        isExternal 
                        className="text-xl font-bold hover:text-primary transition-colors"
                      >
                        {exp.company}
                      </Link>
                      <h4 className="text-lg text-foreground-600">{exp.position}</h4>
                      <div className="flex items-center gap-2 text-foreground-500 mt-2">
                        <Icon icon="lucide:calendar" />
                        <span>{exp.startDate} - {exp.endDate || 'Present'}</span>
                        {!exp.endDate && (
                          <Chip color="primary" variant="flat" size="sm">Current</Chip>
                        )}
                      </div>
                    </motion.div>
                    <motion.ul
                      className="space-y-2 text-foreground-600"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={{
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0 },
                          }}
                          className="flex items-start"
                        >
                          <Icon icon="lucide:check-circle" className="text-primary mt-1 mr-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </CardBody>
                </Card>
              </div>
              <div className="w-1/2 flex justify-center items-center relative">
                <motion.div
                  className="w-8 h-8 bg-primary rounded-full z-10 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Icon icon="lucide:briefcase" className="text-white text-sm" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            as={Link}
            href="#contact"
            color="primary"
            size="lg"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            Let's Work Together
          </Button>
        </motion.div>
      </div>
    </section>
  );
};