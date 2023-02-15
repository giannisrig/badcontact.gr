import React, { useState } from 'react';
import fonts from '@/helpers/fonts'
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import {useRouter} from "next/router";
import styles from '@/styles/components/PaypalButtons.module.scss'

const PaypalButtons = () => {

    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const {push} = useRouter();
    const [amount, setAmount] = useState(1);
    const defaultAmounts = [1, 5, 10, 20];

    function reloadPaypal(){
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
            },
        });
    }

    const onAmountChange = ({ target: { value } }) => {
        setAmount(parseInt(value));
        reloadPaypal();
    }

    const onAmountClicked = (value) => {
        setAmount(parseInt(value))
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
            {isPending ? <p>LOADING...</p> : (
                <div className={` ${fonts.grava400.className} ${styles.container}`}>
                    <input
                        type="number"
                        className={styles.input}
                        placeholder="Enter Amount"
                        value={amount ? amount : 1}
                        onChange={onAmountChange}
                    />
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
