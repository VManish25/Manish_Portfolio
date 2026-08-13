import React from 'react';
import { Briefcase, Code, Database, Server, Settings, Zap } from 'lucide-react';

export const personalInfo = {
  name: "Manish Kumar V",
  title: "Software Developer",
  location: "Chennai, Tamil Nadu, India",
  email: "manish25.mv@gmail.com",
  phone: "+91 8668101001",
  linkedin: "https://linkedin.com/in/manishkumar2501",
  github: "https://github.com/VManish25",
  resumeDriveLink: "https://drive.google.com/file/d/1JWtglnS_meULavl9tgVUyhb-0wuNbgZc/view?usp=drive_link",
  heroDescription: "Software Developer building enterprise integrations, backend services, and automation solutions using JavaScript, TypeScript, Node.js, REST/SOAP APIs, Freshworks, Moveworks AI, and Azure.",
  about: "I started my journey with full-stack development and have evolved into an enterprise software developer focusing on complex systems. My day-to-day work involves architecting backend services, building robust REST/SOAP integrations, and developing custom plugins for enterprise platforms like Freshworks and Moveworks AI. I excel at enterprise workflow automation, data migration, and debugging critical production issues, ultimately delivering seamless business workflows deployed via Azure."
};

export const experience = [
  {
    role: "Software Developer",
    company: "Arbaan GT Private Limited",
    location: "Chennai, Tamil Nadu",
    period: "January 2025 – Present",
    highlights: [
      "Delivered multiple enterprise software projects within aggressive timelines while maintaining quality standards.",
      "Worked on Freshworks integration projects involving Freshdesk, Freshservice, Freshsales, Freshchat, and Freshcaller.",
      "Built custom plugins for the Moveworks AI platform.",
      "Built plugins for different enterprise systems based on specific business use cases.",
      "Integrated external systems using REST and SOAP APIs.",
      "Used Postman for API-level CRUD operations, testing, validation, and troubleshooting.",
      "Developed backend services using JavaScript, TypeScript, Node.js, and Express.js.",
      "Worked with MongoDB and MySQL databases.",
      "Supported enterprise data migration activities.",
      "Supported production applications, debugging, issue resolution, and performance optimization.",
      "Used Azure App Services for application deployment.",
      "Used Azure DevOps for development and deployment collaboration.",
      "Used Git and GitHub for source control.",
      "Worked across different enterprise projects and collaborated with teams to understand requirements and deliver technical solutions."
    ]
  }
];

export const education = [
  {
    degree: "B.Tech – Computer Science and Engineering",
    institution: "Dr. M.G.R Educational and Research Institute",
    period: "May 2021"
  },
  {
    degree: "Full Stack Development",
    institution: "GUVI",
    period: "March 2024"
  }
];

export const skills = {
  languages: ["JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  frontend: ["React.js", "React Router", "Bootstrap", "Tailwind CSS"],
  backend: ["Node.js", "Express.js", "REST APIs", "SOAP APIs"],
  databases: ["MongoDB", "MySQL"],
  enterprise: ["Freshdesk", "Freshservice", "Freshsales", "Freshchat", "Freshcaller", "Moveworks AI"],
  cloudDevOps: ["Azure App Services", "Azure DevOps"],
  tools: ["Git", "GitHub", "Postman", "VS Code"]
};

export const projects = [
  {
    title: "Chat Application",
    description: "A real-time web chat room application enabling seamless bidirectional messaging between users.",
    tech: ["React.js", "Node.js", "Socket.io"],
    github: "https://github.com/VManish25/chatappclient",
    demo: "https://friendly-belekoy-9b806d.netlify.app"
  },
  {
    title: "Product Application",
    description: "An e-commerce style application providing detailed product listings for a seamless shopping experience.",
    tech: ["React.js", "Node.js", "MongoDB"],
    github: "https://github.com/VManish25/ProductApp_FE",
    demo: "https://stately-vacherin-76de9b.netlify.app"
  },
  {
    title: "BookStore App",
    description: "A digital bookstore platform designed to enhance critical thinking skills and creativity through reading.",
    tech: ["React.js", "Express.js", "MongoDB"],
    github: "https://github.com/VManish25/BookStore_FE",
    demo: "https://beautiful-lamington-cf228b.netlify.app"
  }
];
