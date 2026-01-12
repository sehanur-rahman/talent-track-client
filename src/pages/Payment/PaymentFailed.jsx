import { useLocation, Link } from "react-router-dom";
import { FaTimesCircle } from "react-icons/fa";

const PaymentFailed = () => {
    const { state } = useLocation();
    const { scholarshipName, error } = state || {};

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="bg-base-200 rounded-2xl shadow-xl p-8 text-center max-w-md w-full">
                <FaTimesCircle className="text-red-500 text-6xl mx-auto mb-4" />

                <h2 className="text-3xl font-bold mb-2">
                    Payment Failed
                </h2>

                <p className="font-semibold mt-2">
                    {scholarshipName}
                </p>

                {error && (
                    <p className="text-red-500 text-sm mt-3">
                        {error}
                    </p>
                )}

                <Link
                    to="/dashboard/my-applications"
                    className="btn btn-outline btn-error mt-6 w-full"
                >
                    Return to Dashboard
                </Link>
            </div>
        </div>
    );
};

export default PaymentFailed;
