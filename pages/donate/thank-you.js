import Head from 'next/head'
import styles from "@/styles/pages/DonateThankYou.module.scss";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageHeader";
import NewsletterForm from "@/components/newsletterForm";

export default function Donate() {

    const text = "Your donation means a lot to us since we don\'t have any merch available now to fund the band. In order to repay the favor you can become a fan of Bad Contact by subscribing below and we will be giving you some special gifts to show our appreciation in the near future."

    return (
        <>
            <Head>
                <title>Thank you for your Donation - Bad Contact</title>
            </Head>
            <Layout>
                <div className={styles.content}>
                    <div>
                        <PageHeader title='WOW YOU MADE A DONATION' subtitle='Thank you very much for your funding.' text={text} />
                    </div>
                    <NewsletterForm tag='UltraFan' title='BECOME A FAN' buttonText='BECOME A FAN' defaultMessage='Become a super fan of Bad Contact to get special gifts. Join by entering your email in the form below.' />
                </div>
            </Layout>
        </>
    );
}
