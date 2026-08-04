import Link from 'next/link'

export default function DirectDemocracyPrivacy() {
  return (
    <div className="container">
      <h1>Privacy Policy</h1>
      <p className="subtitle">direct democracy</p>
      <p className="updated">Last updated: August 2, 2026</p>

      <div className="content">
        <p>direct democracy is a civic engagement app for Chicago built by The Waldgrave. It is designed to know as little about you as possible while still keeping the vote honest. This policy explains what we collect, how we use it, and your choices.</p>

        <h2>What We Collect</h2>
        <p>Your email address and password hash, used only for signing in (or your Google/Apple account identifier if you sign in with them); a display name you choose - it is a pseudonym, and your real name is never shown to anyone, even after verification; the content you post (concerns, comments, questions, ballots, and judgments); and participation counters (votes cast, concerns raised) that power in-app milestones.</p>

        <h2>Identity Verification</h2>
        <p>If you choose to verify, verification is performed by Didit, a third-party identity service. Your government ID and address go to Didit, never to us. We receive and store only the verdict: a verified yes/no flag, your ward number, and a unique identifier that stops one person from verifying two accounts. We never see or store your documents, your address, or your legal name. The identifier is deleted with your account.</p>

        <h2>What We Never Do</h2>
        <p>We do not sell your personal information. We do not use your data for advertising. We do not share your content or identity data with third parties beyond the service providers that run the app (Google Firebase for data storage and Didit for verification).</p>

        <h2>Who Can See What</h2>
        <p>Your profile is readable only by you. Content you post publicly carries your display name and a verified badge - nothing more. Your individual ballots and judgments are readable only by you; everyone else sees only aggregate tallies. Reports you file are visible only to the platform operators.</p>

        <h2>Your Controls</h2>
        <p>Change your display name at any time. Retract any vote, withdraw your concerns and unanswered questions, and delete your comments. Block any user to hide their content from your account, and report any content to the operators. Delete your account at any time from Settings: your sign-in, profile, verification status, and standing approvals of officials are removed. Anything you posted stays on the record but is re-attributed to [deleted], and votes you cast remain counted in the tallies.</p>

        <h2>Data Storage</h2>
        <p>Your data is stored on our servers, powered by Google Firebase. We use reasonable administrative, technical, and physical safeguards to protect it, and all aggregate vote counts are computed server-side so no one - including you - can tamper with a tally.</p>

        <h2>Children</h2>
        <p>The app is not directed to children under 13, and we do not knowingly collect personal data from children under 13. If you believe a child has provided personal data, contact us and we will remove it.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy as the app evolves. We will post updates at this URL and change the &quot;Last updated&quot; date above.</p>

        <h2>Contact</h2>
        <p>bricarlis@gmail.com</p>
      </div>

      <footer className="footer">
        <Link href="/directdemocracy">direct democracy</Link>
        <span className="divider">|</span>
        <Link href="/directdemocracy/terms">Terms of Service</Link>
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
