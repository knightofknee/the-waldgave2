import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// When the app IS installed, iOS Universal Links / Android App Links open BeKin directly and this
// page never loads. Reaching this page means the app is (probably) not installed — so we send the
// visitor to the right store, and surface the invite code so they can finish connecting after they
// sign up (the app also tries to recover it from the clipboard automatically).
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.waldgrave.bekin";
const APP_STORE_URL = "https://apps.apple.com/app/id6746952014";

export default function BekinInvite() {
  const router = useRouter();
  const raw = router.query.code;
  const code = (Array.isArray(raw) ? raw[0] : raw || "").toUpperCase();
  const [platform, setPlatform] = useState("other");

  useEffect(() => {
    if (!router.isReady) return;
    const ua = (typeof navigator !== "undefined" && navigator.userAgent) || "";
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);
    setPlatform(isIOS ? "ios" : isAndroid ? "android" : "other");

    // Best-effort: leave the code on the clipboard so a brand-new install can auto-recover it.
    if (code && typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(code).catch(() => {});
    }

    const target = isIOS ? APP_STORE_URL : isAndroid ? PLAY_STORE_URL : null;
    if (target) {
      const t = setTimeout(() => {
        window.location.href = target;
      }, 1400);
      return () => clearTimeout(t);
    }
  }, [router.isReady, code]);

  return (
    <div className="wrap">
      <h1>🔥 You're invited to BeKin</h1>
      <p className="tagline">
        BeKin is a simple way to tell friends you're free to hang out. A friend wants to connect
        with you.
      </p>

      {code ? (
        <div className="codeCard">
          <span className="codeLabel">Your invite code</span>
          <span className="code">{code}</span>
          <span className="codeHint">Enter this when you sign up to connect automatically.</span>
        </div>
      ) : null}

      <div className="cta">
        {platform !== "android" && (
          <a className="btn primary" href={APP_STORE_URL}>
            Download on the App Store
          </a>
        )}
        {platform !== "ios" && (
          <a className="btn primary" href={PLAY_STORE_URL}>
            Get it on Google Play
          </a>
        )}
        {code ? (
          <a className="btn ghost" href={`bekin8://invite/${code}`}>
            Already have BeKin? Open the app
          </a>
        ) : null}
      </div>

      <p className="redirect">Taking you to the store…</p>

      <footer className="footer">
        <a href="/bekinPrivacy">Privacy Policy</a>
        <span className="divider">|</span>
        <span className="credit">A Waldgrave Production</span>
      </footer>

      <style jsx>{`
        .wrap {
          font-family: "Avenir", Helvetica, Arial, sans-serif;
          max-width: 520px;
          margin: 0 auto;
          padding: 3em 1.5em;
          text-align: center;
          color: #111827;
        }
        h1 {
          font-size: 2em;
          margin-bottom: 0.4em;
        }
        .tagline {
          font-size: 1.05em;
          color: #555;
          margin-bottom: 2em;
        }
        .codeCard {
          display: inline-flex;
          flex-direction: column;
          gap: 0.35em;
          padding: 1.2em 2em;
          border: 2px dashed #2f6fed;
          border-radius: 16px;
          margin-bottom: 2em;
        }
        .codeLabel {
          font-size: 0.8em;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #6b7280;
        }
        .code {
          font-size: 2.4em;
          font-weight: 800;
          letter-spacing: 0.18em;
          color: #2f6fed;
        }
        .codeHint {
          font-size: 0.85em;
          color: #6b7280;
        }
        .cta {
          display: flex;
          flex-direction: column;
          gap: 0.75em;
          align-items: center;
          margin-bottom: 1.5em;
        }
        .btn {
          display: inline-block;
          padding: 0.85em 1.6em;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          min-width: 240px;
        }
        .primary {
          background: #2f6fed;
          color: #fff;
        }
        .ghost {
          background: transparent;
          color: #2f6fed;
          border: 1px solid #2f6fed;
        }
        .redirect {
          color: #9ca3af;
          font-size: 0.9em;
        }
        .footer {
          margin-top: 3em;
          color: #9ca3af;
          font-size: 0.85em;
        }
        .footer a {
          color: #6b7280;
        }
        .divider {
          margin: 0 0.6em;
        }
        .credit {
          display: block;
          margin-top: 0.5em;
        }
      `}</style>
    </div>
  );
}
