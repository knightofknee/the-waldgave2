import Head from 'next/head'

export default function EndOfTheUniverse() {
  return (
<div className="container">
  <Head>
    <title>The End of the Universe · The Waldgrave</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..600&family=Instrument+Sans:wght@400..600&display=swap"
      rel="stylesheet"
    />
  </Head>
  <div className="page">
    <h3>
      How to make it to the end
    </h3>

    <p>
      First step is we need a permanent underground city. At any point, a supermassive black hole could take out humanity. A supernova could put it to the test.
    </p>
    <h3>
      Short version(?)
    </h3>
    <p>
      As our universe ends, energy will be spread out so much that everything breaks down. The last thing to go will be the empty spacetime, which we know to have its own energy. Spacetime is pretty uniform, and spacetime is not limited by the speed of light. So at the end, all of the universe will sort of collapse towards a single point, though it is more like everywhere is shrinking at once. The effect is the same either way, anything that remains will hurtle towards the center. So if you could manipulate particles and energy to make your patch of spacetime last longer than the uniform rest of the universe, then you could ride that potentially infinitely fast collapse. Ideally, you correct course a tad and ride out the explosion. Our universe resides within a black hole, so when our universe is ending, it is probably because the black hole housing us has bled off too much energy through Hawking radiation, not only because the heat death of energy spreading out. The problem of heat death still exists, now at the multiverse level. We cannot witness another black hole with the same mass as ours, because we can only observe the inside. But the super massive ones we have at the center of galaxies would be the closest, so study of the death of one of those may give us the answers to the nature of the end of a universe and how to survive it. As all the disparate particles remaining in the universe smash together, they shoot out into the outer universe. This could resemble the Big Bang, or the creation of a black hole, in that there will be a spacetime creation/expansion phase. The birth or death of a black hole is the only event that creates spacetime like this
    </p>



    {/* The hand-typed outline: the template literal + pre-wrap keeps the
        author's own line breaks and indentation, which plain JSX collapses. */}
    <p className="outline">{`the universe will collapse on itself at a potentially infinite speed as the energy in empty space will be finally drained. The universe is very uniform, if you could keep your patch of spacetime together longer, you could outlast the uniform. It is the reversal of the big bang, any spacetime survivors on a collision course. Here we have a couple options:
1. The energy of our universe is conserved in the process, and we have a new big bang and a complete cycle
2. Our universe is just dying, it exists inside of a black hole in a universe that is also dying, except it is earlier in the process of decay.
  Maybe:
  a) the black hole "around" our universe crumbles and we have made it up a level
  b) before our universe-black hole crumbles to reveal the next level, everything in it is forced to collapse to a point with the collapse of spacetime. This adds up because a black hole appears to us to have an extreme amount of mass at a single point. That case is true for the beginning of our universe and the potential end. a black hole kind of squeezes spacetime into a tiny point, and it punches out into its own bubble. It is the same spacetime, just oozing into this bubble. That is part of why our universe is expanding at an accelerating rate, black holes grow.
    ba) it might create a condition where all universes have 1 or 0 survivors; if they had 2 or more, they would collide during the collapse

So if you could manipulate your patch of spacetime well enough, you could outlast the universe`}
    </p>
  </div>

<style jsx>
{`
.container {
  font-family: 'Newsreader', Georgia, 'Times New Roman', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: clamp(1.0625rem, 1rem + 0.35vw, 1.1875rem);
  line-height: 1.65;
}

.page {
  max-width: min(75ch, 100% - 2.5rem);
  margin: 0 auto 2.5rem;
}

h3 {
  font-family: 'Newsreader', Georgia, serif;
  font-optical-sizing: auto;
  font-weight: 600;
  font-size: clamp(1.55rem, 1.35rem + 1vw, 2rem);
  line-height: 1.2;
  text-align: center;
  text-wrap: balance;
  color: #2c3e50;
  margin: 1.4em 0 0.6em;
}

p {
  margin: 0 0 1.15em;
  text-align: left;
  text-wrap: pretty;
}

.outline {
  white-space: pre-wrap;
}
`}
</style>
</div>)}
