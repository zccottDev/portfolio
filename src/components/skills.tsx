import React from 'react';
import { Card, CardBody, Tooltip } from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  color: string;
  level: number;
}

export const Skills: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: "HTML", icon: "logos:html-5", color: "#E34F26", level: 95 },
    { name: "CSS", icon: "logos:css-3", color: "#1572B6", level: 90 },
    { name: "JavaScript", icon: "logos:javascript", color: "#F7DF1E", level: 80 },
    { name: "TypeScript", icon: "logos:typescript-icon", color: "#3178C6", level: 80 },
    { name: "React", icon: "logos:react", color: "#61DAFB", level: 80 },
    { name: "Express", icon: "skill-icons:expressjs-dark", color: "#000000", level: 75 },
    { name: "Node.js", icon: "logos:nodejs-icon", color: "#06B6D4", level: 75 },
    { name: "Angular", icon: "logos:angular-icon", color: "#CC6699", level: 85 },
  ];

  const toolsSkills: Skill[] = [
    { name: "Git", icon: "logos:git-icon", color: "#F05032", level: 88 },
    { name: "Postman", icon: "simple-icons:postman", color: "#8DD6F9", level: 80 },
    { name: "Vite", icon: "logos:vitejs", color: "#646CFF", level: 85 },
    { name: "Figma", icon: "logos:figma", color: "#F24E1E", level: 82 },
    { name: "VS Code", icon: "logos:visual-studio-code", color: "#007ACC", level: 90 },
    { name: "ESLint", icon: "logos:eslint", color: "#C21325", level: 78 },
    { name: "Docker", icon: "logos:docker-icon", color: "#2496ED", level: 75 },
    { name: "GitHub", icon: "logos:github-icon", color: "#181717", level: 88 },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Skills</span></h2>
          <p className="text-foreground-500 max-w-2xl mx-auto">
            A showcase of my technical skills and the tools I work with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.h3 
              className="text-xl font-bold mb-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Icon icon="lucide:code" className="text-primary" />
              Frontend Development
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {frontendSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <div>
            <motion.h3 
              className="text-xl font-bold mb-6 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Icon icon="lucide:wrench" className="text-primary" />
              Tools & Technologies
            </motion.h3>
            
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {toolsSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <SkillCard skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <Tooltip content={`${skill.name}: ${skill.level}%`}>
      <Card className="hover:scale-105 transition-transform">
        <CardBody className="flex flex-col items-center justify-center p-4 gap-2">
          <Icon icon={skill.icon} className="text-4xl" />
          <p className="text-sm font-medium">{skill.name}</p>
          <div className="w-full bg-default-200 rounded-full h-1.5">
            <div 
              className="h-1.5 rounded-full bg-primary" 
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </CardBody>
      </Card>
    </Tooltip>
  );
};