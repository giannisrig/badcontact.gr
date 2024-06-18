import Image from 'next/image'
import styles from '@/styles/components/Footer.module.scss'
import logo from '@/public/images/logo.svg'
import fonts from '@/helpers/fonts'
import footerIllustration from '@/public/images/Terrain.svg'
import SocialLinks from "@/components/socialLinks";
import NewsletterForm from "@/components/newsletterForm";
export default function Footer() {


    return (
        <footer className={`${styles.footer} ${fonts.grava400.className}`}>

            <div className={styles.smokeContainer}>

                <Image src="/images/smoke-footer.svg" alt="Bad Contact Footer Smoke" title="Bad Contact  Footer Smoke" width={219} height={137}/>

            </div>


            <div className={styles.content}>

                <a href="https://badcontact.gr" className={styles.logo}>
                    <Image src={logo} alt="Bad Contact Logo" width={200} height={120} />
                </a>

                <h5 className={styles.title}>
                    80’s inspired Heavy Metal/Rock from Athens, Greece that will bring you feelings of nostalgia.
                </h5>

                <SocialLinks youtube={true} />

                <div id={'subscribeForm'} className={styles.newsletter}>
                    <NewsletterForm />
                </div>



                <div className={styles.copyright}>
                    <div>Bad Contact ©2023, All rights reserved.</div>
                    <div className={styles.by}>Developed & Designed by Giannis Riganas</div>
                </div>

            </div>

            <div className={styles.illustrationContainer}>
                <Image src={footerIllustration} alt="Bad Contact Footer Illustration" title="Bad Contact Footer Illustration"/>

            </div>



        </footer>
    )
}
