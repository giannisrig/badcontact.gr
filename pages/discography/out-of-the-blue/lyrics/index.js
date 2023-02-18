import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from "@/styles/pages/Lyrics.module.scss";
import fonts from "@/helpers/fonts";
import Breadcrumbs from "@/components/breadcrumbs";

export default function OutOfTheBlueLyrics() {
    return (
        <div>
            <Head>
                <title>Lyrics | Out of the Blue (2023) - Bad Contact</title>
            </Head>
            <Header/>
            <main className={fonts.grava400.className}>
                <section className={styles.section}>
                    <div className='container'>
                        <div className={styles.content}>
                            <div>
                                <Breadcrumbs />
                                <h1 className={`${fonts.voltec.className} ${styles.title}`}>
                                    OUT OF THE BLUE <span>LYRICS</span>
                                </h1>
                            </div>
                            <p className={styles.lyricsText}>
                                It’s been almost one year now <br/>
                                The story I’m ‘bout to tell <br/>
                                There’s a burning deep inside me <br/>
                                That I don’t understand <br/>
                                <br/>
                                Abandoned in this dark place <br/>
                                All alone and broke <br/>
                                Trying to find my way back home <br/>
                                Fighting on my own <br/>
                                <br/>
                                Over and over I fall <br/>
                                Someday I'll break through this wall <br/>
                                Don't let it take me too long <br/>
                                <br/>
                                Fire burning through my veins <br/>
                                My eyes as cold as ice <br/>
                                Reaching for my destiny <br/>
                                With pride as my disguise <br/>
                                <br/>
                                Over and over I fall <br/>
                                Someday I'll break through this wall <br/>
                                Don't let it take me too long <br/>
                                <br/>
                                Out of the blue <br/>
                                You came into my life <br/>
                                You gave me strength to carry on <br/>
                                You took me by surprise <br/>
                                <br/>
                                You're everything I see <br/>
                                And everything I want <br/>
                                I am looking for a friend <br/>
                                To say that I belong <br/>
                                <br/>
                                Out of the blue I let you go <br/>
                                But something deep inside <br/>
                                Telling me that we'll meet again <br/>
                                It made me realize <br/>
                                <br/>
                                You're everywhere I look <br/>
                                And everywhere I go <br/>
                                I thought you were that friend <br/>
                                Who'd say that I belong <br/>
                                <br/>
                                My spirit never seems to break <br/>
                                My heart will guide the way <br/>
                                Throw me everything you've got <br/>
                                I'll never back away <br/>
                                <br/>
                                Over and over I fall <br/>
                                Someday I'll break through this wall <br/>
                                Don't let it take me too long
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
