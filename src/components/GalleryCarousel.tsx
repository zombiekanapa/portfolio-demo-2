import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../data';
import { ThemeType } from './Shared';

interface GalleryCarouselProps {
  items: Project[];
  theme?: ThemeType;
  isFocusMode?: boolean;
}

export const GalleryCarousel: React.FC<GalleryCarouselProps> = ({ 
  items, 
  theme = 'cyber', 
  isFocusMode = false 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];
  const mainLink = currentItem.links && currentItem.links.length > 0 ? currentItem.links[0].url : '#';

  const getCarouselStyles = () => {
    switch (theme) {
      case 'void':
        return {
          headerTag: 'text-sky-400',
          navBtn: 'bg-slate-900/80 border-slate-700 text-sky-400 hover:bg-sky-950/60 hover:border-sky-400 hover:shadow-[0_0_12px_rgba(56,189,248,0.4)]',
          card: 'bg-[#080b11]/90 border-slate-800 shadow-[0_4px_30px_rgba(0,0,0,0.6)]',
          iconNode: 'bg-[#050608] border-slate-700 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.3)]',
          title: 'text-slate-100 hover:text-sky-300',
          tooltipPill: 'bg-sky-400 text-slate-950 border-sky-200 shadow-[0_4px_20px_rgba(56,189,248,0.4)]',
          tooltipArrow: 'bg-sky-400 border-sky-200',
          entryBadge: 'bg-sky-950/40 border-sky-500/30 text-sky-400',
          desc: 'text-slate-300/80',
          linkBtn: 'bg-slate-900 border-slate-700 text-sky-300 hover:bg-sky-400 hover:text-slate-950 hover:border-sky-300 hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]',
          pillActive: 'bg-sky-400 text-slate-950 border-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.5)]',
          pillInactive: 'bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
        };
      case 'solaris':
        return {
          headerTag: 'text-amber-400',
          navBtn: 'bg-amber-950/30 border-amber-900/60 text-amber-400 hover:bg-amber-900/50 hover:border-amber-400 hover:shadow-[0_0_12px_rgba(245,158,11,0.4)]',
          card: 'bg-[#100d08]/90 border-amber-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.6)]',
          iconNode: 'bg-[#0a0805] border-amber-900/60 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)]',
          title: 'text-slate-100 hover:text-amber-300',
          tooltipPill: 'bg-amber-400 text-slate-950 border-amber-200 shadow-[0_4px_20px_rgba(245,158,11,0.4)]',
          tooltipArrow: 'bg-amber-400 border-amber-200',
          entryBadge: 'bg-amber-950/40 border-amber-500/30 text-amber-400',
          desc: 'text-amber-100/75',
          linkBtn: 'bg-amber-950/40 border-amber-900/60 text-amber-400 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-300 hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]',
          pillActive: 'bg-amber-400 text-slate-950 border-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.5)]',
          pillInactive: 'bg-black/40 border-amber-950/60 text-amber-600 hover:border-amber-700 hover:text-amber-400'
        };
      case 'synapse':
        return {
          headerTag: 'text-fuchsia-400',
          navBtn: 'bg-fuchsia-950/30 border-fuchsia-900/60 text-fuchsia-400 hover:bg-fuchsia-900/50 hover:border-lime-400 hover:shadow-[0_0_12px_rgba(190,242,100,0.4)]',
          card: 'bg-[#12081c]/90 border-fuchsia-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.6)]',
          iconNode: 'bg-[#09040d] border-fuchsia-900/60 text-fuchsia-400 shadow-[0_0_15px_rgba(217,70,239,0.3)]',
          title: 'text-slate-100 hover:text-fuchsia-300',
          tooltipPill: 'bg-fuchsia-500 text-white border-fuchsia-200 shadow-[0_4px_20px_rgba(217,70,239,0.4)]',
          tooltipArrow: 'bg-fuchsia-500 border-fuchsia-200',
          entryBadge: 'bg-fuchsia-950/40 border-fuchsia-500/30 text-fuchsia-400',
          desc: 'text-fuchsia-100/75',
          linkBtn: 'bg-fuchsia-950/40 border-fuchsia-900/60 text-fuchsia-300 hover:bg-lime-400 hover:text-slate-950 hover:border-lime-300 hover:shadow-[0_0_15px_rgba(190,242,100,0.5)]',
          pillActive: 'bg-fuchsia-500 text-white border-fuchsia-300 shadow-[0_0_10px_rgba(217,70,239,0.5)]',
          pillInactive: 'bg-black/40 border-fuchsia-950/60 text-fuchsia-600 hover:border-fuchsia-700 hover:text-fuchsia-400'
        };
      case 'monolith':
        return {
          headerTag: 'text-white font-mono',
          navBtn: 'bg-black border-2 border-white text-white hover:bg-white hover:text-black font-mono rounded-none',
          card: 'bg-black border-2 border-white shadow-none rounded-none',
          iconNode: 'bg-black border-2 border-white text-white rounded-none',
          title: 'text-white font-mono hover:underline',
          tooltipPill: 'bg-white text-black border-2 border-white font-mono rounded-none',
          tooltipArrow: 'bg-white border-white',
          entryBadge: 'bg-black border border-white text-white font-mono rounded-none',
          desc: 'text-zinc-300 font-mono',
          linkBtn: 'bg-black border border-white text-white hover:bg-white hover:text-black font-mono rounded-none',
          pillActive: 'bg-white text-black border-2 border-white font-mono rounded-none',
          pillInactive: 'bg-black border border-zinc-700 text-zinc-400 hover:border-white hover:text-white font-mono rounded-none'
        };
      case 'cyber':
      default:
        return {
          headerTag: 'text-emerald-500',
          navBtn: 'bg-emerald-950/30 border-emerald-900/50 text-emerald-400 hover:bg-emerald-900/40 hover:border-emerald-400 hover:shadow-[0_0_12px_rgba(16,185,129,0.3)]',
          card: 'bg-[#0a0a0a]/90 border-emerald-900/40 shadow-[0_4px_25px_rgba(0,0,0,0.7)]',
          iconNode: 'bg-[#0a0a0a] border-emerald-900/60 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]',
          title: 'text-slate-100 hover:text-emerald-400',
          tooltipPill: 'bg-emerald-500 text-slate-950 border-emerald-300 shadow-[0_4px_20px_rgba(16,185,129,0.4)]',
          tooltipArrow: 'bg-emerald-500 border-emerald-300',
          entryBadge: 'bg-emerald-950/30 border-emerald-900/50 text-emerald-500',
          desc: 'text-emerald-50/70',
          linkBtn: 'bg-emerald-950/40 border-emerald-900/60 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-300 hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]',
          pillActive: 'bg-emerald-500 text-slate-950 border-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.4)]',
          pillInactive: 'bg-black/40 border-emerald-900/30 text-emerald-600 hover:border-emerald-500/40 hover:text-emerald-400'
        };
    }
  };

  const style = getCarouselStyles();
  const isMonolith = theme === 'monolith';

  return (
    <div className="relative w-full">
      {/* Top Carousel Navigation Bar */}
      <div className={`flex items-center justify-between mb-4 pb-2 border-b ${isMonolith ? 'border-white border-solid' : 'border-dashed border-slate-800/60'}`}>
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${style.headerTag}`}>
            {isMonolith ? `// ASCII.ARCHIVE: [${String(currentIndex + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}] ▲` : `// GALLERY ARCHIVE: ${String(currentIndex + 1).padStart(2, '0')} / ${String(items.length).padStart(2, '0')}`}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous gallery item"
            className={`p-2 transition-all cursor-pointer text-xs font-mono font-bold ${style.navBtn}`}
          >
            {isMonolith ? '▲ PREV' : '← PREV'}
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next gallery item"
            className={`p-2 transition-all cursor-pointer text-xs font-mono font-bold ${style.navBtn}`}
          >
            {isMonolith ? 'NEXT ▲' : 'NEXT →'}
          </button>
        </div>
      </div>

      {/* Main Slide Card with Road Sign Tooltip */}
      <div className="relative overflow-hidden min-h-[160px] sm:min-h-[190px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`p-6 sm:p-8 relative transition-all duration-300 ${style.card}`}
          >
            {/* Symbol Marker */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 flex items-center justify-center border transition-all ${style.iconNode}`}>
                  <span className="text-2xl leading-none">{isMonolith ? '■' : currentItem.symbol}</span>
                </div>

                {/* Road Sign Title */}
                <div className="relative group/title inline-block">
                  <a href={mainLink} target="_blank" rel="noreferrer" className="inline-block cursor-pointer">
                    <h3 className={`text-xl sm:text-2xl font-black uppercase tracking-wider transition-colors ${style.title}`}>
                      {isMonolith ? `[${currentItem.name}]` : currentItem.name}
                    </h3>
                  </a>

                  {/* Road Sign Tooltip Pill */}
                  <div className="absolute bottom-full left-0 mb-2 w-max opacity-0 group-hover/title:opacity-100 pointer-events-none transition-opacity duration-200 z-20">
                    <div className={`text-xs font-black px-3 py-1 shadow-2xl flex items-center gap-2 border-2 ${style.tooltipPill}`}>
                      <span className="text-sm uppercase tracking-widest">{currentItem.name.split(' ')[0]}</span>
                    </div>
                    <div className={`w-3 h-3 rotate-45 absolute -bottom-1.5 left-4 border-r-2 border-b-2 ${style.tooltipArrow}`}></div>
                  </div>
                </div>
              </div>

              {/* Slide Counter Badge */}
              <span className={`text-[10px] font-mono px-2.5 py-1 uppercase tracking-widest ${style.entryBadge}`}>
                {isMonolith ? `▲ ENTRY_${currentIndex + 1}` : `ENTRY ${currentIndex + 1}`}
              </span>
            </div>

            {/* Description (hides when in focus mode) */}
            <AnimatePresence>
              {!isFocusMode && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`mt-2 mb-6 text-sm max-w-3xl leading-relaxed font-medium tracking-wide ${style.desc}`}
                >
                  {currentItem.description}
                </motion.p>
              )}
            </AnimatePresence>

            {/* Link Launchers */}
            <div className="flex flex-wrap gap-2 pt-2">
              {currentItem.links.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center justify-center font-bold tracking-wider uppercase transition-all cursor-pointer shadow-sm ${
                    isFocusMode ? 'px-4 py-2 text-xs' : 'px-3.5 py-2 text-[11px]'
                  } ${style.linkBtn}`}
                >
                  {isMonolith ? `■ ${link.label} [↗]` : `${link.label} ↗`}
                </a>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Selection Thumbnail/Pill Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
        {items.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`px-3 py-1 text-[10px] font-mono font-bold tracking-wider uppercase transition-all cursor-pointer border ${
              currentIndex === idx ? style.pillActive : style.pillInactive
            }`}
          >
            {isMonolith ? '▲' : item.symbol} {item.name.split(' ')[0]}
          </button>
        ))}
      </div>
    </div>
  );
};
