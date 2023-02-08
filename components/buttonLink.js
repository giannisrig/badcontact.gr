import Image from 'next/image'
import styles from '../styles/ButtonLink.module.scss'
import fonts from '../helpers/fonts'

export default function ButtonLink({href, text, image}) {


    return (
        <a href={href} className={styles.buttonLink}>
            <Image
                src={image}
                alt={text}
                width={20}
                height={20}
            />
            <span className={` ${styles.text} ${fonts.voltec.className}`}>
                {text}
            </span>
        </a>
    )
}
