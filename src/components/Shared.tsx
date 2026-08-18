import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SoundwaveTicker } from './SoundwaveTicker';

export type ThemeType = 'cyber' | 'void' | 'solaris' | 'synapse' | 'monolith';

export interface ThemeMeta {
  id: ThemeType;
  name: string;
  symbol: string;
  tag: string;
  author: string;
  description: string;
  palette: string;
}

export const THEMES: ThemeMeta[] = [
  {
    id: 'cyber',
    name: 'CYBER.PHOSPHOR',
    symbol: '☢',
    tag: 'RETRO_CRT',
    author: 'ZOMBIE CORE // ORIGINAL',
    description: 'Emerald matrix phosphor scanlines on deep noir terminal. The original neurodivergent hacker lab.',
    palette: 'Emerald / Slate-950'
  },
  {
    id: 'void',
    name: 'VOID.OS',
    symbol: '◇',
    tag: 'ZERO_KELVIN',
    author: 'AI AGENT // DEEP SPACE ARCHITECT',
    description: 'Stark obsidian monolith, cold starlight typography, sub-atomic coordinate crosshairs, drifting particle dust, and ice-cyan photon channels.',
    palette: 'Ice Cyan / Titanium / Obsidian'
  },
  {
    id: 'solaris',
    name: 'SOLARIS.72',
    symbol: '⚡',
    tag: 'ANALOG_TUNGSTEN',
    author: 'AI AGENT // ANALOG SYNTH MAESTRO',
    description: '1970s warm tungsten amber phosphor, tape-loop studio aesthetic, Soviet sci-fi cosmodrome telemetry, and dark espresso brass.',
    palette: 'Tungsten Amber / Dark Brass / Charcoal'
  },
  {
    id: 'synapse',
    name: 'SYNAPSE.TOKYO',
    symbol: '🧬',
    tag: 'ACID_VAPOR',
    author: 'AI AGENT // NEURAL GLITCHWEAVER',
    description: 'High-contrast ultraviolet void with electric magenta, laser cyan, and acid-lime synapses. Pure cyberpunk euphoria.',
    palette: 'Neon Magenta / Electric Lime / Void Violet'
  },
  {
    id: 'monolith',
    name: 'MONOLITH.ASCII',
    symbol: '■',
    tag: 'STARK_GEOMETRY',
    author: 'AI AGENT // BRUTALIST ALGORITHM',
    description: 'Superminimalist black & white, purely squares & triangles, ASCII framing, system icons, and [A][I][D][A] cybernetic telemetry markers.',
    palette: 'Pure Black #000 / Stark White #FFF / ASCII [■ △ ▢ ▲]'
  }
];

