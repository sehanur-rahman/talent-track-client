import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ScholarshipCard from "../../components/ScholarshipCard";
import LoadingSpinner from "../../components/LoadingSpinner";

const AllScholarships = () => {
    const axiosSecure = useAxiosSecure();

    const [scholarships, setScholarships] = useState([]);
    const [loading, setLoading] = useState(true);

    const [totalPages, setTotalPages] = useState(1);
    const [page, setPage] = useState(1);

    const [search, setSearch] = useState("");
    const [country, setCountry] = useState("");
    const [category, setCategory] = useState("");
    const [degree, setDegree] = useState("");
    const [subject, setSubject] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        let isMounted = true;

        axiosSecure
            .get("/scholarships", {
                params: {
                    search,
                    country,
                    category,
                    subject,
                    degree,
                    sort,
                    page,
                    limit: 6,
                },
            })
            .then((res) => {
                if (isMounted) {
                    setScholarships(res.data.data || []);
                    setTotalPages(res.data.totalPages || 1);
                }
            })
            .catch(console.error)
            .finally(() => {
                if (isMounted) setLoading(false);
            });

        return () => {
            isMounted = false;
        };
    }, [axiosSecure, search, country, category, subject, degree, sort, page]);

    if (loading) return <LoadingSpinner />;

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">

            {/* ================= TITLE ================= */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold">
                    All Scholarships
                </h1>
                <p className="text-gray-600 mt-2">
                    Explore global scholarship opportunities and apply easily
                </p>
            </div>

            {/* ================= FILTERS ================= */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
                <input
                    className="input input-bordered"
                    placeholder="Search Scholarships..."
                    value={search}
                    onChange={(e) => {
                        setSearch(e.target.value);
                        setPage(1);
                        setLoading(true);
                    }}
                />

                <input
                    className="input input-bordered"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => {
                        setCountry(e.target.value);
                        setPage(1);
                        setLoading(true);
                    }}
                />

                <select
                    className="select select-bordered"
                    value={category}
                    onChange={(e) => {
                        setCategory(e.target.value);
                        setPage(1);
                        setLoading(true);
                    }}
                >
                    <option value="">All Categories</option>
                    <option value="Full Fund">Full Fund</option>
                    <option value="Partial">Partial</option>
                    <option value="Self Fund">Self Fund</option>
                </select>

                <select
                    className="select select-bordered"
                    value={subject}
                    onChange={(e) => {
                        setSubject(e.target.value);
                        setPage(1);
                        setLoading(true);
                    }}
                >
                    <option value="">All Subjects</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Business">Business</option>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Health">Health</option>
                    <option value="Arts">Arts</option>
                </select>

                <select
                    className="select select-bordered"
                    value={degree}
                    onChange={(e) => {
                        setDegree(e.target.value);
                        setPage(1);
                        setLoading(true);
                    }}
                >
                    <option value="">All Degrees</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Masters">Masters</option>
                </select>
            </div>

            {/* ================= SORT ================= */}
            <div className="mb-8">
                <select
                    className="select select-bordered w-full md:w-64"
                    value={sort}
                    onChange={(e) => {
                        setSort(e.target.value);
                        setPage(1);
                        setLoading(true);
                    }}
                >
                    <option value="">Sort By</option>
                    <option value="fees-asc">Fees (Low → High)</option>
                    <option value="fees-desc">Fees (High → Low)</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>

            {/* ================= CARDS ================= */}
            {scholarships.length === 0 ? (
                <p className="text-center text-gray-500">
                    No scholarships found.
                </p>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
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
            )}

            {/* ================= PAGINATION ================= */}
            <div className="flex justify-center gap-2 mt-10">
                {[...Array(totalPages).keys()].map((i) => (
                    <button
                        key={i}
                        onClick={() => {
                            setPage(i + 1);
                            setLoading(true);
                        }}
                        className={`btn btn-sm ${page === i + 1 ? "btn-primary" : "btn-outline"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AllScholarships;
