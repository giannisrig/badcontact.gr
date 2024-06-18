import styles from "@/styles/components/SocialLinks.module.scss";
import Image from "next/image";

export default function SocialLinks({youtube}) {

    const showYoutube = !!youtube;

    return(
        <div className={styles.socialLinks}>

            <a href="https://www.facebook.com/badcontact" className={styles.socialLink}>

                <Image src="/images/fb.svg" alt="Bad Contact Band Official Facebook Page" width={20} height={20} />
            </a>

            <a href="https://www.instagram.com/badcontactband/" className={styles.socialLink}>

                <Image src="/images/instagram.svg" alt="Bad Contact Band Official Instagram Page" width={20} height={20} />
            </a>

            <a href="https://twitter.com/badcontactband" className={styles.socialLink}>

                <Image src="/images/twitter.svg" alt="Bad Contact Band Official Twitter Page" width={20} height={20} />

            </a>

            { showYoutube ?
                <a href="https://www.youtube.com/@badcontact" className={styles.socialLink}>

                    <Image  src="/images/youtube.svg" alt="Bad Contact Band Official YouTube Channel Page" width={20} height={20} />
                </a>
                : '' }


        </div>
    );

}
