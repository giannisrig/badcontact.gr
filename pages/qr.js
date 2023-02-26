import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Head from "next/head";
import Layout from "@/components/layout";

export default function Qr() {

    const router = useRouter();

    // useEffect(() => {
    //     import('react-facebook-pixel')
    //         .then((x) => x.default)
    //         .then((ReactPixel) => {
    //             ReactPixel.init('804765880666454') // facebookPixelId
    //             ReactPixel.pageView()
    //
    //             router.events.on('routeChangeComplete', () => {
    //                 ReactPixel.pageView()
    //                 console.log('pixel page view sent')
    //                 setPixelSent(true);
    //             })
    //         })
    // }, [router.events])


    useEffect(() => {


        const interval = setInterval(()=>{

            router.push('/?qr=true');

        }, 3000);

        return () => clearInterval(interval);

    },[]);

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
