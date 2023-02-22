import styles from "@/styles/pages/Merchandise.module.scss";

import Head from "next/head";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageHeader";
import Notice from "@/components/notice";

export default function Merch() {

    return (
        <>
            <Head>
                <title>Merchandise Shop - Bad Contact</title>
            </Head>
            <Layout>
                <div>
                    <PageHeader title='MERCHANDISE' subtitle='The official band online shop to purchase our merchandise.' />
                </div>
                <Notice title='MERCH IS NOT AVAILABLE YET' text='We are doing what we can in order to create our first merch and make it available to you through our official online shop. You can help us speed things up by making a donation.' />
            </Layout>
        </>
    );
}
