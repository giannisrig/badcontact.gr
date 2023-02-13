import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import styles from "@/styles/AboutUs.module.scss";
import fonts from "@/helpers/fonts";

export default function AboutUs() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About the Band - Bad Contact</title>
                <link rel="icon" href="/images/favicon.png" />
            </Head>
            <main className={fonts.grava400.className}>

                <Header/>
                <Footer/>
            </main>
        </div>
    );
}
