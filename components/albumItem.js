import styles from "@/styles/components/AlbumItem.module.scss";
import Link from "next/link";
import Image from "next/image";
import fonts from '@/helpers/fonts'


export default function AlbumItem({title,subtitle, link, img, release, btnText }) {

    const text = btnText ? btnText : 'VIEW MORE';

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
                        <div className={styles.icon}>
                            <svg x="0px" y="0px" viewBox="0 0 512 512"><g><g><g><path d="M256,0C114.844,0,0,114.844,0,256s114.844,256,256,256s256-114.844,256-256S397.156,0,256,0z M354.052,338.969c4.167,4.167,4.167,10.917,0,15.083c-26.188,26.188-61.01,40.615-98.052,40.615c-5.896,0-10.667-4.771-10.667-10.667c0-5.896,4.771-10.667,10.667-10.667c31.344,0,60.802-12.208,82.969-34.365C343.135,334.802,349.885,334.802,354.052,338.969z M121.24,129.906c-2.76,0-5.51-1.063-7.594-3.177c-4.135-4.198-4.094-10.958,0.104-15.083C151.917,74.042,202.438,53.333,256,53.333c5.896,0,10.667,4.771,10.667,10.667S261.896,74.667,256,74.667c-47.927,0-93.125,18.531-127.271,52.167C126.646,128.885,123.948,129.906,121.24,129.906z M157.948,173.031c-4.167-4.167-4.167-10.917,0-15.083c26.188-26.188,61.01-40.615,98.052-40.615c5.896,0,10.667,4.771,10.667,10.667s-4.771,10.667-10.667,10.667c-31.344,0-60.802,12.208-82.969,34.365c-2.083,2.083-4.813,3.125-7.542,3.125C162.76,176.156,160.031,175.115,157.948,173.031z M170.667,256c0-47.052,38.281-85.333,85.333-85.333s85.333,38.281,85.333,85.333S303.052,341.333,256,341.333S170.667,303.052,170.667,256z M399.302,399.302c-38.271,38.281-89.167,59.365-143.302,59.365c-5.896,0-10.667-4.771-10.667-10.667c0-5.896,4.771-10.667,10.667-10.667c48.438,0,93.979-18.865,128.219-53.115c4.167-4.167,10.917-4.167,15.083,0C403.469,388.385,403.469,395.135,399.302,399.302z"/><circle cx="256" cy="256" r="21.333"/></g></g></g></svg>
                        </div>
                        <div>
                            {release}
                        </div>

                    </div>
                    <Link href={link} className={styles.link}>
                        <span className={fonts.grava700.className}>{text}</span>
                        <svg  x="0px" y="0px" viewBox="0 0 512 512"><g><g><path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"/></g></g></svg>
                    </Link>
                </div>
            </div>
        </div>
    );

}
