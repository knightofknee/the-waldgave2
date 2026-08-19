import Link from 'next/link'

export default function DirectDemocracy() {
  return (
    <div className="container">
      <h1>direct democracy</h1>
      <p className="tagline">Chicago&apos;s civic voice: a citywide big board of the people&apos;s concerns, ward-level votes, and AMAs where the community decides whether officials actually answered.</p>

      <div className="features">
        <div className="feature">
          <h3>The Big Board</h3>
          <p>Raise the issues that matter and vote them by priority - critical to low - to rank what the whole city cares about. Every result shows the general vote and the verified vote side by side.</p>
        </div>
        <div className="feature">
          <h3>Your Ward</h3>
          <p>Browse any of the 50 wards. Verify once as a resident and your votes count in your ward&apos;s verified tallies, including your alderman&apos;s ballot questions.</p>
        </div>
        <div className="feature">
          <h3>Real Answers</h3>
          <p>Ask officials anything. The community - never the politician - judges whether a response answered the question, and every official carries a public report card.</p>
        </div>
        <div className="feature">
          <h3>Anonymous by Design</h3>
          <p>Identity verification is handled by a third party; the app only ever knows verified yes/no and your ward. Your real name is never shown.</p>
        </div>
      </div>

      <div className="cta">
        <p>Coming soon to iOS and Android</p>
      </div>

      <footer className="footer">
        <Link href="/directdemocracy/privacy">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link href="/directdemocracy/terms">Terms of Service</Link>
        <p className="credit">A Waldgrave Production</p>
      </footer>

      <style jsx>{`
        .container {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          max-width: 800px;
          margin: 0 auto;
          padding: 2em;
          text-align: center;
          color: #2c3e50;
        }
        h1 {
          font-size: 2.5em;
          font-weight: normal;
          margin-bottom: 0.25em;
        }
        .tagline {
          font-size: 1.1em;
          color: #666;
          margin-bottom: 2em;
        }
        .features {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5em;
          justify-content: center;
          margin: 2em 0;
        }
        .feature {
          flex: 1 1 300px;
          max-width: 340px;
          padding: 1.25em;
          border: 1px solid #eee;
          border-radius: 12px;
          text-align: left;
        }
        .feature h3 {
          margin-top: 0;
          color: #0B4A6F;
          font-weight: 600;
          letter-spacing: 0.01em;
        }
        .feature p {
          line-height: 1.55;
          margin-bottom: 0;
        }
        .cta {
          margin: 2em 0;
          color: #C8102E;
          font-weight: 600;
        }
        .footer {
          margin-top: 3em;
          padding-top: 1.5em;
          border-top: 1px solid #eee;
          font-size: 0.9em;
        }
        .divider {
          margin: 0 0.75em;
          color: #ccc;
        }
        .credit {
          color: #999;
          font-size: 0.85em;
          margin-top: 1em;
        }
      `}</style>
    </div>
  )
}
