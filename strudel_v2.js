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
