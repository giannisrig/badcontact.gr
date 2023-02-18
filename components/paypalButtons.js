import React, { useState } from 'react';
import fonts from '@/helpers/fonts'
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import {useRouter} from "next/router";
import styles from '@/styles/components/PaypalButtons.module.scss'

const PaypalButtons = () => {

    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const {push} = useRouter();
    const [amount, setAmount] = useState('' );
    const [timer, setTimer] = useState(null );
    const defaultAmounts = [1, 2, 5, 10];

    function reloadPaypal(){
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
            },
        });
    }

    const onAmountChange = ({ target: { value } }) => {
        setAmount(parseFloat(value));

        if( timer ){
            clearTimeout(timer);
        }

        const newTimer = setTimeout(()=>{
            reloadPaypal();
        }, 1000 )

        setTimer(newTimer);

    }

    const onAmountClicked = (value) => {
        setAmount(parseFloat(value))
        reloadPaypal();
    }

    const onCreateOrder = (data,actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amount,
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {
            push("/donate/thank-you").then()
        });
    }

    return (
        <>
            {isPending ?
                (
                <div className={` ${fonts.grava400.className} ${styles.container} ${styles.placeholderContainer}`}>
                    <h3 className={`${fonts.voltec.className} ${styles.title}`}>
                        DONATION AMOUNT
                    </h3>
                    <p className={styles.text}>
                        Enter any amount you want, every single penny means a lot to us.
                    </p>
                    <div className={styles.inputField}>
                        <span className={styles.euroSign}>€</span>
                        <div className={styles.inputPlaceholder} />
                    </div>
                    <div className={styles.defaultAmountsContainer}>
                        {defaultAmounts.map((buttonAmount) => (
                            <button
                                className={styles.defaultAmount}
                                key={buttonAmount}
                            >
                                €{buttonAmount}
                            </button>
                        ))}
                    </div>
                    <div className={styles.buttons}>
                        <div className={styles.paypalPlaceholder} />
                    </div>
                </div>
                )
                : (
                <div className={` ${fonts.grava400.className} ${styles.container}`}>
                    <h3 className={`${fonts.voltec.className} ${styles.title}`}>
                        DONATION AMOUNT
                    </h3>
                    <p className={styles.text}>
                        Enter any amount you want, every single penny means a lot to us.
                    </p>
                    <div className={styles.inputField}>
                        <span className={styles.euroSign}>€</span>
                        <input
                            type="number"
                            className={styles.input}
                            placeholder="1"
                            value={amount}
                            step="0.1"
                            min={0}
                            onChange={onAmountChange}
                        />
                    </div>
                    <div className={styles.defaultAmountsContainer}>
                        {defaultAmounts.map((buttonAmount) => (
                            <button
                                className={styles.defaultAmount}
                                onClick={() => onAmountClicked(buttonAmount)}
                                key={buttonAmount}
                            >
                                €{buttonAmount}
                            </button>
                        ))}
                    </div>
                    <div className={styles.buttons}>
                        <PayPalButtons
                            style={{ layout: "horizontal", color: 'white', tagline:false, shape: "pill" }}
                            createOrder={(data, actions) => onCreateOrder(data, actions)}
                            onApprove={(data, actions) => onApproveOrder(data, actions)}
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default PaypalButtons;
