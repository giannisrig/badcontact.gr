import styles from "@/styles/components/Notice.module.scss";
import fonts from '@/helpers/fonts'

export default function Notice({title, text}) {

    return (
        <div className={`${styles.notice} ${fonts.grava400.className}`}>
            <div className={styles.head}>
                <svg className={styles.icon} fill="none" height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><g fill="rgb(0,0,0)"><path clipRule="evenodd" d="m12 3.53846c-4.67318 0-8.46154 3.78836-8.46154 8.46154 0 4.6732 3.78836 8.4615 8.46154 8.4615 4.6732 0 8.4615-3.7883 8.4615-8.4615 0-4.67318-3.7883-8.46154-8.4615-8.46154zm-10 8.46154c0-5.52285 4.47715-10 10-10 5.5228 0 10 4.47715 10 10 0 5.5228-4.4772 10-10 10-5.52285 0-10-4.4772-10-10z" fillRule="evenodd"/><path clipRule="evenodd" d="m12 7.64103c.4248 0 .7692.34439.7692.76923v4.10254c0 .4249-.3444.7693-.7692.7693s-.7692-.3444-.7692-.7693v-4.10254c0-.42484.3444-.76923.7692-.76923z" fillRule="evenodd"/><path d="m13.0256 15.5897c0 .5665-.4592 1.0257-1.0256 1.0257s-1.0256-.4592-1.0256-1.0257c0-.5664.4592-1.0256 1.0256-1.0256s1.0256.4592 1.0256 1.0256z"/></g></svg>
                <h3 className={`${styles.title} ${fonts.voltec.className}`}>
                    {title}
                </h3>
            </div>
            <div className={styles.content}>
                <p>
                    {text}
                </p>
            </div>
        </div>
    );

}
