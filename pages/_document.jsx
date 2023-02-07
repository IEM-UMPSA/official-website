import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
            <link href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <link rel="icon" href="./assets/img/favicon.ico" />
            {/* Google tag (gtag.js) */}
      
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BRBBYXSR48" />
        <Script async src="./google-analytics.js" />

      </body>
    </Html>
  )
}