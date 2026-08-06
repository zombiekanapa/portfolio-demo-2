/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Nav, SectionTitle, ProjectItem } from './components/Shared';
import { projects } from './data';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-emerald-500/30 relative overflow-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
      
      {/* Subtle radial glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_800px_at_50%_0%,#10b9810a,transparent)] pointer-events-none"></div>

      <div className="relative z-10">
        <Nav />
        
        <main className="max-w-5xl mx-auto px-6 py-24 space-y-32">
          
          <section>
            <SectionTitle title="ABOUT" />
            <div className="text-emerald-50/80 drop-shadow-[0_0_8px_rgba(16,185,129,0.1)] font-medium leading-relaxed max-w-3xl text-sm space-y-6">
              <p className="text-lg">
                I am <strong className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]">Szymon aka zombie</strong>. 
                <br/>AI systems & experiments explorer and neurodivergent builder.
              </p>
              <p>
                I specialize in designing and engineering tools that actually help brains like mine, rather than fighting against them.
                This is my central hub. A lab for ADHD-friendly micro-focus, a "PORTFOLIO/DEMO" landing page with all of my recent projects, AI experiments, and weird-but-useful tools & utilities.
              </p>
              <div className="pt-4 border-l-2 border-emerald-500/50 pl-6 my-8">
                <p className="italic text-emerald-400 text-base drop-shadow-[0_0_12px_rgba(52,211,153,0.6)] font-semibold tracking-wide">
                  "If it doesn't reduce friction or increase dopamine, it doesn't ship."
                </p>
              </div>
            </div>
          </section>

        <section>
          <SectionTitle title="HEALTH" />
          <div className="space-y-16">
            {projects.HEALTH.map((project, idx) => (
              <ProjectItem key={idx} {...project} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle title="SECURITY" />
          <div className="space-y-16">
            {projects.SECURITY.map((project, idx) => (
              <ProjectItem key={idx} {...project} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle title="EXPERIMENTS" />
          <div className="mb-10 text-emerald-100/70 drop-shadow-[0_0_8px_rgba(16,185,129,0.2)] font-medium text-sm max-w-3xl leading-relaxed">
            <p>This section showcases my attempts at storytelling through narration with TTS speech synthesis, original musical scores, sound effects, and collaborative editing work with a few AI agent friends.</p>
          </div>
          <div className="space-y-16">
            {projects.EXPERIMENTS.map((project, idx) => (
              <ProjectItem key={idx} {...project} />
            ))}
          </div>
        </section>

        <section>
          <SectionTitle title="AI-EYE" />
          <div className="text-emerald-100/70 drop-shadow-[0_0_8px_rgba(16,185,129,0.2)] font-medium text-sm max-w-3xl leading-relaxed">
            <p>
              A collection of links to galleries, videos, and slideshows of experiments with generative engines from their very beginning—before the GPT-3 and DALL-E 3 era—starting with hundreds of hours spent in Google Colab Notebooks training custom models in Stable Diffusion 1.2 from scratch.
            </p>
            <p className="mt-4 italic text-slate-500">Links and content incoming...</p>
          </div>
        </section>

        <section>
          <SectionTitle title="DOWNLOAD" />
          <div className="text-emerald-100/70 drop-shadow-[0_0_8px_rgba(16,185,129,0.2)] font-medium text-sm max-w-3xl leading-relaxed">
            <p>Standalone HTML files (Dopaminator, StopSpiral) for offline, local execution.</p>
            <p className="mt-4 italic text-slate-500">Download archives incoming...</p>
          </div>
        </section>

        <section>
          <SectionTitle title="FUTURE" />
          <div className="text-emerald-100/70 drop-shadow-[0_0_8px_rgba(16,185,129,0.2)] font-medium text-sm max-w-3xl leading-relaxed">
            <p>Short-term & long-term concepts, projects in various stages of chaotic creation.</p>
            <p className="mt-4 italic text-slate-500">Roadmap incoming...</p>
          </div>
        </section>

        <section>
          <SectionTitle title="AI RADIO" />
          <div className="text-emerald-100/70 drop-shadow-[0_0_8px_rgba(16,185,129,0.2)] font-medium text-sm max-w-3xl leading-relaxed">
            <p>Generative audio streams, NotebookLM experiments, and BPM training sessions.</p>
            <p className="mt-4 italic text-slate-500">Demo links incoming...</p>
          </div>
        </section>

        <section>
          <SectionTitle title="CONTACT" />
          <div className="space-y-4">
            <p className="text-emerald-100/70 font-medium text-sm">
              If this resonates with your brain, we should probably build something together.
            </p>
            <div className="flex flex-wrap gap-3">
              <a 
                href="mailto:szymon.karpierz.szn@gmail.com" 
                className="inline-flex items-center justify-center px-4 py-2 bg-emerald-950/20 border border-emerald-900/40 hover:border-emerald-400 rounded-sm text-xs font-bold tracking-wider text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/40 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]"
              >
                szymon.karpierz.szn@gmail.com
              </a>
              <a 
                href="https://www.linkedin.com/in/szymonkarpierz/" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center px-4 py-2 bg-emerald-950/20 border border-emerald-900/40 hover:border-emerald-400 rounded-sm text-xs font-bold tracking-wider text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/40 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] uppercase"
              >
                LinkedIn
              </a>
              <a 
                href="https://github.com/zombiekanapa/" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center px-4 py-2 bg-emerald-950/20 border border-emerald-900/40 hover:border-emerald-400 rounded-sm text-xs font-bold tracking-wider text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/40 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] uppercase"
              >
                GitHub
              </a>
              <a 
                href="https://x.com/ZKanapa" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center px-4 py-2 bg-emerald-950/20 border border-emerald-900/40 hover:border-emerald-400 rounded-sm text-xs font-bold tracking-wider text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/40 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] uppercase"
              >
                X / Twitter
              </a>
              <a 
                href="https://www.instagram.com/kanapazombie/" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center px-4 py-2 bg-emerald-950/20 border border-emerald-900/40 hover:border-emerald-400 rounded-sm text-xs font-bold tracking-wider text-emerald-400 hover:text-emerald-300 hover:bg-emerald-900/40 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] uppercase"
              >
                Instagram
              </a>
            </div>
          </div>
        </section>

      </main>

        <footer className="py-12 mt-24 text-center border-t border-slate-900/50 text-slate-600 text-xs bg-black/20 backdrop-blur-sm">
          <p>Built with AI, caffeine, and stubborn curiosity.</p>
          <p className="mt-2 text-emerald-500/30 font-mono">SYS.INIT.CO-CREATED.BY.GOOGLE.AI.STUDIO</p>
        </footer>
      </div>
    </div>
  );
}
