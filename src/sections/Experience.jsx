import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, Code, Webhook, Database, Cloud, Server, Wrench, Users } from 'lucide-react';
import { experience } from '../data/content';

// Group the experience highlights into logical categories for better scannability
const experienceGroups = [
  {
    label: 'Enterprise Integrations',
    icon: Webhook,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    highlights: [
      'Worked on Freshworks integration projects involving Freshdesk, Freshservice, Freshsales, Freshchat, and Freshcaller.',
      'Developed custom plugins for the Moveworks AI platform.',
      'Developed plugins for different enterprise systems based on specific business use cases.',
      'Integrated external enterprise systems using REST and SOAP APIs.',
    ]
  },
  {
    label: 'Backend Development',
    icon: Server,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    highlights: [
      'Developed backend services using JavaScript, TypeScript, Node.js, and Express.js.',
      'Used Postman for API-level CRUD operations, testing, validation, and troubleshooting.',
    ]
  },
  {
    label: 'Databases & Data',
    icon: Database,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10',
    highlights: [
      'Worked with MongoDB and MySQL databases.',
      'Supported enterprise data migration activities.',
    ]
  },
  {
    label: 'Cloud & DevOps',
    icon: Cloud,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    highlights: [
      'Used Azure App Services for application deployment.',
      'Used Azure DevOps for development and deployment collaboration.',
      'Used Git and GitHub for source control.',
    ]
  },
  {
    label: 'Delivery & Collaboration',
    icon: Users,
    color: 'text-rose-400',
    bg: 'bg-rose-500/10',
    highlights: [
      'Delivered multiple enterprise software projects within aggressive timelines while maintaining quality standards.',
      'Worked across multiple enterprise projects and collaborated with teams to understand requirements and deliver technical solutions.',
      'Supported production applications, debugging, issue resolution, and performance optimization.',
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-7 h-7 text-primary flex-shrink-0" />
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Professional Experience</h2>
          </div>

          {experience.map((job) => (
            <div key={job.company} className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              {/* Job header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8 pb-6 border-b border-border">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">{job.role}</h3>
                  <p className="text-lg font-semibold text-primary">{job.company}</p>
                </div>
                <div className="flex flex-col gap-1.5 text-sm text-muted-foreground sm:items-end flex-shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    <span>{job.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>

              {/* Top 4 groups in 2-column grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {experienceGroups.slice(0, 4).map((group) => {
                  const Icon = group.icon;
                  return (
                    <div key={group.label}>
                      <div className="flex items-center gap-2 mb-2.5">
                        <div className={`p-1.5 rounded-md ${group.bg}`}>
                          <Icon className={`w-4 h-4 ${group.color}`} />
                        </div>
                        <h4 className="text-sm font-semibold text-foreground tracking-wide">{group.label}</h4>
                      </div>
                      <ul className="space-y-1.5">
                        {group.highlights.map((h, i) => (
                          <li key={i} className="flex gap-2.5 text-sm text-muted-foreground" style={{ lineHeight: '1.6' }}>
                            <span className="text-primary flex-shrink-0 mt-[3px] text-[10px]">▹</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* Delivery & Collaboration — full-width bottom row */}
              {(() => {
                const group = experienceGroups[4];
                const Icon = group.icon;
                return (
                  <div className="mt-6 pt-5 border-t border-border/60">
                    <div className="flex items-center gap-2 mb-2.5">
                      <div className={`p-1.5 rounded-md ${group.bg}`}>
                        <Icon className={`w-4 h-4 ${group.color}`} />
                      </div>
                      <h4 className="text-sm font-semibold text-foreground tracking-wide">{group.label}</h4>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-1.5">
                      {group.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-muted-foreground" style={{ lineHeight: '1.6' }}>
                          <span className="text-primary flex-shrink-0 mt-[3px] text-[10px]">▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })()}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
