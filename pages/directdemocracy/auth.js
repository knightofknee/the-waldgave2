import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useMemo } from 'react'

// Firebase's "action URL" for the direct democracy project points here, so
// every email Firebase sends for the app (sign-in link, password reset,
// email verification) lands on this page with Firebase's query string.
//
// Sign-in links are meant to open the app: on phones with a build that has
// the www.waldgrave.com universal link / app link, iOS and Android open the
// app before this page is ever shown. Older builds land here, and the page
// hands the same parameters to the app through its custom scheme.
//
// Every other mode (password reset, email verification, email change) is
// redirected server-side to Firebase's own handler page, which renders the
// right form. Nothing about the one-time code is stored or logged here.

const FIREBASE_HANDLER = 'https://direct-democracy-e338a.firebaseapp.com/__/auth/action'
const APP_STORE = 'https://apps.apple.com/us/app/direct-democracy-chicago/id6797189381'

export async function getServerSideProps({ query, resolvedUrl }) {
  const q = resolvedUrl.indexOf('?')
  const search = q >= 0 ? resolvedUrl.slice(q) : ''
  if (!query.mode || !query.oobCode) {
    return { redirect: { destination: '/directdemocracy', permanent: false } }
  }
  if (query.mode !== 'signIn') {
    return { redirect: { destination: FIREBASE_HANDLER + search, permanent: false } }
  }
  return { props: { search, spanish: String(query.lang || '').toLowerCase().startsWith('es') } }
}

export default function DirectDemocracyAuth({ search, spanish }) {
  const appUrl = useMemo(() => 'directdemocracy://sign-in' + search, [search])

  useEffect(() => {
    // On a phone the app that requested this link is installed; open it
    // without waiting for a tap. Desktop browsers show the button only.
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      window.location.href = appUrl
    }
  }, [appUrl])

  const en = (
    <>
      <p>Open this link on the phone where you asked for it. The app finishes the sign-in.</p>
      <p><a className="button" href={appUrl}>Open direct democracy</a></p>
      <p className="small">Nothing happened? The link only works on the device that requested it, with the app installed. Ask for a new link from the app&apos;s sign-in screen.</p>
    </>
  )
  const es = (
    <>
      <p>Abre este enlace en el teléfono desde el que lo pediste. La app termina el inicio de sesión.</p>
      <p><a className="button" href={appUrl}>Abrir direct democracy</a></p>
      <p className="small">¿No pasó nada? El enlace solo funciona en el dispositivo que lo pidió, con la app instalada. Pide un enlace nuevo desde la pantalla de inicio de sesión de la app.</p>
    </>
  )

  return (
    <div className="container">
      <Head>
        <title>{spanish ? 'Termina de iniciar sesión' : 'Finish signing in'}</title>
        <meta name="robots" content="noindex" />
      </Head>
      <h1>{spanish ? 'Termina de iniciar sesión' : 'Finish signing in'}</h1>
      <p className="subtitle">direct democracy</p>

      <div className="content">
        {spanish ? es : en}
        <hr />
        {spanish ? en : es}
      </div>

      <footer className="footer">
        <Link href="/directdemocracy">direct democracy</Link>
        <span className="divider">|</span>
        <a href={APP_STORE}>App Store</a>
      </footer>

      <style jsx>{`
        .container {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          max-width: 560px;
          margin: 0 auto;
          padding: 2em;
          color: #2c3e50;
          text-align: center;
        }
        h1 {
          font-weight: normal;
          margin-bottom: 0.1em;
        }
        .subtitle {
          color: #41B6E6;
          font-size: 1.1em;
          margin-bottom: 2em;
        }
        .content p {
          line-height: 1.6;
        }
        .content :global(.button) {
          display: inline-block;
          background: #0B4A6F;
          color: #fff;
          text-decoration: none;
          padding: 0.75em 1.5em;
          border-radius: 10px;
          font-weight: 600;
        }
        .content :global(.small) {
          color: #666;
          font-size: 0.9em;
        }
        hr {
          border: 0;
          border-top: 1px solid #eee;
          margin: 2em 0;
        }
        .footer {
          margin-top: 3em;
          padding-top: 1.5em;
          border-top: 1px solid #eee;
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
