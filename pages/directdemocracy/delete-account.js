import Link from 'next/link'

export default function DirectDemocracyDeleteAccount() {
  return (
    <div className="container">
      <h1>Delete Your Account</h1>
      <p className="subtitle">direct democracy</p>
      <p className="updated">Last updated: August 29, 2026</p>

      <div className="content">
        <p><strong>App name:</strong> direct democracy: Chicago</p>
        <p><strong>Developer:</strong> Brian Carlisle, The Waldgrave</p>

        <h2>How to delete your account</h2>
        <ol>
          <li>Open the app and sign in.</li>
          <li>Go to the <strong>profile</strong> tab.</li>
          <li>Tap <strong>Settings</strong>.</li>
          <li>Tap <strong>Delete account</strong> and confirm.</li>
        </ol>
        <p>Deletion runs immediately and cannot be undone.</p>

        <h2>If you cannot sign in</h2>
        <p>Deletion is only available from inside your account - that is how we know the request comes from the account&apos;s owner. If you have lost your password, your account is always recoverable through your email: on the sign-in screen, use <strong>&quot;email me a sign-in link&quot;</strong> or reset your password, then delete the account from Settings as above.</p>

        <h2>Delete some of your data without deleting your account</h2>
        <p>You can remove individual pieces of your data at any time from inside the app, signed in as yourself:</p>
        <ul>
          <li><strong>Comments:</strong> open the comment and delete it.</li>
          <li><strong>Concerns:</strong> open your concern and withdraw it - its votes and comments go with it.</li>
          <li><strong>Questions to officials:</strong> open your question and withdraw it while it is unanswered. Once an official has responded, the exchange is part of their public record.</li>
          <li><strong>Votes and judgments:</strong> retract or change them from the item you voted on.</li>
          <li><strong>Verification:</strong> removing your verification entirely is done by deleting the account.</li>
        </ul>
        <p>Deletions apply immediately, and aggregate tallies are recomputed without your data.</p>

        <h2>What is deleted</h2>
        <ul>
          <li>Your sign-in credentials and Firebase Authentication record</li>
          <li>Your profile: display name, ward, verification status, and participation stats</li>
          <li>Your notifications, block list, and standing approvals of officials</li>
          <li>The verification identifier that linked your account to a completed identity check</li>
        </ul>

        <h2>What is retained</h2>
        <ul>
          <li>Posts, comments, and questions stay on the public record but are re-attributed to <strong>[deleted]</strong> - no display name outlives its account.</li>
          <li>Votes you cast remain inside aggregate tallies. They are anonymous counts, not records tied to you.</li>
        </ul>

        <h2>Identity verification data</h2>
        <p>Identity verification is performed by Didit, a third-party identity service. Your documents, address, and face data go to Didit and are never sent to or stored on our servers - we only ever hold the verdict (a verified flag and your ward), which is deleted with your account. Didit&apos;s own retention and deletion terms are at <a href="https://didit.me/privacy-policy/">didit.me/privacy-policy</a>.</p>

        <p>Official and candidate profiles are public-record pages provisioned by the platform and are removed by the platform operator rather than through self-serve deletion.</p>
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
        .content p,
        .content li {
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
