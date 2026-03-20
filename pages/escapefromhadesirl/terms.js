import Link from 'next/link'

export default function EscapeFromHadesIRLTerms() {
  return (
    <div className="container">
      <h1>Terms of Service</h1>
      <p className="subtitle">Escape from Hades IRL</p>
      <p className="updated">Last updated: March 19, 2026</p>

      <div className="content">
        <p>By using Escape from Hades IRL ("the App"), you agree to these terms. The App is provided by The Waldgrave.</p>

        <h2>Use of the App</h2>
        <p>Escape from Hades IRL is a habit tracking and note-taking app. You may use it for personal, non-commercial purposes. You are responsible for maintaining the confidentiality of your account credentials.</p>

        <h2>Your Content</h2>
        <p>You retain ownership of all habits, notes, and other content you create in the App. We do not claim any rights over your content. You are responsible for the content you create within the App.</p>

        <h2>Acceptable Use</h2>
        <p>You agree not to misuse the service, including attempting to access it through unauthorized means, interfering with other users, or using the service to violate any laws.</p>

        <h2>Service Availability</h2>
        <p>We strive to keep the App available and reliable, but we do not guarantee uninterrupted access. We may update, modify, or temporarily suspend the service for maintenance or improvements. We will make reasonable efforts to notify users of significant changes.</p>

        <h2>Data and Privacy</h2>
        <p>Your use of the App is also governed by our <Link href="/escapefromhadesirl/privacy">Privacy Policy</Link>. By using the App, you consent to the collection and use of information as described in that policy.</p>

        <h2>Disclaimers</h2>
        <p>The App is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the App will meet your specific requirements or that it will be error-free.</p>

        <h2>Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, The Waldgrave shall not be liable for any indirect, incidental, or consequential damages arising from your use of the App.</p>

        <h2>Account Termination</h2>
        <p>You may delete your account at any time. We reserve the right to suspend or terminate accounts that violate these terms.</p>

        <h2>Changes to These Terms</h2>
        <p>We may update these terms as the App evolves. Continued use of the App after changes constitutes acceptance of the updated terms.</p>

        <h2>Contact</h2>
        <p>bricarlis@gmail.com</p>
      </div>

      <footer className="footer">
        <Link href="/escapefromhadesirl">Escape from Hades IRL</Link>
        <span className="divider">|</span>
        <Link href="/escapefromhadesirl/privacy">Privacy Policy</Link>
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
