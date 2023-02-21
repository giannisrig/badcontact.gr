import styles from "@/styles/components/AlbumItem.module.scss";
import Link from "next/link";
import Image from "next/image";
import fonts from '@/helpers/fonts'


export default function AlbumItem({title,subtitle, link, img, release }) {

    return (
        <div className={styles.item}>
            <Image src={img} className={styles.artworkCover} alt="Bad Contact - Out of the Blue (Single 2023) - Artwork Cover" title="Bad Contact - Out of the Blue (Single 2023) - Artwork Cover" width={315} height={315} quality={100} />
            <div className={styles.content}>
                <div>
                   <h3 className={`${styles.title} ${fonts.voltec.className}`}>
                       {title}
                   </h3>
                   <h4 className={styles.subtitle}>
                       {subtitle}
                   </h4>
                </div>
                <div className={styles.footer}>
                    <div className={styles.release}>
                        {release}
                    </div>
                    <Link href={link} className={styles.link}>
                        <span>VIEW MORE</span>
                        <svg  x="0px" y="0px" viewBox="0 0 512 512"><g><g><path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"/></g></g></svg>
                    </Link>
                </div>
            </div>
        </div>
    );

}
