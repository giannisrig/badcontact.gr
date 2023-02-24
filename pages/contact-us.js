import Head from 'next/head'
import styles from "@/styles/pages/ContactUs.module.scss";
import fonts from "@/helpers/fonts";
import PageHeader from "@/components/pageHeader";
import Layout from "@/components/layout";
import EmailItem from "@/components/emailItem";

export default function ContactUs() {
    return (
        <>
            <Head>
                <title>News & Announcements - Bad Contact</title>
            </Head>
            <Layout>
                <div>
                    <PageHeader title='CONTACT US' subtitle='For any information you can send us a message at our social or at the email addresses below.' />
                </div>
                <EmailItem email={'info@badcontact.gr'} />
                <EmailItem email={'manager@badcontact.gr'} />
            </Layout>
        </>
    );
}
