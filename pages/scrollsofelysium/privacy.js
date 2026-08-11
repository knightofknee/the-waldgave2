import Link from 'next/link'

export default function ScrollsOfElysiumPrivacy() {
  return (
    <div className="container">
      <h1>Privacy Policy</h1>
      <p className="subtitle">Scrolls of Elysium</p>
      <p className="updated">Last updated: August 11, 2026</p>

      <div className="content">
        <p>Scrolls of Elysium is a note-taking app built by The Waldgrave. This policy explains what we collect, how we use it, and your choices.</p>

        <h2>Information We Collect</h2>
        <p>Account information (email, display name) used to create and maintain your account; notes, checklists, tags, and other text content you write; and basic device and diagnostics data to keep the service reliable.</p>

        <h2>One Account Across Our Apps</h2>
        <p>Scrolls of Elysium shares its account system and cloud storage with our companion app, Escape from Hades IRL. If you use both apps, you sign in with the same account, and your notes are the same notes in both places. Deleting your account removes your data from both apps.</p>

        <h2>How We Use Your Information</h2>
        <p>To create and maintain your account; to store and sync your notes across your devices; to secure and troubleshoot the service; and to comply with legal obligations.</p>

        <h2>What We Do Not Do</h2>
        <p>We never share your notes or any personal content with third parties. We do not sell your personal information. We do not use your data for targeted advertising. We will never use your data for any purpose beyond providing the app's functionality, unless you explicitly grant permission for us to use anonymized data for aggregate statistics.</p>

        <h2>Data Storage</h2>
        <p>Your data is stored locally on your device and on our servers (powered by Google Firebase) to enable syncing. We use reasonable administrative, technical, and physical safeguards to protect your information.</p>

        <h2>Data Retention</h2>
        <p>Your notes are retained while your account is active. If you delete your account, all associated data will be removed. Diagnostic logs are kept for a limited period for reliability and security.</p>

        <h2>Your Choices and Rights</h2>
        <p>You can edit or delete any notes at any time within the app, and export all of your notes whenever you like. The app also includes options to delete all of your notes at once, or to delete your account and all associated data, both available in Settings.</p>

        <h2>Children</h2>
        <p>The app is not directed to children under 13, and we do not knowingly collect personal data from children under 13. If you believe a child has provided personal data, contact us and we will remove it.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this policy as the app evolves. We will post updates at this URL and change the "Last updated" date above.</p>

        <h2>Contact</h2>
        <p>bricarlis@gmail.com</p>
      </div>

      <footer className="footer">
        <Link href="/scrollsofelysium">Scrolls of Elysium</Link>
        <span className="divider">|</span>
        <Link href="/scrollsofelysium/terms">Terms of Service</Link>
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
        .content p {
          line-height: 1.6;
          text-align: left;
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
