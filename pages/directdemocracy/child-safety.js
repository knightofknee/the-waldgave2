import Link from 'next/link'

export default function DirectDemocracyChildSafety() {
  return (
    <div className="container">
      <h1>Child Safety Standards</h1>
      <p className="subtitle">direct democracy</p>
      <p className="updated">Last updated: August 30, 2026</p>

      <div className="content">
        <p>direct democracy is a civic engagement app for Chicago, built by The Waldgrave and intended for adults. These standards describe our policies against child sexual abuse and exploitation (CSAE) and how we enforce them.</p>

        <h2>Zero tolerance</h2>
        <p>Child sexual abuse material (CSAM) and any content that sexualizes, exploits, endangers, grooms, or solicits minors is strictly prohibited everywhere on the platform: concerns, comments, questions, responses, policies, display names, and links. There are no exceptions.</p>

        <h2>An adult platform by design</h2>
        <p>The app is directed at adults: its target audience is 18 and over, and identity verification confirms participants are adult Chicago residents. We do not knowingly permit accounts held by children, and content is text-only - the app hosts no user-uploaded images or video.</p>

        <h2>In-app reporting</h2>
        <p>Every piece of user content carries a report action, available to any signed-in user. Reports go directly to the platform operator for review. Users can also block any account to immediately hide its content on their devices.</p>

        <h2>Enforcement</h2>
        <p>Reported content is reviewed by the operator. Content that violates these standards is removed and the account responsible is terminated. Where content appears to constitute CSAM or child exploitation, we preserve what the law requires and report it to the National Center for Missing and Exploited Children (NCMEC) and to law enforcement, in accordance with applicable law, including 18 U.S.C. 2258A.</p>

        <h2>Compliance with child safety laws</h2>
        <p>We comply with applicable child safety laws in the jurisdictions where the app operates, including mandatory reporting obligations in the United States.</p>

        <h2>Child safety point of contact</h2>
        <p>Questions, reports, or notices regarding child safety on direct democracy can be sent to Brian Carlisle at bricarlis@gmail.com. This contact is prepared to discuss our CSAE policies and practices.</p>
      </div>

      <footer className="footer">
        <Link href="/directdemocracy">direct democracy</Link>
        <span className="divider">|</span>
        <Link href="/directdemocracy/privacy">Privacy Policy</Link>
      </footer>

      <style jsx>{`
        .container {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          max-width: 700px;
          margin: 0 auto;
          padding: 2em;
          color: #2c3e50;
        }
        h1 {
          text-align: center;
          font-weight: normal;
          margin-bottom: 0.1em;
        }
        .subtitle {
          text-align: center;
          color: #41B6E6;
          font-size: 1.1em;
          margin-bottom: 0.25em;
        }
        .updated {
          text-align: center;
          color: #999;
          font-size: 0.85em;
          margin-bottom: 2em;
        }
        .content h2 {
          font-size: 1.15em;
          margin-top: 1.5em;
          color: #2c3e50;
        }
        .content p {
          line-height: 1.6;
          text-align: left;
        }
        .footer {
          margin-top: 3em;
          padding-top: 1.5em;
          border-top: 1px solid #eee;
          text-align: center;
          font-size: 0.9em;
        }
        .divider {
          margin: 0 0.75em;
          color: #ccc;
        }
      `}</style>
    </div>
  )
}
