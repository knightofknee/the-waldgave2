import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html style={{backgroundColor: 'rgb(220, 170, 210)'}}>
      <Head />
      <body style={{display: 'flex'}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
