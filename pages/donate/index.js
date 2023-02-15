import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from "@/styles/pages/Donate.module.scss";
import fonts from "@/helpers/fonts";
import PaypalDonate from "@/components/paypalDonate";

export default function Donate() {
    return (
        <div className={styles.container}>
            <Head>
                <title>About the Band - Bad Contact</title>
            </Head>
            <Header/>
            <main className={fonts.grava400.className}>
                <section className={styles.section}>
                    <div className='container'>
                        <div className={styles.content}>
                            <div className={styles.textContainer}>
                               <h1 className={`${fonts.voltec.className} ${styles.title}`}>
                                   DONATE
                               </h1>
                               <p className={styles.text}>
                                   Well..you know the financial situation in Greece is !@#&%. We are all having full-time jobs besides the band
                                   and we are doing our best to keep Bad Contact rolling and doing new things, so any financial aid you provide is really helpful to us.
                                   We appreciate it and thank you for even coming this far, keep rocking and buy us a beer (we will buy you more beers at our lives).
                               </p>
                            </div>
                            <PaypalDonate />
                        </div>
                    </div>

                </section>
            </main>
            <Footer/>
        </div>
    );
}
