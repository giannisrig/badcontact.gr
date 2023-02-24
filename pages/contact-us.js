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
                    <PageHeader title='CONTACT US' subtitle='Get in touch with us by sending us a message at our social or at the email addresses below.' />
                </div>
                <div className={styles.emailItems}>
                    <EmailItem title='GENERAL INFORMATION' text='For questions, general information or just to connect with us use the following email address to contact us:' email={'info@badcontact.gr'} />
                    <EmailItem title='MANAGEMENT' text='For bookings, collaborations and serious stuff, use the following email address to speak with our manager:' email={'manager@badcontact.gr'} />
                </div>
             </Layout>
        </>
    );
}
