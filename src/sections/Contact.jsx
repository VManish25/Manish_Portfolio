import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo } from '../data/content';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card/30 border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-extrabold text-foreground tracking-tight mb-4">
            Let's build something useful.
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Currently focused on enterprise integrations and backend systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
             <div className="flex flex-col items-center p-6 bg-background border border-border rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                   <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {personalInfo.email}
                </a>
             </div>
             
             <div className="flex flex-col items-center p-6 bg-background border border-border rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                   <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <a href={`tel:${personalInfo.phone.replace(/\\s/g, '')}`} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {personalInfo.phone}
                </a>
             </div>

             <div className="flex flex-col items-center p-6 bg-background border border-border rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                   <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Location</h3>
                <span className="text-muted-foreground text-sm">
                  {personalInfo.location}
                </span>
             </div>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-md border border-border bg-card text-foreground font-medium hover:bg-muted transition-colors"
            >
              <GithubIcon className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              <LinkedinIcon className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
