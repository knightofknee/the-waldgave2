import songsData from '../public/TandSSongs'
import Song from '../components/Song'
import { useEffect, useState } from 'react';
import HomeButton from '../components/HomeButton';

export default function TeganAndSara() {

  const songs = songsData;

  const [song, setSong] = useState([''])
  const [visibleLyrics, expandLyrics] = useState(false)

  const showLyrics = (title) => () => {
    expandLyrics(true)
    var newSong = songs.find(x => x.title === title)
    if (newSong !== undefined) setSong(newSong.lyrics)
  }


  const midnightSongs = [
    {
    name: "Lavendar Haze", comments: [`Midnights of all albums is definitely meant to be looped lated at night, this song serves as both the beginning and end. Taylor's answer to life's problems and her immediate goal is love. Impermanence appears in the coming and goings of relationships, but Taylor is in love with love itself. Two lyrics here, "I'm damned if I do give a damn what people say, ... I just wanna stay in that lavender haze". And "All they keep asking me (All they keep asking me), Is if I'm gonna be your bride, The only kinda girl they see Is a one-night or a wife". Taylor Swift gets a lot of flack for her many relationships and life in general, other people see the relationships as failures, but Taylor is getting what she wants. Love is a source of energy and comfort for her. She knows it and resents people assuming they know what's best for her.`,
      `Love is the most obvious theme of Midnights but the first words of this song give hint of the rest: "(Meet me at midnight) Staring at the ceiling with you, Oh, you don't ever say too much, And you don't really read into, My melancholia". The setting for this album is Taylor alone after midnight. The main relationship of this album is with herself. Taylor finds herself brooding at night, but her own mind is there with her. When she is present with it, she is comforted. Her primary relationship has always been with herself.`
    ,
    `The music video drives home the relationship with herself as the primary theme. Taylor is lying in bed with an asleep man at midnight. The physical lavendar haze enters the room as she gets excited while dancing around the room and looking at his well-defined chest. (there is a brief cut of her alone on a bed, which might show her lavendar-hazing with the scent of him on the sheets, not even needing him to be there at all, transitioning into the next bit). A minute in, it cuts to her alone on a couch presumably at midnight after a party. Taylor crawls on the ground, toward the television. A little forest is growing on the floor, Taylor's imagination is loose. The strength of the lavendar haze, that love plus horny energy mixed with late night brain freedom. She pulls back the tv curtains to reveal fish in space. I suspect weed usage based on later songs, but no matter the particulars, it is the midnight energy. Then she is lying on the floor amid the forest, and teleports to a petal filled bath. We then cut to a party of her lying on the floor again but in the arms of her man. "I just need this love spiral, get it off your chest", this explains the rest of the video. When Taylor is up late at night, she remembers and re-enacts her peak love moments. Even if you see things wrong with her choices, it is working for her. She is able to use that love and energy to be present with herself, to play with her imagination. I've heard Rahm Dass say 'love everyone', Taylor's take is pretty unique to me. I think this is her top Buddhist lesson, the Taylor Teaching. That romance is a source of power. Heartbreak or happy ever after are potential consequences, but in the present love is power, you can have that on your terms.`,
  ]},
    {
    name: "Maroon", comments: ["Taylor learns how to have a relationship with herself. She loses touch with her inner self and has to relearn how to love herself properly. It is easy to forget this when falling for someone else.", "The way I analyze albums is like the Tegan and Sara post below, I assume the singer is singing from one part of herself to another. T and S ended up being exclusively that, it works well here. She describes a bunch of things that could just be her having fun with her inner self."]},
    {
    name: "Anti-Hero", comments: [
      `Music video: Taylor is bored at home. "It's me, hi, I'm the problem it's me." Taylor is bored, staying up late and sleeping into the afternoon. This lonely lifestyle is perfect for fostering her relationship with herself. Taylor's ego is her popstar self. Star Taylor is her best friend when partying and releasing her imagination, but the unhealthy dynamic is on display as well. Star T is seen watching and shaming Taylor while she weighs herself. "There's probably a secretly encoded message that means something ELSE!" That is a line in the video, one of Taylor's many strong hints. It then jumps back into "It's me, hi, I'm the problem it's me", which is a total Buddhism take, ego is the main issue. Attachment to the impermanent. Everything is impermanent, that is the inevitable cause of 'suffering' in life. Ego is the faults you hang on to, like Taylor's late night drinking. Ego is also how you choose to separate yourself from the rest of the world. At the end we see 3 Taylors converge, Star Taylor, who she is trying to be, Regular Taylor who she sees herself as, and Giant Taylor, the ego that is created by her reacting to the world's reaction to her. It's hard for her to interact with the world normally now that people see her as so big. These 3 are able to comfort each other, the obvious disparity is a source of awareness, consciousness.`,

    ]},
    {
    name: "Snow On The Beach", comments: [ //synchronicity!!!!!!

      `"This scene feels like what I once saw on a screen
I searched "aurora borealis green"
I've never seen someone lit from within
Blurring out my periphery
My smile is like I won a contest
And to hide that would be so dishonest
And it's fine to fake it 'til you make it
'Til you do, 'til it's true"`,

`"I (I) can't (Can't) speak, afraid to jinx it
I (I) don't (Don't) even dare to wish it
But your eyes are flying saucers from another planet
Now I'm all for you like Janet
Can this be a real thing? Can it?"`,

`Taylor is talking about 2 potential things. 1 is that she went looking for natural beauty, someone to love, and that person was unabashedly their authentic self, they had self love.`,
`Thing 2: Taylor made all of these extensive dreams and then worked on them for most of her life. The snow falling on the beach is Taylor self-actualizing, the guy from thing 1 helped her grow her relationship with herself, but the snow isn't about him. The snow is her dreams coming true, she is controlling the weather because she is now a billionaire, which is pretty close to being a real-life Janet.`
    ]},
    {
    name: "You're On Your Own, Kid", comments: ["TS copes with the isolation of her experience and desire for change. She hoped to find her ideal self in her small town parties. She realizes she has something special but she needs to leave to pursue it. She's realized 'her dreams aren't rare' but she knows she has what it takes, and that she has to go it alone, because that is where the work is done.", ""]},
    {
    name: "Midnight Rain", comments: ["Taylor opts into pain in order to make herself into the person she wants to be. Here she looks back at the innocent version of herself that she left behind.", "This is a crucial step in the development of consciousness. As you gain control and awareness of the full operation that is your mind, you are forced to choose how to react. You could choose to stick with the path handed to you, or you can veer off into the unknown with your dreams as your compass. That comes with a lot of pain. But what if she didn't make those choices, who would she have become?", "'Some kind of haunted, a good place for talking about how we relate to our brains.'"]},
    {
    name: "Question...?", comments: ["This song sort of has two parts, the first is about miscommunications/failed love. This is the hard side of pursuing the lavender haze. Her memories with the sad boy were extra vivid because of the mindfulness generated by the connection. This also fits in with the growth of consciousness, you inevitably become less sensitive to the things you have experienced.", "The second part is the chorus for most of the song. It is a dare to flip expectations by resetting your priorities in a stressful situation. Meditation techniques are a bunch of different ways to reset by becoming fully present. This song shows how a question can itself help people be present by giving them something to engage with that takes capacity."]},
    {
    name: "Vigilante Shit", comments: [`This song is the one that doesn't have a strong fit for the Buddhism theme, it's more fun and straightforward. The relevant part is the "don't get sad, get even" attitude. Taylor Swift is strong, this is her warrior self. She isn't lashing out, but she won't play the passive role handed to her. "Ladies always rise above, Ladies know what people want. Someone sweet and kind and fun, the lady simply had enough". Taylor is not stuck playing one role, or dividing herself into 2; she is dressing up in full attire, she doesn't mask - she plays different characters. Perception is her weapon.(In the next song, she plays a famous character)`]},
    {
    name: "Bejeweled", comments: [`Music video: Taylor is in a cinderella story, she doesn't want the man she wants the castle. She wins the competition and the prince is forced to propose to her, but she ghosts him and keeps the castle. Taylor has won the fame game, but she hasn't been charmed by the princess. She is shining for herself. Taylor has accepted herself even if she continues to be judged by others wantonly like her evil stepsisters.`, ]},
    {
    name: "Labyrinth", comments: [`""It only hurts this much right now,"
Was what I was thinkin' the whole time,
Breathe in, breathe through, breathe deep, breathe out,
I'll be gettin' over you my whole life"`, `So breathing is pretty major in meditation and buddhism. You can meditate anywhere anytime by paying attention to your breath. Ideally you get to a point where like 5% of your attention is on noticing your breath go in and out, and the other 95% of your brain becomes focused on your present experience. In this context, breathing seems to be used as a coping tool. Anxiety and other mental illnesses are maybe the most common pathway for people in US to learn about cognitive behavioral therapy and other teachings that support meditation and mindfulness. The fall from grace, hitting rock bottom, whatever you call it. Something has to go wrong usually before you can have the deep introspection that creates the need for spiritual growth. In the case here, it seems like trauma is the trigger. Taylor gains deeper awareness through the experience of coping with this trauma. Maybe this trauma is the first major heartbreak from Midnight Rain?`, "i thought the plane was going down howd you turn it right around?", `"It only feels this raw right now, Lost in the labyrinth of my mind"`, `As discussed in Lavendar Haze, love is Taylor's remedy of choice, but it suffers the inevitable pains of impermanence just like everything else. This works for both romantic love and Taylor's general love and passion for her everyday. Through being mindful, she is able to fall in love with the world once again. All love is wonderful, but romantic love can be much easier. That does not cheapen it, it is harder to love a stranger but your romantic love can make it easier to love others, it's infectious. Taylor is navigating this labyrinth she has designed for herself.`, `You know how much I hate,
That everybody just expects me to bounce back,
Just like that`, `People see her multiple relationships and assume that her love or feelings aren't as real, she is supposed to be more than human. But that is probably also the biggest source of self-inflicted pain. That is the suffering that she chooses.`]},
    {
    name: "Karma", comments: ["Karma is cause and effect. Karma isn't something you believe in, it just describes what is. 'I keep my side of the street clean'. Be positive and loving to yourself and to those around you, and then they have more energy and love and positivity to give to you. Also, if you hold your phone above your face and drop it, that is karma too. You didn't deserve to be hit in the face, it's not good or bad. It is just the result of an action. And within our relativistic universe, actions can have rippling effects. Love is one of the most meme'ed words of all time so there is a lot of cringe that comes with talking about the power of love. But it's real, science is on team Love. Love and positivity and gratitude and other jesus stuff activates the parasympathetic system and you function better.", "Cats and their relationship with you is a direct result of your interactions."]},
    {
    name: "Sweet Nothing", comments: [`"They said the end is comin',
Everyone’s up to somethin',
I find myself runnin' home to your sweet nothings,
Outside, they’re push and shovin',
You're in the kitchen hummin',
All that you ever wanted from me was sweet nothin'"`, `On the way home,
I wrote a poem,
You say, "What a mind",
This happens all the time`, `This is Taylor embracing mindfulness. Outside they are pushing and shoving, but she finds sanctuary in her zen mind, her beginner's mind. She is satisfied with the basics. The world has always been beautiful when she has taken the time to slow down and be mindful. Her mind never needed her to be out there working so hard to please everybody. All her brain wants from her is nothing, the space for it to speak by itself. Given that space, she is able to write things that make her happy.`]},
    {
    name: "Mastermind", comments: ["Master...Mind. Buddhism is all about mastering your own mind, big win here.", "The original album ends here. As I further research, it seems to get more obvious. Taylor has ended her main task, mastering herself. This control has allowed her to succeed so much. The End.", `This is where the first album ends because this is where Taylor thought her story would end. To her surprise, that is actually just the beginning. Her classic western coming of age story is over. She hits the "nothing really matters" wall. Taylor has worked her whole life building this superstar ego, but her mental mastery leads her straight into this classic trap. Done with her western education, Taylor turns east.`]},
    {
    name: "Part Two: starting with The Great War", comments: [`As Taylor masters herself, she falls into a classic trap. "The truce was the night I nearly lost you", ego death. Memory garden, say a prayer. We will never go back, you hand was the one I reached for throughout the Great War. The Great War can be a few things, life itself, the achievement of an enlightened peace. Taylor learned to love herself but now that she's facing the truth of consciousness and impermanence, she is learning to let go.`]},
    {
    name: "Bigger Than The Whole Sky", comments: [`"What could've been would've been, should've been you", this song is an ode to the ego she is leaving in the past. She understands the illusory nature of what she aimed to be. But that doesn't diminish the importance of the self she strived for.`, "It's hard to let go, but that's the only choice to stay moving.", "This could also be seen as accepting the daily death of sleep every night if you wanna be dramatic/philosophic."]},
    {
    name: "Paris", comments: ["Taylor learns to fall in love with herself and the world again. Just by being mindful on her own, half a bottle of champagne in your apartment or wandering the street at night becomes an adventure in a new land.", `lyric proof here `, ``,``,``]},
    {
    name: "High Infidelity", comments: [`Lock broken, slur spoken,
Wound open, game token,
I didn't know you were keeping count,
Rain soaking, blind hoping,
You said I was freeloading,
I didn't know you were keeping count`, `So this song is a bit harder to transform directly, there is a direct interpretation that we will talk about, but first let's go wild. We are talking about Taylor singing to Taylor, so let's consider self-inflicted infidelity of the highest kind.`, `"You know there's many different ways that you can kill the one you love,
The slowest way is never loving them enough"`, `Note the differences`, `"Oh, there's many different ways that you can kill the one you love,
And it's never enough, it's never enough`, `All of the time, we dance around the things we know to be the most important. I think of it from the Sims persective, you are both the player choosing which tasks to do when, and the character that often ignores these commands as they see fit, needing prodding to stay on task. The biggest infidelity we commit is betraying our player-self, by breaking promises you made to yourself. The slowest way to kill the part of yourself that you love the most is to ignore it, let it fade. "I didn't know you were keeping count,
But, oh, you were keeping count". Your brain is always keeping count. Your brain is an electric forest of associations and thoughts.You are always forming new memories, how they are laid down and how they affect future thought it shaped actively by your mind. So the more you slack in a particular direction, however freedom is expressed for you, the more your default paths will be changed. Old paths don't go away, she describes memories as haunting. This is a double-edged sword, the twist is that her true self is always there. Consciousness is a process. The brain is keeping count, her inner child is still accessible, by being fully mindful in this new love, Taylor has a transcendant experience. She regains her spark for life.`]},
    {
    name: "Glitch", comments: [`This one would be hard to get if it was on the original album or near the beginning. But you are a Midnight Switfy now so you know better. It's all in the name, glitch. "A brief interruption, a slight malfunction". Taylor understands her programming now, she is a senior software engineer of her own mind.`, `Understanding and fixing bugs is a vital part of being a good engineer, but the word here isn't bug, it's glitch. Glitches can be exploited to your advantage. "We were supposed to be just friends" is how the song starts. "The system's breaking down". Actually falling in love wasn't in Taylor's plan, she just wanted the Lavendar Haze.`]},
    {
    name: "Would've, Could've, Should've", comments: [`In the first verse, the glitch from the previous song ends up being a bug. It's Taylor's loss of innocence moment. The first verse is unambiguously talking about a relationship with an older man when Taylor was too young". The rest of the song, though, works equally well for any loss of innocence at a formative age.`, `The Chorus: I would've stayed on my knees,
And I damn sure never would've danced with the devil,
At nineteen,
And the God's honest truth is that the pain was heaven,
And now that I'm grown, I'm scared of ghosts,
Memories feel like weapons,
And now that I know, I wish you'd left me wondering`, `Sex, alcohol and drugs are the main markers we have of adulthood. Altering your consciousness provides a new angle into awareness of self. Those ghosts could be traumatic memories from her sexual relationships, they could be from the alcohol or drug use she started alongside or in response to this relationship. Weed is also associated with schizophrenic visual symptoms, early use of weed could have caused long term problems (although countries with lower cannabis use have the same rates of schizophrenia as the USA). Either way, Taylor is becoming familiar with the dark side of consciousness.`]},
    {
    name: "Dear Reader", comments: [`"If you think... in a trap, you're already in one", Taylor is explicitly laying out the trap of ego. If you want to be truly present, you must ditch it completely and be absorbed with your immediate experience, the only thing you ever really have. A common Zen thing is reminding you everything "has buddha nature", even ruminating or thinking about the future occurs in the present. But when this past or future talk is going on, you cannot be fully engaged with the rest of what your brain and the world have to offer. It is a balancing act, and the way to balance is to cut off unhelpful thinking. Learn to recognize your false patterns of thought and cut them off at the root. Let new ones grow from the energy no longer flowing down wasteful paths.`, "Taylor offers a couple of ways out. First, by recognizing your ego, you can see what to avoid. Destructive patterns trap you in loops of addiction and emotional dependency. If you play the album on loop like I do, this song is followed up with Lavendar Haze, a reminder of her other way out, love. Love is her secret to being present. Taylor's dedication to personal growth clashes with her desire to be in a loving romantic relationship. This has inevitably led her to have many relationships that don't fit the standard of either being short flings or marriage, she wants love but can't be kept in a box. At the end of the day, it seems like Taylor has indeed cleaned up her side of the street and has a strong understanding of self, nonself, and how to find self-determined meaning where others settle for nihlism."]},
  ]

  // show first entry default, but not all. component takes a song, shows first with expand for more

  // Synchronicity. I'm going to start off with this concept, and then I'll try to only speak through the lyrics and music videos. Carl Jung made up the word to describe the subconscious talking, or "the simultaneous occurence of two different psychic states." Language is limited, we can see its limits when trying to express inner feelings. When we talk about our relationship with your own brains though, the language changes. Trust your gut. The old lesson goes something like this, imagine people blindfolded touching various parts of an elephant. They could all be touching the same animal but they can't know the elephant from one perspective alone. Your brain is limited in how it can communicate with you, so you have to be a good listener. I'm trying to point towards something, and when I listen to this album, I get a lot of synchronicity. I think that's the power of pop music, but after so many late nights listening to Midnights, it's clear to me Taylor is singing about a Buddhist elephant the whole time, so I don't believe I'm doing much more than writing it out.

  let introText = `My qualifications: I am no true Swifty, but I have been listening to Midnights a LOT. I'm only top 2% of Spotify Taylor Swift listeners in 2024, but I am top 0.005% in listens to the first song of Midnights, Lavendar Haze. And I often started the album in the middle on The Great War! I am a true Midnights Swifty. I listened to this album for months just because I loved it. Then I began realizing how well the lyrics fit the Buddhist and neuroscience ideas I've been learning and trying to explain. That was sometime in 2023. I've since spent many late nights letting this album wash over me, many private dance parties. Heres's what I hear.`
  return (
    <div className='container'>
      <HomeButton />
  <div style={{display:'flex',flexDirection:'column', alignItems:'center'}}>
    <>
    <h2>My list of albums that I have listened to on repeat</h2>

    <p><a href='https://docs.google.com/spreadsheets/d/1IyOyuEmOvrHCzou6IhIrqOw9B-Qokp2Kdfk7hq2JeUc/edit?usp=sharing'>google sheet here</a>, this is not yet exhaustive.
    </p>
    <h2>
      Taylor Swift's Midnights 3am edition (the Midnight Buddha edition)
    </h2>
    <h4>Intro</h4>
    <p>
      {introText} {/* min/max option here */}



      {/* I'm convinced this album is directly about buddhism. There are different layers like classic love pop song style, but the album doesn't make sense unless these buddhist concepts weren't the center of the show. To convince you, I will try to not argue at all, I will try to just describe the songs. */}
{/*
      This album is very similar to the first album I wrote about here, "Hey, I'm just like you" by Tegan and Sara, because I listened to it on loop for a few months before realizing it was perfectly describing concepts I was exploring elsewhere. Taylor Swift takes us along her conscousness journey, operating on several levels at once. The top level is Taylor's relationship with love and its impact on her jouney. But the core of this album is consciousness, self love. Many aspects work for both, but looking at the album with its several editions and hearing the emphasis of the words night after night, I'm convinced this is a buddhist album. I don't know if this is surprising or obvious, I need to consult the true Swifty experts who have looped every album in its era, but I've listened to this album many times now. Many. I am numb to the perspective of a new listener, so I will try to let the lyrics do the talking. */}

      </p>
      <h4>General theory</h4>
      <p>
      Midnights is Taylor reflecting on her love life and the consciousness journey it brought to her. Taylor outlines the album in the first 4 songs. She defines 2 kinds of love and then talks about the related struggles. She grows while she cycles through these struggles for the rest of the album. Taylor also references her relationship with John Mayer, which began when she was 19. The power dynamic was messed up, but he gave her the first snow on the beach moment. Only later did she understand the setup, and it haunts her. Rumination is a trend, her best memories turned against her. Taylor gives us a gift by giving name to the different benefits and struggles of love, as she masterminds her own karma. Taylor ends by explicitly saying to ditch the ego in Dear Reader. Leave the past in the past, it helps you stay mindful of the present.
      </p>
      <p><strong>Lavendar Haze</strong> explains the reward Taylor gets from romance, this blissful state that spurs her imagination. She enjoys the benefits of love without marriage. When Taylor is up late at night, the lavender haze helps with her imagination. In the music video, her date is asleep while Taylor is having a grand time with her own mind.

       {/* She is criticized for relationships that don't end in marriage, but she is able to get what she wants, comfort and inspiration. */}
        <strong> Maroon</strong> is deeper love, a new color to play with, the kind that can cause pain and lasting memories. These two colors define the main 2 types of relationships T has, and now we explore them through Taylor's romantic journey. One comes with a tangible benefit no matter the results, and the second brings pain through rumination. <strong>Anti-Hero</strong> is about how Taylor relates to being a relative monster. Creativity and fame have consequences, and that busy world is the setting in which Taylor's love story takes place. <strong>Snow On The Beach</strong> is a seeming miracle, a dream come to life. This can also be seen as watching karma coming together, maybe with the hand of a Mastermind? As mentioned at the top, John Mayer might haunt this song. That's part of why this song is repeated on the Til Dawn version, when Taylor can make her own miracles come to life.

        </p>

        <p>
         <strong>You're On Your Own Kid</strong> starts the story, Taylor dedicating herself to her romantic dreams but failing to get the attention of the one she was crushing on. That rejection pushed Taylor towards music, she fell in love with that, the byproduct of lavendar haze. <strong>Midnight Rain</strong> is the other side of the same coin, Taylor gets the love she wanted, but she was already on a different growth path pursuing her career, she couldn't stay. <strong>Question...?</strong> is Taylor starting to get used to using her powers. <strong>Vigilante Shit</strong> is about dressing for revenge, taking and enjoying power.

         </p>
         <p>

          <strong>Bejeweled</strong> is a continuation of Vigilante Shit but positive. Taylor is asserting herself and shining on her own, she's having fun with it. She's diamond strong, cleaning up her act, doing her own thing. <strong>Labyrinth, </strong>

        Taylor is trapped within her own mind. She has built a kingdom in her mind but now she's fallen in love again. Her lavender kingdom is falling to new maroon love. Despite growth, she is hitting the same cycle of issues.

         <strong>Karma</strong> is one of the lessons Taylor learned from her years of relationships. This is her consciousness journey. The Witness, the part of you that is always there aware, Taylor sits back and sees her journey. She sees how true the law of Karma is. Karma is the science of cause and effect. (The 3-person relationship is as unsolved as the 3 body problem). But we know good vibes travel. <strong>Sweet Nothing</strong> is Taylor celebrating destressing through love. She has learned to leave the toxicity behind and now gets pure comfort from her partner. With her prolonged focus on ego through career, Taylor is tired and has found new relief. In <strong>Mastermind</strong>, Taylor writes her own story having perfected her craft. There ends the story, the original album ends. Taylor dropped the 3am edition by surprise at 3am that same night, with 7 more songs.</p>
      <p>
        We start with <strong>The Great War</strong>, dealing with fame and love mixing, The Swift army is strong. Taylor nearly loses a relationship with their attack, Joe Alwyn in this case.  <strong>Bigger Than The Whole Sky</strong> follows up with the end of a relationship despite the potential. She suffers and feels her sadness is contagious. <strong>Paris</strong> is Taylor back on her game. After having reached Mastermind status, she is now able to achieve peak imagination and fun in the present. She is in Paris, the peak of romance, wherever she goes. <strong>High Infidelity</strong>

        </p> <p>

         describes some of the possible problems, like being judged or neglected. <strong>Glitch</strong> is Lavendar Haze turning Maroon, this is a good problem to have now.<strong> Would've, Could've, Should've</strong> is trauma from past love that still lingers, in this case her relationship with John Mayer when she was 19 and he was 32. It was a 'Snow on the Beach' moment that lead to something questionable, but now Taylor's karma is in control. <strong>Dear Reader</strong> is Taylor's final advice from all those years of love. Taylor tells her listeners to run, to abandon their past. That if you think you might be you are already trapped. Attachment traps us, preventing personal spiritual growth. Let'ts take a  second to ask where this is coming from, how this is very buddhist. The present moment is the only moment we ever inhabit. Everything is impermanent, and everything is connected. Taylor is able to see her Karma in action. Abandon everything seems a bit bleak, but we are defined by the things we cling to. Cycles of romance have come with a cost, Taylor shares so we may fare better. When Taylor gets real at 3am, she becomes the Midnight Buddha. In the search for why, Taylor answers with love, her own recipe for romance of different shades.


</p><p>
         If you loop the album, it goes back to Lavendar Haze and Maroon, the two types of love Taylor pursues. These 2 colors stand as Taylor's answers to life's hardest questions. In a relative world, Taylor finds meaning in the fun of romance and the world of love. 217 days later Taylor releases the 'Til Dawn' edition with a new song, <strong>Hits Different</strong>. It's about an inevitable consequences of a successful relationship that ends, and dealing with new levels of heartbreak. The music is upbeat, Taylor is sad but for good reasons. I hope that after reading the below song by song breakdown, Midnights will hit different for you.
      </p>

      <p>TLDR, Taylor Swift gets an imagination boost from romance however it goes. If love does appear, its strength comes with potential future pain. Taylor finds herself amidst this cycle. With a heightened awareness and the past left in the past, Taylor is able to better handle the waves of emotion with a (midnight) buddhist mindset.</p>

    {midnightSongs.map(song=>
      song.comments.slice(0,0).map((text, i2)=>(<div>

        {i2 == 0 ? <h4>{song.name}</h4> : ''}

        <p id={i2}>
          {text}
        </p>
      </div>))
    )}
    </>
    {/* <h3>bonus songs: Til Dawn (hits different)</h3>
    <p>
    "I (I) can't (Can't) speak, afraid to jinx it
I (I) don't (Don't) even dare to wish it
But your eyes are flying saucers from another planet
Now, I'm all for you like Janet
Can this be a real thing? Can it?" Like she just referenced the Good Place Janet guys, she did some philosophy homework. Janet is a being made by heaven able to think anything into existence. She replays "snow on the beach", which has the lyric above. I am at this moment nearly done with season 3 of the good place, if this will get Taylor to see me, can I be your Chidi? With each new album edition, Taylor adds another level of complexity. This mirrors her growth, she is not running aimlessly in her electric forest, Taylor Swift took control of her story. As she stayed focused on the same things, as she kept working and walking with intention, the complexity of her mind and music grew, even if some things remained. The last song is karma being repeated. If there is one flaw that bothers me most with Chidi Anagonye so far, it is that Buddhism has answers to most if not all of his moral quandries but he is a moral philosophy professor who quotes like all of the western philosophers. I may be biased, but with this song choice, Taylor Swift confirms her support of the Buddha. With this song and the following "Lavendar Haze" when the album loops give Taylor's biggest Buddha takeaways. Taylor put in the work, "Ask me what I learned from all those years, Ask me what I earned from all those tears, Ask me why so many fade, but I'm still here". Karma is explained the first time around above. It can help you answer most of life's questions, whether or not to take a particular action. Lavendar Haze is loving kindess in action. There is this idea of trying to love everyone; it is easiest for the people closest to you, with friends, acquantances, strangers and eventually people you dislike or hate. The flip-side can also be useful, lean in to loving the people that it is easiest for you to love. Together you can build a Pure Land type of environment. In Buddhism, that means a place full of people committed to being more mindful. A happy family is the same. */}
    {/* </p> */}
    {/* <p>run through titles as a recap TLDR?</p>
    <p>
      Taylor singing to Taylor- this deserves its own section as it seems to take a leading role.
    </p> */}
















      <h2>A Taylor Swift Conspiracy hidden in side G: The Tortured Poets Department</h2>
      <p>
        <a href='https://open.spotify.com/playlist/62XfjMaoZtStJ2wQeBw8TA?si=xWf6GgFISvSP1E9E2h7_qA'>Playlist link</a>. So I was gifted a used copy of this album before I had anything to play it on. So I got my first vinyl player and went through this album one side at a time. The final side G is all amazing songs, an order not found on spotify (outside of the linked playlist). The lyrics are quite cryptic, hinting at a larger conspiracy.
      </p>
      <h2>Kesha's Rainbow</h2>
      <p>This is Kesha post dr luke. It's an amazing album, strong throughout and supercharged. I'm surprised I hadn't heard this album earlier.</p>
    <h2>Kendrick GNX</h2>
    <p>I've been looping this a lot, it goes hard. Kendrick running 6 miles every morning making me feel bad about the Big Sean title earlier. But I stand by it in context, Kendrick was mid-Drake beef with only Mr. Morale since 2017. I am so thankful to Drake for the beef because Kendrick had been looking for a rap battle for a while. 'Not Like Us' is looking prophetic, not just with Diddy but with the accelerating class war. Shareholders and non-shareholders is captor, owner language. There are people who make money from what they do, and there are people who make money by having money. The second group buys a % of future profits from what the first group does. My proposal: money should be paid in money, not ownership. To compromise, half of all profits minimum should go to the people who actually run the business, labor.</p>
    <h2>Other in progress</h2>
    <p>
      Last Wednesday by Chris Webby, another strong album.
    </p>
    <p>
      Logic has a new EP, 14 minutes. A posthumous Mac Miller album was released at the same time, he recorded it in 2014. It is more musical than rap focused, it's beautiful in a way I need more time listening to describe.
    </p>

    <h2>Big Sean is the best role model in rap</h2>
    <p>
      This album for me isn't about bangers, it's consistently smooth and has a strong theme and message. It is mostly slow and fun for the beginning, bouncy, and then later into the 1+ hour he goes hard. Big Sean hits different here, he is preaching living better, but he's not leaving his fun self behind. He isn't going out as much, but he's still embracing the mix of being a hustler, pimp, player, lover and father. This is a great motivational album, it's like a well-structured sandwich. The meat of it is this positive core message, a few songs talking about his life, growth, and pursuing goals. There's a Kanye diss-track. The rest is the bread and veggies, all working well together, but some songs like the first few are musical carbs keeping the thing together. I think it is a balanced meal, I can loop this album and get something out of it without it interrupting what I'm doing. It's stacks on stacks on stacks like a BLT.
    </p>
    <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/album/4Re8JSuo0lUxYCMjDnafvd?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <h2>
      K-Love positivity radio, and my modern music equivalent
    </h2>
    <p>
      Positivity and positive self talk is more than a pleasant notion or wishful advice. Your brain is a computer that is constantly editing itself based upon your interactions with the thoughts and feelings that it throws at you. You are what you think. You don't have to be an optimist to take advantage of the scienifically-proven value of positivity. You don't have to be religious. You just have to give your thoughts space and ask if they are helpful or not. If not, there is no benefit to engaging. All you do by ruminating is further imprint your problems into your brain.
    </p>
    <p>
      To further the positivity cause, <a href="https://open.spotify.com/playlist/6X77zXdWc1PWEYtFNxjVYF?si=1407d72b7af34930">I have created a playlist</a> that looks to do the same as K-love but with music I love. It is a lot of introspective/positive hiphop. There is something special about rap swagger, advocating supreme confidence. To me, it's a more accesible christian rock. It is much better music, and it doesn't ask you to put your faith in god, it tells you to believe in you. To reflect this, the playlist is called "The Chosen One". You should have a massive ego, a humble one, that understands empathy. We are more than human, we are gods in the making. Love, Beezus.
    </p>
    <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/playlist/6X77zXdWc1PWEYtFNxjVYF?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <h2>
      NF has a new album
    </h2>
    <p>
      "Hope" is the title of his latest album. I am a big fan of this and his past 2 albums. "Clouds" (the mixtape) is the shortest and most accessible of the 3, on repeat I only skip "Story" because it is a story song about a robbery. NF is a very introspective rapper, "The Search" has smooth production and delivery, and in his self-development arc he is at a middle point where he has already confronted his issues and been working through them. "Hope" follows in the mold of The Search, except NF is further along his development path, and the music is not as pop-friendly.
    </p>
    <h2>
      Mello Music's Bushido
    </h2>
    <p>
      Great rap album, this has been my go-to for a few months now. One of the standout songs for me is Yours Truly, for the lyrics and the distinctive beat.
    </p>
    <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/album/5kCNU9ouaRoRtQNJrtfavl?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <h2>
      K.A.A.N.'s Kaizen
    </h2>
    <p>
      I am a big fan of this artist, especially this album. It fits the self love theme of this blog because it is about growth. It explores the term kaizen, which describes incremental change. "An abundance of elegance in the ways that I've grown, The omittance of arrogance, I've corrected my tone"... "I'm in love with the process, not the contents 'cause I know my identity". KAAN is focused on process over product. He's not concerned about the result because he is confident in his vision, he knows that he will be just fine if he continues on his path.
    </p>
    <iframe style={{borderRadius:'12px'}} src="https://open.spotify.com/embed/album/6qRwmIJRj0ZTCg2kFsM3b3?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <h2>
      Carl's Cut- Chance's Big Day and why you should listen again
    </h2>
    <p>
      This is one of my favorite rap albums of the past few years, but it didn't have a ton of popular success. Many attribute it to Chance talking about marriage, and maybe that doesn't do the same as sex and drugs. I attribute it primarily to the song order. Let me walk you through what I hear in my order:
      </p>
      <ol>
        <li>
      Roo. Immediately he establishes where he is from, and is focused on his confidence and love for his brother. There is self love and brotherly love. Not a marriage album yet. C1
      </li>
      <li>
      The Big Day. Deceptively named, this song screams self love to me. "I can't believe it, must be the luckiest guy alive, somehow <i>I arrived</i>.", "But we're only going to survive if we go crazy" -an initial warning. Later he is glad "you arrived". He later goes "Fuck money, shit, fuck, shit, tell 'em, burn it, I don't wanna, get it, fuck it, fuck it, fuck it, fuck it, fuck it, Fuck it, Yeah, uh, uh, Still wanna, drink it, fuck it, drink it, drink it, fuck it, shoot it, I don't wanna, just get it, get it, get it, get it (That shit is so hard) Oh, Lord". This is him struggling with the urges. Throughout this song theoretically about a wedding, there is no proof of a bride yet, or anything outside of this man's mind. This may seem a bit out there to you, but here is the end of the song: "In the simulation, This is the only part I like, Or I might just be a molecule of Christ, Folding in a universe of dust and light, Or maybe we're just molecules in the body of Christ". Not a marriage album yet. C2
      </li>
      <li>Let's Go On The Run. This one has Chance mainly singing to a girl, and is trying to run away with her. And a woman singing back who wants to run away. Not a marriage album yet.</li>
      <li>
        Handsome. This is mostly bravado club-romance rap. Chance talking about his wild past. Not a marriage album yet.C3
      </li>
      <li>Big Fish. This is the "switch". He ends the first part by calling out labels for not supporting marriage as a concept that he can sing about. Like Kanye in Jesus Walks, "That means guns, sex, lies, videotape, But if I talk about God my record won't get played?". This song explains the transition to a marriage album. Chance felt like a big fish in a small pond, wild like in the previous songs, "I've seen hoes, I was always like "which witch?"". Then he was caught by something bigger and taken out of the pond. Definitely a marriage song.M1, C4</li>
      <li>
        Ballin Flossin. A romance song, no marriage references though. The confidence is a theme as well. C5
      </li>
      <li>
        4 quarters in the black skit. It sounds like a dad undercutting and criticizing his son. Taking credit. This is a self love skit, the setup. Dealing with the critics. C6
      </li>
      <li>
        5 Year Plan. Self love and self confidence song, Chance gives us advice on how to believe in ourselves. C7
      </li>
      <li>
        Get a Bag. Bravado and Romance again. C8
      </li>
      <li>
        Slide Around. Bravado and Romance, long term relationship leaning. M2 C9
      </li>
      <li>
        Sun Come Down. Romance and talking about his own death, and confidence in oneself. M3 C10
      </li>
      <li>
        A Good One. About not being single no more. M4
      </li>
      <li>
        Our House skit (I don't include Town On the Hill, too slow and doesn't seem to fit). Celebrates mom and dad being married. M5
      </li>
      <li>
        Zanies and Fools. Talks more directly about the Confidence given to him through his Relationship. Self love and embracing great hope. M6, C11
      </li>
      <li>
        All Day Long. Confidence. C12
      </li>
      <li>
        Do you Remember? Nostalgic Confidence. C13
      </li>
      <li>
        Eternal. Romance and Confidence. C14
      </li>
      <li>
        Hot Shower. Fun song but doesn't really fit the album outside of the Confidence theme. C15
      </li>
      <li>
        We Go High. Chance has his ego humbled through his failures in his relationship. As we go to the end of the album, he reveals the final conflict in this ego saga. He is humbled and is able to explain "I had to let go of the flesh first". C16, M6
      </li>
      <li>
        I Got You. This is a Love Victory song, celebrating an always and forever bond. This is my last song. M7
      </li>
      <li>
        Photo Ops skit. This does not fit as a final song, but it does serve as a great transition into Roo and a restart of this playlist. It grounds you back into the perspective of Chance and his brother as children getting torn down verbally.
      </li>
      </ol>
      <p>
       <a href="https://open.spotify.com/playlist/0Vb7mU97NeAp1FN8EixQN5?si=10917f8fef234c58">(Link to Playlist)</a>
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
  {visibleLyrics && <div style={{position:'sticky',top:'20px', maxHeight:'500px', overflow:'hidden', overflowY:'auto'}}>
    <Song lyrics={song} expandLyrics={expandLyrics}/>
  </div>}

  {/* <script crossOrigin="" src='//genius.com/songs/4726856/embed.js'></script> */}

<style jsx>
{`
p {
  margin: 1% 5%;
}

h4, h2 {
  text-align: center;
}

iframe {
  margin: 2% 0;
}


`}
</style>
</div>)}
