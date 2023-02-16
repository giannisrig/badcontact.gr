import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import styles from "@/styles/AboutUs.module.scss";
import fonts from "@/helpers/fonts";
import Breadcrumbs from "@/components/breadcrumbs";

export default function OutOfTheBlue() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Out of the Blue (2023) feat Andreas Lagios - Bad Contact</title>
            </Head>
            <main className={fonts.grava400.className}>
                <Header/>
                <Breadcrumbs />
                <h1>
                    Out of the Blue (2023) feat Andreas Lagios
                </h1>

                <Footer/>
            </main>
        </div>
    );
}
