import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo } from '../data/content';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl opacity-60 pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/8 rounded-full blur-3xl opacity-60 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto pb-20">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center w-full"
          >
            {/* Name */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-foreground tracking-tight mb-4 leading-none">
              {personalInfo.name}
            </h1>

            {/* Professional Title — gradient with enough line-height to never clip */}
            <p
              className="font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl mb-6"
              style={{
                background: 'linear-gradient(90deg, #3b82f6, #818cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.4',
                paddingBottom: '0.15em',
              }}
            >
              {personalInfo.title}
            </p>

            {/* Capability line */}
            <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 mb-8 text-sm md:text-base font-medium">
              <span className="text-foreground font-semibold">Frontend</span>
              <span className="text-muted-foreground/40 select-none" aria-hidden="true">·</span>
              <span className="text-foreground font-semibold">Backend</span>
              <span className="text-muted-foreground/40 select-none" aria-hidden="true">·</span>
              <span className="text-foreground font-semibold">APIs</span>
              <span className="text-muted-foreground/40 select-none" aria-hidden="true">·</span>
              <span className="text-foreground font-semibold">Enterprise Integrations</span>
              <span className="text-muted-foreground/40 select-none" aria-hidden="true">·</span>
              <span className="text-foreground font-semibold">Cloud</span>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              {personalInfo.heroDescription}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <a
                href="#experience"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View Experience
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border bg-card text-foreground font-semibold text-sm hover:bg-muted hover:border-primary/40 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                View Projects
              </a>
            </div>

            {/* Secondary links */}
            <div className="flex items-center justify-center gap-6 text-sm">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                <GithubIcon className="h-4 w-4" /> GitHub
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              >
                <LinkedinIcon className="h-4 w-4" /> LinkedIn
              </a>
              {personalInfo.resumeDriveLink && (
                <a
                  href={personalInfo.resumeDriveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  <Download className="h-4 w-4" /> Resume
                </a>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator — separated from content by pb-20 on content wrapper */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hover:opacity-80 transition-opacity">
        <a href="#about" aria-label="Scroll to About section" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded block">
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
