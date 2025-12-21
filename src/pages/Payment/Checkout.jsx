import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const cardStyle = {
    style: {
        base: {
            fontSize: "16px",
            color: "#32325d",
            "::placeholder": { color: "#a0aec0" },
        },
        invalid: { color: "#e53e3e" },
    },
};

const Checkout = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const {
        scholarshipId,
        applicationId,
        isRetry = false,
        universityName,
        scholarshipCategory,
        degree,
        applicationFees = 0,
        serviceCharge = 0,
    } = state || {};

    const totalAmount =
        Number(applicationFees) + Number(serviceCharge);

    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState("");

    // Protect direct access
    useEffect(() => {
        if (!scholarshipId) {
            navigate("/scholarships");
        }
    }, [scholarshipId, navigate]);

    // Create payment intent
    useEffect(() => {
        if (!scholarshipId) return;

        axiosSecure
            .post("/create-payment-intent", { scholarshipId })
            .then(res => setClientSecret(res.data.clientSecret))
            .catch(() =>
                setError("Failed to initialize payment. Please try again.")
            );
    }, [axiosSecure, scholarshipId]);

    // Handle payment
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements || !clientSecret) return;

        setProcessing(true);
        setError("");

        try {
            const { error, paymentIntent } =
                await stripe.confirmCardPayment(clientSecret, {
                    payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                            email: user.email,
                            name: user.displayName,
                        },
                    },
                });

            // PAYMENT FAILED
            if (error) {
                // First time fail -> create unpaid application
                if (!isRetry) {
                    await axiosSecure.post("/applications", {
                        scholarshipId,
                        universityName,
                        scholarshipCategory,
                        degree,
                        applicationFees,
                        serviceCharge,
                        paymentStatus: "unpaid",
                    });
                }

                navigate("/payment-failed", {
                    state: {
                        scholarshipName: universityName,
                        error: error.message || "Payment failed",
                    },
                });

                setProcessing(false);
                return;
            }

            // PAYMENT SUCCESS
            if (paymentIntent.status === "succeeded") {
                if (isRetry) {
                    await axiosSecure.patch(
                        `/applications/pay/${applicationId}`
                    );
                } else {
                    await axiosSecure.post("/applications", {
                        scholarshipId,
                        universityName,
                        scholarshipCategory,
                        degree,
                        applicationFees,
                        serviceCharge,
                        paymentStatus: "paid",
                    });
                }

                navigate("/payment-success", {
                    state: {
                        scholarshipName: universityName,
                        amount: totalAmount,
                    },
                });
            }
        } catch {
            setError("Something went wrong. Please try again.");
        } finally {
            setProcessing(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FEF9E7] px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center mb-6">
                    {isRetry ? "Retry Payment" : "Checkout"}
                </h2>

                {/* SUMMARY */}
                <div className="text-center mb-6">
                    <p className="font-semibold text-lg">
                        {universityName}
                    </p>
                    <p className="font-bold mt-2">
                        Amount: ${totalAmount}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="border rounded-lg p-4">
                        <CardElement options={cardStyle} />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={!stripe || !clientSecret || processing}
                        className="btn btn-primary w-full text-lg"
                    >
                        {processing ? "Processing..." : "Pay Now"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
