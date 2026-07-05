import Script from 'next/script'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-2EVZG6D1ZH"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-2EVZG6D1ZH');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
