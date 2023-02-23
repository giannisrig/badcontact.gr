import Head from 'next/head'
import styles from "@/styles/AboutUs.module.scss";
import fonts from "@/helpers/fonts";
import Layout from "@/components/layout";
import PageHeader from "@/components/pageHeader";
import GroupPhoto from "@/public/images/band/Bad-Contact-BandGroupPhoto.jpg"
import Image from "next/image";

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>About the Band - Bad Contact</title>
            </Head>
            <Layout>
                <div>
                    <PageHeader title='BAD CONTACT' />
                </div>
                <div className={styles.imgContainer}>
                    <Image src={GroupPhoto} alt={'Bad Contact - Band Group Photo'} />
                </div>


            </Layout>
        </>
    );
}
