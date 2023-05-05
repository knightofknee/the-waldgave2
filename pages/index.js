import Head from 'next/head';
//import styles from '../styles/Home.css';
import Link from 'next/link'

export default function Home() {
  return (
<div id='app'>
      {/* <Head>
        Header??
      </Head> */}

      {/* <main> */}
  <div>
    <div className="hello">
      <h1 style={{zIndex:2}}>The Waldgrave Welcomes You</h1>
      <div style={{margin: '-2em 0'}}><img className="bigw" src="/transparentw.png"/>
      </div>

      <h2>Core Values</h2>
      <ul>
        <li>
          <a href="https://youtu.be/zNHDTvqbUm4">Creativity</a>
        </li>
        <li style={{display: 'flex', flexDirection: 'column'}}>
          <span>Weird</span>
          <a href="https://youtu.be/esayi49OAk4?t=548" target="_blank"
          style={{fontSize: '12px'}}>TWF</a>
        </li>
        <li>
          <a href="https://youtu.be/a_YR4dKArgo">Effort</a>
        </li>
      </ul>
        <h2><Link href="/thebLOG">the bLOG </Link></h2>
      <h2>Goals</h2>
        {/* <!-- We are creatures of creation and expression, but our everyday
          lives do not always give us outlets, so we must create spaces that do.
          The Waldgrave aims to provide the tools to create those spaces for you and your friends,
          and to promote the creation and capture of ideas. --> */}
      <div>
        <p>The current projects and goals of the Waldgrave include <Link href="/TeganAndSara"> a music blog</Link>,
        {/* <!-- <Link href="/readtogether">a bookclub app</Link>,  --> */}
        <Link href="/Brainstree"> a notes/habits app</Link>, <Link href="/OpenChicago"> turning Chicago into a global leader and eventual Great Lakes Supercity center</Link> (featuring BUBI), <Link href="/SocialSecurityFix">fixing social security</Link>, reducing income equality, <Link href="/ClimateChangeStrats">combatting climate change</Link>,<Link href="/EndOfTheUniverse">how to find aliens inside black holes and survive the heat death of the universe</Link>, and a <Link href="/GolfGolf">mini-golf revolution</Link> centered on proving the superiority of profit-minimizing business structures.
        </p>
      </div>
      <div>
        {/* <a href="https://ko-fi.com/waldgrave"> */}
          <img style={{width: '3rem'}} src="/thew1.png"/>
        {/* </a> */}
      </div>
      <h2>Wacky Wednesday FAQ</h2>
      <div>
        <h4>Why is Wacky Wednesday?</h4>
        <p>Open creativity needs you to create an open space for it. And it is a fun way to hang out with friends and talk. </p>
      </div>
      <div>
        <h4>How is Wacky Wednesday?</h4>
        <p>Through creativity, weird and effort. Creativity comes easy when you put in the Effort to set up an environment where you can comfortably be Weird</p>
      </div>
      <div>
        <h4>Who is Wacky Wednesday?</h4>
        <p>You, or You and your friends, or You and some potential new friends</p>
      </div>
      <div>
        <h4>What is a Wacky Wednesday</h4>
        <p>It is an event in which you and any number of friends gather together for some creativity and socializing. I recommend some open art and/or music time as a base, ideally with a creative event of any sort. The event can be whatever, some past examples include an improv excercises, painting, song writing and karaoke. Anything that involves creativity or learning works. Besides that, the only other major element is creating a space where everyone involved feels as comfortable as possible to create and share with no judgement. Improv group exercises can be a great first or second Wacky Wednesday to help the group get in the "yes and..." mindset. Process over product, the goal is to give everyone space to explore.</p>
      </div>
      <h2>What is the Waldgrave?</h2>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', textAlign: 'left',margin: '0 auto', width: '80%'}}>
        <div style={{display:'flex', alignItems:'center'}}>
          <div className='defNum'>1)</div>
          <div className="defList">
            Originally used to refer to an officer having jurisdiction over a royal forest during the times of the Holy Roman Empire.
          </div>
        </div>
        <div style={{display:'flex', alignItems:'center'}}>
          <div className='defNum'>2)</div>
          <div className="defList">
            The area in your brain where the different forms of consciousness meet. Your understanding how to manage your own waldgrave determines which of your selves tend to get expressed.
          </div>
        </div>
        <div style={{display:'flex', alignItems:'center'}}>
          <div className='defNum'>3)</div>
          <div className="defList">
            When you listen to someone talk, their words shape your neurons. A form of them exists in you. On the larger scale, we are a gigabrain. You have ~86 billion neurons, the gigabrain has 8 billion of us.
          </div>
        </div>
        <div style={{display:'flex', alignItems:'center'}}>
          <div className='defNum'>4)</div>
          <div className="defList">
            The Waldgrave stands for giving all brains the ability to thrive. We want to provide tools for free or at cost. We want to learn as much as we can and then to share the best of what we find. We want to enable individuals to pursue whatever they think they can do that will most benefit humanity.
          </div>
        </div>
      </div>
      <div>
        <Link href="/Story">
          <img style={{width:'2rem'}} src="/thew2.png"/>
        </Link>
      </div>
      <div>
        <h4>What is Good?</h4>
        <p>
          Everything is Good, stop stressing the shoulds and worrying the woulds, can the coulds, everything is good.
        </p>
        <p>
          My latest conscousness theory is that our brains are inherently a product of the past, shaped by a mix of your inner thoughts, outer stimuli and how you reacted to them, along with much chaos. You are the active processes in the brain. You didn't shape it, but you travel within it and choose which paths to take. Your actions further shape it for your future self. Habits form grooves, much wider paths. As you bounce around your brain, it is hard to avoid your natural habits, they are the easier paths. You have to work harder to do something new. This is something to both weaponize and fight against, as you shape your habits to better serve you, and to create a better brain to live in.
        </p>
        {/* <!-- <p>
          On the cosmic level, we are insignificant and might not even have free will, so why should we spend so much time with judgements? I think the universe is a good thing, and we are a part of it. We are basically patterns, we can lean into the rest of the universe or pull back, and we can choose to observe more or less. We can learn from those interactions, but I don't see the need to judge a part of the universe for being how it is, even if that part is part of me. This brings us to the individual level. People exist on top of a collection of waves, constantly riding ups and downs. But we only observe people at one point at a time. This creates a perception issue, especially for people you don't know. Living in a city, the effect is heightened. If you are around a lot of people, it is expected that you will pass by people at the bottom or top of their waves regularly. If a good driver makes a small mistake once every 100 trips, but you are driving past 400 cars a day, expect to see at least 4 small mistakes. Everyone is driving a different spaceship through the same spacetime, yours accelerates at a different speed than mine, so it may seem like I am intentionally going slow when in reality I am going full speed. Or my ship has had several flat tires thanks to the potholes in my neighborhood, so I'm a little more anxious driving around them than you. Everyone has ups and downs because that's the very nature of our universe, matter and existence is based on ripples. To promote existence as we know it, we want to push up the wavefunctions of others. To do that, we need to understand their waves, their magnitude, frequency, and where they are at right now. Getting in-sync is more important than it may initially seem, in our universe if you have two waves of equal magnitude and frequency destructively interfering (hitting each other when one is high and the other is low), they cancel each other out and both waves disappear. So if you are able to get on the same page as someone, you can boost their upswings and help temper their downswings.
        </p>
        <p>
          Additionally, you are a biological computer that is constantly re-programming itself based on neural paths taken. We have limited processing power that we manage, 'we' are not the full brain, we are a part at the top front that connects to the rest, and seems to make decisions. How we think actively shapes our brains, the repeated surges through neurons are like the strings vibrating to create the base waves of our universe. 86 billion little splashes shape the seas of your mind. Meditation has you focus on a background wave that is always there, the in and out flow of your breath. As a new thought rises out of an inner wave peaking, you acknowledge it, understand where it came from, and let it go. You find its amplitude and frequency, get in sync with it, and hug it away with some deconstructive acceptance. You accept that your brain is a product of the past so this thought is a reaction you cannot control. What you can control is your reaction to your brain's default reaction, and in meditation your reaction is to focus back on your breath. But outside of meditation, this enables you to react to your immediate reactions and evaluate the output of your brain, which in turn shapes your brain for the next time. This is where I think conscousness and free will live. Through this, I believe meditation enables you to be more intentionally you.
        </p> --> */}
      </div>
    </div>
  </div>
      {/* </main> */}

  <footer style={{margin: '2em'}}>
      The Wacky Wednesday Waldgrave - Carl's Isle Productions
  </footer>

      <style jsx>{
        `#app {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-align: center;
          color: #2c3e50;
        }
        p {
          margin: 1% 5%;
          text-align: left;
        }


        h1, h2 {
          font-weight: normal;
        }
        ul {
          list-style-type: none;
          padding: 0;
          display: flex;
          justify-content: space-evenly;
        }
        li {
          display: inline-block;
          margin: 0 10px;
        }
        a {
          color: #42b983;
        }

        .purple-circle {
          width: auto;
          height: 200px;
          border-radius: 90%;
          position: relative;
          float: right;
          right: 2em;
          top: -7em;
        }

        .purple-circle-container {
          height: 10px;
        }

        @media (max-width: 960px) {
          .purple-circle-container {
            order: 1;
            margin: 500px 0;
          }
          .purple-circle {
            float: none;
            right: 0;
            top: 0;
          }
        }

        .bigw {
          height: auto;
          max-width: 500px;
          margin: -10% 0;
        }

        .hello {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin: 0 5%;
        }

        .defList {
          display: inline-block;
          margin: 7px 15%;
        }
      `}</style>
{/*
      <style jsx global>
        {
        `

      `}
      </style> */}
    </div>
  )
}


// html,
// body {
//   padding: 0;
//   margin: 0;
//   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//     Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//     sans-serif;
// }
// * {
//   box-sizing: border-box;
// }
