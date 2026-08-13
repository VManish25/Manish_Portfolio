import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../data/content';

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-12">
             <Briefcase className="w-8 h-8 text-primary" />
             <h2 className="text-3xl font-bold text-foreground tracking-tight">Professional Experience</h2>
          </div>
          
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                 {/* Timeline line */}
                 {index !== experience.length - 1 && (
                   <div className="absolute top-10 left-[19px] w-px h-[calc(100%+24px)] bg-border" />
                 )}
                 
                 <div className="flex gap-6">
                    <div className="flex-shrink-0 mt-1">
                       <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                         <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                       </div>
                    </div>
                    
                    <div className="flex-1 bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary/30 transition-colors shadow-sm">
                       <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                          <div>
                             <h3 className="text-xl font-bold text-foreground mb-1">{job.role}</h3>
                             <p className="text-lg font-medium text-primary">{job.company}</p>
                          </div>
                          
                          <div className="flex flex-col gap-2 text-sm text-muted-foreground mt-1 md:items-end">
                             <div className="flex items-center gap-1.5">
                                <Calendar className="w-4 h-4" />
                                <span>{job.period}</span>
                             </div>
                             <div className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" />
                                <span>{job.location}</span>
                             </div>
                          </div>
                       </div>
                       
                       <ul className="space-y-3">
                         {job.highlights.map((highlight, i) => (
                           <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
                              <span className="text-primary mt-1.5 flex-shrink-0 text-xs">▹</span>
                              <span className="text-sm md:text-base">{highlight}</span>
                           </li>
                         ))}
                       </ul>
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
