import Image from 'next/image'
import styles from '../styles/Footer.module.scss'
import logo from '../public/images/logo.svg'
import fonts from '../helpers/fonts'
import footerIllustration from '../public/images/footerIllustration.svg'
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
                    80’s inspired Heavy Rock from Athens, Greece
                </h5>

                <div className={styles.socialLinks}>

                    <a href="https://www.facebook.com/badcontact" className={styles.socialLink}>

                        <Image
                            src="/images/fb.svg"
                            alt="Bad Contact Official Facebook Page"
                            width={20}
                            height={20}
                        />
                    </a>

                    <a href="https://www.instagram.com/badcontactband/" className={styles.socialLink}>

                        <Image
                            src="/images/instagram.svg"
                            alt="Bad Contact Official Instagram Page"
                            width={20}
                            height={20}
                        />
                    </a>

                    <a href="https://www.youtube.com/channel/UCteG81-C-AzgqcLJSWbMUnw" className={styles.socialLink}>

                        <Image
                            src="/images/youtube.svg"
                            alt="Bad Contact Official YouTube Page"
                            width={20}
                            height={20}
                        />
                    </a>

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
