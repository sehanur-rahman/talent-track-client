import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaGlobeAsia, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/LoadingSpinner";

const ScholarshipDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const [scholarship, setScholarship] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [applied, setApplied] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                // Load scholarship + reviews
                const [scholarRes, reviewRes] = await Promise.all([
                    axiosSecure.get(`/scholarships/${id}`),
                    axiosSecure.get(`/reviews/${id}`),
                ]);

                setScholarship(scholarRes.data);
                setReviews(reviewRes.data || []);

                // Check already applied (only if logged in)
                if (user) {
                    const res = await axiosSecure.get(
                        `/applications/check/${id}`
                    );
                    setApplied(res.data.applied);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, [axiosSecure, id, user]);

    if (loading) return <LoadingSpinner />;

    if (!scholarship) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold">Scholarship Not Found</h2>
            </div>
        );
    }

    const totalFee =
        Number(scholarship.applicationFees || 0) +
        Number(scholarship.serviceCharge || 0);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">

            {/* ================= TOP SECTION ================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* IMAGE */}
                <img
                    src={scholarship.universityImage}
                    alt={scholarship.universityName}
                    className="w-full h-80 object-cover rounded-xl shadow"
                />

                {/* DETAILS */}
                <div className="space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        {scholarship.scholarshipName}
                    </h1>

                    <p className="text-lg text-gray-700">
                        {scholarship.universityName}
                    </p>

                    <p className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt className="text-primary" />
                        {scholarship.universityCity},{" "}
                        {scholarship.universityCountry}
                    </p>

                    <p className="flex items-center gap-2 text-gray-600">
                        <FaGlobeAsia className="text-primary" />
                        World Rank:
                        <span className="font-semibold ml-1">
                            {scholarship.universityWorldRank}
                        </span>
                    </p>

                    <div className="flex gap-3">
                        <span className="badge badge-primary">
                            {scholarship.scholarshipCategory}
                        </span>
                        <span className="badge badge-secondary">
                            {scholarship.degree}
                        </span>
                    </div>

                    <p className="text-red-600 font-semibold">
                        Deadline: {scholarship.applicationDeadline}
                    </p>

                    {/* FEES */}
                    <div className="bg-base-200 p-4 rounded-xl space-y-1">
                        <p>Application Fee: ${scholarship.applicationFees}</p>
                        <p>Service Charge: ${scholarship.serviceCharge}</p>
                        <p className="font-bold">
                            Total: ${totalFee}
                        </p>
                    </div>

                    {/* APPLY BUTTON */}
                    <button
                        disabled={applied}
                        onClick={() =>
                            navigate("/checkout", {
                                state: {
                                    scholarshipId: scholarship._id,
                                    scholarshipName: scholarship.scholarshipName,
                                    universityName: scholarship.universityName,
                                    scholarshipCategory: scholarship.scholarshipCategory,
                                    degree: scholarship.degree,
                                    applicationFees: scholarship.applicationFees,
                                    serviceCharge: scholarship.serviceCharge,
                                },
                            })
                        }
                        className={`btn btn-primary btn-lg w-full ${applied ? "btn-disabled cursor-not-allowed" : ""
                            }`}
                    >
                        {applied ? "Already Applied" : "Apply for Scholarship"}
                    </button>

                    {applied && (
                        <p className="text-sm text-gray-500 text-center">
                            You have already applied for this scholarship.
                        </p>
                    )}
                </div>
            </div>

            {/* ================= REVIEWS ================= */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold">Student Reviews</h2>

                {reviews.length === 0 && (
                    <p className="text-gray-500">
                        No reviews yet. Reviews will appear after students
                        complete their applications.
                    </p>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                    {reviews.map((review) => (
                        <div
                            key={review._id}
                            className="p-5 bg-white rounded-xl shadow border"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={review.userImage}
                                    alt={review.userName}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-semibold">
                                        {review.userName}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {new Date(
                                            review.reviewDate
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            <p className="mt-3 flex items-center gap-1 font-bold text-yellow-600">
                                <FaStar />
                                {review.ratingPoint} / 5
                            </p>

                            <p className="mt-2 text-gray-700">
                                {review.reviewComment}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ScholarshipDetails;
