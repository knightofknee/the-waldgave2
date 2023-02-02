import songsData from '../public/TandSSongs'
import Song from './Song'
import { useEffect, useState } from 'react';

export default function TeganAndSara() {

  const songs = songsData;

  const [song, setSong] = useState([''])

  const showLyrics = (title) => () => {
    var newSong = songs.find(x => x.title === title)
    if (newSong !== undefined) setSong(newSong.lyrics)
  }

  return (
    <div>
<div id="newOuterShell" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
  <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
    <h2>
      Carl's Cut- Chance's Big Day and why you should listen again
    </h2>
    <p>
      This is one of my favorite rap albums of the past few years, but it didn't have a ton of popular success. Many attribute it to Chance talking about marriage, and maybe that doesn't do the same as sex and drugs. I attribute it primarily to the song order. Start the album on Roo and you are treated with 5 absolute bangers in a row, capturing your attention. Then a fun Ballin Flossin mixup for the central skit and a serious banger in 5 Year Plan. From there, I include everything in order except "Town on the Hill", it is super slow and I don't really get much from it. Zanies and Fools is amazing, then I go back to the original start of the album for those songs we skipped. We skipped them because they didn't have the strong initial hook, but they close out the album well. <a href="https://open.spotify.com/playlist/0Vb7mU97NeAp1FN8EixQN5?si=10917f8fef234c58">(Link to Playlist)</a>
    </p>
    <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/0Vb7mU97NeAp1FN8EixQN5?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    <h2>
      'Hey I'm Just like You', the other You, and self love in love songs
    </h2>
    <h5>
      The Scientific Foundation:
    </h5>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/wfYbgdo8e-8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <p>
      Okay so I'm a lazy writer but avid listener/daydreamer, so I've been thinking about this album for years now, and I only get more convinced each listen, that this album is a masterpiece. The adventures of wise mind and growth, this album is the best exploration of self love that I've found. -2022
    </p>
    <p>
      The above video explains the concept of another "you" inside of your brain. I've long liked the concept of thinking of love songs as one part of myself singing to me. If you are single, this trick can turn potentially sad songs into introspective ballads. It doesn't work all of the time, but it really seems like some artists write to this style. Carly Rae Jepsen is great material for this, her use of neutral pronouns and lyrical style promotes it well. I was actually going to write about her album "Dedicated", with the song below lining up with the 'you is two' concept. This song would be the scene where the right brain, after trying to speak out through the use of music, after being just a witness for the most part, takes control and sings, but is also renouncing their temporary control of the 'words' in exchance for more control over the sound, or more control over HOW the individual goes about their life, while letting them choose the WHAT or figure out the WHY on their own later. I also hear snippets in all of Billie Eilish's music that fit, with self love at the core of her most recent album. The song "my future" is directly about singing a love song to her future self.

      {/* <!-- , while "Therefore I am" is great material to work with. "I think, therefore I am" is the standard phrase, but you know other parts of your brain exist separate from your conscousness. Do those other parts think? --> */}
      {/* <!-- (Discuss Carly Rae and the Sound, and discovery of Hey I'm just like You) --> */}
    </p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/6o0EN7CoLao" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <p>
      At this time, I was listening to 'Hey I'm Just like You' on repeat often, and after I heard a lyric in this light, I couldn't not hear it. Maybe parts of this are obvious, but I argue that every character in this album is a different part of the same person. They are the performer and the audience, and that relationship evolves as they age. To demonstrate, I will break down the key lyrics from each song below. One important item to note first is the nature of this album. Tegan and Sara took material from their high school days and made music with the help of that. They wrote this album right as they were approaching the age of 40. Turning 30 soon myself, I vibe with the material. They are talking about how to grow with yourself, a midlife crisis of sorts, from the persective of a high schooler and a 40-year old simultaneously. Your relationship with yourself is the center of this album. The plot that ties the songs together is this self relationship evolving over time.
      {/* <!-- Start going through the songs in order, hitting highlights --> */}
    </p>
    <h5>
      Hold My Breath Until I Die
    </h5>
    <button type="click" onClick={showLyrics('Hold My Breath Until I Die')} >show lyrics</button>
    <p>
      The core concept of this song confused me but it starts with brain concept (also found in The Fall) that the "we" we most associate with is a stream of consciousness. Not a single unbroken thought, but the cumulative thoughts that you pile up while awake. That is the immediate "you". This song is taking comfort in the temporary nature of feelings, that even if you feel bad now, another "you" will have a slightly different slate that they work with, and it isn't "your" problem now. If you hold your breath as long as you can, you pass out, lose consciousness, and other parts of your brain take over. When you "wake up", your brain has already been changed directly as it edits things during sleep. This starts our story by establishing that the MC is curious about how the brain works and is interested in manipulating it because of some level of struggle.
    </p>
    <h5>
      Hey, I'm Just like You
    </h5>
    <button type="click" onClick={showLyrics(`Hey, I'm Just like You`)} >show lyrics</button>
    <p>
      "Stranded and I'm so lost, my mind is wired
Overcome and overdone, my fate is on fire
Eat the drugs and dance to screaming in my head
I'm so happy that we're friends, me and you"
    </p>
    <p>
      "Together in the light, I swear all for you
Tonight in the dark, we're seeing colors"
    </p>
    <p>
      The first other 'self' we are introduced is the confident, drug-fueled self. T&amp;S have talked before about their LSD use when they were young. A litte messed up and unsure of yourself, you lean on this version of yourself, it's "fun you". As the chorus emphasizes, there is a lot of power in this full embracement of self that the lifestyle enables. She feels empowered by this inner self she has found, and the relationship they've established.
    </p>
    <h5>
      I’ll Be Back Someday
    </h5>
    <button type="click" onClick={showLyrics('I’ll Be Back Someday')} >show lyrics</button>
    <p>Now our main character is bored with their current/past self, and they are boldly going outward. They are not killing their past self necessarily, but they are ditching it in any direction, like an animal in a trap. they have found that they have been lying to themselves, or not living up to their own expectations and know that to get to where they want to be, they can't stay here. We hit a fun-damental problem with the brain and consciousness: it is fully shaped by the past, it wants to guess the future, and it only exists in the now. Knowing what she knows about  </p>
    <h5>
      Don’t Believe the Things They Tell You (They Lie)
    </h5>
    <button type="click" onClick={showLyrics(`Don’t Believe the Things They Tell You (They Lie)`)} >show lyrics</button>
    <p>This song directly talks about a struggle with self love in the verses. The chorus discusses lying, pushing you to learn for yourself, question everything even if it is coming from yourself. The "They" in the title is both the voices of other people and the inner voices of the MC. In terms of brain science, thoughts and feelings aren't really directly controllable, only how we react to them. MC feels burned by their brain in its current state, and is trying to reevaluate her relationship with her brain. </p>
    <h5>
      Hello, I’m Right Here
    </h5>
    <button type="click" onClick={showLyrics(`Hello, I’m Right Here`)} >show lyrics</button>
    <p>This song goes back to the consciousness theme of the first song. 'Until I've done all that I can', that until could refer to until the day is over. "Hello, I'm right here" is the answer to that potential 'death', fully embracing the present</p>
    <h5>
      I Don’t Owe You Anything
    </h5>
    <button type="click" onClick={showLyrics(`I Don’t Owe You Anything`)} >show lyrics</button>
    <p>The struggle is full-fledged, the MC has reverted back in their ways many times, but she have reached a limit. She trying to cast off her past self, still acknowledging how she wants to go back to that lifestyle. She is announcing her departure.</p>
    <h5>
      I Know I’m Not the Only One
    </h5>
    <button type="click" onClick={showLyrics(`I Know I’m Not the Only One`)} >show lyrics</button>
    <p>This song is honoring the different 'selves', and moving on despite it. There is a duet here, maybe this is the most complicated song. ( they give it away with the 'yours' to 'my' words I think, follow up on it)</p>
    <h5>
      Please Help Me
    </h5>
    <button type="click" onClick={showLyrics('Please Help Me')} >show lyrics</button>
    <p>In the struggle to be who they want to be, she is facing the fear of failure and not sure how to proceed. "needed a plaace to rest my head", she is embracing this current self that is giving her some ground to stand on, a foundation. "who am I to disagree? who am I to fall apart?" I resonate with this line because reality is what it is, acceptance is just part of observing reality objectively, what do you achieve by making yourself feel bad about what you do 'wrong'? You can learn like reading a book about someone else, but overly judging yourself doesn't do anything productive. You can just live as best you can. (wanted something better than this) She is facing the doubts while being thankful "who am I disagree" really does hit well, she is thankful for who she has been and the comforting music makes it sound like the comfort is working against the doubts</p>
    <h5>
      Keep Them Close ’Cause They Will Fuck You Too
    </h5>
    <button type="click" onClick={showLyrics('Keep Them Close ’Cause They Will Fuck You Too')} >show lyrics</button>
    <p>Here we start to solve the problem. Starting something new can be hard. But now we have a self that is helpful. It seems to be that inner self from before, but now evolved. Instead of working against her inner selves, she is incorporating them in herself a bit.</p>
    <h5>
      We Don’t Have Fun When We’re Together Anymore
    </h5>
    <button type="click" onClick={showLyrics('We Don’t Have Fun When We’re Together Anymore')} >show lyrics</button>
    <p>The title describes the stage in the relationship with the youthful and/or drug-related persona. She is tired of her own bullshit. It also works well the angle of the inner right brain (RB) talking to her. She is tired of the drinking, tired of all the crap she is doing that never takes the time to enjoy her own mind. She is only ever bored and then trying to do something else. Now RB lamenting not being able to help. "Promised myself I wouldn't let you get this way this time'... 'what you gonna do whe you wake up in someone else's head?'. 'All we get when we get together is bored'. Her relationship with herself is at its lowpoint. She is stuck, "close my eyes and fall behind", sleep is not a sufficient escape for her because her behaviors have her trapped. "Have another drink it'll make you cool, it'll make you you". It's a cycle she's grown acccustomted to, and she is not getting anything from it anymore.</p>
    <h5>
      You Go Away and I Don’t Mind
    </h5>
    <button type="click" onClick={showLyrics('You Go Away and I Don’t Mind')} >show lyrics</button>
    <p>The stage of acceptance is here, she is ready to leave her past self behind. She still feels the same way, but wants to grow. "it's your mind that matters most, it's your mind that makes you mine" describes the relationship of RB on the nose, RB is singing to her here. As much as she wants to leave this part of herself in the past, she is now on better terms with the parts she is choosing to leave behind. </p>
    <h5>
      All I Have to Give the World Is Me
    </h5>
    <button type="click" onClick={showLyrics('All I Have to Give the World Is Me')} >show lyrics</button>
    <p>"Faced Myself in the Mirror Last night, I looked for things you said you liked
The person I am when no one's around,
The girl I don't want to be found"</p>
<p>(chorus)</p>
<p>
  "All I have to give this world is me, and that's it
All I have to show this world is me, and that's it
Just me, just me, just me
And that's it"
</p>
"Convinced myself not to be so strange
I hope I still take your breath away
I look in the mirror, I see the face
The one who worries, it can change
You don't have to change, you don't have to change
You don't have to change"

<p>
  "Staring down my two halves in the glass
Feels like a heart attack
Telling me to choose one or the other
I get so panicked
I don't wanna lose, but if I choose love
What will happen then?
Staring down my two halves in the glass
What then?
Go ahead and choose, go ahead and choose
Go ahead and choose"

</p>
<p>
  That's kind of most of the song, but it all seems to finally be explicitly talking about her two inner selves, her inner (RB) self and the active consciousness that is her. The chorus brings home the idea of embracing yourself as you are, and being yourself unabashedly. She has finally realized that theres only one, herself, her divisions are all self-made. Her choice of who to be is moot because all she can do is be herself. In the process, she is learning how to love herself. The song ends with conflict, "I don't wanna lose, but if I choose love, What will happen then? Staring down my two halves in the glass What then". I think this conflict is saying, 'if I choose to love myself, how do I resolve what I am versus what I want to be?' But earlier she says "Don't you ever wanna change?", I think her choice to love herself is her motivation to want change, to move towards who she knows she is in comparison to who she sees in the mirror.
</p>
    <div>
      <div id='rg_embed_link_4726856' className='rg_embed_link' data-song-id='4726856'>Read <a href='https://genius.com/Tegan-and-sara-hold-my-breath-until-i-die-lyrics'>“Hold My Breath Until I Die” by Tegan and Sara</a> on Genius</div>
    </div>
  </div>
  <div style={{position:'sticky',top:0,bottom:0}}>
    <Song lyrics={song}/>
  </div>
  </div>

  {/* <script crossOrigin="" src='//genius.com/songs/4726856/embed.js'></script> */}

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
