import { PayPalScriptProvider} from "@paypal/react-paypal-js";
import PaypalButtons from "@/components/paypalButtons";

export default function PaypalDonate() {

    // const paypalClientID = process.env.PAYPAL_CLIENT_ID;
    const paypalClientID = "AeJmVdC2qsBztJZD1Afc1x0YQKgzDLwpmMqVhd7m5HFejmxqNwmHK6qdmvudVOKwHG3Zt3y40g4LjqnQ";

    return(
        <PayPalScriptProvider options={{
            "client-id": paypalClientID,
            "currency": "EUR",
            "intent": "capture",
        }}>
            <PaypalButtons/>
        </PayPalScriptProvider>
    );

}
