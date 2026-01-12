// src/pages/Home/TopScholarships.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/LoadingSpinner";
import ScholarshipCard from "../../components/ScholarshipCard";

const TopScholarships = () => {
    const axiosSecure = useAxiosSecure();
    const [scholarships, setScholarships] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure
            .get("/scholarships", {
                params: {
                    sort: "fees-asc",
                    limit: 8,
                },
            })
            .then((res) => {
                setScholarships(res.data.data || []);
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [axiosSecure]);

    if (loading) return <LoadingSpinner />;

    return (
        <section className="mt-12 max-w-6xl mx-auto px-4">

            {/* ================= TITLE ================= */}
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-center mb-10"
            >
                Top Scholarships
            </motion.h2>

            {/* ================= CARDS ================= */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                {scholarships.map((item, index) => (
                    <motion.div
                        key={item._id}
                        className="h-full"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        <ScholarshipCard item={item} />
                    </motion.div>
                ))}
            </div>

            {/* ================= SEE MORE ================= */}
            <div className="text-center mt-10">
                <Link
                    to="/scholarships"
                    className="btn btn-outline btn-primary"
                >
                    See More Scholarships
                </Link>
            </div>
        </section>
    );
};

export default TopScholarships;
