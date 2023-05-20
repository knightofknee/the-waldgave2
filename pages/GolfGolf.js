
export default function GolfGolf () {
  return (
<div>
  <div id="newOuterShell" style={{display:'flex',justifyContent:'center',alignItems:'center', flexDirection:'column'}}>
    <p>
      GolfGolf miniGolf. All about the golf, profit capped at 1%. All other excess money made by Golf Golf miniGolf will be used to cover costs of course upgrades, to lower future prices, or be paid out to the people making GolfGolf happen. Every hole is a banger, both a unique golf challenge and unique theme. Black curtains between. It is byob and has a bar with at-cost+1$ beers and wine. Bartender can charge whatever they want for other things. Every hole has a target you can hit that gives you -1, making a perfect score near impossible. Profit is capped but costs are not. The art staff can choose whatever they find best and push barriers.


      {/* Highest level of investment: you never really wait because you spend set time on holes just watching what happens while you are there. Someone could be changing the hole while you are on it, like a an avalanche or slowly cracking ice. Wait times can also be reduced because you don't know your next hole until you finish your current one. This is so that you can be moved around a slow group and then go back to that hole later. Utilization is maxed and wait time is minimized. Also we can anticipate slowdowns and time out little mini art events. */}
    </p>
    <h2>GolfGolf Game Winning Concepts</h2>
    <ol>
      <li>
        Every hole is a banger. no straight shot, no phoning it in. This is the foundation for our claim for best minigolf course in the galaxy.
        </li>
      <li>
        Cheapest Beer in the City. We are all about the golf. So if we get a liquor license for a tap or for selling cans, we sell at a price to cover the cost of the beer plus one dollar. If someone sells cheaper than that, we undercut their price unless it takes us below cost. But if we can sell out of kegs, I don't think anyone would be anywhere close to us. And if they do, we promise to note their name alongside our new claim of second-cheapest beer in Chicago (This strategy would even if we weren't the actual cheapest but I still want to aim for cheapest).
      </li>
      <li>
        B's Clubhouse is the bar side of things. Replicating the comfort of country clubs, I would want to be able to give people a place to sit down after a round and watch some sports, order some bar food. Priority on comfortable seating and a view of 18.
      </li>
      <li>
        Your money goes towards better golf. Personal profit is capped, so your money goes towards improving GolfGolf or to the employees making it happen.
      </li>
      <li>
        Every hole has a bonus point and unique golf challenge, so a perfect score is achievable but very difficult. (in full form, these trigger special effects)
      </li>
      <li>
        Hole order is flexible and managed by an algorithm so that you aren't needlessly waiting.
      </li>
      <li>
        New mechanics are introduced gradually and can return, so the holes can climb in complexity. The front 9 introduces new concepts, and the back 9 uses those concepts as its base tools to combine with a theme.
      </li>
    </ol>
    <h2>GolfGolf mini-Golf Initial Hole Concepts</h2>
    <h5>Front 9</h5>
    <ol>
      <li>
        Timing Gates. The exact nature of these is TBD but the idea is a small rapberry pi computer or something similar controls doors that have timings that fit the scenario, whether that be consistent, matched to music, or following a pattern. Is that better than a bunch of windmills? Ideally, we would have the theme of the hole dictate what the timing gate looks like.
      </li>
      <li>
        Magnets. So we put magnets in the balls, and then magnets on the hole. The magnets will be hidden, but their field will (usually) be indicated visually with color or field lines. On other holes these can provide excitement to the 'greens' sections. Every hole has a start that lands you somewhere on the green if you get past part 1. The magnets will help use create more varied greens.
      </li>
      <li>
        Skee-Ball Launch Starts. So the actual shape of the skee-board with buckets to hit can vary endlessly, along with your ramp(s) towards it. It is a fun shot because you get to hit without really caring about where it goes if you miss, similar to a drive, a more powerful shot that only happens at the beginning of holes sometimes.
      </li>
      <li>
        Varied wall textures. Different holes could have different wall types to match the play style and theme. Some are extra bouncy, some are extra dampening. Some walls are a variety. Bouncy walls could be used to go through areas with lots of walls. Walls that catch balls can be used on the wackier water holes and around other hazards. These can let you worry less about power versus aim.
      </li>
      <li>
        Timing elements controlled by the user. Like a pad you jump on that can launch your ball,
      </li>
      <li>
        Varied ball types. You could start with one ball type and based on your shot off the tee you could get different ball types, or different holes could have different balls to match the design and theme. This teaching hole would have a couple of separate areas where you take one shot with each type of ball if you make the minimum score.
      </li>
      <li>
        Hazards/Varied surfaces. Could we emulate different levels of grass? Hazards of unknown quality via some chemistry class experiments? Rough patches could be used to make shots that would otherwise involve hitting too hard.
      </li>
      <li>

      </li>
      <li>

      </li>
    </ol>
    <h5>Back 9</h5>
    <ol start={10}>
    <li>
      Yeti Slopes ski hill. Unique challenge: putting downhill. Staying with the familiar with plinko here. There is a safer green route that bends down the mountain with curves that catch you. There is a blue route down through the trees, where you can end up on the green route, or you can continue all the way down the mountain in one go. Or you can go the black diamond route and aim for a skinny ramp that leads to the bonus point. Missing on the ramp puts you at a disadvantage compared to the plinko players on the green. Ideally this green is super fast, like it is ice.
      </li>
      <li>
      Hole where you can hit your ball into a ramp that goes horizontal to vertical along the wall and your ball goes into one of those maze boxes where you control horizontal and vertical, and there are holes to avoid. There is a bonus in there, and you can see where it will take you. Also different paths give you different number of strokes. A time limit keeps you from slowly going around.
      </li>
      <li>
      Tyler the Creator (he loves golf and fun, and his music can match themes well so this is partly an appeal to him)- Pothole. Pothole themed hole. Borrowing from the maze idea, set up a hole where you have a funnel ramp connected to a foot pedal. So it is like a cannon, you can nudge it left and right with your foot and then step on it to angle it more upwards. You take your first shot from there, if you go through a hoop some basketball celebration music plays, this could be one of the few hole in one with a bonus opportunities, the rare 0 hole! p2 is a street with various degrees of bumps and a few tragically large potholes.
      {/* The Windmill. Unique challenge: timing. We begin with our take on a classic. Straight ahead of the start is a giant windmill with half of it being covered with a wheel of fortune. If you hit the jackpot, your ball gets caught on the wheel and lifted up to the first bonus point. This gives you -1 stroke and is only available on the first swing. Near misses at the jackpot get bumped back, and other parts could pick you up still and put you in a less advantageous position in part 2 of the hole. Further away but more directly towards the hole, there is a smaller, faster windmill. It is structured such that it funnels your ball and pads it to be forgiving, so if you miss the timing, you are guranteed to have a decent shot. The bonus point route requires aim and speed to be just right, and if you fail you are punished by being placed far away from the hole on part 2, the 'green'. (The definition of green here is wherever you can putt at the hole directly. Every hole here will have you start off the green. Some hole in one's will be possible, but they will more closer resemble the frequency of regular golf hole in one's) If you get past the small windmill, you are in an advantageous part of the green. You can't hit a hole in one, but you can get closer than where the bonus point drops off the ball, which pretty close(10ft?), with a straight shot and favorable backdrop. */}
      </li>
      <li>
      Tyler the Creator- Who Dat Boy Hole. Horror themed hole. First part is the first 52 seconds of the song on repeat until everyone is in the Haunted house, either through the front door or through the graveyard for a potential bonus point and superior p2 (part 2) positioning with a risk of hitting a tombstone and getting the worst p2 spot, the basement or something. Part 2 is beyond a black veil, and only after everyone has hit into it do you proceed. Here the music switches to the rest of the song on loop. The course shakes to with the bass of the song to an impactful degree, and later shakes to other instruments as well. The art in this part is like p1 except instead of scary, it's a Monster Mash.
      </li>
      <li>

      </li>
      <li>

      </li>
      <li>

      </li>
      <li>

      </li>
      <li>

      </li>
    </ol>
    <h2>Other Ideas</h2>
    <p>GolfGolf will not give ownership to any investor. If we take money, we will charge a higher price until the investor gets X% return on their money and we will then lower prices. This format seems simple but it means that capital doesn't own anything, and they don't get anything until we make money. This is a healthy exchange. Capital can assess the risk and bet a fixed amount of money on a venture that guarantees a fixed rate if it succeeds.</p>
  </div>

<style jsx>
{`
p {
  margin: 0 5%;
}

iframe {
  margin: 2% 0;
}
`}
</style>

</div>)}
