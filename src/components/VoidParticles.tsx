import React, { useMemo } from 'react';
import { motion } from 'motion/react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  driftX: number;
  driftY: number;
  opacity: number;
  isSquare: boolean;
}

export const VoidParticles: React.FC = () => {
  // Generate a lightweight, deterministic set of dust/data particles
  const particles: Particle[] = useMemo(() => {
    const arr: Particle[] = [];
    for (let i = 0; i < 36; i++) {
      arr.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 18 + 12,
        delay: Math.random() * 5,
        driftX: (Math.random() - 0.5) * 60,
        driftY: (Math.random() - 0.5) * 80 - 40,
        opacity: Math.random() * 0.45 + 0.15,
        isSquare: i % 3 === 0
      });
    }
    return arr;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{
            x: `${p.x}vw`,
            y: `${p.y}vh`,
            opacity: 0
          }}
          animate={{
            x: [`${p.x}vw`, `${p.x + p.driftX / 10}vw`, `${p.x}vw`],
            y: [`${p.y}vh`, `${p.y + p.driftY / 10}vh`, `${p.y}vh`],
            opacity: [0, p.opacity, p.opacity * 0.4, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.isSquare ? '#38bdf8' : '#e2e8f0',
            boxShadow: p.isSquare ? '0 0 6px rgba(56,189,248,0.8)' : '0 0 4px rgba(255,255,255,0.6)',
            borderRadius: p.isSquare ? '0px' : '50%'
          }}
        />
      ))}
    </div>
  );
};
