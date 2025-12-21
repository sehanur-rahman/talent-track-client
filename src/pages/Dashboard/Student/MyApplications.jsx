import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/LoadingSpinner";

const MyApplications = () => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { user } = useAuth();

    const [applications, setApplications] = useState([]);
    const [detailsApp, setDetailsApp] = useState(null);
    const [reviewApp, setReviewApp] = useState(null);
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");
    const [loading, setLoading] = useState(true);

    // ================= FETCH =================
    useEffect(() => {
        axiosSecure
            .get("/applications/me")
            .then(res => setApplications(res.data))
            .finally(() => setLoading(false));
    }, [axiosSecure]);

    if (loading) return <LoadingSpinner />;

    // ================= DELETE =================
    const handleDelete = async (id) => {
        try {
            await axiosSecure.delete(`/applications/${id}`);
            toast.success("Application deleted");

            setApplications(prev =>
                prev.filter(app => app._id !== id)
            );
        } catch {
            toast.error("Failed to delete application");
        }
    };

    // ================= SUBMIT REVIEW =================
    const submitReview = async () => {
        try {
            await axiosSecure.post("/reviews", {
                scholarshipId: reviewApp.scholarshipId,
                universityName: reviewApp.universityName,
                userName: user.displayName,
                userEmail: user.email,
                userImage: user.photoURL,
                ratingPoint: rating,
                reviewComment: comment,
            });

            toast.success("Review submitted");
            setReviewApp(null);
            setRating(5);
            setComment("");
        } catch {
            toast.error("Failed to submit review");
        }
    };

    // ================= ACTIONS =================
    const renderActions = (app) => (
        <div className="space-y-1">
            <button
                className="btn btn-xs w-full"
                onClick={() => setDetailsApp(app)}
            >
                Details
            </button>

            <button className="btn btn-xs btn-warning w-full">
                Edit
            </button>

            {/* PAY BUTTON FIX */}
            {app.applicationStatus === "pending" &&
                app.paymentStatus === "unpaid" && (
                    <button
                        className="btn btn-xs btn-primary w-full"
                        onClick={() =>
                            navigate("/checkout", {
                                state: {
                                    isRetry: true,
                                    applicationId: app._id,
                                    scholarshipId: app.scholarshipId,
                                    universityName: app.universityName,
                                    scholarshipCategory: app.scholarshipCategory,
                                    degree: app.degree,
                                    applicationFees: app.applicationFees,
                                    serviceCharge: app.serviceCharge,
                                },
                            })
                        }
                    >
                        Pay
                    </button>
                )}

            {app.applicationStatus === "pending" && (
                <button
                    className="btn btn-xs btn-error w-full"
                    onClick={() => handleDelete(app._id)}
                >
                    Delete
                </button>
            )}

            {app.applicationStatus === "completed" && (
                <button
                    className="btn btn-xs btn-success w-full"
                    onClick={() => setReviewApp(app)}
                >
                    Add Review
                </button>
            )}
        </div>
    );

    return (
        <div className="mt-8">
            <h2 className="text-3xl font-bold mb-6">My Applications</h2>

            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>University</th>
                            <th>Scholarship Category</th>
                            <th>Fees</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Feedback</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {applications.map(app => (
                            <tr key={app._id}>
                                <td>{app.universityName}</td>
                                <td>{app.scholarshipCategory}</td>
                                <td>${app.applicationFees}</td>

                                <td>
                                    <span className="badge badge-outline">
                                        {app.applicationStatus}
                                    </span>
                                </td>

                                <td>
                                    <span
                                        className={`badge ${
                                            app.paymentStatus === "paid"
                                                ? "badge-success"
                                                : "badge-error"
                                        }`}
                                    >
                                        {app.paymentStatus}
                                    </span>
                                </td>

                                <td>{app.feedback || "—"}</td>

                                <td className="w-52">
                                    {renderActions(app)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ================= MOBILE CARD VIEW ================= */}
            <div className="md:hidden space-y-4">
                {applications.map(app => (
                    <div
                        key={app._id}
                        className="bg-white p-4 rounded-xl shadow space-y-2"
                    >
                        <h3 className="font-bold">{app.universityName}</h3>
                        <p>{app.scholarshipCategory}</p>

                        <div className="flex gap-2">
                            <span className="badge badge-outline">
                                {app.applicationStatus}
                            </span>
                            <span
                                className={`badge ${
                                    app.paymentStatus === "paid"
                                        ? "badge-success"
                                        : "badge-error"
                                }`}
                            >
                                {app.paymentStatus}
                            </span>
                        </div>

                        <p><b>Fee:</b> ${app.applicationFees}</p>
                        <p><b>Feedback:</b> {app.feedback || "—"}</p>

                        {renderActions(app)}
                    </div>
                ))}
            </div>

            {/* ================= DETAILS MODAL ================= */}
            {detailsApp && (
                <dialog open className="modal modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-3">
                            Application Details
                        </h3>

                        <p><b>Name:</b> {detailsApp.userName}</p>
                        <p><b>Email:</b> {detailsApp.userEmail}</p>
                        <p><b>University:</b> {detailsApp.universityName}</p>
                        <p><b>Category:</b> {detailsApp.scholarshipCategory}</p>
                        <p><b>Degree:</b> {detailsApp.degree}</p>
                        <p><b>Application Fee:</b> ${detailsApp.applicationFees}</p>
                        <p><b>Service Charge:</b> ${detailsApp.serviceCharge}</p>
                        <p><b>Status:</b> {detailsApp.applicationStatus}</p>
                        <p><b>Payment:</b> {detailsApp.paymentStatus}</p>
                        <p><b>Date:</b> {new Date(detailsApp.applicationDate).toLocaleDateString()}</p>

                        <div className="modal-action justify-end">
                            <button
                                className="btn btn-sm"
                                onClick={() => setDetailsApp(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </dialog>
            )}

            {/* ================= REVIEW MODAL ================= */}
            {reviewApp && (
                <dialog open className="modal modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-3">
                            Add Review
                        </h3>

                        <div className="flex gap-2 mb-3">
                            {[1, 2, 3, 4, 5].map(num => (
                                <FaStar
                                    key={num}
                                    size={26}
                                    className={`cursor-pointer ${
                                        num <= rating
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                    }`}
                                    onClick={() => setRating(num)}
                                />
                            ))}
                        </div>

                        <textarea
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            placeholder="Write your review..."
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        />

                        <div className="modal-action grid grid-cols-2 gap-2">
                            <button
                                className="btn btn-primary"
                                onClick={submitReview}
                            >
                                Submit
                            </button>
                            <button
                                className="btn"
                                onClick={() => setReviewApp(null)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default MyApplications;
