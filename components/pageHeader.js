import styles from "@/styles/components/PageHeader.module.scss";
import Breadcrumbs from "@/components/breadcrumbs";
import fonts from "@/helpers/fonts";

export default function PageHeader(props) {


    return (
        <>
            <Breadcrumbs />
            <h1 className={`${fonts.voltec.className} ${styles.title}`}>
                {props.title}
            </h1>
            {
                props.subtitle ?
                    <h2 className={styles.subtitle}>
                        {props.subtitle}
                    </h2>
                    : null
            }
            {
                props.text ?
                    <p className={styles.text}>
                        {props.text}
                    </p>
                    : null
            }
        </>
    );

}
