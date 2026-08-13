import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download, Server, Webhook, Workflow } from 'lucide-react';
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h2 className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              {personalInfo.title}
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground tracking-tight mb-6 leading-tight">
              {personalInfo.name.split(' ')[0]} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                {personalInfo.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-4 max-w-lg leading-relaxed">
              Enterprise Integrations &bull; Backend Development &bull; APIs &bull; Automation
            </p>
            
            <p className="text-base text-muted-foreground mb-10 max-w-lg leading-relaxed">
              {personalInfo.heroDescription}
            </p>

            <div className="flex flex-wrap gap-4">
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
            
            <div className="mt-10 flex items-center space-x-6">
               <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4">GitHub</a>
               <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4">LinkedIn</a>
               <a href={personalInfo.resumeDriveLink} target="_blank" rel="noreferrer" className="text-sm font-medium text-primary hover:text-primary/80 flex items-center">
                 <Download className="h-4 w-4 mr-1" /> Resume
               </a>
            </div>
          </motion.div>

          {/* Abstract Integration Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-card to-background border border-border rounded-2xl shadow-2xl overflow-hidden flex flex-col justify-between p-8">
                
                {/* Visual Elements representing data flow */}
                <div className="flex justify-between items-center mb-12">
                   <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                     <Server className="h-8 w-8 text-primary" />
                   </div>
                   <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-indigo-500/50 mx-4 relative">
                     <motion.div 
                       className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                       animate={{ left: ['0%', '100%'] }}
                       transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                     />
                   </div>
                   <div className="w-16 h-16 rounded-xl bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                     <Webhook className="h-8 w-8 text-indigo-400" />
                   </div>
                </div>

                <div className="space-y-4">
                  <div className="h-3 w-3/4 bg-muted rounded-full" />
                  <div className="h-3 w-full bg-muted rounded-full" />
                  <div className="h-3 w-5/6 bg-muted rounded-full" />
                </div>

                <div className="mt-12 flex justify-center">
                   <div className="w-full h-16 rounded-xl bg-muted/30 border border-border flex items-center justify-center px-4 space-x-3">
                     <Workflow className="h-5 w-5 text-muted-foreground" />
                     <span className="text-sm font-mono text-muted-foreground">Automated Workflow Execution</span>
                   </div>
                </div>

              </div>
              
              {/* Floating decorative elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-card border border-border p-4 rounded-lg shadow-xl"
              >
                <p className="text-xs font-bold text-foreground">API Status</p>
                <div className="flex items-center mt-2 space-x-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <p className="text-xs text-muted-foreground">All systems operational</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
