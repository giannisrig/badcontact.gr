import styles from "@/styles/pages/Lives.module.scss";
import Head from "next/head";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageHeader";
import LiveShow from "@/components/liveShow";
import RemedyPoster from "@/public/images/live/remedy-live-02-06-2022.jpg"

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
                <LiveShow title={'HARD ROCK & HEAVY METAL ROLLING #LIVE'} img={RemedyPoster} date={'SATURDAY, JULY 2, 2022 AT 8:30 PM'} location={'REMEDY'} />
            </Layout>
        </>
    );

}
