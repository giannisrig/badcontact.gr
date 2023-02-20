import Head from 'next/head'
import styles from "@/styles/pages/News.module.scss";
import fonts from "@/helpers/fonts";
import PageHeader from "@/components/pageHeader";
import Layout from "@/components/layout";

export default function News() {
    return (
        <>
            <Head>
                <title>News & Announcements - Bad Contact</title>
            </Head>
            <Layout>
                <div>
                    <PageHeader title='NEWS' />
                </div>
            </Layout>
        </>
    );
}
