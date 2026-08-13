import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Settings, Cloud } from 'lucide-react';
import { personalInfo } from '../data/content';

const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl tracking-tight mb-6">
              Professional Overview
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {personalInfo.about}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="bg-background border border-border p-6 rounded-xl shadow-sm hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-md">
                  <Layout className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Frontend Development</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                React.js &bull; React Router &bull; HTML5 &bull; CSS3 &bull; Bootstrap &bull; Tailwind CSS
              </p>
            </div>

            <div className="bg-background border border-border p-6 rounded-xl shadow-sm hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-500/10 rounded-md">
                  <Server className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-foreground">Backend & APIs</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Node.js &bull; Express.js &bull; JavaScript &bull; TypeScript &bull; REST APIs &bull; SOAP APIs
              </p>
            </div>

            <div className="bg-background border border-border p-6 rounded-xl shadow-sm hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/10 rounded-md">
                  <Settings className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-foreground">Enterprise Integrations</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Freshworks &bull; Moveworks AI &bull; Workflow Automation &bull; Data Migration
              </p>
            </div>

            <div className="bg-background border border-border p-6 rounded-xl shadow-sm hover:border-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-md">
                  <Cloud className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="font-semibold text-foreground">Cloud & DevOps</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Azure App Services &bull; Azure DevOps &bull; Git &bull; GitHub
              </p>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
