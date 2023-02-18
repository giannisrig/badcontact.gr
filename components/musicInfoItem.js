import styles from "@/styles/components/MusicInfoItem.module.scss";
export default function MusicInfoItem( data, ...props ) {

    const info = data.data;

    return (
        <div className={styles.item}>
            <div className={styles.label}>
               {info.label}
            </div>
            <div className={` ${styles.value}`}>
                {info.value}
            </div>
        </div>
    );

}
