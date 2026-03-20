import Link from 'next/link'

export default function EscapeFromHadesIRL() {
  return (
    <div className="container">
      <h1>Escape from Hades IRL</h1>
      <p className="tagline">A habit tracking and note-taking app to help you escape the underworld of disorganization.</p>

      <div className="features">
        <div className="feature">
          <h3>Habit Tracking</h3>
          <p>Build and maintain daily habits. Track your streaks, see your progress, and stay accountable to yourself.</p>
        </div>
        <div className="feature">
          <h3>Notes</h3>
          <p>Capture your thoughts, ideas, and reflections. Your notes are private and always available when you need them.</p>
        </div>
        <div className="feature">
          <h3>Your Data, Your Control</h3>
          <p>We never share your data with third parties. Your habits and notes are yours alone.</p>
        </div>
      </div>

      <div className="cta">
        <p>Coming soon to iOS and Android</p>
      </div>

      <footer className="footer">
        <Link href="/escapefromhadesirl/privacy">Privacy Policy</Link>
        <span className="divider">|</span>
        <Link href="/escapefromhadesirl/terms">Terms of Service</Link>
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
          flex: 1;
          min-width: 200px;
          max-width: 300px;
          padding: 1.5em;
          border: 1px solid #eee;
          border-radius: 8px;
          text-align: left;
        }
        .feature h3 {
          margin-top: 0;
          color: #42b983;
        }
        .cta {
          margin: 2em 0;
          font-size: 1.1em;
          color: #888;
        }
        .footer {
          margin-top: 3em;
          padding-top: 1.5em;
          border-top: 1px solid #eee;
          font-size: 0.85em;
        }
        .footer a {
          color: #42b983;
        }
        .divider {
          margin: 0 0.5em;
          color: #ccc;
        }
        .credit {
          margin-top: 0.75em;
          font-size: 0.8em;
          color: #999;
        }
      `}</style>
    </div>
  )
}
