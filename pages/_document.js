import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html style={{backgroundColor: 'rgb(220, 170, 210)'}}>
      <Head ><meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/favicon.ico" />
       </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
