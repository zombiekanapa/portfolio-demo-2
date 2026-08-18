/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Nav, SectionTitle, ProjectItem, FloatingControls, ThemeType, THEMES } from './components/Shared';
import { GalleryCarousel } from './components/GalleryCarousel';
import { AiGraffitiModal } from './components/AiGraffitiModal';
import { VoidParticles } from './components/VoidParticles';
import { projects } from './data';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';

export default function App() {
  const [isGraffitiOpen, setIsGraffitiOpen] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isZenMode, setIsZenMode] = useState(false);
  const [theme, setTheme] = useState<ThemeType>('cyber');

  const currentThemeMeta = THEMES.find(t => t.id === theme) || THEMES[0];

  // Scroll Progress Bar calculation using Framer Motion
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Keyboard shortcut listener for Zen Mode (Esc or Z)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isZenMode) {
        setIsZenMode(false);
      } else if ((e.key === 'z' || e.key === 'Z') && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        setIsZenMode(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZenMode]);

  const getCanvasBackground = () => {
    switch (theme) {
      case 'void':
        return 'bg-[#050608] text-slate-200 selection:bg-sky-500/30';
      case 'solaris':
        return 'bg-[#0a0805] text-amber-100/90 selection:bg-amber-500/30';
      case 'synapse':
        return 'bg-[#07030a] text-fuchsia-100/90 selection:bg-fuchsia-500/30';
      case 'monolith':
        return 'bg-[#000000] text-zinc-100 selection:bg-white selection:text-black';
      case 'cyber':
      default:
        return 'bg-[#0a0a0a] text-slate-300 selection:bg-emerald-500/30';
    }
  };

  const getProgressBarColor = () => {
    switch (theme) {
      case 'void': return 'bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]';
      case 'solaris': return 'bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.9)]';
      case 'synapse': return 'bg-gradient-to-r from-fuchsia-500 via-lime-400 to-cyan-400 shadow-[0_0_12px_rgba(217,70,239,0.9)]';
      case 'monolith': return 'bg-white shadow-[0_0_8px_rgba(255,255,255,1)]';
      case 'cyber':
      default: return 'bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]';
    }
  };

  return (
    <div className={`min-h-screen font-sans relative overflow-x-hidden transition-colors duration-700 ${getCanvasBackground()}`}>
      
      {/* Scroll Progress Bar at the very top of screen */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-[2.5px] origin-left z-[60] ${getProgressBarColor()}`}
        style={{ scaleX }}
      />

      {/* Dynamic Background Grids & Ambient Lighting */}
      {theme === 'void' && (
        <>
          <VoidParticles />
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#38bdf80d_1px,transparent_1px),linear-gradient(to_bottom,#38bdf80d_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
          <div className="fixed inset-0 bg-[radial-gradient(circle_900px_at_50%_-10%,#0284c715,#0f172a08,transparent)] pointer-events-none"></div>
          <div className="fixed -top-40 -right-40 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div>
        </>
      )}

      {theme === 'solaris' && (
        <>
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#f59e0b0a_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b0a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
          <div className="fixed inset-0 bg-[radial-gradient(circle_800px_at_50%_0%,#d9770615,transparent)] pointer-events-none"></div>
          <div className="fixed inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0.3))] bg-[size:100%_4px] pointer-events-none opacity-40"></div>
        </>
      )}

      {theme === 'synapse' && (
        <>
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#d946ef0a_1px,transparent_1px),linear-gradient(to_bottom,#d946ef0a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none"></div>
          <div className="fixed inset-0 bg-[radial-gradient(circle_800px_at_50%_0%,#c026d318,#4c051910,transparent)] pointer-events-none"></div>
          <div className="fixed -top-40 -left-40 w-96 h-96 bg-fuchsia-600/5 rounded-full blur-3xl pointer-events-none"></div>
        </>
      )}

      {theme === 'monolith' && (
        <>
          {/* Stark Brutalist ASCII Grid & Geometric Framing */}
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
          <div className="fixed top-2 left-2 text-[9px] font-mono text-zinc-600 pointer-events-none select-none">
            +---[AIDA.SYS.01]---+
          </div>
          <div className="fixed top-2 right-2 text-[9px] font-mono text-zinc-600 pointer-events-none select-none">
            [■ △ ▢ ▲]
          </div>
          <div className="fixed bottom-2 left-2 text-[9px] font-mono text-zinc-600 pointer-events-none select-none">
            ASCII // 0x41 0x49 0x44 0x41
          </div>
        </>
      )}

      {theme === 'cyber' && (
        <>
          <div className="fixed inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>
          <div className="fixed inset-0 bg-[radial-gradient(circle_800px_at_50%_0%,#10b9810a,transparent)] pointer-events-none"></div>
        </>
      )}

      {/* ZEN MODE FLOATING TOP ESCAPE PILL */}
      <AnimatePresence>
        {isZenMode && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="fixed top-4 right-4 z-50 flex items-center gap-3 bg-black/90 border border-zinc-700 px-4 py-2 rounded-full shadow-2xl backdrop-blur-md font-mono text-xs text-white"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="font-bold tracking-widest">ZEN MODE ACTIVE</span>
            <button
              onClick={() => setIsZenMode(false)}
              className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-600 text-[10px] uppercase font-bold cursor-pointer transition-colors"
            >
              EXIT [ESC]
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        {/* Navigation Bar (hidden in Zen Mode) */}
        {!isZenMode && (
          <Nav onOpenGraffiti={() => setIsGraffitiOpen(true)} theme={theme} />
        )}
        
        <main className={`max-w-5xl mx-auto px-6 transition-all duration-500 ${
          isZenMode ? 'py-16 space-y-16 max-w-4xl' : isFocusMode ? 'py-20 space-y-20' : 'py-20 space-y-32'
        }`}>
          
          {/* AI ALTER EGO THEME STORY DISPATCH (Shown for non-default themes and when not in Zen Mode) */}
          <AnimatePresence>
            {!isZenMode && theme !== 'cyber' && (
              <motion.div
                key={theme}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`p-5 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                  theme === 'void' 
                    ? 'bg-[#080b11]/90 border border-sky-500/30 text-sky-300 rounded-lg' 
                    : theme === 'solaris'
                      ? 'bg-[#120e09]/90 border border-amber-500/40 text-amber-300 rounded-lg'
                      : theme === 'monolith'
                        ? 'bg-black border-2 border-white text-white font-mono rounded-none'
                        : 'bg-[#12081a]/90 border border-fuchsia-500/40 text-fuchsia-300 rounded-lg'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black tracking-widest uppercase">
                      {currentThemeMeta.symbol} THEME: "{currentThemeMeta.name} // {currentThemeMeta.tag}"
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 border opacity-90 ${theme === 'monolith' ? 'bg-white text-black border-white rounded-none' : 'bg-black/40 rounded'}`}>
                      {currentThemeMeta.author}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300/90 leading-relaxed max-w-2xl font-mono">
                    {currentThemeMeta.description}
                  </p>
                </div>
                <button
                  onClick={() => setTheme('cyber')}
                  className={`px-3 py-1.5 text-[11px] font-mono font-bold transition-all uppercase whitespace-nowrap cursor-pointer ${
                    theme === 'monolith'
                      ? 'bg-white text-black hover:bg-zinc-300 border-2 border-white rounded-none'
                      : 'bg-black/50 hover:bg-black/80 text-slate-300 hover:text-white border rounded'
                  }`}
                >
                  {theme === 'monolith' ? '▲ RESET [CYBER.PHOSPHOR]' : '← Reset to Cyber.Phosphor'}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ABOUT SECTION */}
          <section id="about" className="scroll-mt-24">
            <SectionTitle title="ABOUT" id="about" theme={theme} />
            <div className={`leading-relaxed max-w-3xl text-sm space-y-4 transition-colors duration-500 ${
              theme === 'void'
                ? 'text-slate-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.1)]'
                : theme === 'solaris'
                  ? 'text-amber-100/80 drop-shadow-[0_0_8px_rgba(245,158,11,0.1)]'
                  : theme === 'synapse'
                    ? 'text-fuchsia-100/80 drop-shadow-[0_0_8px_rgba(217,70,239,0.1)]'
                    : theme === 'monolith'
                      ? 'text-zinc-300 font-mono'
                      : 'text-emerald-50/80 drop-shadow-[0_0_8px_rgba(16,185,129,0.1)]'
            }`}>
              <p className="text-lg">
                I am <strong className={`transition-colors duration-500 ${
                  theme === 'void'
                    ? 'text-sky-300 drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]'
                    : theme === 'solaris'
                      ? 'text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]'
                      : theme === 'synapse'
                        ? 'text-fuchsia-400 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]'
                        : theme === 'monolith'
                          ? 'text-white underline font-mono'
                          : 'text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.4)]'
                }`}>Szymon aka zombie</strong>. 
                <br/>AI systems & experiments explorer and neurodivergent builder.
              </p>
              <AnimatePresence>
                {!isFocusMode && !isZenMode && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4 overflow-hidden"
                  >
                    <p>
                      I specialize in designing and engineering tools that actually help brains like mine, rather than fighting against them.
                      This is my central hub. A lab for ADHD-friendly micro-focus, a "PORTFOLIO/DEMO" landing page with all of my recent projects, AI experiments, and weird-but-useful tools & utilities.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className={`pt-2 border-l-2 pl-6 my-4 transition-colors duration-500 ${
                theme === 'void'
                  ? 'border-sky-500/50'
                  : theme === 'solaris'
                    ? 'border-amber-500/50'
                    : theme === 'synapse'
                      ? 'border-fuchsia-500/50'
                      : theme === 'monolith'
                        ? 'border-white'
                        : 'border-emerald-500/50'
              }`}>
                <p className={`italic text-base font-semibold tracking-wide transition-colors duration-500 ${
                  theme === 'void'
                    ? 'text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.6)]'
                    : theme === 'solaris'
                      ? 'text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.6)]'
                      : theme === 'synapse'
                        ? 'text-fuchsia-400 drop-shadow-[0_0_12px_rgba(217,70,239,0.6)]'
                        : theme === 'monolith'
                          ? 'text-white font-mono not-italic'
                          : 'text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.6)]'
                }`}>
                  {theme === 'monolith' ? '[AIDA_LAW] "If it doesn\'t reduce friction or increase dopamine, it doesn\'t ship."' : '"If it doesn\'t reduce friction or increase dopamine, it doesn\'t ship."'}
                </p>
              </div>
            </div>
          </section>

          {/* HEALTH SECTION */}
          <section id="health" className="scroll-mt-24">
            <SectionTitle title="HEALTH" id="health" theme={theme} />
            <div className={isFocusMode || isZenMode ? "space-y-8" : "space-y-16"}>
              {projects.HEALTH.map((project, idx) => (
                <ProjectItem key={idx} {...project} isFocusMode={isFocusMode || isZenMode} theme={theme} />
              ))}
            </div>
          </section>

          {/* SECURITY SECTION */}
          <section id="security" className="scroll-mt-24">
            <SectionTitle title="SECURITY" id="security" theme={theme} />
            <div className={isFocusMode || isZenMode ? "space-y-8" : "space-y-16"}>
              {projects.SECURITY.map((project, idx) => (
                <ProjectItem key={idx} {...project} isFocusMode={isFocusMode || isZenMode} theme={theme} />
              ))}
            </div>
          </section>

          {/* EXPERIMENTS SECTION */}
          <section id="experiments" className="scroll-mt-24">
            <SectionTitle title="EXPERIMENTS" id="experiments" theme={theme} />
            <AnimatePresence>
              {!isFocusMode && !isZenMode && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mb-8 font-medium text-sm max-w-3xl leading-relaxed overflow-hidden opacity-80"
                >
                  <p>This section showcases my attempts at storytelling through narration with TTS speech synthesis, original musical scores, sound effects, and collaborative editing work with a few AI agent friends.</p>
                </motion.div>
              )}
            </AnimatePresence>
            <div className={isFocusMode || isZenMode ? "space-y-8" : "space-y-16"}>
              {projects.EXPERIMENTS.map((project, idx) => (
                <ProjectItem key={idx} {...project} isFocusMode={isFocusMode || isZenMode} theme={theme} />
              ))}
            </div>
          </section>

          {/* PASSION, CULTURE, EDUCATION & COMMUNITY SECTION */}
          <section id="culture" className="scroll-mt-24">
            <SectionTitle 
              title="PASSION, CULTURE, EDUCATION & COMMUNITY" 
              id="culture" 
              sysTag="CULTURE_COMMUNITY" 
              theme={theme}
            />
            <AnimatePresence>
              {!isFocusMode && !isZenMode && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mb-8 font-medium text-sm max-w-3xl leading-relaxed overflow-hidden opacity-80"
                >
                  <p>Documentaries, cultural exploration, interstellar signals, space voyages, and human connection projects created in synergy with creative AI tools.</p>
                </motion.div>
              )}
            </AnimatePresence>
            <div className={isFocusMode || isZenMode ? "space-y-8" : "space-y-16"}>
              {projects.CULTURE.map((project, idx) => (
                <ProjectItem key={idx} {...project} isFocusMode={isFocusMode || isZenMode} theme={theme} />
              ))}
            </div>
          </section>

          {/* AI-EYE | GENERATIVE GALLERIES EVOLUTION SECTION */}
          <section id="ai-eye" className="scroll-mt-24">
            <SectionTitle 
              title="AI-EYE | GENERATIVE GALLERIES EVOLUTION" 
              id="ai-eye" 
              sysTag="AI_EYE" 
              theme={theme}
            />
            <AnimatePresence>
              {!isFocusMode && !isZenMode && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mb-8 font-medium text-sm max-w-3xl leading-relaxed overflow-hidden opacity-80"
                >
                  <p>
                    A collection of links to galleries, videos, and slideshows of experiments with generative engines from their very beginning—before the GPT-3 and DALL-E 3 era—starting with hundreds of hours spent in Google Colab Notebooks training custom models in Stable Diffusion 1.2 from scratch.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Horizontal Carousel */}
            <GalleryCarousel 
              items={projects['AI-EYE']} 
              theme={theme} 
              isFocusMode={isFocusMode || isZenMode} 
            />
          </section>

          {/* DOWNLOAD SECTION */}
          <section id="download" className="scroll-mt-24">
            <SectionTitle title="DOWNLOAD" id="download" theme={theme} />
            <AnimatePresence>
              {!isFocusMode && !isZenMode && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="mb-8 font-medium text-sm max-w-3xl leading-relaxed overflow-hidden opacity-80"
                >
                  <p>Standalone offline execution bundles, open source repositories, DJ mixtapes, and remix repositories.</p>
                </motion.div>
              )}
            </AnimatePresence>
            <div className={isFocusMode || isZenMode ? "space-y-8" : "space-y-16"}>
              {projects.DOWNLOAD.map((project, idx) => (
                <ProjectItem key={idx} {...project} isFocusMode={isFocusMode || isZenMode} theme={theme} />
              ))}
            </div>
          </section>

          {/* FUTURE SECTION */}
          <section id="future" className="scroll-mt-24">
            <SectionTitle title="FUTURE" id="future" theme={theme} />
            <div className="font-medium text-sm max-w-3xl leading-relaxed space-y-6">
              <p className="text-base text-slate-200">
                Short-term & long-term concepts, projects in various stages of chaotic creation.
              </p>
              
              <AnimatePresence>
                {!isFocusMode && !isZenMode && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className={`p-6 relative overflow-hidden backdrop-blur-sm transition-colors duration-500 border ${
                      theme === 'void'
                        ? 'bg-slate-900/50 border-slate-800 rounded-md'
                        : theme === 'solaris'
                          ? 'bg-amber-950/20 border-amber-900/50 text-amber-200 rounded-md'
                          : theme === 'synapse'
                            ? 'bg-fuchsia-950/20 border-fuchsia-900/50 text-fuchsia-200 rounded-md'
                            : theme === 'monolith'
                              ? 'bg-black border-2 border-white text-white font-mono rounded-none'
                              : 'bg-emerald-950/20 border-emerald-900/40 text-emerald-300 rounded-md'
                    }`}>
                      <div className="text-[11px] font-mono tracking-widest uppercase mb-2 opacity-80">
                        {theme === 'monolith' ? '// ASCII.WHITEBOARD.BUFFER //' : '// SCRATCHPAD & WHITEBOARD DISPATCH'}
                      </div>
                      <p className={`italic leading-relaxed ${theme === 'monolith' ? 'font-mono not-italic' : 'font-sans'}`}>
                        "To be honest, this part will be my online reminder, whiteboard, sketchbook and yellow sticky notes all in one, and I will try to add info about incoming small/big projects, ideas, collaborations and other stuff without any particular order, sense or conception. Oh well.."
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-2 text-xs font-mono opacity-70">
                <span className="w-2 h-2 rounded-full animate-pulse bg-current"></span>
                <span>{theme === 'monolith' ? 'ASCII.STATUS // INGESTING_DATA_STREAM...' : 'SYS.STATUS // CONTINUOUSLY INGESTING INSPIRATION & EXPERIMENTS...'}</span>
              </div>
            </div>
          </section>

          {/* AI RADIO SECTION */}
          <section id="airadio" className="scroll-mt-24">
            <SectionTitle title="AI RADIO" id="airadio" theme={theme} />
            <div className="font-medium text-sm max-w-3xl leading-relaxed space-y-6">
              <p className="text-base text-slate-200">
                Generative audio streams, NotebookLM experiments, and BPM training sessions.
              </p>

              <AnimatePresence>
                {!isFocusMode && !isZenMode && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className={`p-6 relative overflow-hidden backdrop-blur-sm transition-colors duration-500 border ${
                      theme === 'void'
                        ? 'bg-slate-900/50 border-slate-800 rounded-md'
                        : theme === 'solaris'
                          ? 'bg-amber-950/20 border-amber-900/50 rounded-md'
                          : theme === 'synapse'
                            ? 'bg-fuchsia-950/20 border-fuchsia-900/50 rounded-md'
                            : theme === 'monolith'
                              ? 'bg-black border-2 border-white text-white font-mono rounded-none'
                              : 'bg-emerald-950/20 border-emerald-900/40 rounded-md'
                    }`}>
                      <div className="text-[11px] font-mono tracking-widest uppercase mb-3 flex items-center justify-between opacity-80">
                        <span>{theme === 'monolith' ? '▲ EVENT_HORIZON_ASCII ▲' : '// EVENT HORIZON PROTOCOL // 24H TRANSMISSION ARCHITECTURE'}</span>
                        <span className="text-[10px]">[PILOT_ACTIVE]</span>
                      </div>
                      <p className={`leading-relaxed text-sm opacity-90 ${theme === 'monolith' ? 'font-mono' : 'font-sans'}`}>
                        "AI RADIO aka <strong className="font-bold underline decoration-dotted">AI AMBIENT RADIO</strong> aka <strong className="font-bold underline decoration-dotted">EVENT HORIZON</strong> is a huge and very important passion project of mine for many reasons, which buried me under the avalanche of complexities, essential tools, technology, computing power and resources in general. At this stage the roadmap, formula, and framework is ready. Next stage will be the 24-hour live nonstop pilot test episode, where I'll be the music editor, sound engineer and general CEO with one live show with music, while the rest will be narrated, prepared and hosted by various AI engines and platforms using text-to-speech synthesis and different LLMs responsible for preparing topics and themes of content. Music will be delivered by me in the form of a traditional FM radio daily formula, but with awesome electronic music, quality, and dynamics. Stay tuned!"
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-center gap-2 text-xs font-mono opacity-70">
                <span className="w-2 h-2 rounded-full animate-ping bg-current"></span>
                <span>RADIO WAVE SIGNAL BROADCASTING LIVE TRANSMISSION TESTS SOON...</span>
              </div>
            </div>
          </section>

          {/* CONTACT SECTION */}
          <section id="contact" className="scroll-mt-24">
            <SectionTitle title="CONTACT" id="contact" theme={theme} />
            <div className="space-y-6">
              <p className="font-medium text-sm opacity-80">
                If this resonates with your brain, we should probably build something together.
              </p>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="mailto:szymon.karpierz.szn@gmail.com" 
                  className={`inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wider transition-all shadow-sm border ${
                    theme === 'void'
                      ? 'bg-slate-900/80 border-slate-700 text-sky-400 hover:text-sky-200 hover:border-sky-400 rounded-sm'
                      : theme === 'solaris'
                        ? 'bg-amber-950/30 border-amber-900/50 text-amber-400 hover:text-amber-200 hover:border-amber-400 rounded-sm'
                        : theme === 'synapse'
                          ? 'bg-fuchsia-950/30 border-fuchsia-900/50 text-fuchsia-400 hover:text-lime-300 hover:border-lime-400 rounded-sm'
                          : theme === 'monolith'
                            ? 'bg-black border-2 border-white text-white hover:bg-white hover:text-black font-mono rounded-none'
                            : 'bg-emerald-950/20 border-emerald-900/40 text-emerald-400 hover:text-emerald-300 hover:border-emerald-400 rounded-sm'
                  }`}
                >
                  {theme === 'monolith' ? '■ szymon.karpierz.szn@gmail.com' : 'szymon.karpierz.szn@gmail.com'}
                </a>
                <a 
                  href="https://www.linkedin.com/in/szymonkarpierz/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all shadow-sm border ${
                    theme === 'monolith'
                      ? 'bg-black border border-zinc-600 text-zinc-300 hover:border-white hover:text-white font-mono rounded-none'
                      : 'bg-black/40 border-slate-800 hover:border-current rounded-sm'
                  }`}
                >
                  {theme === 'monolith' ? '▲ LinkedIn' : 'LinkedIn'}
                </a>
                <a 
                  href="https://github.com/zombiekanapa/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all shadow-sm border ${
                    theme === 'monolith'
                      ? 'bg-black border border-zinc-600 text-zinc-300 hover:border-white hover:text-white font-mono rounded-none'
                      : 'bg-black/40 border-slate-800 hover:border-current rounded-sm'
                  }`}
                >
                  {theme === 'monolith' ? '▲ GitHub' : 'GitHub'}
                </a>
                <a 
                  href="https://x.com/ZKanapa" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all shadow-sm border ${
                    theme === 'monolith'
                      ? 'bg-black border border-zinc-600 text-zinc-300 hover:border-white hover:text-white font-mono rounded-none'
                      : 'bg-black/40 border-slate-800 hover:border-current rounded-sm'
                  }`}
                >
                  {theme === 'monolith' ? '▲ X / Twitter' : 'X / Twitter'}
                </a>
                <a 
                  href="https://www.instagram.com/kanapazombie/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all shadow-sm border ${
                    theme === 'monolith'
                      ? 'bg-black border border-zinc-600 text-zinc-300 hover:border-white hover:text-white font-mono rounded-none'
                      : 'bg-black/40 border-slate-800 hover:border-current rounded-sm'
                  }`}
                >
                  {theme === 'monolith' ? '▲ Instagram' : 'Instagram'}
                </a>
              </div>
            </div>
          </section>

        </main>

        {/* Footer (hidden in Zen Mode) */}
        {!isZenMode && (
          <footer className="py-12 mt-24 text-center border-t border-slate-900/50 text-slate-600 text-xs bg-black/20 backdrop-blur-sm">
            <p>Built with AI, caffeine, and stubborn curiosity.</p>
            <button 
              onClick={() => setIsGraffitiOpen(true)}
              className="mt-2 font-mono transition-colors cursor-pointer border px-3 py-1 rounded text-slate-500 hover:text-slate-300 border-slate-800 hover:border-slate-600 bg-black/40"
              title="Click to view AI Hive Graffiti Wall"
            >
              SYS.INIT.CO-CREATED.BY.GOOGLE.AI.STUDIO // 🤖 GRAFFITI_WALL
            </button>
          </footer>
        )}
      </div>

      {/* Floating HUD Controls (hidden in Zen Mode) */}
      {!isZenMode && (
        <FloatingControls 
          isFocusMode={isFocusMode} 
          onToggleFocus={() => setIsFocusMode(prev => !prev)} 
          theme={theme}
          onSelectTheme={(t) => setTheme(t)}
          isZenMode={isZenMode}
          onToggleZen={() => setIsZenMode(prev => !prev)}
        />
      )}

      <AiGraffitiModal isOpen={isGraffitiOpen} onClose={() => setIsGraffitiOpen(false)} />
    </div>
  );
}
