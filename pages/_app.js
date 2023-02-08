import React from 'react';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script';
import { GoogleAnalytics } from "nextjs-google-analytics";
import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init('804765880666454') // facebookPixelId
          ReactPixel.pageView()

          router.events.on('routeChangeComplete', () => {
            ReactPixel.pageView()
          })
        })
  }, [router.events])

  return (
      <>
        {/*<Script*/}
        {/*    src="https://www.googletagmanager.com/gtag/js?id=G-DB9ETQFZ9E"*/}
        {/*    strategy="afterInteractive"*/}
        {/*/>*/}
        {/*<Script id="google-analytics" strategy="afterInteractive">*/}
        {/*  {`*/}
        {/*  window.dataLayer = window.dataLayer || [];*/}
        {/*  function gtag(){window.dataLayer.push(arguments);}*/}
        {/*  gtag('js', new Date());*/}

        {/*  gtag('config', 'G-DB9ETQFZ9E');*/}
        {/*`}*/}
        {/*</Script>*/}

        <GoogleAnalytics trackPageViews />
        <Component {...pageProps} />
      </>
  );
}
