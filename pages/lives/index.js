import styles from "@/styles/pages/Lives.module.scss";
import Head from "next/head";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageHeader";
import LiveShow from "@/components/liveShow";
import fonts from "@/helpers/fonts"
import RemedyPoster from "@/public/images/live/remedy-live-02-06-2022.jpg"
import Notice from "@/components/notice";

export default function Lives() {

    return (
        <>
            <Head>
                <title>Lives & Tour Dates - Bad Contact</title>
            </Head>
            <Layout>
                <div>
                    <PageHeader title='LIVE SHOWS' subtitle='Upcoming and past live shows, posters, dates and info.' />
                </div>
                <h3 className={`${fonts.voltec.className} ${styles.title}`}>
                    UPCOMING LIVES
                </h3>

                <Notice title='NO UPCOMING LIVES' btnLink='/contact-us' btnText='CONTACT US' text='If you are interested to book or arrange a live show with us, send us a message.' />

                <h3 className={`${fonts.voltec.className} ${styles.title}`}>
                    PAST LIVES
                </h3>
                <LiveShow title={'HARD ROCK & HEAVY METAL ROLLING #LIVE'} img={RemedyPoster} date={'SATURDAY, JULY 2, 2022 AT 8:30 PM'} location={'REMEDY'} />
            </Layout>
        </>
    );

}
