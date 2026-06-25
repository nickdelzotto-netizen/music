samples({
  shama: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/shama_norm.wav',
  leothrix: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/leothrix_norm.wav'
});

arrange(
  [4, stack(
    s("<leothrix shama>").slow(4).room(0.8).gain(sine.slow(8).range(0.2, 0.5))
  )],
  [8, stack(
    s("bd*2 hh*4 sd hh*4").fast(1.4),
    note("c2 eb2 g2 c2").s("sine").gain(0.6).fast(1.4),
    note("<[c3,eb3,g3] [bb2,d3,f3]>").s("gm_pad_warm").room(0.6).gain(0.3),
    s("<leothrix shama>").slow(4).room(0.8).gain(sine.slow(8).range(0.2, 0.5))
  )]
)

####VERSION 2#####
  samples({
  shama: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/shama_norm.wav',
  leothrix: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/leothrix_norm.wav'
});

arrange(
  // INTRO - birds alone, no beat
  [4, stack(
    s("<leothrix shama>")
      .begin(0.1).end(0.3)
      .room(0.8)
      .gain(sine.slow(8).range(0.2, 0.5))
  )],

  // BUILD-UP - filter sweep rising, light percussion creeping in
  [4, stack(
    s("hh*4").fast(1.2).gain(0.15).lpf(sine.slow(4).range(500, 5000)),
    note("<c2 eb2>").s("sine").gain(0.4).lpf(sine.slow(4).range(200, 1200)).fast(0.7),
    s("<leothrix shama>")
      .begin(0.1).end(0.3)
      .room(0.8)
      .gain(sine.slow(4).range(0.3, 0.6))
  )],

  // DROP - full flowing beat, melodic arp, birds woven in between hits
  [8, stack(
    s("bd ~ bd ~ ~ sd ~ ~ bd ~ ~ sd ~ ~ ~ ~").fast(1.4).gain(0.5).lpf(2000),
    s("hh*8").fast(1.4).gain(0.2).lpf(4000),
    note("<c2 eb2>").s("sine").gain(0.5).lpf(500).fast(0.7),
    note("<[c3,eb3,g3] [bb2,d3,f3]>").s("gm_pad_warm").room(0.6).gain(0.3),
    note("<c4 d4 eb4 g4>").s("sine").gain(0.2).room(0.4).fast(1.4), // soft arpeggio
    s("<leothrix shama>")
      .begin(0.1).end(0.3)
      .room(0.8)
      .gain(0.4)
      .sometimesBy(0.5, x => x)
  )],

  // BREAKDOWN - drop falls away, birds get the spotlight again before looping
  [4, stack(
    note("<[c3,eb3,g3] [bb2,d3,f3]>").s("gm_pad_warm").room(0.8).gain(0.15),
    s("<leothrix shama>")
      .begin(0.1).end(0.3)
      .room(0.9)
      .gain(sine.slow(4).range(0.3, 0.6))
  )]
)

The HIKE

samples({
  shama: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/shama_norm.wav',
  leothrix: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/leothrix_norm.wav'
});

