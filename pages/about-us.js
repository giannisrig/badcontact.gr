import Head from 'next/head'
import styles from "@/styles/AboutUs.module.scss";
import fonts from "@/helpers/fonts";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageHeader";
import GroupPhoto from "@/public/images/band/Bad-Contact-BandGroupPhoto.jpg"
import GroupPhoto2 from "@/public/images/band/Bad-Contact-BandGroupPhoto2.jpg"
import Image from "next/image";

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>About the Band - Bad Contact</title>
            </Head>
            <Layout>
                <div>
                    <PageHeader title='BAD CONTACT' subtitle='All you need to know about the band, our story and the current lineup.' />
                </div>
                <div className={styles.imgContainer}>
                    <Image src={GroupPhoto} alt={'Bad Contact - Band Group Photo'} title={'Bad Contact - Band Group Photo'} />
                </div>
                <h3 className={`${fonts.voltec.className} ${styles.title}`}>
                    ABOUT US
                </h3>
                <p className={styles.text}>
                    Bad Contact from Athens Greece, is a band formed to create a rousing impassioned music of heavy rock, reflecting the sound of the 80's era by combining music elements of the beloved motivational bands we grew up with, integrating a rock n roll attitude and conveying positive vibes through our art.
                </p>
                <div className={styles.imgContainer}>
                    <Image src={GroupPhoto2} alt={'Bad Contact - Band Group Photo'} title={'Bad Contact - Band Group Photo'} />
                </div>
                <h3 className={`${fonts.voltec.className} ${styles.title}`}>
                    OUR STORY
                </h3>
                <p className={styles.text}>
                    Bad Contact is a fresh new band formed in 2022 by Giannis, Marios and Panagiotis, friends who have been playing with each other in various bands for many years but never in the same one altogether.
                </p>
                <p className={styles.text}>
                    The band started composing original music since day zero and after a couple of months and some lineup changes, the material for the first album was finished.
                </p>
                <p className={styles.text}>
                    In 2023 Bad Contact released their first official music 'Out of the Blue' a single record featuring Andreas Lagios from Nightstalker as a special guest on the bass.
                </p>

            </Layout>
        </>
    );
}
