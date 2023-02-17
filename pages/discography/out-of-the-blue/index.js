import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from "@/styles/pages/OutOfTheBlue.module.scss";
import fonts from "@/helpers/fonts";
import Breadcrumbs from "@/components/breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import coverArtworkImg from "@/public/images/BadContact-OutOfTheBlue2023ArtworkCover.jpg";
import MusicInfoItem from "@/components/musicInfoItem";
import MusicLineupCarousel from "@/components/musicLineupCarousel";

export default function OutOfTheBlue() {

    const singleInfo = [
        {
            label: 'Release',
            value: 'Single'
        },
        {
            label: 'Format',
            value: 'Digital'
        },
        {
            label: 'Label',
            value: 'Self Released'
        },
        {
            label: 'Recorded at',
            value: 'Odeon Studios'
        },
        {
            label: 'Produced by',
            value: 'Bad Contact & Ilias Lakas'
        },
        {
            label: 'Mixed by',
            value: 'Bad Contact & Ilias Lakas'
        },
        {
            label: 'Engineered by',
            value: 'Ilias Lakas'
        },
        {
            label: 'Mastered by',
            value: 'Ilias Lakas'
        },
        {
            label: 'Artwork by',
            value: 'Dimos Stathis'
        },
    ];

    return (
        <div>
            <Head>
                <title>Out of the Blue (2023) feat Andreas Lagios - Bad Contact</title>
            </Head>
            <Header/>
            <main className={fonts.grava400.className}>
                <section className={styles.section}>
                    <div className='container'>
                        <div className={styles.content}>
                            <div>
                                <Breadcrumbs />
                               <h1 className={`${fonts.voltec.className} ${styles.title}`}>
                                   OUT OF THE BLUE (2023)
                               </h1>
                               <h2 className={styles.subtitle}>
                                   feat Andreas Lagios (Nightstalker)
                               </h2>
                            </div>
                            <div className={styles.artwork}>
                                <Image src={coverArtworkImg} alt="Bad Contact - Out of the Blue (Single 2023) - Artwork Cover" title="Bad Contact - Out of the Blue (Single 2023) - Artwork Cover" width={315} height={315} quality={100} />
                            </div>
                            <div className={styles.musicInfoList}>
                                {singleInfo.map((itemData, i) => {
                                   return( <MusicInfoItem data={itemData} key={i} /> )
                                })}
                            </div>

                            <div className={styles.lineup}>
                                <div>
                                    <h3 className={`${fonts.voltec.className} ${styles.title}`}>
                                        LINE UP
                                    </h3>
                                    <p className={styles.lineupText}>
                                        The line-up of Bad Contact when we recorded the <strong>'Out of the Blue'</strong> single in 2023:
                                    </p>
                                </div>
                                <MusicLineupCarousel/>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer/>
        </div>
    );
}