arrange(
  // 1. TRAILHEAD - shama alone, echoing, like a call into the woods
  [4, stack(
    s("shama ~ ~ ~ ~ ~ ~ ~")
      .begin(0.1).end(0.3)
      .room(0.95)
      .delay(0.4)
      .gain(0.5)
  )],

  // 2. ASCENT - footsteps (hihat) begin, tension rising, shama still calling
  [4, stack(
    s("hh*4").fast(1.1).gain(sine.slow(4).range(0.1, 0.3)).lpf(sine.slow(4).range(800, 4000)),
    note("<c2 eb2>").s("sine").gain(sine.slow(4).range(0.1, 0.4)).lpf(600).fast(0.7),
    s("shama ~ ~ ~")
      .begin(0.1).end(0.3)
      .room(0.8)
      .gain(0.4)
  )],

  // 3. PEAK - leothrix arrives, full beat, low bass + high birds = the contrast
  [8, stack(
    s("bd ~ bd ~ ~ sd ~ ~ bd ~ ~ sd ~ ~ ~ ~").fast(1.4).gain(0.5).lpf(2000),
    s("hh*8").fast(1.4).gain(0.2).lpf(4000),
    note("<c2 eb2>").s("sine").gain(0.55).lpf(450).fast(0.7), // deep low bass
    note("<[c3,eb3,g3] [bb2,d3,f3]>").s("gm_pad_warm").room(0.6).gain(0.3),
    s("<leothrix shama>")
      .begin(0.1).end(0.3)
      .room(0.8)
      .gain(0.5)
      .hpf(1500) // keeps birds bright/high, away from the bass register
  )],

  // 4. DESCENT - beat thins, energy releasing
  [4, stack(
    s("bd ~ ~ ~ ~ sd ~ ~").fast(1.2).gain(sine.slow(4).range(0.4, 0.1)).lpf(1500),
    note("<c2 eb2>").s("sine").gain(sine.slow(4).range(0.4, 0.15)).lpf(400).fast(0.7),
    s("<leothrix shama>")
      .begin(0.1).end(0.3)
      .room(0.85)
      .gain(0.4)
  )],

  // 5. FAREWELL - shama alone again, saying goodbye
  [4, stack(
    s("shama ~ ~ ~ ~ ~ ~ ~")
      .begin(0.1).end(0.3)
      .room(0.95)
      .delay(0.4)
      .gain(sine.slow(4).range(0.4, 0.15))
  )],

  // 6. SETTLE - quiet ambience fade
  [3, stack(
    note("<[c3,eb3,g3]>").s("gm_pad_warm").room(0.9).gain(0.1)
  )]
)


MORE AMBIENT FEEL

samples({
  shama: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/shama_norm.wav',
  leothrix: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/leothrix_norm.wav'
});

stack(
  // Lingering low bass - present throughout, barely moving
  note("c2").s("sine").gain(0.25).lpf(350).slow(2),

  // Warm pad - breathes in and out very slowly across the whole arc
  note("<[c3,eb3,g3] [bb2,d3,f3]>")
    .s("gm_pad_warm")
    .room(0.85)
    .gain(sine.slow(32).range(0.1, 0.3)),

  // Soft textural pulse instead of a kick - filtered noise thud, very subtle
  s("bd*1").gain(sine.slow(24).range(0.05, 0.18)).lpf(300).slow(2),

  // Hi-hats as shimmer, not rhythm - soft, airy, rising/falling with the arc
  s("hh*8").fast(1).gain(sine.slow(24).range(0.03, 0.2)).lpf(5000).hpf(3000),

  // Leothrix - high, bright, floats in and out independently
  s("leothrix")
    .begin(0.1).end(0.3)
    .room(0.9)
    .hpf(1200)
    .gain(sine.slow(20).range(0.1, 0.45))
    .slow(3),

  // Shama - echoing, also floating independently, offset timing from leothrix
  s("shama")
    .begin(0.1).end(0.3)
    .room(0.9)
    .delay(0.4)
    .hpf(1200)
    .gain(sine.slow(18).range(0.1, 0.4))
    .slow(4)
)

Sundued atmospheer
samples({
  shama: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/shama_norm.wav',
  leothrix: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/leothrix_norm.wav'
});

