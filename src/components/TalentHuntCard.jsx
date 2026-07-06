import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaFutbol } from "react-icons/fa";

const TalentHuntCard = ({ item }) => {
    if (!item) return null;

    return (
        <div className="card bg-base-100 shadow-md border rounded-xl overflow-hidden flex flex-col">

            <figure className="h-52">
                <img
                    src={item.academyLogo}
                    alt={item.academyName}
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="card-body">

                <h2 className="card-title line-clamp-1">
                    {item.programTitle}
                </h2>

                <p className="font-semibold text-primary">
                    {item.academyName}
                </p>

                <p className="flex items-center gap-2 text-sm">
                    <FaMapMarkerAlt />
                    {item.academyCity}, {item.academyCountry}
                </p>

                <div className="flex justify-between mt-2">

                    <span className="badge badge-success">
                        {item.sportCategory}
                    </span>

                    <span className="badge badge-secondary">
                        {item.programCategory}
                    </span>

                </div>

                <div className="mt-3">

                    <p>
                        Registration Fee :
                        <span className="font-bold text-primary">
                            ${item.registrationFee}
                        </span>
                    </p>

                    <p className="text-red-500">
                        Deadline :
                        {item.applicationDeadline}
                    </p>

                </div>

                <div className="mt-5">

                    <Link
                        to={`/talent-hunts/${item._id}`}
                        className="btn btn-primary w-full"
                    >
                        View Details
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default TalentHuntCard;