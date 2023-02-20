import Head from 'next/head'
import styles from "@/styles/AboutUs.module.scss";
import fonts from "@/helpers/fonts";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageHeader";

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>About the Band - Bad Contact</title>
            </Head>
            <Layout>
                <div>
                    <PageHeader title='ABOUT US' />
                </div>
            </Layout>
        </>
    );
}
