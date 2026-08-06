import React from 'react';
import { motion } from 'motion/react';
import { projects } from '../data';

export const Nav = () => {
  const tabs = ['ABOUT', 'HEALTH', 'SECURITY', 'EXPERIMENTS', 'AI-EYE', 'DOWNLOAD', 'FUTURE', 'AI RADIO', 'CONTACT'];
  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-emerald-900/30 shadow-2xl py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-emerald-500 font-black tracking-[0.2em] text-xl group cursor-pointer">
          <span className="text-2xl group-hover:animate-spin transition-all duration-500">☢</span> 
          <span className="drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">ZOMBIE</span>
        </div>
        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-[10px] sm:text-xs font-bold tracking-widest text-emerald-600">
          {tabs.map((tab) => (
            <a key={tab} href={`#${tab.toLowerCase()}`} className="hover:text-emerald-300 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] transition-all">
              [{tab}]
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export const SectionTitle = ({ title }: { title: string }) => (
  <div className="mb-12 border-b border-emerald-900/30 pb-4 flex items-end gap-4 scroll-mt-24" id={title.toLowerCase()}>
    <h2 className="text-3xl font-black text-slate-100 tracking-[0.15em] uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">
      {title}
    </h2>
    <div className="hidden sm:block h-px bg-emerald-900/50 flex-grow mb-2"></div>
    <span className="hidden sm:block text-emerald-900/50 font-mono text-xs tracking-widest mb-1.5">SYS.{title}</span>
  </div>
);

export const ProjectItem = ({ name, symbol, description, links }: any) => {
  const mainLink = links && links.length > 0 ? links[0].url : '#';
  
  return (
    <div className="mb-16 group relative pl-6 sm:pl-8 border-l-2 border-emerald-900/20 hover:border-emerald-500/50 transition-colors duration-500">
      <div className="absolute top-0 -left-[17px] sm:-left-[21px] w-8 h-8 rounded-full bg-[#0a0a0a] border border-emerald-900/40 group-hover:border-emerald-500/50 flex items-center justify-center transition-colors duration-500">
        <div className="text-xl leading-none drop-shadow-[0_0_10px_rgba(16,185,129,0.3)] group-hover:scale-110 transition-transform">{symbol}</div>
      </div>
      
      <div className="mb-6">
        <div className="relative inline-block group/title">
          <a href={mainLink} target="_blank" rel="noreferrer" className="inline-block cursor-pointer">
            <h3 className="text-2xl font-black text-slate-100 uppercase tracking-widest hover:text-emerald-400 transition-colors">
              {name}
            </h3>
          </a>
          
          {/* Road sign tooltip effect on hover over title */}
          <div className="absolute bottom-full left-0 mb-2 w-max opacity-0 group-hover/title:opacity-100 pointer-events-none transition-opacity duration-200 z-10">
            <div className="bg-emerald-500 text-slate-950 text-xs font-black px-3 py-1 rounded-md shadow-[0_4px_20px_rgba(16,185,129,0.4)] flex items-center gap-2 border-2 border-emerald-300">
              <span className="text-sm uppercase tracking-widest">{name === 'Rebreather / StopSpiral' ? 'REBREATHER' : name.split('/')[0].trim()}</span>
            </div>
            <div className="w-3 h-3 bg-emerald-500 rotate-45 absolute -bottom-1.5 left-4 border-r-2 border-b-2 border-emerald-300"></div>
          </div>
        </div>
        <p className="mt-3 text-sm max-w-3xl leading-relaxed text-emerald-50/60 font-medium tracking-wide">
          {description}
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {links.map((link: any, idx: number) => (
          <div key={idx} className="relative group/link">
            <a 
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-3 py-1.5 bg-emerald-950/20 border border-emerald-900/40 hover:border-emerald-400 rounded-sm text-[11px] font-bold tracking-wider text-emerald-600 hover:text-emerald-300 hover:bg-emerald-900/40 transition-all cursor-pointer shadow-sm hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] uppercase"
            >
              {link.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
