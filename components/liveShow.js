import styles from "@/styles/components/LiveShow.module.scss";
import Image from "next/image";
import fonts from "@/helpers/fonts";

export default function LiveShow({title, img, date, location}) {

    return (
        <div className={styles.item}>
            <Image src={img} className={styles.img} alt="Bad Contact - Out of the Blue (Single 2023) - Artwork Cover" title="Bad Contact - Out of the Blue (Single 2023) - Artwork Cover" width={315} height={315} quality={100} />
            <div className={styles.content}>
                <h3 className={`${styles.title} ${fonts.voltec.className}`}>
                    {title}
                </h3>
                <div className={styles.meta}>
                    <div>
                        {date}
                    </div>
                    <div>
                        {location}
                    </div>
                </div>
            </div>
        </div>
    );

}
