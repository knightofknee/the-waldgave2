import Link from 'next/link'

export default function BekinDeleteAccount() {
  return (
    <div className="container">
      <h1>Delete Your BeKin Account</h1>
      <p className="subtitle">BeKin</p>
      <p className="updated">Last updated: May 27, 2026</p>

      <div className="content">
        <p><strong>App name:</strong> BeKin</p>
        <p><strong>Developer:</strong> Brian Carlisle</p>

        <h2>How to delete your account from within the app</h2>
        <ol>
          <li>Open the BeKin app and sign in.</li>
          <li>Go to <strong>Settings → Advanced Settings</strong>.</li>
          <li>Scroll to the <strong>Danger Zone</strong> section at the bottom.</li>
          <li>Tap <strong>Delete Account</strong>.</li>
          <li>Confirm the deletion in the prompt that appears.</li>
        </ol>
        <p>Your account and personal data will be permanently removed. This action cannot be undone.</p>

        <h2>Request deletion without the app</h2>
        <p>If you cannot access the app, email <a href="mailto:bricarlis@gmail.com">bricarlis@gmail.com</a> from the email address associated with your BeKin account. Include your account email and a request to delete the account. We will process the request within 30 days.</p>

        <h2>What data is deleted</h2>
        <p>When you delete your account, the following are permanently removed:</p>
        <ul>
          <li>Your user profile and account</li>
          <li>Your friends list, friend subscriptions, and blocked users</li>
          <li>Your posts, comments, and beacons</li>
          <li>Friend requests you sent or received</li>
          <li>Friend connections (edges) involving your account</li>
          <li>Push notification tokens</li>
          <li>Your Firebase Authentication record</li>
        </ul>

        <h2>What data may be retained</h2>
        <ul>
          <li>Server logs may retain anonymized or pseudonymized records for a limited period (typically up to 90 days) for security, fraud prevention, and abuse investigation.</li>
          <li>Records required for legal, tax, or financial compliance may be retained as required by law.</li>
          <li>Content created by other users that references you (e.g. another user's post mentioning you) is not deleted.</li>
        </ul>

        <h2>Retention period</h2>
        <p>All personal data is deleted immediately upon request. Backup snapshots roll off within 30 days.</p>

        <h2>Contact</h2>
        <p><a href="mailto:bricarlis@gmail.com">bricarlis@gmail.com</a></p>
      </div>

      <footer className="footer">
        <Link href="/bekinPrivacy">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link href="/">Home</Link>
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
          color: #42b983;
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
        .content ol,
        .content ul {
          padding-left: 1.5em;
        }
        .content a {
          color: #42b983;
        }
        .footer {
          margin-top: 3em;
          padding-top: 1.5em;
          border-top: 1px solid #eee;
          text-align: center;
          font-size: 0.85em;
        }
        .footer a {
          color: #42b983;
        }
        .divider {
          margin: 0 0.5em;
          color: #ccc;
        }
      `}</style>
    </div>
  )
}
