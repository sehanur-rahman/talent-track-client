// src/stripe/StripeWrapper.jsx

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// 🔐 Stripe publishable key (env থেকে)
const stripePromise = loadStripe(
    import.meta.env.VITE_STRIPE_PUBLIC_KEY
);

const StripeWrapper = ({ children }) => {
    return (
        <Elements stripe={stripePromise}>
            {children}
        </Elements>
    );
};

export default StripeWrapper;
