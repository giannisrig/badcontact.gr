import { PayPalScriptProvider} from "@paypal/react-paypal-js";
import PaypalButtons from "@/components/paypalButtons";

export default function PaypalDonate() {

    return(
        <PayPalScriptProvider options={{
            "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
            "currency": "EUR",
            "intent": "capture",
        }}>
            <PaypalButtons/>
        </PayPalScriptProvider>
    );

}