arrange(
  // SECTION 5: THE CEREBRAL DAWN CHORUS
  [24, stack(
    // 1. THE LOCKED EARTH LAYERS (Untouched, deep foundation)
    note("<c1 c1 ab0 bb0>").s("sine").lpf(80).gain(0.42),
    note("<[c2,eb2] [c2,g2] [ab1,eb2] [bb1,f2]>").s("sine").lpf(180).room(0.5).gain(0.38),

    // 2. THE SUBDUED PULSE (The heavy acoustic heartbeat)
    note("<c1 ~ ~ ~ ~ ~ ~ c1 ~ c1 ~ ~ ~ ~ ~ ~>").s("sine").fast(1.4).lpf(90).gain(0.35),

    // 3. CEREBRAL TIMBER (The woodblock breaks out into complex syncopation)
    s("~ ~ gm_woodblock ~ ~ gm_woodblock ~ ~ ~ gm_woodblock ~ ~ gm_woodblock ~ ~ ~")
      .fast(1.74)      // Lifted to true cerebral DnB speed
      .lpf(450)        // Still deeply muffled and respectful of the dark
      .room(0.6)
      .gain(0.14),

    // 4. THE BAMBOO FRICTION (Wind swelling through the stalks)
    s("~ ~ gm_marimba ~ ~ ~ gm_marimba ~ ~ gm_marimba ~ ~ ~ ~ ~ ~")
      .fast(0.8)
      .lpf(900)
      .room(0.9)
      .gain(sine.slow(6).range(0.08, 0.18)),

    // 5. VARIED CYMBAL TEXTURES (Shifting high-frequency grains)
    // Mixing traditional hats with subtle rim clicks and shakers for an organic, unpredictable roll
    s("<[hh ~ hh ~] [gm_cabasa*4] [hh ~ rim ~] [~ gm_cabasa ~ hh]>")
      .fast(1.74)      // Rolling at a fast, intricate sub-tempo
      .hpf(6000)       // Kept razor-thin and airy up in the sky
      .room(0.7)
      .gain(sine.slow(4).range(0.1, 0.15)),

    // 6. THE ACTIVE DIALOGUE (More frequent, alternating bird calls)
    // The birds speak more often now, creating an active, respectful call-and-response
    s("<shama ~ ~ leothrix ~ ~ shama ~ ~ ~ leothrix ~ shama ~ ~ leothrix>")
      .begin(0.08).end(0.38)
      .room(0.95)
      .pan(sine.slow(4).range(0.2, 0.8)) // Slowly migrating across the stereo field
      .gain(0.44)
  )]
)

samples({
  shama: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/shama_norm.wav',
  leothrix: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/leothrix_norm.wav'
});

