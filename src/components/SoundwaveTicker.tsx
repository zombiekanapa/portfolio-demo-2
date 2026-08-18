import React, { useState, useEffect, useRef } from 'react';
import { ThemeType } from './Shared';

interface SoundwaveTickerProps {
  theme?: ThemeType;
}

export const SoundwaveTicker: React.FC<SoundwaveTickerProps> = ({ theme = 'cyber' }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isContinuousDrone, setIsContinuousDrone] = useState(false);
  const [bars, setBars] = useState<number[]>([40, 60, 30, 80, 50, 90, 35, 70, 45, 65, 85, 40]);
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const droneNodesRef = useRef<{
    carrier: OscillatorNode;
    lfo: OscillatorNode;
    lfoGain: GainNode;
    mainGain: GainNode;
  } | null>(null);
  const swellIntervalRef = useRef<any>(null);

  // Visual animated equalizer bars
  useEffect(() => {
    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.floor(Math.random() * 75) + 20));
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const getAudioContext = () => {
    if (!audioCtxRef.current) {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      audioCtxRef.current = new AudioCtxClass();
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // 1. Trigger the Periodic Sin + Square Wave Swell
  // Fading in sin + square waves moving up and down with resonant filter
  const triggerHarmonicSwell = () => {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      const duration = 6.0;

      // Master Gain for swell
      const swellGain = ctx.createGain();
      swellGain.gain.setValueAtTime(0.0001, now);
      // Gentle fade in
      swellGain.gain.exponentialRampToValueAtTime(0.025, now + 2.0);
      // Fade out
      swellGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      // Low-pass filter for smooth warmth
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(300, now);
      filter.frequency.exponentialRampToValueAtTime(1400, now + 2.5);
      filter.frequency.exponentialRampToValueAtTime(250, now + duration);
      filter.Q.setValueAtTime(4.0, now);

      // Oscillator 1: Sinusoid gliding up and down
      const oscSin = ctx.createOscillator();
      oscSin.type = 'sine';
      oscSin.frequency.setValueAtTime(130.81, now); // C3
      oscSin.frequency.exponentialRampToValueAtTime(261.63, now + 2.5); // C4
      oscSin.frequency.exponentialRampToValueAtTime(130.81, now + duration); // C3

      // Oscillator 2: Subtle harmonic Square wave (detuned + octave)
      const oscSquare = ctx.createOscillator();
      oscSquare.type = 'square';
      oscSquare.frequency.setValueAtTime(131.5, now);
      oscSquare.frequency.exponentialRampToValueAtTime(196.00, now + 2.8); // G3
      oscSquare.frequency.exponentialRampToValueAtTime(65.41, now + duration); // C2

      const sqGain = ctx.createGain();
      sqGain.gain.value = 0.35; // keep square softer

      oscSin.connect(swellGain);
      oscSquare.connect(sqGain);
      sqGain.connect(swellGain);
      swellGain.connect(filter);
      filter.connect(ctx.destination);

      oscSin.start(now);
      oscSquare.start(now);
      oscSin.stop(now + duration);
      oscSquare.stop(now + duration);

      setIsPlaying(true);
      setTimeout(() => {
        if (!isContinuousDrone) setIsPlaying(false);
      }, duration * 1000);
    } catch (e) {
      console.warn("Web Audio swell error:", e);
    }
  };

  // 2. Start/Stop Continuous LFO Sinusoid Ambient Drone
  const toggleContinuousLFO = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const ctx = getAudioContext();

      if (isContinuousDrone && droneNodesRef.current) {
        // Stop drone
        droneNodesRef.current.mainGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.0);
        setTimeout(() => {
          droneNodesRef.current?.carrier.stop();
          droneNodesRef.current?.lfo.stop();
          droneNodesRef.current = null;
        }, 1100);
        clearInterval(swellIntervalRef.current);
        setIsContinuousDrone(false);
        setIsPlaying(false);
      } else {
        // Start continuous generative LFO
        const now = ctx.currentTime;

        // Carrier Sinusoid: Warm 110Hz (A2)
        const carrier = ctx.createOscillator();
        carrier.type = 'sine';
        carrier.frequency.setValueAtTime(110, now);

        // LFO (Low Frequency Oscillator) modulating the carrier pitch gently at 0.18 Hz
        const lfo = ctx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(0.18, now);

        const lfoGain = ctx.createGain();
        lfoGain.gain.setValueAtTime(6.0, now); // +/- 6 Hz pitch wander

        lfo.connect(carrier.frequency);

        // Main gain with soft fade-in
        const mainGain = ctx.createGain();
        mainGain.gain.setValueAtTime(0.0001, now);
        mainGain.gain.exponentialRampToValueAtTime(0.018, now + 2.0);

        carrier.connect(mainGain);
        mainGain.connect(ctx.destination);

        carrier.start(now);
        lfo.start(now);

        droneNodesRef.current = { carrier, lfo, lfoGain, mainGain };
        setIsContinuousDrone(true);
        setIsPlaying(true);

        // Set up periodic automatic sin + square swell every 22 seconds
        swellIntervalRef.current = setInterval(() => {
          triggerHarmonicSwell();
        }, 22000);
      }
    } catch (e) {
      console.warn("Web Audio drone error:", e);
    }
  };

  const getThemeColor = () => {
    switch (theme) {
      case 'void': return 'bg-sky-400 text-sky-400 border-sky-500/30';
      case 'solaris': return 'bg-amber-400 text-amber-400 border-amber-500/30';
      case 'synapse': return 'bg-fuchsia-400 text-fuchsia-400 border-fuchsia-500/30';
      case 'monolith': return 'bg-white text-white border-white/40';
      case 'cyber':
      default: return 'bg-emerald-400 text-emerald-400 border-emerald-500/30';
    }
  };

  return (
    <div className="hidden md:flex items-center gap-2">
      {/* Interactive Soundwave & Trigger Button */}
      <div 
        onClick={triggerHarmonicSwell}
        className={`flex items-center gap-2 px-2.5 py-1 rounded-sm border bg-black/40 backdrop-blur-sm cursor-pointer hover:opacity-90 transition-all text-[10px] font-mono select-none ${getThemeColor().split(' ')[2]}`}
        title="Click to trigger Sinusoid + Square Harmonic Swell (LFO Ambient Audio)"
      >
        <span className="opacity-80 tracking-wider font-bold">
          {isPlaying ? '⚡ SWELL.LFO' : 'BPM // 130'}
        </span>
        <div className="flex items-end gap-0.5 h-3.5 w-12">
          {bars.map((height, i) => (
            <div
              key={i}
              className={`w-0.5 rounded-t-xs transition-all duration-100 ${getThemeColor().split(' ')[0]}`}
              style={{ height: `${height}%`, opacity: (i % 2 === 0 ? 0.9 : 0.6) }}
            />
          ))}
        </div>
      </div>

      {/* Toggle Continuous Ambient Generator */}
      <button
        onClick={toggleContinuousLFO}
        className={`px-2 py-1 rounded-sm border font-mono text-[9px] font-bold tracking-widest transition-all cursor-pointer ${
          isContinuousDrone 
            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.3)] animate-pulse' 
            : 'bg-black/40 text-slate-400 border-slate-800 hover:text-slate-200'
        }`}
        title={isContinuousDrone ? "Stop Continuous Ambient LFO Drone" : "Start Continuous Ambient LFO Sinusoid Drone + Auto Swell"}
      >
        {isContinuousDrone ? 'DRONE: ON' : 'DRONE: OFF'}
      </button>
    </div>
  );
};
