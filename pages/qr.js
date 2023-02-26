import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Head from "next/head";
import Layout from "@/components/layout";

export default function Qr() {

    const [pixelSent, setPixelSent] = useState(false);
    const router = useRouter();

    useEffect(() => {
        import('react-facebook-pixel')
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init('804765880666454') // facebookPixelId
                ReactPixel.pageView()

                router.events.on('routeChangeComplete', () => {
                    ReactPixel.pageView()
                    setPixelSent(true);
                })
            })
    }, [router.events])


    useEffect(() => {

        if( pixelSent ){

            const interval = setInterval(()=>{
                router.push('/');
            }, 1000);

            return () => clearInterval(interval);

        }

    }, [pixelSent]);

    return (
        <>
            <Head>
                <title>QR Short Link - Bad Contact</title>
                <meta name="robots" content="noindex" />
            </Head>
            <Layout>

            </Layout>
        </>
    );

}
