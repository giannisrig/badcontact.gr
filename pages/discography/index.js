import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from "@/styles/AboutUs.module.scss";
import fonts from "@/helpers/fonts";

export default function Discography() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Complete Discography - Bad Contact</title>
            </Head>
            <main className={fonts.grava400.className}>
                <Header/>
                <h1>
                    Discography
                </h1>
                <Footer/>
            </main>
        </div>
    );
}
