import Image from 'next/image'
import fonts from '../helpers/fonts'
import styles from '../styles/Header.module.scss'
import logo from '../public/images/logo.svg'
import HeaderVector from '../public/images/HeaderVector.svg'


export default function Header() {


    return (
        <header className={styles.header}>

            <Image className={styles.headerVector} src={HeaderVector} alt="Bad Contact Header Illustration" title="Bad Contact Header Illustration"/>

            <a href="#" className={styles.menuBtn}>
                <Image
                    src="/images/hamburge-menu.svg"
                    alt="Menu Icon"
                    width={18}
                    height={18}
                />

                <span className={fonts.voltec.className}>
                    menu
                </span>
            </a>

            <div className={styles.logoContainer}>
                <a href="https://badcontact.gr" className={styles.logo}>
                    <Image src={logo} alt="Bad Contact Logo" width={200} height={120} />
                </a>
            </div>

        </header>
    )
}
