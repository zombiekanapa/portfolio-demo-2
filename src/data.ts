export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  symbol: string;
  description: string;
  links: ProjectLink[];
}

export const projects: Record<string, Project[]> = {
  HEALTH: [
    {
      name: 'Gabber Runner',
      symbol: '🤘',
      description: 'Neuro‑Rhythm Engine for Human Motion. A running companion built on one simple discovery: your nervous system reacts to BPM like it’s a cheat code.',
      links: [
        { label: 'LOVABLE VER 2.0', url: 'https://gabber-runner.lovable.app/' },
        { label: 'LOVABLE - PROTOTYPE', url: 'https://gabberrunner.lovable.app/' }
      ]
    },
    {
      name: 'Rebreather / StopSpiral',
      symbol: '☯',
      description: 'A Tiny Tool for Big Emotional Storms. A minimalist visual + audio guide for ancient breathing techniques, redesigned for modern chaos.',
      links: [
        { label: 'LOVABLE', url: 'https://rebreather.lovable.app/' },
        { label: 'REBREATHER - GEM 1', url: 'https://share.gemini.google/zalozTH0CXXY' },
        { label: 'STOPSPIRAL - GEM 2', url: 'https://share.gemini.google/F2IKnmFs9XEA' },
        { label: 'MINDFULBREATS', url: 'https://mindful-breaths--szymonkarpierz.replit.app/' }
      ]
    },
    {
      name: 'Jumpstart / Dopaminator',
      symbol: '⚡',
      description: 'Dopamine Booster for ADHD Focus, and a minimalist cycle timer designed for adults with ADHD-based executive dysfunction.',
      links: [
        { label: 'LOVABLE', url: 'https://dopaminator.lovable.app/' },
        { label: 'NETLIFY', url: 'https://dopaminator.netlify.app/' },
        { label: 'GEM 2.0', url: 'https://share.gemini.google/pnKxkqnToMJo' },
        { label: 'GEM VER1', url: 'https://share.gemini.google/e1LvbryAog4S' },
        { label: 'CODEPEN', url: 'https://codepen.io/zombiekanapa/full/MYJXYoG' }
      ]
    }
  ],
  SECURITY: [
    {
      name: 'SafetyScan',
      symbol: '☣',
      description: 'Take photos, scan for threats, stay safe!',
      links: [
        { label: 'LOVABLE', url: 'https://safetyscan.lovable.app/' },
        { label: 'YELLOW - TTS', url: 'https://gemini.google.com/share/db75accb5fc8?skid=4162005c-ddf8-433a-bb8e-5100d155757f' },
        { label: 'GREEN UI', url: 'https://share.gemini.google/t3iHHbyPnKXt' },
        { label: 'BASE44', url: 'https://safetyscan-app.base44.app/' },
        { label: 'CLAUDE ARTIFACT', url: 'https://claude.ai/chat/300b6814-8a6d-4962-a399-70bc9fc18780?artifactId=safetyscan.html&versionUuid=2e3bfa9c-32da-42de-ac6c-06426141729b' }
      ]
    },
    {
      name: 'Evacuate',
      symbol: '⚠',
      description: 'Evacuation instructions and emergency info.',
      links: [
        { label: 'VERCEL', url: 'https://evacuate-eight.vercel.app/' },
        { label: 'NETLIFY', url: 'https://ewakuacja.netlify.app/' }
      ]
    },
    {
      name: 'Zombie Landing Pages',
      symbol: '🧟',
      description: 'Previous landing page iterations and mockups.',
      links: [
        { label: 'GITHUB', url: 'https://kanapazombie.github.io/' },
        { label: 'FIGMA', url: 'https://zombiekanapa.figma.site/' },
        { label: 'GREEN', url: 'https://zombiekanapa.free.site.pro/' }
      ]
    }
  ],
  EXPERIMENTS: [
    {
      name: 'The Trolley Problem',
      symbol: '🚋',
      description: 'A science fiction short story based on a real conversation between me and Grok, edited by Claude, and narrated by a voice clone TTS model based on Sir Arthur C. Clarke.',
      links: [
        { label: 'YOUTUBE', url: 'https://youtu.be/AKC5vn8SKI0' }
      ]
    },
    {
      name: 'AI Fictional Soundtrack Scores',
      symbol: '🎵',
      description: 'A collection of snippets and narration tests promoting the upcoming release of a conceptual set of cinematic themes for non-existent movies, created with Udio and AI agents.',
      links: [
        { label: 'YOUTUBE', url: 'https://youtu.be/w5yfFRAFnnc' },
        { label: 'HYCEAN BLUE GALLERY', url: 'https://www.bing.com/saves?FORM=IRPCOL&collId=077517e2b9ca4a2aa1d7ba10e26d89e9' }
      ]
    },
    {
      name: 'Aotearoa',
      symbol: '🌊',
      description: 'A conceptual story, soundtrack score and English narration piece.',
      links: [
        { label: 'BANDCAMP', url: 'https://zombiekanapa.bandcamp.com/track/aotearoa-story-english' }
      ]
    },
    {
      name: 'Ostatnia Niedziela',
      symbol: '📻',
      description: 'Słuchowisko audio drama and conceptual atmospheric soundtrack score.',
      links: [
        { label: 'BANDCAMP - SŁUCHOWISKO', url: 'https://zombiekanapa.bandcamp.com/album/ostatnia-niedziela-s-uchowisko' }
      ]
    },
    {
      name: 'Pax Polonia',
      symbol: '🦅',
      description: 'Conceptual alternate history soundtrack score and narrative video experiment.',
      links: [
        { label: 'YOUTUBE', url: 'https://www.youtube.com/watch?v=Aa2nTY-Z6RI&t=379s' }
      ]
    }
  ],
  CULTURE: [
    {
      name: 'Shaolin: Monar',
      symbol: '⛩️',
      description: 'Community and cultural story exploration and documentary video.',
      links: [
        { label: 'YOUTUBE', url: 'https://youtu.be/4xPPCwoSB9E' }
      ]
    },
    {
      name: 'AstroLab',
      symbol: '🔭',
      description: 'Astronomical educational journey exploring cosmic mysteries through sound and visual media.',
      links: [
        { label: 'YOUTUBE', url: 'https://youtu.be/lNpq56hYbMA' }
      ]
    },
    {
      name: 'One Hundred Seconds to Midnight',
      symbol: '⏳',
      description: 'Conceptual reflection and audio-visual essay exploring existential risks and the Doomsday Clock.',
      links: [
        { label: 'YOUTUBE', url: 'https://youtu.be/Y8-UorUJgDE' }
      ]
    },
    {
      name: 'Hubble Ambient Journey',
      symbol: '🌌',
      description: 'Deep space ambient visual & sound journey through high-resolution Hubble Space Telescope captures.',
      links: [
        { label: 'YOUTUBE', url: 'https://youtu.be/Q6FK3UtWvco' }
      ]
    },
    {
      name: 'Nobody is Nobody',
      symbol: '👥',
      description: 'Community-centered reflection on human dignity, connections, and personal narratives.',
      links: [
        { label: 'YOUTUBE', url: 'https://youtu.be/5bD--yGMU5w' }
      ]
    },
    {
      name: 'A Sign in Space',
      symbol: '📡',
      description: 'Decoding extraterrestrial signals and generative alien visual galleries created for the global interstellar communication project.',
      links: [
        { label: 'VIDEO (YOUTUBE)', url: 'https://youtu.be/7r2VeCAm3hw' },
        { label: 'ALIEN IMAGE GALLERY', url: 'https://asignin.space/a-collection-of-images-prompted-by-digital-creator-szymon-karpierz/' }
      ]
    }
  ],
  'AI-EYE': [
    {
      name: 'ArtStation Portfolio',
      symbol: '🎨',
      description: 'Digital art concepts, prompt crafting, and generative visual experiment portfolios.',
      links: [
        { label: 'ARTSTATION', url: 'https://zombiekanapa.artstation.com/' }
      ]
    },
    {
      name: 'Bing Collections: Blue',
      symbol: '💎',
      description: 'Curated generative art collection archive and aesthetic mood boards.',
      links: [
        { label: 'BING COLLECTIONS: BLUE', url: 'https://www.bing.com/saves?FORM=O2HV46&collId=077517e2b9ca4a2aa1d7ba10e26d89e9' }
      ]
    },
    {
      name: 'Red Hive 01',
      symbol: '🔴',
      description: 'Generative video and visual aesthetic synthesizer test.',
      links: [
        { label: 'YOUTUBE', url: 'https://youtu.be/LKMIWx8aSKY' }
      ]
    },
    {
      name: 'Video: Veo 2',
      symbol: '🎥',
      description: 'Generative video exploration with DeepMind’s Veo 2 model.',
      links: [
        { label: 'YOUTUBE', url: 'https://youtu.be/7N-JgLDQU4A' }
      ]
    },
    {
      name: 'AI Pagan Fiction',
      symbol: '🌿',
      description: 'Generative visual storytelling and mythic folklore worldbuilding.',
      links: [
        { label: 'YOUTUBE', url: 'https://youtu.be/sztltGgdGAo' }
      ]
    }
  ],
  DOWNLOAD: [
    {
      name: 'Kanapa-Download Vault',
      symbol: '💾',
      description: 'Standalone HTML files, tools, and offline bundles (Dopaminator, StopSpiral) for zero-dependency local execution directly in your browser.',
      links: [
        { label: 'GITHUB: KANAPAZOMBIE', url: 'https://github.com/KanapaZombie/kanapa-download' }
      ]
    },
    {
      name: 'ZombieKanapa DJ Sets & Mixtapes',
      symbol: '🎛️',
      description: 'Live DJ sets, BPM training sessions, and curated electronic mixtapes hosted on Audio.com.',
      links: [
        { label: 'AUDIO.COM - ZOMBIE MIXTAPEZ', url: 'https://audio.com/zombiekanapa/collections/zombie-mixtapez' }
      ]
    },
    {
      name: 'Remixes & Mashups Vault',
      symbol: '🔊',
      description: 'Curated remixes, mashups, edits, and experimental audio tracks.',
      links: [
        { label: 'SOUNDCLOUD - TRACKS', url: 'https://soundcloud.com/szymon-karpierz/tracks' }
      ]
    }
  ]
};
