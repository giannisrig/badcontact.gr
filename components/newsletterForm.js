import React, { useRef, useState } from 'react';
import styles from '@/styles/components/NewsletterForm.module.scss'
import fonts from "@/helpers/fonts";
export default function NewsletterForm(props) {
    // 1. Create a reference to the input, so we can fetch/clear its value.
    const inputEl = useRef(null);
    // 2. Hold a message in state to handle the response from our API.
    const [message, setMessage] = useState('');

    const tag           = props.tag ? props.tag : 'fan';
    const title         = props.title ? props.title : 'SUBSCRIBE TO OUR NEWSLETTER';
    const buttonText    = props.buttonText ? props.buttonText : 'SUBSCRIBE NOW';
    const defaultMessage = props.defaultMessage ? props.defaultMessage : 'We\'ll only send you emails when there\'s something awesome and new to rock about.';

    const subscribe = async (e) => {
        e.preventDefault();

        // 3. Send a request to our API with the user's email address.
        const res = await fetch('/api/subscribe', {
            body: JSON.stringify({
                email: inputEl.current.value,
                tag: tag,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });

        const { error } = await res.json();

        if (error) {
            // 4. If there was an error, update the message in state.
            setMessage(error);

            return;
        }

        // 5. Clear the input value and show a success message.
        inputEl.current.value = '';

        setMessage(props.tag ? 'You rock! You are now a super fan of Bad Contact.' : 'You rock! You are now subscribed to our newsletter.');
    };

    return (
        <div className={` ${styles.formContainer} ${fonts.grava400.className}`}>
            <h4 className={` ${styles.formTitle} ${fonts.voltec.className}`}>
                {title}
            </h4>
            <div className={styles.message}>
                {message ? message
                    : defaultMessage }
            </div>
            <form onSubmit={subscribe} className={` ${styles.form} ${fonts.grava400.className}`}>
                <label htmlFor="email-input" className={styles.label}>{'Email Address'}</label>
                <input
                    id="email-input"
                    name="email"
                    placeholder="you@awesome.com"
                    ref={inputEl}
                    required
                    type="email"
                    className={styles.input}
                />
                <button type="submit" className={` ${styles.btn} ${fonts.voltec.className}`}>{buttonText}</button>
            </form>
        </div>
    );
}
