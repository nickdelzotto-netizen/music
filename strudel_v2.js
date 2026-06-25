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
