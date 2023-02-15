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
                                   Thank you very much, we appreciate it for even coming this far, keep rocking 🤘🤘🤘
                               </p>
                            </div>
                            <div>
                                <h2 className={`${fonts.voltec.className} ${styles.subtitle}`}>
                                    HOW WE'LL USE YOUR DONATIONS
                                </h2>
                                <p className={styles.text}>
                                    We want to be transparent on how we are using the money you donate us. These are the goals we have prioritized for 2023:
                                </p>
                                <div className={styles.donationItems}>
                                    <div className={styles.donationItem}>
                                        <div className={styles.icon}>
                                            <svg x="0px" y="0px" viewBox="0 0 512 512"><g><g><g><path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M354.052,338.969c4.167,4.167,4.167,10.917,0,15.083c-26.188,26.188-61.01,40.615-98.052,40.615c-5.896,0-10.667-4.771-10.667-10.667c0-5.896,4.771-10.667,10.667-10.667c31.344,0,60.802-12.208,82.969-34.365C343.135,334.802,349.885,334.802,354.052,338.969z M121.24,129.906c-2.76,0-5.51-1.063-7.594-3.177c-4.135-4.198-4.094-10.958,0.104-15.083C151.917,74.042,202.438,53.333,256,53.333c5.896,0,10.667,4.771,10.667,10.667S261.896,74.667,256,74.667c-47.927,0-93.125,18.531-127.271,52.167C126.646,128.885,123.948,129.906,121.24,129.906z M157.948,173.031c-4.167-4.167-4.167-10.917,0-15.083c26.188-26.188,61.01-40.615,98.052-40.615c5.896,0,10.667,4.771,10.667,10.667s-4.771,10.667-10.667,10.667c-31.344,0-60.802,12.208-82.969,34.365c-2.083,2.083-4.813,3.125-7.542,3.125C162.76,176.156,160.031,175.115,157.948,173.031z M170.667,256c0-47.052,38.281-85.333,85.333-85.333s85.333,38.281,85.333,85.333S303.052,341.333,256,341.333S170.667,303.052,170.667,256z M399.302,399.302c-38.271,38.281-89.167,59.365-143.302,59.365c-5.896,0-10.667-4.771-10.667-10.667c0-5.896,4.771-10.667,10.667-10.667c48.438,0,93.979-18.865,128.219-53.115c4.167-4.167,10.917-4.167,15.083,0C403.469,388.385,403.469,395.135,399.302,399.302z"/><circle cx="256" cy="256" r="21.333"/></g></g></g></svg>
                                        </div>
                                        <div>
                                            ALBUM
                                        </div>
                                    </div>
                                    <div className={styles.donationItem}>
                                        <div className={styles.icon}>

                                            <svg height="512" viewBox="0 0 48 48" width="512" xmlns="http://www.w3.org/2000/svg"><g id="Line"><path d="m4 18h6v27c0 .552.448 1 1 1h26c.552 0 1-.448 1-1v-27h6c.51 0 .937-.383.994-.89l1-9c.052-.469-.23-.91-.677-1.059l-15-5c-.385-.128-.811-.011-1.076.298-2.6 3.185-7.881 3.183-10.481 0-.265-.308-.69-.426-1.076-.298l-15 5c-.448.149-.73.591-.678 1.059l1 9c.057.507.484.89.994.89z"/></g></svg>

                                        </div>
                                        <div>
                                            MERCH
                                        </div>
                                    </div>

                                </div>
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