arrange(
  // =========================================================================
  // PART 1: THE LONELY EARTH & ISOLATED CALLS (Bars 1-16)
  // Letting the listener settle into the dark New Forest dawn. Pure atmosphere.
  // =========================================================================
  [16, stack(
    // The Locked Earth Bass Layers (Deep, heavy, and grounding)
    note("c1").s("sine").lpf(80).gain(0.4),
    note("<[c2,eb2] [c2,g2]>").s("sine").lpf(180).room(0.6).gain(0.35),

    // The Woodblock & Pulse - Very sparse and hesitant here
    note("c1 ~ ~ ~ ~ ~ ~ ~").s("sine").fast(1.4).lpf(90).gain(0.3),
    s("~ ~ ~ ~ gm_woodblock ~ ~ ~").fast(1.4).lpf(450).gain(0.1),

    // Shama texture: Distant, ghostly, heavily washed in early morning mist
    s("shama ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
      .begin(0.1).end(0.3)
      .room(0.99)      // Massive, cold open space
      .delay(0.6)     // Echoing out into the valleys
      .lpf(1500)      // Softened high frequencies
      .pan(0.2)       // Fixed far left in the trees
      .gain(0.4)
  )],

  // =========================================================================
  // PART 2: THE TEXTURAL RUSTLE & DIALOGUE BUILD (Bars 17-32)
  // The wind picks up. Varied cymbals and bamboo enter. The birds get active.
  // =========================================================================
  [16, stack(
    // Base foundation stays locked
    note("<c1 c1 ab0 bb0>").s("sine").lpf(80).gain(0.42),
    note("<[c2,eb2] [c2,g2] [ab1,eb2] [bb1,f2]>").s("sine").lpf(180).room(0.5).gain(0.38),
    note("<c1 ~ ~ ~ ~ ~ ~ c1 ~ c1 ~ ~ ~ ~ ~ ~>").s("sine").fast(1.4).lpf(90).gain(0.35),

    // Bamboo and wind friction swelling
    s("~ ~ gm_marimba ~ ~ ~ gm_marimba ~ ~ gm_marimba ~ ~ ~ ~ ~ ~").fast(0.8).lpf(900).room(0.9).gain(0.15),

    // Fractured, varying cymbal textures start skittering overhead
    s("<[hh ~ hh ~] [gm_cabasa*4] [hh ~ rim ~]>").fast(1.5).hpf(6000).room(0.7).gain(0.12),

    // Bird Texture Shifting: The calls get more frequent and begin to migrate.
    // They alternate politely, but their filters open up slightly to sound closer.
    s("<shama ~ ~ leothrix ~ ~ shama ~ ~ ~ leothrix ~ ~ ~ ~ ~>")
      .begin(0.08).end(0.38)
      .room(0.93)     // Reverb tightens slightly
      .lpf(2500)      // Becoming crisper
      .pan(sine.slow(4).range(0.3, 0.7)) // Actively drifting across the forest
      .gain(0.44)
  )],

  // =========================================================================
  // PART 3: THE CEREBRAL LIQUID ROLLER DROP (Bars 33-56)
  // The track locks into a steady, recognizable DnB rhythm, but strictly soft.
  // =========================================================================
  [24, stack(
    // Sub-bass line begins rolling continuously to match the new speed
    note("<c1*2 c1*2 ab0*2 bb0*2>").s("sine").lpf(85).gain(0.45),
    note("<[c2,eb2] [c2,g2] [ab1,eb2] [bb1,f2]>").s("sine").lpf(190).room(0.4).gain(0.38),

    // THE STEADY SOFT DnB GROOVE
    // The pulse becomes a continuous fluid throb (174 RPM speed context)
    note("c1 ~ ~ ~ ~ ~ c1 ~ ~ c1 ~ ~ ~ ~ c1 ~").s("sine").fast(1.74).lpf(90).gain(0.38),
    
    // The Woodblock breaks into a complex, intricate, beautiful drum and bass ghost pattern
    s("~ ~ gm_woodblock ~ ~ gm_woodblock ~ ~ ~ gm_woodblock ~ ~ gm_woodblock ~ ~ ~")
      .fast(1.74)
      .lpf(450)
      .room(0.5)
      .gain(0.16),

    // The Varied Cymbals lock into a lightning-fast but whisper-quiet liquid roll
    s("<[hh ~ hh ~] [gm_cabasa*4] [hh ~ rim ~] [~ gm_cabasa ~ hh]>")
      .fast(1.74)
      .hpf(6500)      // Pure, high-altitude air
      .room(0.6)
      .gain(0.14),

    // THE SEAMLESS CHORUS DIALOGUE
    // The birds are now hyper-vibrant, crisp, and conversational.
    // They move quickly through the panning space, completely driving the melody of the track.
    s("<shama ~ ~ leothrix ~ ~ shama ~ ~ leothrix ~ shama ~ leothrix ~>")
      .begin(0.05).end(0.4)
      .room(0.88)     // Intimate, close canopy space
      .hpf(1200)      // High-passed to make them cut clean through the deep bass
      .pan(sine.slow(2).range(0.1, 0.9)) // Moving swiftly across the listener's head
      .gain(0.48)
  )],

  // =========================================================================
  // PART 4: RETURNING TO THE SOIL (Outro Breakdown - Bars 57-72)
  // The rhythm drops away, returning to the lonely earth and a final Shama solo.
  // =========================================================================
  [16, stack(
    // Rhythm dissolves entirely back into a single low hum
    note("c1").s("sine").lpf(75).gain(sine.slow(8).range(0.35, 0.05)),
    
    // The Leothrix goes silent. The Shama has the final word.
    // It filters down slowly into a warm mid-range shadow as the fog covers it up.
    s("~ ~ ~ ~ shama ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
      .begin(0.1).end(0.35)
      .room(0.98)
      .lpf(sine.slow(4).range(2000, 600)) // Gradually muffled out into the dark
      .pan(0.5)
      .gain(sine.slow(8).range(0.4, 0.1))
  )]
)
D N B BIRDS
samples({
  shama: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/shama_norm.wav',
  leothrix: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/leothrix_norm.wav'
});

arrange(
  // =========================================================================
  // PART 1: THE LONELY EARTH & ISOLATED CALLS (Bars 1-16)
  // Settling into the dark dawn. Minimalist, cold air, sparse bird calls.
  // =========================================================================
  [16, stack(
    note("c1").s("sine").lpf(80).gain(0.35),
    note("<[c2,eb2] [c2,g2]>").s("sine").lpf(170).room(0.6).gain(0.28),
    note("c1 ~ ~ ~ ~ ~ ~ ~").s("sine").fast(1.4).lpf(90).gain(0.25),
    s("~ ~ ~ ~ rim ~ ~ ~").fast(1.4).lpf(250).gain(0.08),

    s("shama ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
      .begin(0.1).end(0.3)
      .room(0.99)      
      .delay(0.6)     
      .lpf(1400)      
      .pan(0.2)       
      .gain(0.35)
  )],

  // =========================================================================
  // PART 2: THE COLD RUSTLE & THE LOW MASK EFFECT (Bars 17-36)
  // The drone swells. In the final bars (33-36), the "mask" clamps down—
  // filtering out all the high frequencies to create a breathless tension before the drop.
  // =========================================================================
  [20, stack(
    // The main foundations react to the mask at the very end of the cycle
    note("<c1 c1 ab0 bb0>").s("sine")
      .lpf(sine.slow(10).range(80, 50)) // Dips lower at the drop edge
      .gain(0.38),
    
    note("<[c2,eb2] [c2,g2] [ab1,eb2] [bb1,f2]>").s("sine")
      .lpf(sine.slow(10).range(170, 90))
      .room(0.6).gain(0.32),

    s("~ ~ gm_marimba ~ ~ ~ gm_marimba ~ ~ gm_marimba ~ ~ ~ ~ ~ ~").fast(0.8).lpf(500).room(0.9).gain(0.12),
    
    // THE FILTER MASK SHIFT: Cymbals are choked out entirely by the end of this part
    s("hh ~ gm_cabasa ~ hh ~ gm_cabasa ~ hh ~ ~ gm_cabasa ~ ~ hh ~")
      .fast(1.5)
      .hpf(6500)
      .lpf(sine.slow(10).range(20000, 200)) // The mask closes tight right here
      .room(0.6)
      .gain(0.08),

    // The grounding drone hums through the filter mask
    note("c2*4").s("sine").lpf(200).room(0.85).gain(0.15),

    s("<shama ~ ~ leothrix ~ ~ shama ~ ~ ~ leothrix ~ ~ ~ ~ ~>")
      .begin(0.08).end(0.38)
      .room(0.93)     
      .lpf(sine.slow(10).range(2200, 300)) // Birds sound distant and muffled just before the run
      .pan(0.3) 
      .gain(0.35)
  )],

  // =========================================================================
  // PART 3: THE HIGH DAWN RUN (The Exotic Ascent - Bars 37-68)
  // The mask snaps open. The continuous vibrating earth breaks wide open.
  // A haunting, classical Indian raga-inspired melody glides overhead.
  // =========================================================================
  [32, stack(
    // THE LONGER VIBRATING EARTH - Continuous, heavy subterranean foundation
    note("<c1*2 c1*2 ab0*2 bb0*2>").s("sine").lpf(75).gain(0.42),

    // INTENSE WARM PAD RISE - Velvet, rich pad layers holding the space
    note("<[c2,db2,g2,c3] ~ [ab1,c2,eb2,ab2] ~ [bb1,d2,f2,bb2] ~>")
      .s("sine")
      .lpf(380)        
      .room(0.8)
      .gain(sine.slow(6).range(0.25, 0.45)),

    // NEW: THE EASTERN BANSURI LINE (Raga-inspired exotic melody)
    // Utilizing the haunting flat 2nd (db) and flat 6th (ab) over a C root base.
    // It loops with microtonal phrasing, weaving through the trees like ancient incense.
    note("<[c3 ~ db3 ~ eb3 ~ f3 ~] [g3 ~ ab3 ~ f3 ~ db3 ~] [c3 ~ ~ ~ db3 ~ c3 ~]>")
      .s("sine")
      .fast(0.4)       // Beautifully unhurried, floating gracefully over the 1.74 speed drums
      .lpf(550)        // Deeply organic, smooth, woody tone
      .room(0.98)      // Placed in an enormous cavernous acoustic space
      .gain(sine.slow(4).range(0.18, 0.38)),

    // DE-INTENSIFIED LAYERED RUNNING DRUMS - Soft, texture-first fluid roll
    s("bd ~ ~ ~ rim ~ ~ ~ ~ ~ bd ~ rim ~ ~ ~")
      .fast(1.74)
      .lpf(350)        // Mossy floor thuds and stick-clicks, no aggressive edges
      .gain(0.28),     

    s("~ ~ rim ~ ~ ~ rim ~ rim ~ ~ ~ ~ rim ~ rim")
      .fast(1.74)
      .lpf(500)
      .gain(0.12),

    // CYMBALS AS THE SHAKE - High-frequency kinetic shimmer, completely free
    s("hh hh gm_cabasa hh hh ~ gm_cabasa hh hh gm_cabasa hh ~ hh gm_cabasa hh ~")
      .fast(1.74)
      .hpf(7500)
      .room(0.6)
      .gain(0.10),     

    // Subdued birds floating way back in the foggy wet canopy
    s("<shama ~ ~ leothrix ~ ~ shama ~ ~ leothrix ~ shama ~ leothrix ~>")
      .begin(0.05).end(0.4)
      .room(0.96)     
      .lpf(1000)      
      .pan(sine.slow(6).range(0.1, 0.9))
      .gain(0.18)     
  )],

  // =========================================================================
  // PART 4: THE GRADUAL DECELERATION (With Melodic Echoes - Bars 69-100)
  // Coming down step-by-step. The exotic melody lingers as a ghostly echo.
  // =========================================================================
  
  // Stage A (Bars 69-76): Stride stops. Cymbals settle. 
  // NEW: The Indian melody echoes here, broken, distant, and dissolving into the cave reverb.
  [8, stack(
    note("<c1 ab0>").s("sine").lpf(75).gain(0.32), // Vibrating earth stays constant
    note("<[c2,db2,g2] [ab1,c2,eb2]>").s("sine").lpf(280).room(0.85).gain(0.28),
    
    // Ghostly, fragmented echoes of the raga line drifting off in the distance
    note("<~ ~ c3 ~ db3 ~ ~ ~ f3 ~ ~ ~ c3 ~ ~ ~>").s("sine").fast(0.4).lpf(450).room(0.99).gain(0.16),
    
    s("hh ~ ~ ~ gm_cabasa ~ ~ ~ hh ~ ~ ~ ~ ~ ~ ~").fast(1.4).hpf(6000).gain(0.05),
    s("<shama ~ ~ ~ leothrix ~ ~ ~>").begin(0.08).end(0.35).room(0.95).lpf(1800).gain(0.3)
  )],

  // Stage B (Bars 77-84): The echoes completely dissolve. Only the heavy, 
  // breathing ground vibration and the warm pad hold your cooling step.
  [8, stack(
    note("c1").s("sine").lpf(70).gain(0.25), 
    note("[c2,eb2,g2]").s("sine").lpf(210).room(0.9).gain(sine.slow(4).range(0.18, 0.04)),
    s("shama ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").begin(0.1).end(0.35).room(0.96).lpf(1500).gain(0.32)
  )],

  // Stage C (Bars 85-100): Absolute harmonic silence. The forest is still.
  // The Shama takes a long, slow, completely unhurried solo as the dawn run finishes.
  [16, stack(
    note("c1").s("sine").lpf(60).gain(sine.slow(8).range(0.10, 0.01)), 
    
    s("shama ~ ~ ~ ~ ~ ~ ~ ~ ~ shama ~ ~ ~ ~ ~")
      .begin(0.1).end(0.35)
      .room(0.99)
      .pan(0.5)
      .gain(sine.slow(8).range(0.42, 0.05))
  )]
)

WORK IN PRGRESS
samples({
  shama: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/shama_norm.wav',
  leothrix: 'https://raw.githubusercontent.com/nickdelzotto-netizen/music/main/leothrix_norm.wav'
});

arrange(
  // =========================================================================
  // PART 1: THE LONELY EARTH & ISOLATED CALLS (Bars 1-16)
  // Minimalist, cold morning air. Grounding sub-bass and isolated bird calls.
  // =========================================================================
  [16, stack(
    note("c1").s("sine").lpf(80).gain(0.35),
    note("<[c2,eb2] [c2,g2]>").s("sine").lpf(170).room(0.6).gain(0.28),
    note("c1 ~ ~ ~ ~ ~ ~ ~").s("sine").fast(1.4).lpf(90).gain(0.25),
    s("~ ~ ~ ~ rim ~ ~ ~").fast(1.4).lpf(250).gain(0.08),

    s("shama ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
      .begin(0.1).end(0.3)
      .room(0.99)      
      .delay(0.6)     
      .lpf(1400)      
      .pan(0.2)       
      .gain(0.35)
  )],

  // =========================================================================
  // PART 2: THE COLD RUSTLE & THE LOW MASK EFFECT (Bars 17-36)
  // The grounding drone swells. The final bars (33-36) introduce the tight
  // filter mask, submerging the highs to build breathless tension before the break.
  // =========================================================================
  [20, stack(
    note("<c1 c1 ab0 bb0>").s("sine").lpf(sine.slow(10).range(80, 50)).gain(0.38),
    note("<[c2,eb2] [c2,g2] [ab1,eb2] [bb1,f2]>").s("sine").lpf(sine.slow(10).range(170, 90)).room(0.6).gain(0.32),
    s("~ ~ gm_marimba ~ ~ ~ gm_marimba ~ ~ gm_marimba ~ ~ ~ ~ ~ ~").fast(0.8).lpf(500).room(0.9).gain(0.12),
    
    s("hh ~ gm_cabasa ~ hh ~ gm_cabasa ~ hh ~ ~ gm_cabasa ~ ~ hh ~")
      .fast(1.5)
      .hpf(6500)
      .lpf(sine.slow(10).range(20000, 200)) // Filter mask seals tight
      .room(0.6)
      .gain(0.08),

    note("c2*4").s("sine").lpf(200).room(0.85).gain(0.15),

    s("<shama ~ ~ leothrix ~ ~ shama ~ ~ ~ leothrix ~ ~ ~ ~ ~>")
      .begin(0.08).end(0.38)
      .room(0.93)     
      .lpf(sine.slow(10).range(2200, 300))
      .pan(0.3) 
      .gain(0.35)
  )],

  // =========================================================================
  // PART 3: THE HIGH DAWN RUN (Bars 37-68)
  // Mask snaps open. The vibrating earth hits its stride alongside the 
  // wood-transient, breathing Bansuri line.
  // =========================================================================
  [32, stack(
    note("<c1*2 c1*2 ab0*2 bb0*2>").s("sine").lpf(75).gain(0.42), // Vibrating earth

    note("<[c2,db2,g2,c3] ~ [ab1,c2,eb2,ab2] ~ [bb1,d2,f2,bb2] ~>").s("sine").lpf(380).room(0.8)
      .gain(sine.slow(6).range(0.25, 0.45)),

    // ATMOSPHERIC BANSURI PHRASING (Stretched into deep space)
    note("<[c3 ~ ~ db3 ~ ~ eb3 ~] [f3 ~ g3 ~ ab3 ~ ~ ~] [f3 ~ ~ ~ db3 ~ c3 ~]>")
      .s("gm_marimba")     
      .fast(0.22)          // Slowed down further to float across bars
      .lpf(400)            // Deeply smoothed woodwind tone
      .room(0.99)          
      .delay(0.8)          // Long trailing echoes
      .gain(sine.slow(4).range(0.16, 0.30)),

    // DRUM & BASS GRID (Subdued & mossy floor texture)
    s("bd ~ ~ ~ rim ~ ~ ~ ~ ~ bd ~ rim ~ ~ ~").fast(1.74).lpf(350).gain(0.26),     
    s("~ ~ rim ~ ~ ~ rim ~ rim ~ ~ ~ ~ rim ~ rim").fast(1.74).lpf(500).gain(0.12),

    // CYMBALS AS THE SHAKE - Breezy high-frequency kinetic shimmer
    s("hh hh gm_cabasa hh hh ~ gm_cabasa hh hh gm_cabasa hh ~ hh gm_cabasa hh ~").fast(1.74).hpf(7500).room(0.6).gain(0.10),     

    s("shama ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").begin(0.05).end(0.4).room(0.96).lpf(1000).gain(0.18)     
  )],

  // =========================================================================
  // PART 4: THE EXTENDED BROKEN CANOPY (Atmospheric Makeover - Bars 69-108)
  // Complete architectural overhaul. No "drum circle" elements. 
  // The rhythm is a dark, cinematic skeleton. Melodies become crystalline wind.
  // =========================================================================
  [40, stack(
    // THE UNBROKEN EARTH - Grounding sub-bass foundation
    note("<c1*2 c1*2 ab0*2 bb0*2 f0*2 g0*2 c1*2 c1*2>").s("sine").lpf(65).gain(0.45),

    // THE HIMALAYAN ICE WIND (Leothrix Morph)
    // Removed rapid bursts. Now spaced far apart with slow, glass-like pitch gliding.
    s("leothrix ~ ~ ~ ~ ~ ~ leothrix ~ ~ ~ ~ ~ ~ ~ ~")
      .speed(sine.slow(8).range(1.1, 1.6)) // Floating, non-frantic microtonal glide
      .begin(0.05).end(0.35)
      .room(0.99)               // Massively immersive mountain canyon reflection
      .delay(0.7)               
      .lpf(2200)                // Softened the harsh edges of the call
      .pan(sine.slow(4).range(0.1, 0.9))
      .gain(sine.slow(6).range(0.20, 0.35)),

    // CINEMATIC ELECTRONIC SKELETON (Deep Pushed-Back Pocket)
    // No wooden rims, no rolling percussion. Just pure sub-heavy impact and empty space.
    s("~ ~ ~ bd ~ ~ ~ ~ ~ bd ~ ~ ~ ~ bd ~") 
      .fast(1.74)
      .lpf(280)                 // Submerged pillowy depth
      .gain(0.28),

    // WHITE-NOISE SIGH (Replacing the acoustic shaker loop)
    // A single, wide-panned mechanical breath that opens and shuts like fog moving.
    s("~ ~ ~ ~ ~ ~ ~ ~ hh ~ ~ ~ ~ ~ ~ ~")
      .fast(1.74)
      .hpf(9000)
      .room(0.9)                // Disappears into the background atmosphere
      .pan(0.8)
      .gain(sine.slow(5).range(0.02, 0.06)),

    // EXTENDED ASYMMETRIC BANSURI ECHOES
    // The Indian motif becomes a ghostly background drift, skipping entire segments
    note("<~ ~ c3 ~ ~ ~ db3 ~ ~ ~ ~ ~ ~ ~ ~ ~>")
      .s("gm_marimba")
      .fast(0.15)
      .lpf(350)
      .room(0.99)
      .gain(0.12)
  )],

  // =========================================================================
  // PART 5: THE GRADUAL DECELERATION (With Mountain Echoes - Bars 109-140)
  // Meditative cooling down. The complex rhythms collapse back into the soil.
  // =========================================================================
  
  // Stage A (Bars 109-116): Syncopated stride ceases. Rhythms settle into a quiet walk.
  [8, stack(
    note("<c1 ab0>").s("sine").lpf(75).gain(0.32),
    note("<[c2,db2,g2] [ab1,c2,eb2]>").s("sine").lpf(280).room(0.85).gain(0.28),
    
    s("leothrix ~ ~ ~ ~ ~ ~ ~").speed(1.2).begin(0.05).end(0.25).room(0.99).lpf(1500).gain(0.15),
    s("hh ~ ~ ~ gm_cabasa ~ ~ ~ hh ~ ~ ~ ~ ~ ~ ~").fast(1.4).hpf(6000).gain(0.04),
    s("shama ~ ~ ~ ~ ~ ~ ~").begin(0.08).end(0.35).room(0.95).lpf(1800).gain(0.25)
  )],

  // Stage B (Bars 117-124): Harmonic elements dissolve into the wet valley mist.
  [8, stack(
    note("c1").s("sine").lpf(70).gain(0.25), 
    note("[c2,eb2,g2]").s("sine").lpf(210).room(0.9).gain(sine.slow(4).range(0.18, 0.04)),
    s("shama ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~").begin(0.1).end(0.35).room(0.96).lpf(1500).gain(0.32)
  )],

  // Stage C (Bars 125-140): Absolute stillness. The Shama finishes the dawn solo alone.
  [16, stack(
    note("c1").s("sine").lpf(60).gain(sine.slow(8).range(0.10, 0.01)), 
    
    s("shama ~ ~ ~ ~ ~ ~ ~ ~ ~ shama ~ ~ ~ ~ ~")
      .begin(0.1).end(0.35)
      .room(0.99)
      .pan(0.5)
      .gain(sine.slow(8).range(0.42, 0.05))
  )]
)
