import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from "@/styles/AboutUs.module.scss";
import fonts from "@/helpers/fonts";
import PaypalDonate from "@/components/paypalDonate";

export default function Donate() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About the Band - Bad Contact</title>
            </Head>
            <main className={fonts.grava400.className}>
                <Header/>
                <h1>
                    Thank you for your donation
                </h1>
                <PaypalDonate />
                <Footer/>
            </main>
        </div>
    );
}
