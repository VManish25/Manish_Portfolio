import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Server, Settings, Terminal, Cloud, Webhook } from 'lucide-react';
import { skills } from '../data/content';

const SkillCategory = ({ title, icon: Icon, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-card border border-border rounded-xl p-6"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-primary/10 rounded-md">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {items.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1.5 bg-background border border-border/50 text-muted-foreground text-sm font-medium rounded-md hover:border-primary/50 hover:text-foreground transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl tracking-tight">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory title="Frontend" icon={Layout} items={skills.frontend} delay={0.1} />
          <SkillCategory title="Backend" icon={Server} items={skills.backend} delay={0.2} />
          <SkillCategory title="APIs & Integration" icon={Webhook} items={skills.apisIntegration} delay={0.3} />
          <SkillCategory title="Databases" icon={Database} items={skills.databases} delay={0.4} />
          <SkillCategory title="Enterprise Platforms" icon={Settings} items={skills.enterprise} delay={0.5} />
          <SkillCategory title="Cloud & DevOps" icon={Cloud} items={skills.cloudDevOps} delay={0.6} />
          <SkillCategory title="Tools" icon={Terminal} items={skills.tools} delay={0.7} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
