import styles from "@/styles/pages/Lives.module.scss";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageHeader";
import LiveShow from "@/components/liveShow";
import fonts from "@/helpers/fonts"
import RemedyPoster from "@/public/images/live/remedy-live-02-06-2022.jpg"
import Notice from "@/components/notice";
import ogimg from "@/public/images/social/og/lives-bad-contact-band.jpg";
import HeadSEO from "@/components/headSEO";

export default function Lives() {

    const desc = "Get ready to rock with Bad Contact's electrifying performances of 80s-inspired heavy metal/rock music, all the way from Athens, Greece. Check out our upcoming shows, dates, posters, and information, and grab your tickets for a unforgettable performance. Don't miss our latest tour!"

    return (
        <>
            <HeadSEO title='Lives & Tour Dates - Bad Contact' description={desc} image={ogimg.src} />
            <Layout>
                <div>
                    <PageHeader title='LIVE SHOWS' subtitle='Upcoming and past live shows, posters, dates and info.' />
                </div>

                <section className={styles.section}>
                    <h3 className={`${fonts.voltec.className} ${styles.title}`}>
                        UPCOMING LIVES
                    </h3>

                    <Notice title='NO UPCOMING LIVES' btnLink='/contact-us' btnText='CONTACT US' text='If you are interested to book or arrange a live show with us, send us a message.' />
                </section>

                <section className={styles.section}>
                    <h3 className={`${fonts.voltec.className} ${styles.title}`}>
                        PAST LIVES
                    </h3>
                    <LiveShow title={'HARD ROCK & HEAVY METAL ROLLING #LIVE'} img={RemedyPoster} date={'SATURDAY, JULY 2, 2022 AT 8:30 PM'} location={'REMEDY'} />
                </section>

            </Layout>
        </>
    );

}
