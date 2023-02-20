import Head from 'next/head'
import styles from "@/styles/pages/OutOfTheBlue.module.scss";
import fonts from "@/helpers/fonts";
import Link from "next/link";
import Image from "next/image";
import coverArtworkImg from "@/public/images/BadContact-OutOfTheBlue2023ArtworkCover.jpg";
import MusicInfoItem from "@/components/musicInfoItem";
import MusicLineupCarousel from "@/components/musicLineupCarousel";
import ButtonLink from "@/components/buttonLink";
import PageHeader from "@/components/pageHeader";
import Layout from "@/components/layout";

export default function OutOfTheBlue() {

    const singleInfo = [
        {
            label: 'Release:',
            value: 'Single'
        },
        {
            label: 'Format:',
            value: 'Digital'
        },
        {
            label: 'Label:',
            value: 'Self Released'
        },
        {
            label: 'Recorded at:',
            value: 'Odeon Studios'
        },
        {
            label: 'Produced by:',
            value: 'Bad Contact & Ilias Lakkas'
        },
        {
            label: 'Mixed by:',
            value: 'Ilias Lakkas'
        },
        {
            label: 'Engineered by:',
            value: 'Ilias Lakkas'
        },
        {
            label: 'Mastered by:',
            value: 'Ilias Lakkas'
        },
        {
            label: 'Artwork by:',
            value: 'Dimos Stathis'
        },
    ];

    return (
        <>
            <Head>
                <title>Out of the Blue (2023) feat Andreas Lagios - Bad Contact</title>
            </Head>
            <Layout>
                <div>
                    <PageHeader title='OUT OF THE BLUE (2023)' subtitle='feat Andreas Lagios (Nightstalker)' />
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
                    {/*<Image className={styles.rocks} src={rocks} alt="Heavy Rock" />*/}
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

                <div className={styles.lineup}>
                    <div>
                        <h3 className={`${fonts.voltec.className} ${styles.title}`}>
                            LISTEN
                        </h3>
                        <p className={styles.lineupText}>
                            You can listen to 'Out of the Blue' on all the streaming platforms:
                        </p>
                        <div className={styles.buttonsContainer}>

                            <ButtonLink href="#" image="/images/spotify.svg" text="SPOTIFY" />
                            <ButtonLink href="#" image="/images/bandcamp-bad-contact.svg" text="BANDCAMP" />
                            <ButtonLink href="#" image="/images/youtube-bad-contact.svg" text="YOUTUBE" />
                            <ButtonLink href="#" image="/images/apple-music-bad-contact.svg" text="APPLE MUSIC" />
                            <ButtonLink href="#" image="/images/pandora-bad-contact.svg" text="PANDORA" />

                        </div>
                    </div>
                </div>

                <div className={styles.lineup}>
                    <div>
                        <h3 className={`${fonts.voltec.className} ${styles.title}`}>
                            TRACKS & LYRICS
                        </h3>
                        <div className={styles.trackList}>
                            <MusicInfoItem data={{
                                label: '1. Out of the Blue',
                                value: <Link href="/discography/out-of-the-blue/lyrics" className={styles.lyricsLink}>
                                    View Lyrics
                                </Link>
                            }}  />
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
