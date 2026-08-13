import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl tracking-tight mb-8">
            Professional Overview
          </h2>
          
          <div className="bg-background border border-border rounded-2xl p-8 md:p-10 shadow-sm relative overflow-hidden text-left">
             <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
             
             <p className="text-lg text-foreground leading-relaxed mb-6">
               {personalInfo.about}
             </p>

             <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-border/50">
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">Backend Development</span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">REST/SOAP Integrations</span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">Data Migration</span>
                <span className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">Production Support</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
