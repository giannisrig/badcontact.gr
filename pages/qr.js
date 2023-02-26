import { useEffect } from 'react';
import { useRouter } from 'next/router'
import Head from "next/head";
import Layout from "@/components/layout";

export default function Qr() {

    const router = useRouter();

    useEffect(() => {
        router.push('/');
    }, []);

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
