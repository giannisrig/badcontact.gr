import Head from 'next/head'
import styles from "@/styles/pages/ContactUs.module.scss";
import fonts from "@/helpers/fonts";
import PageHeader from "@/components/pageHeader";
import Layout from "@/components/layout";

export default function ContactUs() {
    return (
        <>
            <Head>
                <title>News & Announcements - Bad Contact</title>
            </Head>
            <Layout>
                <div>
                    <PageHeader title='CONTACT US' />
                </div>
            </Layout>
        </>
    );
}
