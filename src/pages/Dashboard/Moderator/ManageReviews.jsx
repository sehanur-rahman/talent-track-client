import { useEffect, useState } from "react";
import { FaStar, FaTrash } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import LoadingSpinner from "../../../components/LoadingSpinner";

const ManageReviews = () => {
    const axiosSecure = useAxiosSecure();

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteReview, setDeleteReview] = useState(null);

    // ================= FETCH ALL REVIEWS =================
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const res = await axiosSecure.get("/reviews/admin/all");
                setReviews(res.data);
            } catch {
                toast.error("Failed to load reviews");
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [axiosSecure]);

    if (loading) return <LoadingSpinner />;

    // ================= DELETE CONFIRM =================
    const confirmDelete = async () => {
        try {
            await axiosSecure.delete(
                `/reviews/moderator/${deleteReview._id}`
            );

            toast.success("Review deleted");

            setReviews(prev =>
                prev.filter(r => r._id !== deleteReview._id)
            );

            setDeleteReview(null);
        } catch {
            toast.error("Failed to delete review");
        }
    };

    return (
        <div className="mt-8">
            <h2 className="text-3xl font-bold mb-6">Manage Reviews</h2>

            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>User</th>
                            <th>University</th>
                            <th>Review</th>
                            <th>Date</th>
                            <th>Rating</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map(review => (
                            <tr key={review._id}>
                                <td>{review.userName}</td>
                                <td>{review.universityName}</td>
                                <td className="max-w-xs whitespace-normal wrap-break-word">
                                    {review.reviewComment}
                                </td>
                                <td>
                                    {new Date(review.reviewDate).toLocaleDateString()}
                                </td>
                                <td className="flex gap-1">
                                    {[1,2,3,4,5].map(n => (
                                        <FaStar
                                            key={n}
                                            className={
                                                n <= review.ratingPoint
                                                    ? "text-yellow-400"
                                                    : "text-gray-300"
                                            }
                                        />
                                    ))}
                                </td>
                                <td className="text-center">
                                    <button
                                        className="btn btn-xs btn-error"
                                        onClick={() => setDeleteReview(review)}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ================= MOBILE CARD VIEW ================= */}
            <div className="md:hidden space-y-4">
                {reviews.map(review => (
                    <div
                        key={review._id}
                        className="bg-white p-4 rounded-xl shadow space-y-2"
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold">
                                {review.universityName}
                            </h3>
                            <button
                                className="btn btn-sm btn-error"
                                onClick={() => setDeleteReview(review)}
                            >
                                <FaTrash />
                            </button>
                        </div>

                        <p className="text-sm text-gray-600">
                            By {review.userName}
                        </p>

                        <div className="flex gap-1">
                            {[1,2,3,4,5].map(n => (
                                <FaStar
                                    key={n}
                                    className={
                                        n <= review.ratingPoint
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                    }
                                />
                            ))}
                        </div>

                        <p className="text-sm whitespace-normal wrap-break-word">
                            {review.reviewComment}
                        </p>

                        <p className="text-xs text-gray-500">
                            {new Date(review.reviewDate).toLocaleDateString()}
                        </p>
                    </div>
                ))}
            </div>

            {/* ================= DELETE CONFIRM MODAL ================= */}
            {deleteReview && (
                <dialog open className="modal modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg text-red-600 mb-3">
                            Delete Review?
                        </h3>

                        <p className="mb-4">
                            Are you sure you want to permanently delete this
                            review? This action cannot be undone.
                        </p>

                        <div className="modal-action grid grid-cols-2 gap-2">
                            <button
                                className="btn btn-error"
                                onClick={confirmDelete}
                            >
                                Yes, Delete
                            </button>
                            <button
                                className="btn"
                                onClick={() => setDeleteReview(null)}
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

export default ManageReviews;
