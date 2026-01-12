import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/LoadingSpinner";

const MyReviews = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    const [editReview, setEditReview] = useState(null);
    const [rating, setRating] = useState(5);
    const [comment, setComment] = useState("");

    // ================= FETCH MY REVIEWS =================
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const appsRes = await axiosSecure.get("/applications/me");
                const applications = appsRes.data;

                let myReviews = [];

                for (const app of applications) {
                    const res = await axiosSecure.get(
                        `/reviews/${app.scholarshipId}`
                    );

                    const filtered = res.data.filter(
                        r => r.userEmail === user.email
                    );

                    myReviews = [...myReviews, ...filtered];
                }

                setReviews(myReviews);
            } catch {
                toast.error("Failed to load reviews");
            } finally {
                setLoading(false);
            }
        };

        fetchReviews();
    }, [axiosSecure, user.email]);

    if (loading) return <LoadingSpinner />;

    // ================= DELETE =================
    const handleDelete = async (id) => {
        try {
            await axiosSecure.delete(`/reviews/${id}`);
            toast.success("Review deleted");
            setReviews(prev => prev.filter(r => r._id !== id));
        } catch {
            toast.error("Failed to delete review");
        }
    };

    // ================= UPDATE =================
    const updateReview = async () => {
        try {
            await axiosSecure.patch(`/reviews/${editReview._id}`, {
                ratingPoint: rating,
                reviewComment: comment,
            });

            toast.success("Review updated");

            setReviews(prev =>
                prev.map(r =>
                    r._id === editReview._id
                        ? {
                              ...r,
                              ratingPoint: rating,
                              reviewComment: comment,
                          }
                        : r
                )
            );

            setEditReview(null);
        } catch {
            toast.error("Failed to update review");
        }
    };

    return (
        <div className="mt-8">
            <h2 className="text-3xl font-bold mb-6">My Reviews</h2>

            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block bg-base-300 rounded-xl shadow overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>University</th>
                            <th>Review</th>
                            <th>Date</th>
                            <th>Rating</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map(review => (
                            <tr key={review._id}>
                                <td>{review.universityName}</td>
                                <td>{review.reviewComment}</td>
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
                                <td className="space-y-1 w-32">
                                    <button
                                        className="btn btn-xs btn-info w-full"
                                        onClick={() => {
                                            setEditReview(review);
                                            setRating(review.ratingPoint);
                                            setComment(review.reviewComment);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-xs btn-error w-full"
                                        onClick={() => handleDelete(review._id)}
                                    >
                                        Delete
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
                        className="bg-base-300 p-4 rounded-xl shadow space-y-2"
                    >
                        <h3 className="font-bold text-lg">
                            {review.universityName}
                        </h3>

                        <p className="text-sm text-base-content/70">
                            {new Date(review.reviewDate).toLocaleDateString()}
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

                        <p className="text-sm">{review.reviewComment}</p>

                        {/* ACTIONS */}
                        <div className="grid grid-cols-2 gap-2 pt-2">
                            <button
                                className="btn btn-sm btn-info"
                                onClick={() => {
                                    setEditReview(review);
                                    setRating(review.ratingPoint);
                                    setComment(review.reviewComment);
                                }}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-sm btn-error"
                                onClick={() => handleDelete(review._id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= EDIT MODAL ================= */}
            {editReview && (
                <dialog open className="modal modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-3">Edit Review</h3>

                        <div className="flex gap-2 mb-3">
                            {[1,2,3,4,5].map(n => (
                                <FaStar
                                    key={n}
                                    size={26}
                                    className={`cursor-pointer ${
                                        n <= rating
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                    }`}
                                    onClick={() => setRating(n)}
                                />
                            ))}
                        </div>

                        <textarea
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            value={comment}
                            onChange={e => setComment(e.target.value)}
                        />

                        <div className="modal-action grid grid-cols-2 gap-2">
                            <button
                                className="btn btn-primary"
                                onClick={updateReview}
                            >
                                Update
                            </button>
                            <button
                                className="btn border border-base-300 dark:border-white/60"
                                onClick={() => setEditReview(null)}
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

export default MyReviews;
