import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TalentHuntCard from "../../components/TalentHuntCard";
import { Link } from "react-router-dom";

const FeaturedTalentHunts = () => {

    const axiosSecure = useAxiosSecure();

    const [talentHunts, setTalentHunts] = useState([]);

    useEffect(() => {

        axiosSecure
            .get("/talent-hunts?limit=6")
            .then(res => {
                setTalentHunts(res.data.data);
            })
            .catch(err => console.log(err));

    }, [axiosSecure]);

    return (

        <section className="py-16">

            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold">
                    Featured Talent Hunts
                </h2>

                <p className="mt-2 text-base-content/70">
                    Explore the latest Cricket and Football talent hunt programs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {talentHunts.map(item => (
                    <TalentHuntCard
                        key={item._id}
                        item={item}
                    />
                ))}
            </div>

            {/* See More */}
            <div className="text-center mt-10">
                <Link
                    to="/talent-hunts"
                    className="btn btn-outline btn-primary"
                >
                    See All Talent Hunts
                </Link>
            </div>

        </section>

    );
};

export default FeaturedTalentHunts;