// src/components/ScholarshipCard.jsx
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const ScholarshipCard = ({ item }) => {
    if (!item) return null;

    return (
        <div className="card bg-base-100 shadow-md border rounded-xl overflow-hidden flex flex-col h-full">

            {/* ================= IMAGE ================= */}
            <figure className="h-48">
                <img
                    src={item.universityImage}
                    alt={item.universityName}
                    className="h-full w-full object-cover"
                />
            </figure>

            {/* ================= BODY ================= */}
            <div className="card-body flex flex-col grow space-y-2">

                {/* UNIVERSITY NAME */}
                <h3 className="text-lg font-bold line-clamp-1">
                    {item.universityName}
                </h3>

                {/* SCHOLARSHIP CATEGORY */}
                <span className="badge badge-primary w-fit">
                    {item.scholarshipCategory}
                </span>

                {/* LOCATION */}
                <p className="text-sm text-gray-600 flex items-center gap-1">
                    <FaMapMarkerAlt className="text-primary" />
                    {item.universityCity}, {item.universityCountry}
                </p>

                {/* APPLICATION FEES */}
                {item.applicationFees > 0 ? (
                    <p className="font-semibold text-gray-800">
                        Application Fees:{" "}
                        <span className="text-primary">
                            ${item.applicationFees}
                        </span>
                    </p>
                ) : (
                    <p className="font-semibold text-green-600">
                        No Application Fee
                    </p>
                )}

                {/* BUTTON AT BOTTOM */}
                <div className="mt-auto">
                    <Link
                        to={`/scholarships/${item._id}`}
                        className="btn btn-primary btn-sm w-full"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipCard;
