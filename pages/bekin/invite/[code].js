import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// When the app IS installed, iOS Universal Links / Android App Links open BeKin directly and this
// page never loads. Reaching this page means the app is (probably) not installed, so we send the
// visitor to the right store. Invites are LINK-ONLY: no visible codes, no clipboard handoff. After
// installing, the visitor taps the invite link again and the app connects the two automatically.
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.waldgrave.bekin";
const APP_STORE_URL = "https://apps.apple.com/app/id6746952014";
// Fire-and-forget beacon so a fresh iOS install can claim this invite on first launch (Apple
// passes nothing through the App Store; the app matches by IP and asks the user to confirm).
const RECORD_VISIT_URL = "https://us-central1-waldgrave-profiles.cloudfunctions.net/recordInviteVisit";

// Android: the Play Store passes `referrer` through install, so the app auto-connects at signup.
const playUrlFor = (code) =>
  code ? `${PLAY_STORE_URL}&referrer=${encodeURIComponent(`bekin_invite=${code}`)}` : PLAY_STORE_URL;

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

    // iOS only: Android's install referrer already carries the code deterministically.
    if (code && isIOS) {
      fetch(RECORD_VISIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
        keepalive: true,
      }).catch(() => {});
    }

    const target = isIOS ? APP_STORE_URL : isAndroid ? playUrlFor(code) : null;
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

      <div className="cta">
        {platform !== "android" && (
          <a className="btn primary" href={APP_STORE_URL}>
            Download on the App Store
          </a>
        )}
        {platform !== "ios" && (
          <a className="btn primary" href={playUrlFor(code)}>
            Get it on Google Play
          </a>
        )}
        {code ? (
          <a className="btn ghost" href={`bekin8://invite/${code}`}>
            Already have BeKin? Open the app
          </a>
        ) : null}
      </div>

      {code ? (
        <p className="hint">After installing, tap your friend&apos;s link again and you&apos;ll be connected automatically.</p>
      ) : null}

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
        .hint {
          color: #6b7280;
          font-size: 0.9em;
          margin-bottom: 1em;
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
