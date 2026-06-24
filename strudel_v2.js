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
