import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from "@/styles/AboutUs.module.scss";
import fonts from "@/helpers/fonts";

export default function OutOfTheBlueLyrics() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lyrics | Out of the Blue (2023) - Bad Contact</title>
            </Head>
            <main className={fonts.grava400.className}>
                <Header/>
                <h1>
                    Out of the Blue (2023) Lyrics
                </h1>
                <Footer/>
            </main>
        </div>
    );
}
