import styles from "@/styles/components/EmailItem.module.scss";
import {useState, useRef} from "react";
import fonts from "@/helpers/fonts"

export default function EmailItem({email}) {

    const [copySuccess, setCopySuccess] = useState(false );
    const textAreaRef = useRef(null);

    function copyClipboard() {
        textAreaRef.current.select();
        document.execCommand('copy');
        textAreaRef.current.focus();
        setCopySuccess(true );
    }

    return (
        <div className={styles.item}>

            <textarea className={`${styles.textarea} ${fonts.grava700.className}`} ref={textAreaRef} value={email} onFocus={copyClipboard} />

            <div className={styles.buttons}>

                <button onClick={copyClipboard} className={`${styles.btn} ${fonts.voltec.className}`}>
                    <svg height="682.66669pt" viewBox="-21 -21 682.66669 682.66669" width="682.66669pt" xmlns="http://www.w3.org/2000/svg"><path d="m565 640h-340c-41.359375 0-75-33.640625-75-75v-340c0-41.359375 33.640625-75 75-75h340c41.359375 0 75 33.640625 75 75v340c0 41.359375-33.640625 75-75 75zm-340-440c-13.785156 0-25 11.214844-25 25v340c0 13.785156 11.214844 25 25 25h340c13.785156 0 25-11.214844 25-25v-340c0-13.785156-11.214844-25-25-25zm-125 240h-25c-13.785156 0-25-11.214844-25-25v-340c0-13.785156 11.214844-25 25-25h340c13.785156 0 25 11.214844 25 25v23.75h50v-23.75c0-41.359375-33.640625-75-75-75h-340c-41.359375 0-75 33.640625-75 75v340c0 41.359375 33.640625 75 75 75h25zm0 0"/></svg>
                    <span>
                        { copySuccess ? 'EMAIL COPIED': 'COPY EMAIL'}
                    </span>
                </button>

                <a href={'mailto:' + email } className={`${styles.btn} ${fonts.voltec.className}`}>
                    <span>
                        SEND EMAIL
                    </span>
                    <svg x="0px" y="0px" viewBox="0 0 488.721 488.721"><g><g><path d="M483.589,222.024c-5.022-10.369-13.394-18.741-23.762-23.762L73.522,11.331C48.074-0.998,17.451,9.638,5.122,35.086C-1.159,48.052-1.687,63.065,3.669,76.44l67.174,167.902L3.669,412.261c-10.463,26.341,2.409,56.177,28.75,66.639c5.956,2.366,12.303,3.595,18.712,3.624c7.754,0,15.408-1.75,22.391-5.12l386.304-186.982C485.276,278.096,495.915,247.473,483.589,222.024z M58.657,446.633c-8.484,4.107-18.691,0.559-22.798-7.925c-2.093-4.322-2.267-9.326-0.481-13.784l65.399-163.516h340.668L58.657,446.633z M100.778,227.275L35.379,63.759c-2.722-6.518-1.032-14.045,4.215-18.773c5.079-4.949,12.748-6.11,19.063-2.884l382.788,185.173H100.778z"/></g></g></svg>
                </a>

            </div>
        </div>
    );

}
