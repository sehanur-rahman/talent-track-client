import { useLocation, Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const PaymentSuccess = () => {
    const { state } = useLocation();
    const { scholarshipName, amount } = state || {};

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-base-200 rounded-2xl shadow-2xl p-8 text-center max-w-md w-full">
                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />

                <h2 className="text-3xl font-bold mb-2">
                    Payment Successful
                </h2>

                <p className="font-semibold mt-2">
                    {scholarshipName}
                </p>

                <p className="text-lg font-bold mt-3">
                    Amount Paid: ${amount}
                </p>

                <Link
                    to="/dashboard/my-applications"
                    className="btn btn-primary mt-6 w-full"
                >
                    Go to My Applications
                </Link>
            </div>
        </div>
    );
};

export default PaymentSuccess;
