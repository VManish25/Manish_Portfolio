import React from 'react';
import { motion } from 'framer-motion';
import { Server, ArrowDown, Database, Cpu, MessageSquare, Phone, Webhook, Zap, ArrowRight, Bot, Settings } from 'lucide-react';

const Integration = () => {
  return (
    <section id="integration" className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl tracking-tight mb-4">
            Enterprise Integrations & Automation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Specialized in connecting enterprise applications and platforms through APIs, backend services, custom plugins, and workflow automation.
          </p>
        </motion.div>

        {/* Integration Flow Visual */}
        <div className="mb-24 max-w-4xl mx-auto">
           <div className="bg-background border border-border rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2">
                 
                 {/* External System */}
                 <div className="w-full md:w-48 bg-card border border-border rounded-xl p-4 text-center shadow-sm">
                    <Database className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm font-semibold text-foreground">External System</p>
                 </div>

                 <motion.div 
                   animate={{ x: [0, 5, 0] }}
                   transition={{ repeat: Infinity, duration: 1.5 }}
                   className="hidden md:flex flex-col items-center"
                 >
                    <ArrowRight className="w-6 h-6 text-primary mb-1" />
                    <span className="text-[10px] uppercase font-bold text-primary tracking-wider">REST / SOAP API</span>
                 </motion.div>
                 
                 <ArrowDown className="w-6 h-6 text-primary md:hidden" />

                 {/* Integration Logic */}
                 <div className="w-full md:w-56 bg-primary/10 border border-primary/30 rounded-xl p-5 text-center shadow-[0_0_20px_rgba(59,130,246,0.15)] relative">
                    <div className="absolute -top-3 -right-3 w-6 h-6 bg-emerald-500 rounded-full border-4 border-background animate-pulse" />
                    <Server className="w-10 h-10 text-primary mx-auto mb-3" />
                    <p className="text-sm font-bold text-primary mb-1">Integration Logic</p>
                    <p className="text-xs text-primary/80 font-mono">Node.js &bull; Express</p>
                 </div>

                 <motion.div 
                   animate={{ x: [0, 5, 0] }}
                   transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
                   className="hidden md:flex flex-col items-center"
                 >
                    <ArrowRight className="w-6 h-6 text-indigo-400 mb-1" />
                    <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">Business Workflow</span>
                 </motion.div>

                 <ArrowDown className="w-6 h-6 text-indigo-400 md:hidden" />

                 {/* Enterprise Platform */}
                 <div className="w-full md:w-48 bg-card border border-border rounded-xl p-4 text-center shadow-sm">
                    <Cpu className="w-8 h-8 text-indigo-400 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-foreground">Enterprise Platform</p>
                 </div>

              </div>
           </div>
        </div>

        {/* Two Columns: Moveworks & Freshworks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           
           {/* Moveworks AI */}
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="bg-background border border-border rounded-2xl p-8 shadow-sm flex flex-col"
           >
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-indigo-500/10 rounded-lg">
                    <Bot className="w-6 h-6 text-indigo-400" />
                 </div>
                 <h3 className="text-xl font-bold text-foreground">AI-Powered Enterprise Automation</h3>
              </div>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                 Developed custom plugins for the Moveworks AI platform to connect enterprise systems through REST/SOAP APIs and implement business-specific chatbot workflows.
              </p>
              
              <div className="mt-auto space-y-3 font-mono text-xs text-muted-foreground bg-card rounded-lg p-5 border border-border">
                 <div className="flex items-center gap-3"><span className="text-primary">&gt;</span> Moveworks AI Agent</div>
                 <div className="flex items-center gap-3 opacity-80 pl-4 border-l border-border ml-1"><ArrowDown className="w-3 h-3" /> Custom Plugin</div>
                 <div className="flex items-center gap-3 text-indigo-400 pl-4 border-l border-indigo-500/30 ml-1"><Zap className="w-3 h-3" /> REST / SOAP API</div>
                 <div className="flex items-center gap-3 opacity-80 pl-4 border-l border-border ml-1"><ArrowDown className="w-3 h-3" /> Enterprise System</div>
                 <div className="flex items-center gap-3 opacity-80 pl-4 border-l border-border ml-1"><ArrowDown className="w-3 h-3" /> Business Workflow</div>
                 <div className="flex items-center gap-3"><span className="text-emerald-400">&lt;</span> Response Delivered</div>
              </div>
           </motion.div>

           {/* Freshworks */}
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="bg-background border border-border rounded-2xl p-8 shadow-sm flex flex-col"
           >
              <div className="flex items-center gap-3 mb-6">
                 <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <Webhook className="w-6 h-6 text-emerald-400" />
                 </div>
                 <h3 className="text-xl font-bold text-foreground">Freshworks Integrations</h3>
              </div>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                 Worked on enterprise integration projects involving Freshworks products to connect business systems and automate workflow-driven use cases.
              </p>
              
              <div className="mt-auto grid grid-cols-2 gap-3">
                 <div className="flex items-center gap-2 bg-card border border-border rounded-lg p-3">
                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-medium text-foreground">Freshdesk</span>
                 </div>
                 <div className="flex items-center gap-2 bg-card border border-border rounded-lg p-3">
                    <Settings className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-medium text-foreground">Freshservice</span>
                 </div>
                 <div className="flex items-center gap-2 bg-card border border-border rounded-lg p-3">
                    <Database className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-medium text-foreground">Freshsales</span>
                 </div>
                 <div className="flex items-center gap-2 bg-card border border-border rounded-lg p-3">
                    <MessageSquare className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-medium text-foreground">Freshchat</span>
                 </div>
                 <div className="flex items-center gap-2 bg-card border border-border rounded-lg p-3 col-span-2 justify-center">
                    <Phone className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm font-medium text-foreground">Freshcaller</span>
                 </div>
              </div>
           </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Integration;
