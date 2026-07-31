import HomeButton from "../components/HomeButton"
import Head from 'next/head';
import { useState } from 'react';
import Phases from "../components/Phases";
import LatestNews from "../components/LatestNews";
import ChicagoParkingLease from "../gpTea/ChicagoParkingLease";

// left aligned text? and description of policies section

export default function OpenChicago() {
  const [expandedP, setExpandedP] = useState(false);
  const [expandedQ, setExpandedQ] = useState(false);
  const [expandedDef, setExpandedDef] = useState(false);
  const [expandedInt, setExpandedInt] = useState(false);

  const phases = [
    { name: 'Ideation', isActive: false },
    { name: 'Refinement', isActive: true },
    { name: 'Secret Invasion', isActive: false },
    { name: 'Shock and Awe campaign', isActive: false },
  ];
  return (
<div className="container">
  <Head>
    <title>The Chi-GUI Conspiracy · The Waldgrave</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link
      href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400..600;1,6..72,400..600&family=Instrument+Sans:wght@400..600&display=swap"
      rel="stylesheet"
    />
  </Head>
  <HomeButton />
  <div className="page">
    <h2 className="pageTitle">Dear Chicago, Welcome to the Chi-GUI Conspiracy</h2>
    {/* <h4>Phase</h4>
    <div style={{display: 'flex', padding: '10px'}}>
      <div>Ideation</div>
      <div>Refinement</div>
      <div>Secret Invasion</div>
      <div>Shock and Awe campaign</div>
    </div> */}
    <Phases />

    <h4>Introduction</h4>
    <p>
    Hello, I am running for mayor. No man is an island — I believe in the people of Chicago, which is why I think the job is easier than it looks (this used to be a harder sell, but Mamdani is proving you can just take the easy wins that have been sitting there waiting for someone to step up). I want to push for the changes below, and in parallel, to enable and highlight the best of us who actually get things done.
    
    
    
     {/* and I want your support. I have a lot to say and I don't really know how to say it. The world is hurting, are you? Personally, I'm doing great, I have lived a privileged life, lucky enough to not have too much while having everything I need. Lucky enough to study everything I think is important, to pursue my dreams. When I'm alone I'm dancing, having a great time. Seriously, by biggest fear lately is being too giddy to fall asleep (actual fear, not trying to be cute. It's 2:30am as I write this). But I hurt when other people hurt. I can't live in a bubble. I have a big imagination, I can envision how many people I can help if I achieve 5% of what I aim to, it's beautiful. But I can't lie to myself, I'm too honest and too logical. If I don't take the open shots I see, and dedicate myself on a daily basis, more and more of my dancing will turn to crying. That's why I am here, why I choose to sacrifice my peaceful, private life to put myself in the public eye. If you feel the same, please help. We have work to do. */}



    {/* . And by here, I mean my direct competition, any Chicago mayor or mayor candidate ever before. I have already cheesed one victory by writing this many different ideas on a public website. If last election's digital platforms are the bar, we've passed. If you believe I am wrong, then I don't want your vote, I want to hear your voice. Send me any better ideas, I want them all please and thank you, much appreciated. -- frames of mind and spend time applying------This city is too broke, this country is too broke, this climate is too fucking broke for us to not accept any and all steps forward.----

    This is the phase where we map out our goals, various destinations to hit. One iconic image is America as the city on a hill, a beacon. It references a bible verse: "You are the light of the world. A city that is set on a hill cannot be hidden." We don't have any hills here, I believe Chicago offers a better example because we share common ground level. We've tolerated mediocre government for years because many of us already have enough and don't think we can expect more. You're too nice to be greedy enough. But I'm here to say it's time to get greedy, you deserve everything that you think others deserve. We need to lead by example, not because we deserve it or because we seek it, but because we are in the best position to do better.


    !!!******
     I don't think I'm always right, I invite you to ignore the 30% of what I say that you dislike the most. In exchange, I ask that you take the other 70% seriously. Can we carve off the global 30% and agree upon a Venn Tesseract, the clear direction to move towards with each step? */}
     </p>




    {/* <button onClick={() => setExpandedInt(!expandedInt)}>
          {expandedInt ? 'hide' : 'show more'}
        </button>
        {expandedInt && (
          <>
    <p> You only need to know two things about my political philosophy, 1) The golden rule is the core of my beliefs and how I think government should function. For any policy, how would you feel if you were any random person affected? The golden rule alone isn't enough, you have to also factor in other people having different preferences than you, and how to live with uncertainty. Buddhism uses the word Equanimity, it is one of the "4 Immeasurables", alongside loving-kindness, compassion and sympathetic joy. To me, equanimity is impartiality, an accurate understanding of what we share. I see deep inequality in our city and world. Which brings us to 2) I want right answers, implemented iteratively and publicly. Math and science have proven their worth, they are the anti-politics tools. And when I look at the history of Chicago, of cars in American cities, when I see the massive productivity gains of technology that enables one person to make beautiful things that can be shared infinitely at no marginal cost, alongside a stagnant minimum wage, I see trash math. I see propoganda as the leader of policy. I am an engineer, a buddhist, I love quantum physics and neuroscience, I understand a bit of how the whole operation functions. AND SOMETHING SMELLS FUNKY. </p>
    </>)} */}
    <h3>
      Chicago Platform
    </h3>
    <p>Please use this google forms link here to send me any feedback: <a href="https://forms.gle/xWV5H1nhWJWJynoMA">https://forms.gle/xWV5H1nhWJWJynoMA</a></p>
    {/* <h4>A couple initial definitions</h4>
    <button onClick={() => setExpandedDef(!expandedDef)}>
          {expandedDef ? 'Hide' : 'Show'}
        </button>
        {expandedDef && (
          <> */}
    {/* <p>Buddhism has an analog to the scientific method, the 4 Noble Truths. I want to apply this to every city issue, a basic template for progressing logic. You have probably heard something like 'life is suffering', and the Noble Truths are about "suffering", but that's misleading. Impermanence is the base concept here, nothing can escape continual change. So life has inevitable struggles, but you can address those struggles in a systematic manner. This is a problem solving framework for ongoing issues.</p>
    <p><b>4 Noble Truths:</b></p>
    <ol>
      <li>What is the current state of the problem?</li> <li>How did it get here?</li> <li>What is the ideal state?</li> <li>What is the path from here to the ideal state? </li>
    </ol>

    <p>By properly laying out the current context and history, we can find an ideal target and then start plotting a course in that direction.</p>

    <p><b>Dream Team</b>. There are two types: </p>
    <ol><li>The team of everyone who wants to achieve the same dreams as you.</li>
    <li>The team of everyone who supports you or would support you and your dreams if they knew you.</li>
    </ol>
      <p>I gotta say, my squad really shows up. Chance says it best:
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/eedeXTWZUn8?si=WmLJxWMuFfMCUc0a" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullscreen></iframe>
        <p>

         I feel so much confidence because I love my dream team. I know my homies love me, and I believe in them, even if they don't know me. I know I'm not the only one who cries seeing homelessness in 2024. I know I'm not the only one who thinks about the billions of humans that won't ever exist if we continue to pour a single chemical in the air (CO2 + sunlight = higher temperatures. all added CO2 is more contribution to future suffering). I know that I'm not the only driver in the city who would bike instead, if I felt safe on our streets. I'm putting together a team. The Chicago Dream Team. Everyone who wants to contribute to a better city is welcome. Mass civic involvement hasn't really progressed in the digital age since American Idol started the fan vote via texting. We need to make it as easy as possible to participate on the team, I need captains. From my reading of Happy City by Charles Montgomery, making our streets walkable and green in innovative ways might be the single most important thing we could do. I'm hoping wards can all adopt whatever fits them best. The variety of our gardens should match that of our architecture.</p> */}
    {/* </>)} */}
    <h3>Policies</h3>
    <ul className="policies">
      <li className="policyItem"><b>No more Lead Pipes:</b> Chicago has ~412,000 lead service lines, more than any other city in America. Shame. We got here because our plumbing code <i>required</i> lead pipes until the federal ban in 1986, decades after we knew lead was poison, courtesy of plumbers union lobbying. There is no safe level of lead for a child's brain, and a <a href="https://publichealth.jhu.edu/2024/study-estimates-nearly-70-percent-of-children-under-six-in-chicago-may-be-exposed-to-lead-contaminated-tap-water">2024 JAMA Pediatrics study</a> estimates two-thirds of Chicago kids under 6 have detectable lead in their home tap water. The city's plan finishes the job in 2076 — roughly three decades past the federal deadline. Of the five US cities with the most lead pipes, we are the only one that hasn't committed to the federal timeline. The cost story is madness: Chicago pays about $31,000 per line; Detroit pays $8,000-$10,000, Milwaukee $4,800. <a href="https://www.policyinnovation.org/insights/echoing-newark-how-american-cities-can-replicate-newarks-success-in-replacing-over-23000-lead-pipes-in-under-three-years">Newark replaced all 23,000+ of its lead lines in under 3 years</a> at ~$8,300 each, block by block. Meanwhile we've replaced less than 4% in five years and let ~$320 million in already-secured federal loans sit unspent. Pay competitive rates to whoever gets it done, build an in-house crew to compete on cost, and match Newark's pace. This is a solved problem that we are choosing not to solve.</li>
      <li className="policyItem"><b>Housing:</b> Let's be honest about the score: in 2023 Chicago permitted 1.36 new homes per 1,000 residents; the other nine biggest US cities averaged 4.71. Now Chicago rents are rising faster than any other top-10 metro. That's not a mystery, it's supply and demand — we are choosing scarcity. The city's own <a href="https://www.chicago.gov/city/en/depts/mayor/press_room/press_releases/2024/april/cut-the-tape.html">"Cut the Tape" report</a> found approvals that should take 3-6 months routinely taking 9 or more. Fix zoning and permitting first. Update the building code where we actually lag — like legalizing single-stair apartment buildings, which Seattle has allowed since 1977 (a redundant second staircase costs $200k-$400k per building and eats the floor space that could be family-sized apartments; Washington, Colorado, and Tennessee have already moved, and an ordinance is sitting in our own City Council). And bring back SROs: Chicago demolished <a href="https://www.pew.org/en/research-and-analysis/issue-briefs/2025/07/how-states-and-cities-decimated-americans-lowest-cost-housing-option">81% of its single-room-occupancy housing between 1960 and 1980</a> — over 31,000 of the cheapest homes we ever had — and then acted surprised about the people in the parks. Private rooms beat warehouse shelters on every measured outcome.</li>
      <li className="policyItem"><b>Child care:</b> Every Chicago 4-year-old is already eligible for free full-day pre-K — genuinely good. The hole is ages 0-3: infant care in Illinois runs <a href="https://www.epi.org/publication/child-care-affordability/">about $16,400 a year</a>, basically a second college tuition, and Chicago-area costs rose ~30% from 2020 to 2024. Subsidize care starting with the families who need it most, and scale up. This isn't charity, it's the best investment on the public books: Nobel laureate James Heckman — a UChicago guy — measured a <a href="https://heckmanequation.org/resource/invest-in-early-childhood-development-reduce-deficits-strengthen-the-economy/">13% annual return</a> on birth-to-five programs. When Quebec made child care universal and cheap, maternal employment climbed to ~87%, among the highest rates in the world.</li>
      <li className="policyItem"><b>Transit Frequency:</b> At the worst of the operator shortage, the <a href="https://wgntv.com/news/chicago-news/cta-lags-comparable-cities-in-ridership-recovery-staffing-shortage-remains-a-crisis/">Blue Line ran as little as 44% of its scheduled trains</a>. Service is mostly restored, and Springfield finally passed $1.5 billion a year in transit funding (December 2025) — so the excuses are gone. Rush-hour trains every 5-10 minutes, and buses you don't need a prayer to catch. Frequency is the highest-leverage move in transit: the research consistently finds a 10% increase in frequency drives roughly a 9% increase in ridership. The CTA's new Frequent Network — 20 bus routes at 10-minute headways — is the right idea; extend it until "just missed it" stops mattering.</li>
      <li className="policyItem"><b>Street Safety:</b> A <a href="https://www.sciencedaily.com/releases/2019/05/190529113036.htm">13-year study of 12 cities</a> found that protected bike lanes cut road deaths by ~44% for EVERYONE — drivers included — because they calm the whole street. Chicago is up to ~70 miles of protected lanes; keep building the north-south and east-west spines and let crash data drive the map. Daylighting is even easier: Illinois law already bans parking within 20 feet of a crosswalk, but Chicago's municipal code exempts ordinary cars from it. Adopt the state rule — <a href="https://www.hobokennj.gov/news/city-of-hoboken-reaches-new-vision-zero-milestone-seven-consecutive-years-without-a-traffic-death">Hoboken daylighted its intersections and hasn't buried a traffic victim in 8 years</a>. And since everyone in this city carries a camera, let residents report vehicles blocking bike lanes and crosswalks and take a cut of the fine. Delivery drivers aren't the enemy — we bolted a whole new industry onto our streets and gave it zero infrastructure. Give them protected lanes and a bike-delivery option in the apps, and they'll use both.</li>
      <li className="policyItem"><b>Smarter Traffic Lights:</b> INRIX ranks Chicago the most congested city in America — 112 hours a year lost per driver, roughly $7.5 billion citywide. Here's the part that should make you scream: a <a href="https://igchicago.org/2020/06/17/chicago-department-of-transportation-traffic-signal-planning-audit">2020 Inspector General audit</a> found CDOT has NO traffic signal management plan — signals get retimed only when somebody complains through 311 or their alderman. My hometown suburb had left-turn signals that knew whether a car was waiting three decades ago; the third-biggest city in America is still guessing. Pittsburgh deployed adaptive signals and cut travel times 25% and idling 40%. This is the cheapest infrastructure win on the menu.</li>
      <li className="policyItem"><b>Teachers:</b> About 1 in 7 CPS teachers leaves their school every year, and nationally ~44% of new teachers quit the profession within five years. That is a burnout pipeline, and it's fixable: decades of research show real mentoring and induction keep teachers in the classroom and raise student achievement, and CPS's own data agrees — its <a href="https://www.chalkbeat.org/chicago/2025/06/06/teacher-leader-program-expands-rapidly/">Teacher Leaders program</a> retains teachers above the district average, and its Opportunity Schools initiative cut vacancies roughly in half at hard-to-staff schools. Make Chicago the best city in America to be a new teacher: eased-in workloads, materials ready on day one, and our best teachers paid to coach the next ones — while still teaching a class themselves.</li>
      <li className="policyItem"><b>School Start Times:</b> The <a href="https://publications.aap.org/pediatrics/article/134/3/642/74175/School-Start-Times-for-Adolescents">American Academy of Pediatrics says teens shouldn't start school before 8:30am</a> — their body clocks literally shift at puberty. CPS high schools start as early as 7:30, and bell times get set by bus logistics, not sleep science: in 2015 CPS changed start times at 77 schools to save $9.2 million on buses. When Seattle moved high school to 8:45, students <a href="https://www.science.org/doi/10.1126/sciadv.aau6200">slept a measured 34 minutes more and grades rose ~4.5%</a>. California made 8:30+ state law. Sleep is free academic improvement — you can always add after-school programs, you can't undo chronic sleep deprivation.</li>
      <li className="policyItem"><b>Cameras with Real Oversight:</b> Surprise: Chicago is already <a href="https://www.technologyreview.com/2026/02/23/1132740/inside-chicago-surveillance-panopticon/">the most-surveilled big city in America</a> — CPD can tap into 32,000+ cameras — but unlike San Francisco, Seattle, Boston, and New York, we have no surveillance transparency ordinance. The cameras exist; the rules don't. I want them working FOR us, with the oversight in writing: open-source access rules, every viewing logged and auditable, ward-level buy-in, and automatic cancellation for tech that fails its own evaluation — like ShotSpotter, where the <a href="https://igchicago.org/2021/08/24/oig-finds-that-shotspotter-alerts-rarely-lead-to-evidence-of-a-gun-related-crime-and-that-presence-of-the-technology-changes-police-behavior/">Inspector General found only 9.1% of alerts</a> ever led to evidence of a gun crime. Support officers with live help instead of after-the-fact blame, and let the auditors watch the watchers.</li>
      <li className="policyItem"><b>Land Tax Reform:</b> Replace property tax with a land value tax. Today you're punished for improving your building and rewarded for sitting on a vacant lot — and Chicago has 30,000+ vacant lots. Meanwhile broken assessments shifted <a href="https://www.propublica.org/article/cook-county-property-tax-shift-regressive-assessments">$2.2 billion in property taxes onto the owners of cheaper homes</a> — that's the Tribune and ProPublica's "Tax Divide" investigation, measured by the University of Chicago. Economists across the spectrum call land tax the "least bad tax" (Milton Friedman's words). When Allentown, PA taxed land more than buildings, building permits jumped 32%; Detroit's recent plan projected tax cuts for 97% of homeowners while doubling taxes on speculators. Honest caveat: done fully, this needs an Illinois constitutional amendment — which is why we start the fight now.</li>
      <li className="policyItem"><b>BUBI:</b> "Brains Universal Basic Income" — a stability floor plus investment contracts for people building value for the city (full section below). This is not speculation anymore: Chicago already ran one of the largest guaranteed income pilots in the country (5,000 households at $500/month), and in November 2025 <a href="https://economicsecurityproject.org/news/cook-county-becomes-first-government-body-in-nation-to-make-guaranteed-income-permanent/">Cook County became the first government in America to make guaranteed income permanent</a>. Stockton's famous pilot saw recipients land full-time jobs at over twice the control group's rate. Then Chicago defunded its own follow-up program to patch a budget hole. We proved it works, and then we quit. I want to finish the job.</li>
      <li className="policyItem"><b>No more late night revving and screeching:</b> Chronic traffic noise is a health hazard, not an annoyance — the WHO ties it to heart disease (risk rises ~8% per 10 decibels), and Europe attributes <a href="https://www.eea.europa.eu/en/analysis/publications/health-risks-caused-by-environmental-noise-in-europe">12,000 premature deaths a year</a> to environmental noise. Chicago's muffler fines run up to $750 and basically never get issued, because the law requires an officer standing there holding a decibel meter. New York solved this with noise cameras: trigger at 85dB, fines up to $2,625, over 2,000 tickets issued. A noise-camera pilot ordinance has been sitting in our City Council since 2023. Pass it. Sleep is public infrastructure.</li>
      <li className="policyItem"><b>Process Reforms:</b> Ranked-choice voting, open data models, and engineering-driven decisions. RCV now covers ~14 million voters across 49 US jurisdictions, and New York's 2025 primary ran on it with the highest mayoral-primary turnout since 1989. Evanston voted 83% to adopt it — and <a href="https://evanstonroundtable.com/2024/11/14/court-strikes-down-evanstons-ranked-choice-voting-effort/">a court blocked them</a>, ruling Illinois law doesn't allow it. So this is a Springfield fight, and I'm picking it. Bonus: Chicago's two-round system attracted $34 million in campaign ads in 2023 — RCV finishes the election in one round.</li>
      <li className="policyItem"><b>Public Bathrooms:</b> Chicago has fewer than 500 publicly accessible restrooms for 2.7 million people. The city's FIRST public toilet — approved in 2021 — is <a href="https://blockclubchicago.org/2025/10/23/chicagos-first-city-backed-public-restroom-will-open-in-2026-ald-says/">scheduled to open at the end of 2026</a>. Five years, one toilet. The unit costs under $500k and the vendor maintains it for free. A great city lets you exist in public without buying a coffee. This is the cheapest dignity money can buy.</li>
      <li className="policyItem"><b>Historical Justice:</b> A prominent Fred Hampton memorial. The facts are not in dispute: Chicago police fired 90-99 shots into his apartment; the Panthers fired one. The FBI's informant supplied a floor plan marking his bed. The city, county, and federal government settled for $1.85 million in 1982. In 2006 the police union blocked even an honorary street sign; the city finally unveiled <a href="https://chicago.suntimes.com/black-history/2025/08/31/fred-hampton-street-sign-black-panther-leader">Chairman Fred Hampton Sr. Way in August 2025</a> — 56 years after his assassination. That's a start, not a finish. A city that murdered a 21-year-old visionary owes his memory more than a brown sign.</li>
      <li className="policyItem"><b>Night Sky Initiative:</b> Chicago is the <a href="https://therevelator.org/cities-ranked-light-pollution/">4th-brightest metropolitan area on Earth</a> — 4.5 times brighter than the average city. Under a dark sky you'd see ~2,500 stars; from a Chicago sidewalk, maybe a dozen. Our new LED streetlights already point downward (good), but the city chose a blue-heavy color temperature — one physicist estimated warmer amber LEDs would have cut our light pollution by at least half. Fixtures and phasing: that's the whole project. Give the kids of Chicago the Milky Way, and highlight a Chicago star (the human kind) every night alongside the count of celestial ones we've won back.</li>
      <li className="policyItem"><b>Chicago Bears Deal:</b> Taxpayers still owe roughly $356 million on the 2003 Soldier Field renovation — payments run through 2032 — and the Bears asked for ~$2.4 billion more in public money for a lakefront dome while being worth about $8.8 billion. When <a href="https://www.chicagobooth.edu/review/what-economists-think-about-public-financing-sports-stadiums">top economists were polled</a> — including 7 Nobel winners — 83% agreed stadium subsidies cost taxpayers more than they return. Almost nothing gets economists to agree like that. My deal: the Bears get land and cooperation, they pay for their own stadium, and whatever value the public contributes comes back as a contractual share of the money. The NFL bans cities from owning equity — Green Bay and its 538,967 citizen-shareholders got grandfathered in — but teams share stadium revenue with public authorities all the time through their leases: rent, naming rights, ticket surcharges. So structure the public's return as a contract, not a share certificate. And if the league objects to the public simply getting paid back, make them say that out loud.</li>
      <li className="policyItem"><b>Chi-GUI Civic Platform:</b> A Chicago-focused public interface and LLM for city services. Chicago 311 handles ~1.9 million requests a year — answering, routing, and publishing a live FAQ is exactly what this technology is for. Do it right, though: <a href="https://themarkup.org/artificial-intelligence/2024/03/29/nycs-ai-chatbot-tells-businesses-to-break-the-law">New York's rushed chatbot got caught telling businesses to break the law</a>, while Pennsylvania's careful pilot saved workers 95 minutes a day. Ours is open source, cites its sources, and lets registered Chicagoans opt in to shape its vocabulary and accent. It should obviously talk like us.</li>
      <li className="policyItem"><b>Ads → Content:</b> The CTA sells your attention for about $33 million a year — roughly 2% of its budget. That's the going rate for every El sign blasting ads instead of just telling you when the train comes. Public ads are nonconsensual brain AIDS, and cities have called the bluff: <a href="https://99percentinvisible.org/article/clean-city-law-secrets-sao-paulo-uncovered-outdoor-advertising-ban/">São Paulo banned outdoor advertising</a>, removed 15,000 billboards, and 70% of residents approved; Grenoble replaced its street ads with trees. Every digital sign shows arrivals, always — a color and a number of minutes. Then give the space to the people: sign up to decorate a train car.</li>
      <li className="policyItem"><b>Cost Reforms:</b> Build in-house capacity instead of defaulting to vendors and consultants. Chicago's outsourcing record speaks: the parking meters (see above), the Skyway — leased for $1.83 billion, and investors later resold the lease for $2.8 billion — and four downtown garages that ended with the city paying a <a href="https://chicago.suntimes.com/news/the-watchdogs-city-halls-62-million-blunder/">$62 million arbitration award</a>. Cities that insourced — Atlanta's water, Fort Wayne's fleet — got better service for less. Every service we can competently run ourselves is leverage against every future bad deal.</li>
      <li className="policyItem"><b>Parking Lease Reform:</b> In 2008 the city sold 75 years of our parking meters for $1.15 billion. The council approved the 500-page deal about 72 hours after seeing it, and the city's own <a href="https://igchicago.org/wp-content/uploads/2011/03/Parking-Meter-Report.pdf">Inspector General found we were underpaid by roughly $974 million</a>. The investors recouped their entire purchase price in under 10 years; through 2025 they've collected about $2.2 billion, they set a revenue record in 2024, and there are 58 years left on the lease. On top of that, we've paid THEM $160+ million in "true-up" penalties, plus $25 million for COVID street closures. Right now the owners are trying to <a href="https://blockclubchicago.org/2026/07/14/could-the-city-still-buy-back-control-of-its-parking-meters/">flip the lease for $2.53 billion</a>, and the council fight is live — this is the moment to get our streets back. Long term, meter pricing should be demand-based: if your street never fills past 70%, your parking should be cheap or free. Full rant with receipts at the bottom of this page.</li>
    </ul>


    {/* <h3 id="safety">Safety First</h3>
    <p>Two easy wins here. Cameras on cops, and cameras on streets. First let's outline the rewards and required regulation.
    </p>
    <ol >
      <li style={{marginBottom: '30px'}}>
        We should put cameras on every active duty officer, and to use that information as effectively as possible. It maximizes support to officers on the street. This means responsibilities get pushed to the command center whenever possible. If an officer is in a stressful situation, a heart rate monitor could tell HQ live. The call center officer would guide the field officer. Instead of focusing blame on the youngest workers in the system, why not expose the decision-making process and intervene at the appropriate level? Other city services can be tied in as well. The main costs here have to do with resistance to change and the loss of privacy to the officers. The cost of equipment should not be high, everyone is already walking around with a fancy camera in their pocket, I refuse to believe we can't bootstrap something cheap. So the primary effort on this item is to make this helpful and nice to use for officers, while ensuring full transparency.
        </li>
        <li>
          Street camera footage can remain unseen for like 99.9% of the time. If we make an open source system that only lets the one approved algorithm run on it, then it stays 100% private. If the algorithm identifies a major crime or if the police are investigating a particular location, then the footage is reviewed. (You could be notified if the footage on your block is used for something, and contribute your doorbell camera feed) It could be a Ward opt-in by vote system. So while I believe the privacy concerns can be addressed on several fronts, the concern remains. Privacy relies upon proper implementation to avoid abuse. One reward is safer streets without relying on the CPD officers, letting them focus on other work. No more late night revving of engines and screeching of tires. Sound pollution should not be tolerated, it seems like it would be easy to enfoce with a camera system (plus a shotspotter that actually works. The city should pay someone to build us a functional system). Speeding should be incrementally punished, so as new cameras are added punishment starts small or is waived, but repeat offenders get higher fines, eventually leading to a suspended license. The cost is the loss of privacy, but with the right implementation, we can minimize the loss and maximize safety. 
        </li>
    </ol> */}
    {/* 4 Noble Truths Breakdown (in progress):
    <ol>
      <li>
        Where are we today? There is a deep distrust of police in Chicago and elsewhere. The officers themselves have trust problems and trauma from working in this stressful environment. We are at the top of spending per capita while also being understaffed by ~12% of our budgeted positions. The streets of Chicago are not private today, doorbell cameras line the streets. The workload on individual officers is too high, turnover is too high. Reporting on traffic stops is bad enough that I've seen several articles about it, avoiding paperwork that could be automated with an always-on camera. Progress seems impossible because of the police union's resistance.
      </li>
      <li>
        How did we get here? ----police history lesson ------ fred Hampton, police union history? ---
      </li>
      <li>What's ideal? Max safety, max privacy, highest quality of policing. I want other cities sending their best to be trained by our best (4money). Your data will be more secure because we will have an algorithm tracking all use of all files. No 'slipping in to peak at a file' undetected.</li>
      <li>How do we get there? We get cops cameras, and we start working with them to find the best places to start intervening. If our main opposition is the police union, my solution is easy, just make the best thing ever for the police officers. Reduce the decision responsibilities and accompanying stresses of younger officers and create new jobs for officers too injured to return to the field but rich in experience, the ideal coaches. Let the world's best data scientists design some open source models for using the street cameras to support detectives and officers with as little human data exposure as possible. Any change to such a privacy system should require a ballot measure.</li>
    </ol> */}
    {/* <p>With the tech and density realities of our city, I propose that the only sane approach is to rely on an open-source system that has iterative development built into the design. If you want safety and privacy, WE HAVE THE TECHNOLOGY. You wanna bring new tech business to the city? Let's show we can lead. Traffic fines should never be seen as a source of revenue, I'm not talking about a red light camera for cash program. Automated fines could be minimized while maxing change in behavior. Like instead of running a red light and being notified a week later in the mail, you could opt in to a text-only system that lets you know when you have caused an infraction and your fine is reduced. If you repeat the same offenses, your fine should increase, eventually leading to a suspended license. Vote for me and there will be fewer people speeding crazily around the city, no more late night revving of engines and screeching of tires. Sound pollution should not be tolerated. It has a proven strong negative effect on health. And by nature, is not hard to track down.</p> */}
    {/* <p>
      I'm an engineer, any good work needs both a good target and good implementation. What I propose here are two systems. The first monitors all active police. Think about this, I just went on Twitch and selected a random game from the front page, "DRAGON BALL: Sparking! ZERO". I scroll down past 100 different live streamers and streamer 101 still had 6 viewers he was actively interacting with. The streamer is not paying Twitch, there was a 30 second ad. We have the infrastructure to let anyone in the world stream for free. Streaming cops doing their jobs should be easy.

      </p> */}
    {/* <p>Cop body cams should be an amazing tool for them. Every cop should have support all the time. Experienced cops who can't work in the field anymore can provide live support to other cops. It can even be like a call center, all officers can have their heartrate monitored alongside sound and video. Here are some potential scenarios:</p> */}
    {/* If they enter a difficult scenario, the police call center could be alerted live, by a button press or from one of these other data points. */}
    {/* <ol>
      <li>
        A gunshot sounds. The microphone on all officers and our new OpenSourceSpotter system installed on our new street camera system all hear within a radius, and they triangulate the source. All nearby officers are instantly connected with a hotline connecting to each other and the call center.
      </li>
      <li>
        An officer's heartrate spikes, the call center is alerted. An experienced officer is immediately connected to the officer in the field, and they can talk through the situation. The call center can also alert other officers in the area, and coordinate with other resources like firefighters, paramedics and mental health professionals. This system ensures that in stressful times, we are truly maximizing our ability to support our officers. No fucking around, we have to use our tools to their max, this is no place for pride or status quo bias.
      </li>
      <li>
        An officer sees something suspicious, he taps a button on his shoulder and he is connected to HQ. Chi-GUI (our LLM, described later) would have a special mode for police that would be based on all files the police has on memory. It could provide some context or answer questions. i-Robot Will Smith would take issue, but it's nothing we can't engineer safeguards around. Updates to how data is used would have to be approved by public vote. And all official uses (as in not private citizens) are recorded in the audit history. Auditors could scan that for abnormalities or specific instances of interest. Have some of the auditors audit the others and you have tied the knot.
      </li>
    </ol>
    <p>This means police officers will monitor themselves, so instead of judging individual cops, auditors will be monitoring the call center itself. They can provide live objections, presented through the police chain of command. Other services could work with the officers based on the call center info. Individual officers shouldn't be allowed to mess up, this system highlights the coaching and puts the responsibility on the superior officers.</p>
    <p>Street cameras, the streets of Chicago aren't private. No one wants to be on camera all the time, but with clearly-written open source software, we can guarantee that all video is only seen by human eyes if it is related to violent crime or if you are objecting to a ticket. The program to punish bad drivers can be extremely forgiving, like basic violations start with a $5 fine that can be waived if you reply to a text saying you will watch your speed or something. We only need to charge enough to change behavior, NOTHING MORE. What if you knew that anywhere in the city, people are driving safely? Isn't that fucking worth something? WE CAN MAKE THIS HAPPEN. Technology has given us most of today's world, and we are still massively underutilizing it, especially in government. Vote for an engineer. I'm tired of hearing screeching tires or revving engines at night, and it's basically absent in my neighborhood relative to the ones who have it bad. I will make it stop, if you give me the opportunity. If they don't stop, the punishment goes up.</p> */}
    <h3>Education</h3>
    <p>
      Childcare is the beginning. We need to support our parents, because they are the most important teachers in their children's lives. Stable households are able to spend more energy on their child each day. I want free daycare for everyone in Chicago. No matter our resources, we can do some form of this, and expand as we can. </p>
    <p>
      Teachers. I want childcare as a first step to helping teachers. The other contender for most important resource, good teachers. I want to maximize the % of the budget that goes to good teachers. I want to appeal directly to teachers. I want to reward the best teachers for teaching, I want some of them to focus on teaching other teachers, while ideally still teaching a bit. I want to give new teachers every advantage possible, to ease them in with the help of our best teachers. I also want to remove bad teachers and other obvious wastes of money. This obsession with whether or not we close schools seems like nonsense given it is a classic network analysis problem, what is the trade-off between closing or not for each case? We need these types of models made public. Equality through math.
      
      
       {/* If you want to debate something like this, you need to have the data. Public debate can evolve when we put out tools that make it easy for people to use the same data. I want to make arguments a game of finding exactly where people disagree. I want to make public policy discourse about the ideas, not the people. */}
    </p>
    <p>
      Chicago should strive to be the best place for new teachers. That's the value play. Young people willing to get into the teaching profession are a sacred resource we should respect and design around. We should set them up for success by incrementally increasing their load with continual guidance instead of burning out our talent to the point where they leave teaching altogether. Any initial costs are offset by the investment return, teachers stay and get better. The best teachers, instead of rising to some admin job, can rise to teaching other teachers. I would want to highly encourage the hybrid model where they still teach at least one regular class.
    </p>
    <p>
      I want to invest in our teachers and our students. As I said before, the number one resource for our students are their parents. BUBI, described in its own section below, is for the parents. We can build stability for all, a warm bed and a full stomach at rock bottom. A single parent won't have to work 2 jobs just to get by. More parents could choose to spend their time with their children, to the benefit of all of us.
    </p>
    <p>
      I don't want to get rid of any school model like charter or magnet schools. The variety helps us learn what is best. Maybe they need regulation changes, I have none to focus on now. I do believe neighborhood schools need more support. I think as we get good with public modeling, we start to focus on things like how far is everyone from parks, grocery stores, and schools. This data will really reveal inequalities in the city investment. I believe in the competition that charter schools bring, but we need to be fitting them within OUR long term plans.
    </p>
      <h3>Transportation</h3>
      <p>
    More trains and buses. In rush hour, trains should be coming every 5-10 minutes. The other day I arrived to Merchandise Mart and a packed platform a little after 5 on a weekday, and the next train didn't come for 20 minutes. Taking a train at rush hour should be a pleasant experience, not a stressful packing of people. The number of people commuting is not a surprise, any crowded route should get more trains. God forbid we over-serve the people. (At the worst of the operator shortage, the Blue Line ran as little as 44% of its scheduled trains. Springfield finally passed $1.5 billion a year in transit funding in December 2025 — the excuses are gone.)
  </p>
      <p>North/South bike-only street</p>
      <p>Smart traffic light overhaul, less pointless waiting</p>
      <p>Camera system from earlier means fewer crazy people driving on the shoulder. And when you see them on the shoulder, you will KNOW that they are either going to the hospital in a hurry, or are helping fund our dear city.</p>
      <p>
      All El signs will ALWAYS show the next incoming trains for each line they are serving. No notices or ads blocking the whole screen. All you need is a color and a number of minutes — there is always space for them. (Ads are literal brain AIDS and a consent violation.)
      </p>
      <p>
      Concrete-protected bike lane highways north-south and east-west. Track bike crashes and build more protected bike lanes wherever they seem needed. Map out the active cycling population of Chicago so we can get accurate simulations going and can optimize the bike lane making. This is where I need my Industrial Engineering brothers and sisters to step up and make us an open-source model of the city that anyone can interact with through various interfaces. I want to let people propose alterations based on the results of their changes to the model. Let local people find local improvements.
      </p>
      <p>
    Carbon Check- it's like a carbon tax but it isn't a tax because the government gets nothing. We check how much harm people are putting in the air and we charge them. That money goes to a fund, and every month that fund is divided evenly between every citizen. Everyone bears the consequences of these actions, so everyone should be paid to compensate. This can immediately correct incentives. The result? The whole city is incentivized to destroy the world less, at ZERO cost. It's just a transfer. This is simply fair, or more accurately, more fair than today. Because we will not be charging the full cost incurred by your gas use. We will be charging a fraction of the cost, and then dividing that fraction evenly. This may seem obvious or too easy, that's because it is the right idea. No more political bullshit, no paying the government. Pure equality. Massive gains with zero infrastructure changes. Do it. Do it now.
  </p>
  <p>
    Long-term plan for Lakeshore Drive (more wishes as opposed to immediate goals): reroute it away from the lake downtown near Millennium Park. Reduce the car lanes in order to establish bus-only lanes. First LSD can be routed through the Columbus area, eventually down and out of the way like the trains there. The goal is a car-free connection between the city, the parks, and the lake and everything it has to offer. Wouldn't it be cool if someone could arrive at Millennium Station and walk straight through Millennium Park and onto the beach without ever worrying about getting hit by a car? Our architecture is even more beautiful when you can safely look up at it.
  </p>
  <p>(Strategic landfilling for the people. We build more land at strategic places to expand Chicago eastward onto land that cannot be built upon. It's an investment that greedy politicians or developers of the future can't spoil)</p>



  <h3>BUBI</h3>
  <p>
    Brains Universal Basic Income. Two Universal Basic Income plans supporting brains, our number 1 resource, hence BUBI.
  </p>
  <p>
    First off, traditional Universal Basic Income, or General for GUBI. If we provide financial stability, we are providing Safety, we are enabling Education, we are giving people the power to choose the direction of their lives. Giving people money is simply the best way to help people in need because they know what they need. That's just a fact we've learned from studies, and developing policy otherwise would be ugly pride with no purpose. So we set up some sort of graduated system so you get less the more you make. One of the variables in that system is how much we contribute. We can set up a structure and start today, there is no minimum amount necessary. The base principle here is the equanimity of brains. GUBI is basically a well-defined bucket we can choose to allocate funds to, or people could donate to. Something you can trust, and seriously reduces the government's ability to mess things up. You know you will be directly supporting other people in your city who have less, and in fair proportion and minimal waste.
  </p>
  <p>
     The top 10% in this country own 68% of the wealth, this middle class junk is just overdone storytelling. What about our most vulnerable brothers and sisters in this city? Everybody can feel safe when everyone IS safe. On your worst day, getting fired from a job or filling out job application #263, what if you knew that at the end of the day you would still have a place to sleep, plumbing, food to eat, and barebones healthcare? Could you live a little lighter knowing that the city had not only your back, but your family and friends' too?
  </p>
  <p>
    The second UBI is more my own creation. It is an employment contract robot essentially. Do you have something you want to do, that will create value for the city? Chi GUI will hear you out and give a fair deal. So I could say, "I want to make phone apps for the city, I want to be paid X. I'll pay you back at rate Y." Chi-GUI (with human help) would decide the expected value of my work, and my ability to earn going forward, and offers new rates. So the variables are the job itself, the salary, and the payment schedule Y. A job that could contribute to everyone's health would help the person's petition, but they could request to do anything, if the salary and payment schedule aligned with the person's expected income. That payment schedule would be like "if you are making over 50k, for every dollar you make, you will pay the city 5 cents." You can have as many brackets as you want, you could have a higher amount before you start paying back. At first, Chi-GUI is going to be super selective, it only has so much money to invest. It can start ruthless, where it hires good bets that ensure long term doubling return, inflation-adjusted. Each success would fund 2 more eventually. So at first, Chi-GUI is the shrewd investor, but as it grows it can give better deals. It still wants to profit though, because profit can go to the General Universal Basic Income.
  </p>
  <p>
    We can be very selective with who we give money to at the start. I would propose a mix of prioritizing deals that will pay it forward manyfold alongside people wanting to work in professions we need. We could support teachers, nurses, nannies and other caregivers, by investing in their education and long-term health. This could be algorithmic, based on labor stats.
  </p>
  <h3>Housing</h3>
  <p>We need to define the ideal city block and make a new building code that reflects that. It can be dynamic to let wards have some flexibility, but we also need universal standards to avoid enabling NIMBY bimbly bullshit at every turn.</p>
  <p>One minimum consideration is SROs, single room occupancy housing. Ask people who avoid shelters why: they aren't safe or private, and what few belongings you have get stolen. I'd like to see an SRO minimum for wards based on population size. It's a pathetic shame that we have these ongoing problems with homelessness in our parks. We don't need to engineer new solutions, we only need to bring back ones we've abandoned. It's like the Harold's Chicken rotating bullet-proof glass, a threat of violence is something we can work around. The <a href="https://newrepublic.com/article/161808/ewing-annex-hotel-housing-crisis-chicago">Ewing Annex Hotel</a> had a version of this.</p>




 <h3>Other things I care about</h3>
  <p>
    Land tax. No more property tax. Property tax is just so unbelievably stupid. Land is a limited resource, by owning it you prevent everyone else from using it. You should have to pay everyone for your continued exclusive access. Why should you be taxed on the improvements you have made to that land? It's garbage incentives. Switching will be a bit of a pain, but it won't be any worse than the mess that is property taxes today. Land value is easier to calculate, we can ease up on the bullshit. Affordable housing would go up because you would no longer be punished for building bigger on the same patch of land. But you know who will be punished? All those shitty landlords who have been sitting on land, waiting for the value to go up. Zero urgency. They will have to pay for their speculation.
  </p>
  <p>
    Clean, well-maintained bathrooms around the city.
  </p>
  <p>
  Fred Hampton statue, somewhere prominent in the city. A plaque explaining how he was assassinated by the Chicago police, in a planned murder that included the FBI giving the police a detailed floor plan indicating where Fred Hampton slept. Police fired somewhere between 90 and 99 shots that morning; the Panthers fired one. He was potentially the best leader we have had, and the city let his memory go improperly marked for over half a century. Despite having murdered the man, the police abuse of Fred Hampton didn't stop there: in 2006 the Fraternal Order of Police helped block the renaming of a street after him. Not some bold change like renaming Lake Shore Drive — just one of the brown honorary signs, of which we have over a thousand, most far less deserving. The city finally unveiled Chairman Fred Hampton Sr. Way at the site of the raid in August 2025, 56 years after his assassination. That's a start, not a finish. They murdered him and then his legacy; a proper memorial gives the city back a role model.
  </p>
  <p>
  Reveal the stars of Chicago. Make the sky beautiful. Chicago is the 4th-brightest metropolitan area on Earth — 4.5 times brighter than the average city sky. Under a truly dark sky you can see about 2,500 stars; from a Chicago sidewalk, maybe a dozen. Light going up into the sky helps no one. Our new LED streetlights already point downward, but the city chose a blue-heavy color temperature — one physicist estimated warmer amber lighting would have cut our light pollution by at least half. Fixtures and phasing: that's the whole project. Also, the city will highlight a chicago star citizen or cluster of citizens each day alongside a stars gained count. A daily open mic of sorts. That plus a safety net of UBI, healthcare and housing guaranteed, we could transform the starving artist, relieve some of the stress that is actively taking years off the lives of the lower class.
  </p>
  <p>
  Force the Bears to stay and build a bigger stadium in the same area — give them any land they need and let them pay for and own the stadium. Some context for the negotiation: taxpayers still owe roughly $356 million on the 2003 Soldier Field renovation, with payments running through 2032, and the team asked for ~$2.4 billion more in public money for a lakefront dome while being worth about $8.8 billion. When top economists were polled, 83% agreed stadium subsidies cost taxpayers more than they return. So: for however much the city gives up in any deal, the city gets a piece of the money machine. The NFL bans cities from owning equity (Green Bay and its half-million citizen-shareholders got grandfathered in), so structure it as a contract instead: for every dollar in profit the Bears take home, the city gets a percentage. Teams share stadium revenue with public authorities all the time — rent, naming rights, ticket surcharges — this is that, with honest math. Chicago accounting firms can make independent estimates of fair value. As a bonus, I want to see a player alumni ownership group — the team could really use some check on shitty ownership decisions. And if the league says the public can't even buy a share of the profits, make them say it out loud.
  </p>
  <p>
    I'll get us out of the parking deal theft. I have a rant down below — search for Redoma Sarl. I'm gonna venture a guess you haven't searched that name before, but a quarter of our parking money flows to it. When I first went digging, Redoma was a ghost: a Luxembourg entity with a controlling stake in Deeside Investments (the non-Morgan-Stanley half of our meters) and not one news article naming it. The answer was sitting in the city's own disclosure filings the whole time: Redoma is 85% owned by Allianz's life insurance arm. So on paper, the ownership of our streets is Morgan Stanley funds (50.1%), Abu Dhabi's sovereign wealth fund (~25%), and German insurance shareholders (~25%). That's the paper answer. Here's my real question: the whole thing is layered funds owning holding companies owning LLCs, and Redoma controls the majority of the minority side. Who are the investors inside the majority side's funds? Not disclosed. If the same ultimate owners sit on both sides of that 50.1/49.9 line, then one of them quietly holds control of our streets — and the structure is built so you can't check. The investors recouped their entire $1.15 billion within the first decade; through 2025 they've collected about $2.2 billion, with 58 years left on the lease. And right now they're trying to flip it to a New York firm for $2.53 billion — the council fight is happening this summer. More on this at the bottom.
  </p>
  <p>Chi GUI will hear all. A Chicago LLM helps facilitate everything it can for the city. At first it is a General User Interface for 3-1-1 and other bureaucratic endpoints. It could publish questions like an FAQ maintained live. You could ensure that people are heard and questions answered, or at least you'd have perfect stats on it. Any user that is registered with an ID or something proving they are Chicagoan could opt into shaping the bot anonymously by letting their words influence things like Chi GUI's vocabulary and accent.</p>
  <p>
    Fuck Kanye first and foremost, fore making me do this shit, Nazi motherfucker. I want to save Kanye. "This prayer's for everybody that feel that they're too messed up, For everyone that feels they've said "I'm sorry" too many times, You can never go too far when you can't come back home again." Kanye West does not particularly deserve to be saved. But we are all family, everyone deserves a home to come back to. If Kanye stays lost, that's because we haven't shown him the way home. Imagine what Universal Basic Income could have meant for a young Kanye. Instead of the fear of being homeless, he could have focused on his career. He would have never needed to leave Chicago to begin with. If we could teach Kanye how to take care of his mental health, he would pass that on to many people. Keep in mind though, we aren't making a Kanye pitch, we are advocating for mental health. Getting through to Kanye is just a final test of our messaging. (this was written before his latest apology, but it still applies)
  </p>

 <h3>Process changes</h3>
  <p>Ranked Choice voting. For everything, Mayor and School Board seem like an obvious start. Ideally, all elections have equal spending between candidates. I for one hate ads. Filth being thrown into our minds without consent. Your brain doesn't have defenses like a computer, you're continuously vulnerable to your context. The forefront of the modern science of the mind has consistently been weaponized against other people for the sake of money. Ads are AIDS, literal brain AIDS. They use your brain's natural defenses to further their goals. I don't want to campaign on ads, I want to campaign on a broad coalition of people who want to accomplish the same goals. Hence the conspiracy. So please let me know what you think, or share this with someone who may be interested.</p>
  <p>
    Too many things have been decided by greed or chaos, we need to demand engineering-based answers. We need to track what works and iteratively improve. Everything possible should be open source. We can mathematically prove that we are making the right decisions with an open process. Any popular competing idea can get its fair shot at proving itself. It's a way of fighting back against corruption by removing the human element at key junctures. It's also a way to combat past injustices, like how the auto industry stole American streets through propaganda and (lobbying) bribes. Use of public space is a pet peeve of mine. I want engineers optimizing how we can best share the space, not some bullshit status quo established by the most manipulative people of their time.
  </p>
  <p>
    I will not seek re-election. I would much rather foster the growth of others and shine the light on their work. After 4 years of that, hopefully you guys get some good option to choose from (with ranked choice of course). If not, then I failed and don't deserve another term anyways. I only feel comfortable demanding the throne because I have put in many years of thought and I truly believe that these ideas will have a massive impact if I get the green light. I don't want fame or power, I'd rather not be recognized on the street. I don't think it's going to be a problem eventually, because once I cover up the light pollution and cut out the bullshit, you guys will be amazed by all of the stars that have been hiding.
  </p>
  <LatestNews />

  {/* future it tracks social media and accepts input from any source, text, email, everything. it would have to bot detect, but it could share facts with people that say something wrong about Chicago, like wrong crime stats or something. */}

    {/* I am an engineer with no desire to be famous. I'd much rather work on my website and apps and remain anonymous, but I can't. Our world is too fucked, our city government is too fucked. I can't remain passive, and I won't let you either. I am not here to promote myself, but to promote ideas that can make us global leaders in living right. Fuck the city on a hill, that was a terrible idea built on ego. What about a city on a large body of fresh water? I see 2 options for us: either we lead by example and show the world that we have our shit together, or we continue to doom future billions, and some of those people will come to us as refugees instead of as students. */}
    {/* My Qualifications — hidden for now */}
    {false && (<>
    <h2>My Qualifications</h2>
    {/* <p>For now, you can call me Young Carl, because I am my <a href="https://youtu.be/Gllwc13H6qY?si=CGlvN62t6be63bX4">authentic self</a>. I don't have anything else to present as because I don't give a shit about things that don't matter. This is awkward for being a public figure but too bad. I wouldn't be here if I thought someone else had a quarter of my ideas already. I've been studying Buddhism for a few years, it is like the computer science of consciousness. My personal plan as a public personality is to destroy the ego of the west. But here is how I see myself: I've always wanted to understand how things worked, initially I wanted to be an architect. Then I wanted to build things with math. Math started to get less applicable so I focused on engineering. Industrial engineering is the study of mathematically modeling anything, I love it but I found the biggest barrier to industrial engineering was that people in power just don't care, my role is promoting industrial engineers. Economics was fun but similarly, no job let me tinker with an economy. I love software engineering because I can build things from scratch, understanding each part, while also setting the overall goal. Now I am studying neuroscience, because the brain is basically the peak of curiosity and computing. I understand how things work. At the most basic level, and in the big picture. In my mind, those are the only 2 things in government you really need, long term vision paired with only solid steps forward. I'm also learning jazz piano and I dance regularly, with long-term rap dreams. I'm a fan of improvisation and people with more style than me. I want to be both an enabler and gatekeeper. Government shouldn't suck, it should only get better. We have the math.</p> */}
    <button onClick={() => setExpandedQ(!expandedQ)}>
          {expandedQ ? 'Hide' : 'Show'}
        </button>
        {expandedQ && (
          <>
          <p>
            Not relevant yet. I'm a warrior on team logic, I'm an excellent role player. I would love to continue studying and building from the sidelines, but our planet is burning and the standing of logic is in shambles. In total, billions of lives are directly threatened by OUR actions TODAY. I see amazing work in many fields, but obvious massive failures in political and moral leadership. The way to drop the ego and advance the fastest is to not elect a number 1, but instead put a top #2 option in the top position of power. Like giving Frodo the ring, I'll go straight to the goal and then go back to a simpler life, I'm no wannabe King. Give me 4 years, what's the worst it could bring?
          </p>
          <p>Why me? Because they killed Fred Hampton. Because I've been able to benefit from everything this city has to offer, and I want to make sure everybody else gets theirs too. I studied Industrial Engineering and Economics, I understand the big picture. I became a software engineer because I wanted to understand and create from the bottom up. I've turned myself into a full time student again because I know I have so much to learn still. I'm a buddhist, I truly believe you are as good as me, that you can learn what I can teach and be better than me. In a better world, I would spend a couple more years or decades learning before asking anything from you. I'm no martyr and I don't want to have to see more made as the darkness grows. So ask you guys to step up and show a light for the world. </p>
            {/* <p>(ps if you vote for me, you get two mayors for the price of one, I'll be giving the other mayor half my salary and some of the traditional mayor responsibilities.)</p>
            <p> I believe in myself because I believe in people and I think I'm people too. Everything that I think is truly important about me can be learned by anyone else. I want to run solely on my ideas, but I'm happy to share my methods. I am working on a book/horde of information for my neice and nephew for when they are older called the Basic B's of Being, so this has been on my mind for a few years. Here's my basic current system, it is based on the concept that your last 18 months of actions determine the habits that are your default. Those actions require less effort, and so if you do something you want to do nearly every day for 18 months, it is actually harder for you to NOT do the desired actions. I decided to make a 3 18-month plan, the 54 month plan. In the first 18 months, you decide on one or a few things you want to be doing regularly. Then devise the minimum way you could do the thing. The most important aspect is the consistency, 5 minutes a day of something is easy to fit in. Don't be discouraged by the lower volume, you are building up a grand snowball. You reprogram your own electric forest through associations. The second 18 months are focused on taking each of your core activities to the next level, whatever that means to you. I'm halfway through this phase. Phase 3 is to lock in the ideal habits that were learned in phase 2. So right now, I'm trying to settle into my ideal routines. It's not about forcing anything, it is simply answering this question: when you do have free time, how do you want to be spending it? Take the 4 Noble truths to that. What do you do now, and why? What do you want to be doing, and what's standing between you and doing that? What does doing that thing for 1 minute a day look like? 5-10 minutes? Do whatever you need to do to make the important things daily, key off of existing routines like waking up and meals. Your basic routine can always be extended into more of that work, but rejoice in the success of daily intention. You're walking through your Electric Forest every day, each trip down the same path wears it in a little bit more. Accept the noble duty of Waldgrave of your own mind, it is already yours. The internet/social media is a sort of Electric Jungle, as full of life and variety as the Amazon. I think a role I can help serve is cutting through the bullshit to show you towards the best paths and to correct misinformation. Other than that, I'm not seeking fame or fortune, I want to help people who know better than me fix things I know are broken. I stopped wanting to be an industrial engineer not because I didn't believe in mathematically modeling the world, but because I could see that the major hurdle was getting people to listen to industrial engineers. </p>
            <p>My things: walking, meditation, reading, yoga, exercise, creative writing, music, working on the Waldgrave. These are the things I'm choosing to invest in.   </p> */}
          </>
        )}
    </>)}


  <h2>(Bonus Parking Rant led by GPTea)</h2>
  {/* <p>Chi GUI will hear all. Chicago LLM helps fascilitate something like the more perfect platform, it could publish questions like an FAQ maintained live. You could ensure that people are heard and questions answered, or at least you'd have perfect stats on it. Any user that is registered with an ID or something proving they are Chicagoan shaping the bot, future it tracks social media and accepts input from any source, text, email, everything. it would have to bot detect, but it could share facts with people that say something wrong about Chicago, like wrong crime stats or something.</p> */}
  {/* <p>
    More trains. In rush hour, trains should be coming every 5-10 minutes. The other day I arrived to Merchandise Mart and a packed platform a little after 5 on a weekday, and the next train didn't come for 20 minutes. Taking a train at rush hour should be a pleasant experience, not a stressful packing of people. The number of people commuting is not a surprise, any crowded route should get more trains. God forbid we over-serve the people.
  </p> */}
  {/* <p>
    The More Perfect Platform. This is a web platform that we are developing, the goal is to provide a format to collectively improve public policy through the sharing of proposals in a structured forum. All of my future plans for Chicago will be up there and open to criticism and suggestions before I run. Hopefully, we can find some designs that make debate a game of finding exactly where to candidates disagree, as opposed to emphasizing rhetoric and storylines. Eventually I think this can help bring direct democracy to Chicago as well.
  </p> */}
  <button onClick={() => setExpandedP(!expandedP)}>
          {expandedP ? 'See Less' : 'See More'}
        </button>
  {expandedP && (
    <div>
      {/* <ChicagoParkingLease/> */}
    <p>
  (Let's call this a conspiracy theory and a mental experiment: how corrupt can a deal be and still remain legally unchallenged? I want discovery to uncover emails and texts of all involved) 75 year deal, you are saying fuck the voting rights of citizens and elected politicians for the next 74 years. You don't have that right, you never did, any such deal is null and void. Taxation without Representation, DAY 1 SHIT FFS! If my taxes don't go to where my representatives say, THAT IS TAXATION WITHOUT REPRESENTATION. Of course, we might need to make longer term deals for infrastructure or energy as needed, but this was a pure transfer of wealth, from us and our children and their children, to a corrupt mayor famous for his corrupt father and the corrupt city council he led.(btw, the investors made their entire money back within the first decade — through 2025 they've collected about $2.2 billion on a $1.15 billion purchase, with 58 years still to go. The city's own Inspector General said we were underpaid by roughly $974 million on day one. We aren't defaulting, we are asserting our basic rights and letting the thieves off the hook with a better-than-market return. And you are worried they will cry? I say we offer a Chicago law school student competition to represent the city in any impending lawsuits. The City does not have to spend a dime, we appeal up to the Supreme Court, and accept their decision. Anyone who wants to help the case for free can support the winning students). 
  {/* (if you are looking for another legal angle, they charge "convenience fees", even though they are not inconvenienced in the slightest per transaction in any way that would earn that money) */}
<br/>
Parking meter pricing should be a supply and demand-based system to maximize utilization of limited space. THAT is the real goal, so it should be the goal variable. If there is plenty of parking available in an area, then the price should be low to none. As availability goes down, the price can rise to the max. Loop meter rates went from $3 an hour in 2008 to over $7 today. Why is our government fucking us so hard on this? Change the pricing model immediately. And know who you're paying: the audited books say Morgan Stanley-affiliated funds hold 50.1% of Chicago Parking Meters LLC, and the other 49.9% is Deeside Investments — itself split between Abu Dhabi's sovereign wealth fund and a Luxembourg entity called 'Redoma SARL.' You know Abu Dhabi, but who the hell is Redoma? When I first searched the name: nothing. Not one Tribune article naming a company with a quarter of our street parking, which we send tens of millions of dollars to every year. I threw this conspiracy around the Chicago subreddit, and someone sent me a 60-page pdf that just said Redoma SARL on one line item on page 19. Some Jason Bourne shit. But here's the punchline — the answer was in the city's own Economic Disclosure filings all along: Redoma is 85% owned by Allianz Lebensversicherungs-AG, the German insurance giant's life arm. Nobody hid it well. Nobody looked. And notice what the structure allows: layers of funds and holding companies on the majority side, a Luxembourg box controlling the majority of the minority side. If the same money sits behind both, the 50.1/49.9 split is theater and one owner quietly has control. I can't prove that — that's the point. It's built so you can't.
<br/>
So what are the Germans collecting a cut of your street parking famous for? In 2012, Oxfam called them out as one of Germany's biggest food-commodity speculators, betting on the prices of what poor countries eat. In 2020, they fought pandemic-era claims, especially in the hospitality sector. In 2022, their US investment arm pleaded guilty to securities fraud — about $6 billion in penalties. In 2024, Washington state made them repay every customer they'd denied under hidden mental-health exclusions in travel insurance. In 2025, their US life arm leaked the data of 1.4 million customers, Social Security numbers included. Evil Germans. And this time it's not a cheap shot: during WWII, Allianz's CEO served as Hitler's economics minister, and the company insured concentration camp facilities — that's not me talking, that's the corporate history Allianz itself commissioned. Now they collect a cut of every parking meter in the city. LITERAL ILLINOIS NAZIS, controlling our streets. The Blues Brothers already taught you how to feel about that. You ready to stop this shit now?
{/* Here's the fat, easy win. We stop paying them, serving two main purposes. 1- We the people of today are the only ones with the right to act and decide today. We will challenge the legality of the previous sellout deal. 2- Redoma SARL and friends will have to show themselves. I will not tolerate Chicago money going to terrorists, Russia and North Korea. I can't prove that it is, but that cannot be the burden of proof here. You have to prove that you aren't knowingly doing business with terrorists, stuffing your head in the sand is no excuse. */}
  </p>
  </div>)}
  {/* <p>
    Carbon Check- it's like a carbon tax but it isn't a tax because the government gets nothing. We check how much harm people are putting in the air and we charge them. That money goes to a fund, and every month that fund is divided evenly between every citizen. Everyone bears the consequences of these actions, so everyone should be paid to compensate. This can immediately correct incentives.
  </p> */}
  {/* <p>
    Eductation Priority 1- Become the best city in the world for new teachers. Prioritize things like providing complete and up-to-date cirriculum to all new teachers, easing in teachers to their role, and other practices of the current best cities. Our best teachers should be able to focus on teaching new teachers, if interested.
  </p> */}
  {/* <p>
    Security Update 1: Street Safety, Oversight, and Enhanced support

    I want to put cameras on every Chicago street (at the same time we could upgrade our street lamps and see more stars at night, they don't need to point up). They should hopefully be discreet. The deal is that these cameras will only be used when dealing with violent crime + theft. The data usage is on open source code, and auditors can see who accessed what. Any access is logged.

    Alongside this, I want all officers to have their cameras and microphones on at all times. This data will hit a general ai that we train, so based on what it hears and sees, alongside heart rate and such, can give the police whatever they need to best support their officers. Screams and gunfire would trigger a raising of the alert level for the officer. The officer can raise the alert level themselves whenever they want. For any elevated scenario, they are put into contact with the police support center. From there, experienced officers can give critical advice to officers all over the city. Also though, two other groups are watching: the auditors and other support teams. Firefighters and mental health workers can respond in live time and communicate with the police support team. The job of police officer is hard, we should give them the best support we can. And this gives us live oversight, and a system for improvement.
  </p> */}
  {/* <p>
    BUBI- Brains' Univeral Basic Income

    My goal is a general ubi but here is a potential path there: offer some varying yearly amount (varying based on the terms they make) to software developers to work on any open source project that benefits Chicago. They would pay back over time when their income is sufficiently high, based on a payscale they agree to. So some people might stay low income, but the majority could return several times that. Once that income starts coming in, the program could expand to other groups, artists and teachers come to mind. What deal could we offer that works? I'd want something like until you return 10 (7?) times what you take, except the pay scale would mean it wouldn't matter to you ever. In short, to start UBI, all you need is capital to expect a good return on the best group you can identify. I have no idea who is best, I just know software develops have a high salary, and many new devs are looking for some experience before they find their first job. I want to make effectively guaranteed deals so that we can get initial funding (investors get a guaranteed return but then they are out), and so that they can contribute to the expansion of BUBI.

  </p> */}
  {/* <p>
    Land Tax. No more property tax. Property tax is just so unbelievably stupid. Land is a limited resource, by owning it you prevent everyone else from using it. You should have to pay everyone for your continued exclusive access.
    <br/>
    Why should you be taxed on the improvements you have made to that land? It's garbage incentives. Switching will be a bit of a pain, but it won't be any worse than the mess that is property taxes today. Land value is easier to calculate, we can ease up on the bullshit.
    <br/>
    Affordable housing would go up because you would no longer be punished for building bigger on the same patch of land.
  </p> */}
  {/* <!-- <h2>Chicago priorities (redundant now)</h2>
  <p>
    First is security. I propose that we do all we can to make our city safe, while protecting our privacy and civil rights through clear processes with audit trails. I want cameras on every city street, with the footage only being accessible for violent crimes and all searches are recorded. Everything goes through general machine learning, but any viewing of footage has to be sanctioned. Any additional use of the cameras beyond violent crime would require a city vote. My other security element is universal basic income. We can set up a UBI program with what we have, limited in count or amount or both, and set it up so that if you later have an income above x% of the poverty line, y% of your additional income goes to the UBI fund. The tax drastically lowers when the UBI fund is growing (it keeps growing so that one day it won't need the tax). Alongside the street cameras, I want all cop cameras linked live whenever they are active. This footage will be fed to the police and other help teams. The footage will be fed into machine learning and any escalated scenarios will be highlighted. For every cop, there is a live support line. They hit a button or say the right thing, they can raise their status themselves as well. They are then connected to the best available support staff who see and hear the situation live. This goes beyond accountability, failure is failure. This establishes clear perfomance: the officers do their job normally following basic procedure with cameras on at all times, and then in escalated scenarios the responsibility falls first on the police support team giving orders based on all information at hand. The rest of the responsibility falls on the watchers. This group oversees and audits the cam footage alongside the supporting communication of the police. They hear and see everything because they are part of the same general support team. The goal of this setup is to reduce the obvious risk of individual police officers being unprepared for escalated situations by prioritizing supporting them by using tech to bring the experience of the veteran officers to the ear of every officer. Hard decisions are made, and this will give a space for criticizing choices as they are being made. Alternatives from other groups like mental health support can be brought in quickly. We ask officers to do too much with too little support. This would make new officers' lives much better while providing accountability, and we need a lot of new officers now.
  </p>
  <p>
    Second is education, the 2 priorities I see are providing the best possible support for new teachers, and having the best teachers teach the other teachers (they can still teach students directly or not). But I think the ROI of helping our teachers is immense. For every level and every class in the CPS, we should have all possible materials prepared for new teachers. New teachers should be given every advantage and should have experienced teachers alongside them. I want Chicago to be the top destination for new teachers. And with the UBI plan, I want to enable anyone of any income or age to become a student again if they want.
  </p> --> */}
  {/* <p>
    Third is transportation. Immediately we need to hire more drivers for the CTA, there is no 'driver shortage', they just aren't willing to pay enough. The value is there though, just one driver provides so much potential value. No more ads on train info signs, a number and a color tells you how many minutes until the next train for that color's line. Yet they block out the whole sign for fucking ads. The paper schedule doesn't have that shit. I want some north/south and east/west streets converted to just bike lanes, while others then say or recommend no bikes in the street. I want new trains, high speed rail to O'hare and Midway. These programs could be funded in a structure where the investors are initially involved, but they have a cap, so they could charge whatever they want, but after making enough money, they would no longer be involved. It's like a loan, except the payments are linked to the success of the train. Profits from these lines will then turn towards funding other lines. This should work, because we are guaranteeing inflation adjusted return on investment, eventually. When is that? That's the only risk investors will be taking on. It's like ownership of profits until you have been sufficiently paid for your investment. We can use private enterprise, on public terms. */}
{/* <!--
    I want something like you get an ownership stake until you have made a certain return on your investment, a max return --> */}
  {/* </p> */}
  {/* <p>
    Reveal the stars of Chicago. Make the sky beautiful. Reduce light pollution from street lights by changing the design and updating the tech. Light going up into the sky doesn't help anyone, it can be as simple as covers. ** Need to add stats on # of stars that would be revealed as the fog is lifted. I know some changes would cut it in half, but what is possible might be much better. (Alongside it, the city could highlight a chicago star citizen or something? each day with a stars gained count (count based on changing X lamp posts per day))
  </p> */}
  {/* <h3>Other short term plans for Chicago</h3> */}
  {/* <p>
    All El signs will ALWAYS show the next incoming trains for each line they are serving. No notices or ads blocking the whole screen. All you need is a color and a number(minutes), there should always be space for them. This would be a great starting project for moving everything possible to an open source format.
  </p> */}
  {/* <p>
    Concrete-protected bike lane highways north-south and east-west. Track bike crashes and build more protected bike lanes wherever they seem needed. Map out the active cycling population of Chicago so we can get accurate simulations going and can optimize the bike lane making.
  </p> */}
  {/* <p>
    Set up a new independent process for review of police conduct and in exchange raise police wages to incentivize the new additions to the force that we need.
  </p>
  <p>
    Force Bears to stay and build a bigger stadium in the same area, give them any land they need and let them pay for and own the stadium. For however much the city gives up in the deal, the city gains part ownership of the Bears. So for every dollar in profit the Bears take home, the city would get a percentage. If they leave, get the Jaguars here, the McCaskeys could clearly use some competition. The Bears go backwards and match the Cubs on the north side, the Jags join the Socks as the real team of the city (sorry I'm not sorry, they decided to stop competing, that isn't very Chicago of them).
  </p> */}
  {/* <p>
    Fred Hampton statue, somewhere prominent in the city. A plaque explaining how he was assassinated by the Chicago police, in a planned murder that included the FBI giving the police a detailed floor plan indicating where Fred Hampton slept. He was potentially the best leader we have had, and the city has let his memory go improperly marked. Despite having murdered the man, the police abuse of Fred Hampton didn't stop there, the Fraternal Order of Police in Chicago helped block the renaming of a street after him. Not some bold change like renaming lakeshore drive, just one of the brown signs under the regular street signs. We have over a thousand of them, most go unchallenged, and most are not as deserving. They murdered him and his legacy, to let this injustice stand robs the city of a role model as well. Is there anything worse in this city's history that I should know of?
  </p> */}
  {/* <p>
    Violence in the city: the new police oversight system paired with the increased budget we need to hire and keep a competent police force will give us some basic tools we need. The real wins will come from building up. The education system needs an overhaul, new teachers need a support system to help them flourish where they are now suffering. Singapore has many best practices to learn from. New teachers should be taught by successful teachers who now focus on teaching teachers. Another big win comes in the form of Universal Basic Income, establishing a minimum income floor for all residents. I want all residents of Chicago to have access to a roof and a floor. This should provide means and hope to the kids out there currently mired by all this violence. This can start small, and as the budget gets balanced and we can afford it, it will rise. Imagine if a family member of yours found themselves homeless, or infirmed and in medical debt? I'd feel much better if I knew they had the simple bear necessities. Chicago is my family, I believe that together we can support our most vulnerable.
  </p> */}
  {/* <p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/OWhsVwVy9yg?start=830&end=848" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </p> */}
  {/* <h3>Long term plan for Chicago and Illinois</h3>
  <p>
    Universal basic income will not only support our most vulnerable neighbors, it will enable many people to take time to not only find a better job, but to pursue their own passions, whatever they may be. It sets a financial goal we want to reach, where the government financial holes are finally cauterized, and we start to get a tax surplus. Once we get a surplus, we shouldn't be taxing as much because the bill is paid. When we reach that point, additional income should be rewarded with a lower income tax that goes into the BE FUNd. The BE fund is set aside to grow until the gains in the BE fund are enough to fund the government, state and city taxes gone. The BE fund wants to give everyone the gift to be whoever they want to be.
  </p>
  <p>
    To reach this lofty goal, the BE Fund starts small and grows alongside our ability to fund it. We want to tax the 1% to get this done, but we should provide incentive for them to stay, to come here. The pension problem should be understood as the government promising money that they didn't have, instead of just paying people. If you want to help someone for their future retirement in particular, buy an annuity for them. We need to stop the losses and put ourselves on a path of recovery. The UBI would start small in disadvantaged neighborhoods and then expand. After an agreed upon UBI level is reached, and other projects are funded, then taxes should be progressively decreased on everyone. It is important to note that the Universal Income Floor would be slowly built up.
  </p> */}
    {/* <p>The initial 'Open Chicago' idea is that we have a coding competition, any open source project that benefits the city in any way. Ideally, there is a prize and the top project is also sanctioned by the city. No matter what the city does, I will promote it. We should make it easy for people to make free contributions to their city. The whole premise of open source should be perfect for the city of Chicago. It's free labor (the city is broke), the change process is transparent (the city is corrupt/incompetent, take your pick), but the people of the city are great (and we want to empower them).</p> */}
    {/* <p>
      A later goal would be to make a leaderboard for contributions to the city, could have a line count board, and another board based on some sort of review tool that takes out line count inflation.
    </p> */}
    {/* <p>
      A later, later goal is to take the github/open source approach to other parts of the functioning of the city. Every part of how the city works can be put there. Each step like it is a software function. Then people can post their complaints about how a particular process is broken, and they can even post solutions then. Those solutions are reviewed by the community on the same platforms like github, in the same way. As it develops, you can add rules for when the city must accept the change or respond with their disagreement.
    </p> */}
    {/* <p>
      Another project I want to build is called the More Perfect Platform. It will be a tool for me to present my own political platform, but more importantly, I want to make it for others to use as well. The idea can be summed up as a subreddit mixed with github with a more complicated comment system. It should make it easy for people to compare platforms side-by-side on specific topics. I'd also want to give the candidates a place to debate in long-form, so it's not the live bullshit of tv debates but still has a strong moderator in two forms, the first is the different logic fields that are required, like "what is the top opposition view to your current view"? (if they have a named opponent, that opponent gets a spot to post their view on the issue (character restricted (1000?) with link to more)). The other moderator is the general public upvoting, downvoting and commenting. Users get a score based on their response rate to questions with sufficient upvotes. The responses are also scored based on general user feedback. Instead of the normal up/down vote for those, the buttons are "answered the question clearly", "avoided the question", and "gave a partial answer". The main goal here is to lay out views clearly and enable direct democracy as best we can with the tools at hand. You will be able to use a drivers license to verify that you are a resident of the city or state, and your vote will go towards the score that shows first, the verified Resident voters. For active politicans, this should be the most useful aspect. We will have residents filtering the requests and opinions of residents, the non-tech equivalent is hard to imagine, a mob of millions of people sorting the opinions of millions simultaneously. Direct democracy has never been more feasible, it's about time we started developing appropriate tools in earnest. 'Who wants to be a Millionaire?' and their ask the audience button, or a reality tv show vote is all I've seen so far.
    </p> */}
    {/* <p>A Voting App. this could be connected with the MPP, but would also operate alone and could be used by other municipalies. Different verification levels are shown in the results, so you could see the general vote of users, or the vote of people confirmed to be living in the zip code via a photo ID. Politicians or concerned citizens could post questions, and if they got enough people to vote, politicians (who agreed ahead of time what that number is) then have to comment on the issue and cast their vote. </p> */}
    {/* <!-- <p>
      One feature is everyone has their own eye of sauron, they can put their focus on any one part of your platform. It says "this is what I care about most, what is precious to me". Your actual comment is where you show if you agree with their stance or not.
    </p> --> */}
    {/* <!-- maybe make this from the persective that someone else is going to design the app and the homepages that will sort the posts how they want. lay out options clearly  --> */}
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

/* Same reading column as home: 75ch, headings centered inside it. */
.page {
  max-width: min(75ch, 100% - 2.5rem);
  margin: 0 auto 2.5rem;
}

h2, h3, h4 {
  font-family: 'Newsreader', Georgia, serif;
  font-optical-sizing: auto;
  font-weight: 600;
  text-align: center;
  text-wrap: balance;
  color: #2c3e50;
}

.pageTitle {
  font-size: clamp(1.9rem, 1.55rem + 1.8vw, 2.9rem);
  line-height: 1.12;
  letter-spacing: -0.015em;
  margin: 0.8em 0 0.6em;
}

h2, h3 {
  font-size: clamp(1.55rem, 1.35rem + 1vw, 2rem);
  line-height: 1.2;
  margin: 1.4em 0 0.6em;
}

h4 {
  font-size: clamp(1.15rem, 1.05rem + 0.5vw, 1.35rem);
  margin: 1.2em 0 0.4em;
}

p, ol {
  margin: 0 0 1.15em;
  text-align: left;
}

a {
  color: #1a6b4a;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.18em;
}
a:hover {
  text-decoration-thickness: 2px;
}

.policies {
  list-style: none;
  padding: 0;
  margin: 1em 0 1.5em;
  text-align: left;
}
.policyItem {
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(44, 62, 80, 0.28);
}
.policyItem b {
  font-weight: 600;
}

/* Disclosure toggles, centered under their centered headings. */
button {
  display: block;
  margin: 0 auto 1.2em;
  font-family: 'Instrument Sans', 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #2c3e50;
  padding: 0.4em 1.3em;
  border: 1px solid rgba(44, 62, 80, 0.4);
  border-radius: 999px;
  background: transparent;
  cursor: pointer;
}
button:hover {
  background: rgba(255, 255, 255, 0.3);
}
`}
</style>
</div>)}
