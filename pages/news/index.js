import Head from 'next/head'
import styles from "@/styles/pages/News.module.scss";
import fonts from "@/helpers/fonts";
import PageHeader from "@/components/pageHeader";
import Layout from "@/components/layout";
import Notice from "@/components/notice";

export default function News() {
    return (
        <>
            <Head>
                <title>News & Announcements - Bad Contact</title>
            </Head>
            <Layout>
                <div>
                    <PageHeader title='NEWS & ANNOUNCEMENTS' subtitle='Keep posted on the latest news of the band, such as releases, merchandise, live shows collaborations & more.' />
                </div>
                <Notice title='THERE ARE NO NEWS POSTED' btnLink='/#subscribeForm' btnText='SUBSCRIBE' text='Subscribe to our newsletter if you want to be the first to know about something awesome and new of Bad Contact.' />
            </Layout>
        </>
    );
}
