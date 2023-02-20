import Head from 'next/head'
import styles from "@/styles/pages/Discography.module.scss";
import fonts from "@/helpers/fonts";
import PageHeader from "@/components/pageHeader";
import Layout from "@/components/layout";

export default function Discography() {
    return (
        <>
            <Head>
                <title>Complete Discography - Bad Contact</title>
            </Head>
            <Layout>
                <div>
                    <PageHeader title='DISCOGRAPHY' />
                </div>
            </Layout>
        </>
    );
}
