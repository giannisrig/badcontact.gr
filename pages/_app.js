import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GoogleAnalytics } from "nextjs-google-analytics";
import '@/styles/globals.css'
import { Provider } from 'react-redux';
import { wrapper } from '@/store/store';

export default function App({ Component, ...rest }) {

    const router = useRouter()

    const { store, props } = wrapper.useWrappedStore(rest);
    const { pageProps } = props;

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
        <Provider store={store}>
            <GoogleAnalytics trackPageViews />
            <Component {...pageProps} />
        </Provider>
    );
}