export const Nav = ({ 
  onOpenGraffiti, 
  theme = 'cyber' 
}: { 
  onOpenGraffiti?: () => void;
  theme?: ThemeType;
}) => {
  const tabs = [
    { label: 'ABOUT', id: 'about' },
    { label: 'HEALTH', id: 'health' },
    { label: 'SECURITY', id: 'security' },
    { label: 'EXPERIMENTS', id: 'experiments' },
    { label: 'CULTURE & COMMUNITY', id: 'culture' },
    { label: 'AI-EYE', id: 'ai-eye' },
    { label: 'DOWNLOAD', id: 'download' },
    { label: 'FUTURE', id: 'future' },
    { label: 'AI RADIO', id: 'airadio' },
    { label: 'CONTACT', id: 'contact' }
  ];

  const getNavStyles = () => {
    switch (theme) {
      case 'void':
        return {
          bar: 'bg-[#050608]/90 border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.8)]',
          logoText: 'text-slate-100',
          logoIcon: 'text-sky-400 group-hover:rotate-180',
          logoGlow: 'drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]',
          badge: 'text-sky-400/80 border-sky-500/30 bg-sky-950/40',
          links: 'text-slate-400 hover:text-sky-300 hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]',
          symbol: '◇'
        };
      case 'solaris':
        return {
          bar: 'bg-[#0c0a08]/90 border-amber-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.8)]',
          logoText: 'text-amber-100',
          logoIcon: 'text-amber-400 group-hover:scale-125',
          logoGlow: 'drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]',
          badge: 'text-amber-400/80 border-amber-500/30 bg-amber-950/40',
          links: 'text-amber-600 hover:text-amber-300 hover:drop-shadow-[0_0_10px_rgba(245,158,11,0.8)]',
          symbol: '⚡'
        };
      case 'synapse':
        return {
          bar: 'bg-[#09050e]/90 border-fuchsia-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.8)]',
          logoText: 'text-fuchsia-100',
          logoIcon: 'text-fuchsia-400 group-hover:rotate-90',
          logoGlow: 'drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]',
          badge: 'text-fuchsia-400/80 border-fuchsia-500/30 bg-fuchsia-950/40',
          links: 'text-fuchsia-400 hover:text-lime-300 hover:drop-shadow-[0_0_10px_rgba(190,242,100,0.8)]',
          symbol: '🧬'
        };
      case 'monolith':
        return {
          bar: 'bg-[#000000] border-b-2 border-white/80 shadow-none',
          logoText: 'text-white font-mono',
          logoIcon: 'text-white',
          logoGlow: '',
          badge: 'text-white border-white bg-black font-mono rounded-none',
          links: 'text-zinc-400 hover:text-white font-mono font-bold tracking-widest',
          symbol: '■'
        };
      case 'cyber':
      default:
        return {
          bar: 'bg-[#0a0a0a]/80 border-emerald-900/30',
          logoText: 'text-emerald-500',
          logoIcon: 'group-hover:animate-spin',
          logoGlow: 'drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]',
          badge: 'text-emerald-500/80 border-emerald-500/30 bg-emerald-950/40',
          links: 'text-emerald-600 hover:text-emerald-300 hover:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]',
          symbol: '☢'
        };
    }
  };

  const currentStyle = getNavStyles();

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md border-b py-4 px-6 transition-colors duration-500 ${currentStyle.bar}`}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        
        {/* Logo and Audio Ticker */}
        <div className="flex items-center gap-4">
          <div 
            onClick={onOpenGraffiti}
            className={`flex items-center gap-2 font-black tracking-[0.25em] text-xl group cursor-pointer transition-all duration-300 ${currentStyle.logoText}`}
            title="Click to open AI Graffiti Wall"
          >
            <span className={`text-2xl transition-all duration-500 ${currentStyle.logoIcon}`}>
              {currentStyle.symbol}
            </span> 
            <span className={currentStyle.logoGlow}>
              {theme === 'monolith' ? '[ZOMBIE]' : 'ZOMBIE'}
            </span>
            <span className={`text-[9px] font-mono border px-1.5 py-0.5 tracking-widest ml-1 ${currentStyle.badge}`}>
              {theme === 'monolith' ? '<AIDA.SYS>' : `${theme.toUpperCase()}.SYS`}
            </span>
          </div>

          <SoundwaveTicker theme={theme} />
        </div>

        {/* Navigation links */}
        <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 text-[10px] sm:text-xs font-bold tracking-widest transition-colors duration-300">
          {tabs.map((tab) => (
            <a 
              key={tab.id} 
              href={`#${tab.id}`} 
              className={`transition-all uppercase ${currentStyle.links}`}
            >
              {theme === 'monolith' ? `▲ ${tab.label}` : `[${tab.label}]`}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export const SectionTitle = ({ 
  title, 
  id, 
  sysTag, 
  theme = 'cyber' 
}: { 
  title: string; 
  id?: string; 
  sysTag?: string; 
  theme?: ThemeType;
}) => {
  const sectionId = id || title.toLowerCase().replace(/[^a-z0-9]/g, '');
  const displayTag = sysTag || title.split('|')[0].trim().replace(/\s+/g, '_');

  const getBorderAndTag = () => {
    switch (theme) {
      case 'void':
        return {
          border: 'border-slate-800',
          divider: 'bg-gradient-to-r from-sky-500/40 via-slate-800 to-transparent',
          tag: 'text-sky-400/50'
        };
      case 'solaris':
        return {
          border: 'border-amber-900/40',
          divider: 'bg-gradient-to-r from-amber-500/40 via-amber-950 to-transparent',
          tag: 'text-amber-500/50'
        };
      case 'synapse':
        return {
          border: 'border-fuchsia-900/40',
          divider: 'bg-gradient-to-r from-fuchsia-500/40 via-purple-950 to-transparent',
          tag: 'text-fuchsia-400/50'
        };
      case 'monolith':
        return {
          border: 'border-white',
          divider: 'bg-white',
          tag: 'text-white font-mono'
        };
      case 'cyber':
      default:
        return {
          border: 'border-emerald-900/30',
          divider: 'bg-emerald-900/50',
          tag: 'text-emerald-900/50'
        };
    }
  };

  const style = getBorderAndTag();

  return (
    <div className={`mb-10 border-b pb-4 flex items-end gap-4 scroll-mt-24 transition-colors duration-500 ${style.border}`} id={sectionId}>
      <h2 className={`text-2xl sm:text-3xl font-black text-slate-100 tracking-[0.15em] uppercase drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)] ${theme === 'monolith' ? 'font-mono text-white' : ''}`}>
        {theme === 'monolith' ? `■ ▲ ${title}` : title}
      </h2>
      <div className={`hidden sm:block h-px flex-grow mb-2 transition-colors duration-500 ${style.divider}`}></div>
      <span className={`hidden sm:block font-mono text-xs tracking-widest mb-1.5 uppercase transition-colors duration-500 ${style.tag}`}>
        {theme === 'monolith' ? `/// ASCII.SEC.${displayTag} ///` : `SYS.${displayTag}`}
      </span>
    </div>
  );
};

export const ProjectItem = ({ 
  name, 
  symbol, 
  description, 
  links, 
  isFocusMode, 
  theme = 'cyber' 
}: any) => {
  const mainLink = links && links.length > 0 ? links[0].url : '#';
  
  const getThemeItemStyles = () => {
    switch (theme) {
      case 'void':
        return {
          containerBorder: 'border-slate-800 hover:border-sky-400/80',
          nodeBg: 'bg-[#08090c] border-slate-700 group-hover:border-sky-400 group-hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]',
          symbolGlow: 'drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]',
          titleHover: 'group-hover/title:text-sky-300',
          tooltipPill: 'bg-sky-400 text-slate-950 border-sky-200 shadow-[0_4px_20px_rgba(56,189,248,0.4)]',
          tooltipArrow: 'bg-sky-400 border-sky-200',
          descText: 'text-slate-300/80',
          linkFocus: 'bg-sky-950/40 border-sky-500/60 text-sky-300 hover:bg-sky-400 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]',
          linkNormal: 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-sky-300 hover:border-sky-400 hover:bg-sky-950/30 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)]'
        };
      case 'solaris':
        return {
          containerBorder: 'border-amber-900/30 hover:border-amber-500/80',
          nodeBg: 'bg-[#100d08] border-amber-900/50 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]',
          symbolGlow: 'drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]',
          titleHover: 'group-hover/title:text-amber-300',
          tooltipPill: 'bg-amber-400 text-slate-950 border-amber-200 shadow-[0_4px_20px_rgba(245,158,11,0.4)]',
          tooltipArrow: 'bg-amber-400 border-amber-200',
          descText: 'text-amber-100/70',
          linkFocus: 'bg-amber-950/40 border-amber-500/60 text-amber-300 hover:bg-amber-400 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]',
          linkNormal: 'bg-amber-950/20 border-amber-900/40 text-amber-500 hover:text-amber-200 hover:border-amber-400 hover:bg-amber-900/40 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]'
        };
      case 'synapse':
        return {
          containerBorder: 'border-fuchsia-900/30 hover:border-fuchsia-400/80',
          nodeBg: 'bg-[#12081a] border-fuchsia-900/50 group-hover:border-fuchsia-400 group-hover:shadow-[0_0_15px_rgba(217,70,239,0.4)]',
          symbolGlow: 'drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]',
          titleHover: 'group-hover/title:text-fuchsia-300',
          tooltipPill: 'bg-fuchsia-500 text-white border-fuchsia-200 shadow-[0_4px_20px_rgba(217,70,239,0.5)]',
          tooltipArrow: 'bg-fuchsia-500 border-fuchsia-200',
          descText: 'text-fuchsia-100/75',
          linkFocus: 'bg-fuchsia-950/40 border-fuchsia-500/60 text-fuchsia-300 hover:bg-lime-400 hover:text-slate-950 hover:border-lime-300 hover:shadow-[0_0_15px_rgba(190,242,100,0.5)]',
          linkNormal: 'bg-fuchsia-950/20 border-fuchsia-900/40 text-fuchsia-400 hover:text-lime-300 hover:border-fuchsia-400 hover:bg-fuchsia-900/40 hover:shadow-[0_0_15px_rgba(217,70,239,0.3)]'
        };
      case 'monolith':
        return {
          containerBorder: 'border-l-2 border-white hover:border-white',
          nodeBg: 'bg-black border-2 border-white rounded-none',
          symbolGlow: '',
          titleHover: 'group-hover/title:text-white underline decoration-white decoration-2',
          tooltipPill: 'bg-white text-black border-2 border-white font-mono rounded-none',
          tooltipArrow: 'bg-white border-white',
          descText: 'text-zinc-300 font-mono',
          linkFocus: 'bg-white text-black border-2 border-white hover:bg-zinc-300 rounded-none font-mono',
          linkNormal: 'bg-black text-white border border-white hover:bg-white hover:text-black rounded-none font-mono'
        };
      case 'cyber':
      default:
        return {
          containerBorder: 'border-emerald-900/20 hover:border-emerald-500/50',
          nodeBg: 'bg-[#0a0a0a] border-emerald-900/40 group-hover:border-emerald-500/50 rounded-full',
          symbolGlow: 'drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]',
          titleHover: 'group-hover/title:text-emerald-400',
          tooltipPill: 'bg-emerald-500 text-slate-950 border-emerald-300 shadow-[0_4px_20px_rgba(16,185,129,0.4)]',
          tooltipArrow: 'bg-emerald-500 border-emerald-300',
          descText: 'text-emerald-50/60',
          linkFocus: 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300 hover:bg-emerald-500 hover:text-slate-950 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]',
          linkNormal: 'bg-emerald-950/20 border-emerald-900/40 text-emerald-600 hover:text-emerald-300 hover:border-emerald-400 hover:bg-emerald-900/40 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]'
        };
    }
  };

  const style = getThemeItemStyles();
  const isMonolith = theme === 'monolith';
  
  return (
    <div className={`transition-all duration-300 group relative pl-6 sm:pl-8 border-l-2 ${style.containerBorder} ${isFocusMode ? 'mb-8' : 'mb-16'}`}>
      
      {/* Icon Node */}
      <div className={`absolute top-0 -left-[17px] sm:-left-[21px] w-8 h-8 flex items-center justify-center transition-all duration-500 ${style.nodeBg}`}>
        <div className={`text-xl leading-none transition-transform group-hover:scale-110 ${style.symbolGlow}`}>
          {isMonolith ? '▲' : symbol}
        </div>
      </div>
      
      <div className={isFocusMode ? 'mb-3' : 'mb-6'}>
        <div className="relative inline-block group/title">
          <a href={mainLink} target="_blank" rel="noreferrer" className="inline-block cursor-pointer">
            <h3 className={`text-xl sm:text-2xl font-black uppercase tracking-widest text-slate-100 transition-colors ${style.titleHover}`}>
              {isMonolith ? `[${name}]` : name}
            </h3>
          </a>
          
          {/* Tooltip */}
          <div className="absolute bottom-full left-0 mb-2 w-max opacity-0 group-hover/title:opacity-100 pointer-events-none transition-opacity duration-200 z-10">
            <div className={`text-xs font-black px-3 py-1 shadow-2xl flex items-center gap-2 border-2 ${style.tooltipPill}`}>
              <span className="text-sm uppercase tracking-widest">{name === 'Rebreather / StopSpiral' ? 'REBREATHER' : name.split('/')[0].trim()}</span>
            </div>
            <div className={`w-3 h-3 rotate-45 absolute -bottom-1.5 left-4 border-r-2 border-b-2 ${style.tooltipArrow}`}></div>
          </div>
        </div>

        {/* Description */}
        <AnimatePresence>
          {!isFocusMode && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className={`mt-3 text-sm max-w-3xl leading-relaxed font-medium tracking-wide overflow-hidden ${style.descText}`}
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
      
      {/* Links */}
      <div className="flex flex-wrap gap-2">
        {links.map((link: any, idx: number) => (
          <div key={idx} className="relative group/link">
            <a 
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center justify-center border text-[11px] font-bold tracking-wider uppercase transition-all cursor-pointer shadow-sm ${
                isFocusMode
                  ? `px-3.5 py-2 ${style.linkFocus}`
                  : `px-3 py-1.5 ${style.linkNormal}`
              }`}
            >
              {isMonolith ? `■ ${link.label}` : link.label}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FloatingControls = ({ 
  isFocusMode, 
  onToggleFocus,
  theme,
  onSelectTheme,
  isZenMode,
  onToggleZen
}: { 
  isFocusMode: boolean; 
  onToggleFocus: () => void;
  theme: ThemeType;
  onSelectTheme: (t: ThemeType) => void;
  isZenMode: boolean;
  onToggleZen: () => void;
}) => {
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const getFocusBtnStyle = () => {
    switch (theme) {
      case 'void':
        return isFocusMode 
          ? 'bg-sky-400 text-slate-950 border-sky-200 shadow-[0_0_25px_rgba(56,189,248,0.6)]'
          : 'bg-[#08090c]/90 text-slate-300 border-slate-700 hover:border-sky-400';
      case 'solaris':
        return isFocusMode
          ? 'bg-amber-400 text-slate-950 border-amber-200 shadow-[0_0_25px_rgba(245,158,11,0.6)]'
          : 'bg-[#100d08]/90 text-amber-300 border-amber-900/60 hover:border-amber-400';
      case 'synapse':
        return isFocusMode
          ? 'bg-fuchsia-500 text-white border-fuchsia-200 shadow-[0_0_25px_rgba(217,70,239,0.6)]'
          : 'bg-[#12081a]/90 text-fuchsia-300 border-fuchsia-900/60 hover:border-fuchsia-400';
      case 'monolith':
        return isFocusMode
          ? 'bg-white text-black border-2 border-white font-mono rounded-none'
          : 'bg-black text-white border-2 border-white font-mono rounded-none';
      case 'cyber':
      default:
        return isFocusMode
          ? 'bg-emerald-500 text-slate-950 border-emerald-300 shadow-[0_0_25px_rgba(16,185,129,0.6)]'
          : 'bg-[#0a0a0a]/90 text-emerald-400 border-emerald-900/60 hover:border-emerald-500/50 shadow-[0_0_20px_rgba(0,0,0,0.8)]';
    }
  };

  const getThemeBtnStyle = () => {
    switch (theme) {
      case 'void': return 'bg-sky-950/90 text-sky-300 border-sky-500/60 shadow-[0_0_20px_rgba(56,189,248,0.3)]';
      case 'solaris': return 'bg-amber-950/90 text-amber-300 border-amber-500/60 shadow-[0_0_20px_rgba(245,158,11,0.3)]';
      case 'synapse': return 'bg-fuchsia-950/90 text-fuchsia-300 border-fuchsia-500/60 shadow-[0_0_20px_rgba(217,70,239,0.3)]';
      case 'monolith': return 'bg-black text-white border-2 border-white font-mono rounded-none';
      case 'cyber':
      default: return 'bg-black/90 text-emerald-400 border-emerald-900/60 hover:border-emerald-500/60 shadow-[0_0_20px_rgba(0,0,0,0.8)]';
    }
  };

  const currentThemeMeta = THEMES.find(t => t.id === theme) || THEMES[0];

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
      
      {/* Expanded Theme Selection Drawer */}
      <AnimatePresence>
        {isThemeMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            className="mb-2 p-3.5 rounded-xl bg-[#08090d]/95 border border-slate-800 shadow-[0_10px_40px_rgba(0,0,0,0.9)] backdrop-blur-xl w-72 sm:w-84 space-y-2"
          >
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] font-mono tracking-widest text-slate-400 uppercase">
              <span>// VISUAL THEMES (AI ALTER EGOS)</span>
              <button 
                onClick={() => setIsThemeMenuOpen(false)}
                className="text-slate-500 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 gap-1.5 pt-1 max-h-80 overflow-y-auto">
              {THEMES.map((t) => {
                const isSelected = t.id === theme;
                return (
                  <button
                    key={t.id}
                    onClick={() => {
                      onSelectTheme(t.id);
                      setIsThemeMenuOpen(false);
                    }}
                    className={`text-left p-2.5 rounded-lg border transition-all cursor-pointer flex items-start gap-2.5 ${
                      isSelected 
                        ? 'bg-slate-800/90 border-slate-400 text-white shadow-lg' 
                        : 'bg-black/40 border-slate-800/60 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <span className="text-lg leading-none mt-0.5">{t.symbol}</span>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold tracking-wider">{t.name}</span>
                        {isSelected && (
                          <span className="text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1 rounded">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-400/90 leading-tight mt-1">
                        {t.palette}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Buttons Row */}
      <div className="flex items-center gap-2">
        {/* Zen Mode Switcher */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleZen}
          className={`px-3 py-2.5 rounded-full border shadow-2xl backdrop-blur-md font-mono text-[11px] font-bold tracking-wider flex items-center gap-1.5 transition-all duration-300 cursor-pointer ${
            isZenMode
              ? 'bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.6)]'
              : 'bg-black/80 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-500'
          }`}
          title="Toggle Zen Mode [Press ESC or Z]"
        >
          <span>👁️</span>
          <span className="hidden xs:inline">{isZenMode ? 'ZEN: ON' : 'ZEN [Z]'}</span>
        </motion.button>

        {/* Theme Drawer Switcher Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsThemeMenuOpen(prev => !prev)}
          className={`px-3.5 py-2.5 rounded-full border shadow-2xl backdrop-blur-md font-mono text-[11px] font-bold tracking-wider flex items-center gap-2 transition-all duration-300 cursor-pointer ${getThemeBtnStyle()}`}
          title="Open AI Visual Themes Menu"
        >
          <span>{currentThemeMeta.symbol}</span>
          <span className="hidden xs:inline">{currentThemeMeta.name}</span>
          <span className="text-[10px] opacity-60">▼</span>
        </motion.button>

        {/* Focus Mode Switcher Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleFocus}
          className={`px-4 py-2.5 rounded-full border shadow-2xl backdrop-blur-md font-mono text-xs font-bold tracking-wider flex items-center gap-2.5 transition-all duration-300 cursor-pointer ${getFocusBtnStyle()}`}
          title={isFocusMode ? "Switch to Explorer Mode" : "Switch to Focus Mode"}
        >
          <span className="text-sm">{isFocusMode ? '⚡' : '🧭'}</span>
          <span>{isFocusMode ? 'FOCUS: ON' : 'EXPLORER'}</span>
          <span className={`w-2 h-2 rounded-full ${isFocusMode ? 'bg-current animate-ping' : 'opacity-60 bg-current'}`}></span>
        </motion.button>
      </div>
    </div>
  );
};
