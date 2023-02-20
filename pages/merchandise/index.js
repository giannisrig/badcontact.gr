import styles from "@/styles/pages/Merchandise.module.scss";

import Head from "next/head";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageHeader";

export default function Merch() {

    return (
        <>
            <Head>
                <title>Merchandise Shop - Bad Contact</title>
            </Head>
            <Layout>
                <div>
                    <PageHeader title='MERCHANDISE' />
                </div>
            </Layout>
        </>
    );
}
