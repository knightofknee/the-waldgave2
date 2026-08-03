import Link from 'next/link'

export default function DirectDemocracyTerms() {
  return (
    <div className="container">
      <h1>Terms of Service</h1>
      <p className="subtitle">direct democracy</p>
      <p className="updated">Last updated: August 2, 2026</p>

      <div className="content">
        <p>These terms govern your use of direct democracy, a civic engagement app for Chicago built by The Waldgrave. By creating an account or using the app, you agree to them.</p>

        <h2>What the App Is (and Isn&apos;t)</h2>
        <p>direct democracy is an independent civic platform. It is not affiliated with, endorsed by, or operated by the City of Chicago, any government body, or any elected official. Votes and tallies in the app are expressions of community sentiment - they are not official elections, referenda, or government records, and they have no legal effect.</p>

        <h2>Your Account</h2>
        <p>You must be at least 13 years old. You are responsible for your account and for keeping your sign-in method secure. One person may verify their identity on only one account. You may delete your account at any time from Settings.</p>

        <h2>Community Conduct</h2>
        <p>You agree not to: harass, threaten, or defame others; post spam, scams, or deliberately misleading content; impersonate any person or official; attempt to manipulate tallies, grades, or verification; or use the platform for anything unlawful. Concerns, comments, and questions should be about civic issues - not personal attacks.</p>

        <h2>Moderation</h2>
        <p>Users can report content and block other users. The operators review reports and may remove content or accounts that violate these terms. Questions that an official has answered become part of that official&apos;s public record and generally are not removed at the asker&apos;s request.</p>

        <h2>Your Content</h2>
        <p>You own what you write. By posting, you grant The Waldgrave a non-exclusive license to display it within the platform under your pseudonymous display name. If you delete your account, posted content is re-attributed to [deleted] and cast ballots remain counted, as described in the Privacy Policy.</p>

        <h2>Officials&apos; Report Cards</h2>
        <p>Grades, approval ratings, and answer scores shown for elected officials are computed from community votes and judgments by the methods described in the app. They are community opinion, not statements of fact by The Waldgrave.</p>

        <h2>Disclaimers</h2>
        <p>The app is provided &quot;as is&quot; without warranties of any kind. To the fullest extent permitted by law, The Waldgrave is not liable for indirect, incidental, or consequential damages arising from your use of the app.</p>

        <h2>Changes and Termination</h2>
        <p>We may update these terms as the platform evolves; continued use after an update is acceptance. We may suspend or terminate accounts that violate these terms.</p>

        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of the State of Illinois.</p>

        <h2>Contact</h2>
        <p>bricarlis@gmail.com</p>
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
