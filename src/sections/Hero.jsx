import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo } from '../data/content';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl opacity-50 mix-blend-screen pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >

            
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-4 leading-tight flex flex-col sm:flex-row sm:gap-4">
              <span>{personalInfo.name.split(' ')[0]}</span>
              <span className="text-foreground">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
            </h1>
            
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400 py-4 inline-block leading-normal">
                {personalInfo.title}
              </span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 text-sm md:text-base font-medium text-foreground">
              <span>Frontend</span>
              <span className="text-muted-foreground">+</span>
              <span>Backend</span>
              <span className="text-muted-foreground">+</span>
              <span>APIs</span>
              <span className="text-muted-foreground">+</span>
              <span>Enterprise Integrations</span>
              <span className="text-muted-foreground">+</span>
              <span>Cloud</span>
            </div>
            
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
              {personalInfo.heroDescription}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a
                href="#experience"
                className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                View Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-md border border-border bg-card text-foreground font-medium hover:bg-muted transition-colors"
              >
                View Projects
              </a>
            </div>
            
            <div className="flex items-center justify-center space-x-6">
               <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                 <GithubIcon className="h-5 w-5 mr-2" /> GitHub
               </a>
               <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center">
                 <LinkedinIcon className="h-5 w-5 mr-2" /> LinkedIn
               </a>
               {personalInfo.resumeDriveLink && (
                 <a href={personalInfo.resumeDriveLink} target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 transition-colors flex items-center font-medium">
                   <Download className="h-5 w-5 mr-2" /> Resume
                 </a>
               )}
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="h-6 w-6 text-muted-foreground hover:text-foreground transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
