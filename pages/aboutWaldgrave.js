import WaldFooter from '../components/WaldFooter'

export default function aboutWaldgrave() {
  return (
    <div className="container">
      <h1>Philosophy of the platform</h1>
      <p>Equal opportunity social media. A platform designed to minimize time on the platform. A feed that ends. The Waldgrave will never be an enshitified corporate wasteland because the Waldgrave is for humans. Learn from the best others have to offer, and share what you love. That's all, folks.</p>

      <br />
      <p>dont</p>
      <p>look</p>
      <p>below</p>
      <p>unless</p>
      <p>you</p>
      <p>are</p>
      <p>ready</p>
      <p>to</p>
      <p>rage</p>
      <br />
      <br />
      <h3>Random rants against big tech, I think I have a deep collection. tldr: cost-based pricing should be our equilibrium, not enshitified products trying to hack their users' brains for profit.</h3>
      <p>
      instagram is so evil that they might have gotten less evil by being bought by facebook.
<br />
they were the first social media platform to force all its users to use the app. they were cutting edge of fucking with peoples minds forcibly from day 1. by force i mean intentionally using design to mess with its users. Facebook might have helped topple democracy, but that's only a might. The harm Instagram has done particularly to young women has been clearly proven.
<br />
like getting rid of chronological search. an egregious civil rights violation in my opinion, and one that lets these companies force themselves into our feeds. On social media, the people we want to socialize with are outcompeted by the platform’s desire to get me hooked on whatever they can. HOW FUCKED IS THAT?
      </p>
      <WaldFooter />


      <style jsx>{`
        h1 {
          text-align: center;
        }
        p {
          margin: 20px;
        }
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .container {
            width: 75%;
          }
        }
      `}</style>
    </div>
  )
}
