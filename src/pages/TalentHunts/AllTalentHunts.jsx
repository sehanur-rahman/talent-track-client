import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import TalentHuntCard from "../../components/TalentHuntCard";

const AllTalentHunts = () => {

    const axiosSecure = useAxiosSecure();

    const [hunts, setHunts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");
    const [sport, setSport] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {

        axiosSecure
            .get("/talent-hunts", {
                params: {
                    search,
                    subject: sport,
                    sort,
                    page,
                    limit: 10,
                },
            })
            .then((res) => {

                setHunts(res.data.data);

                setTotalPages(res.data.totalPages);

            });

    }, [axiosSecure, page, search, sport, sort]);

    return (

        <div className="max-w-7xl mx-auto py-12">

            <div className="text-center mb-10">

                <h1 className="text-4xl font-bold">

                    All Talent Hunts

                </h1>

                <p className="mt-3 text-base-content/70">

                    Browse all available Cricket and Football Talent Hunt Programs.

                </p>
                <div className="my-8 flex justify-center">

                    <input
                        type="text"
                        placeholder="Search Talent Hunt or Academy..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setPage(1);
                        }}
                        className="input input-bordered w-full max-w-xl"
                    />

                </div>
                <div className="flex flex-wrap justify-center gap-4 mb-8">

                    {/* Sport Filter */}
                    <select
                        className="select select-bordered"
                        value={sport}
                        onChange={(e) => {
                            setSport(e.target.value);
                            setPage(1);
                        }}
                    >
                        <option value="">All Sports</option>
                        <option value="Cricket">Cricket</option>
                        <option value="Football">Football</option>
                    </select>

                    {/* Sort */}
                    <select
                        className="select select-bordered"
                        value={sort}
                        onChange={(e) => {
                            setSort(e.target.value);
                            setPage(1);
                        }}
                    >
                        <option value="">Sort By</option>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="fee-asc">Lowest Registration Fee</option>
                        <option value="fee-desc">Highest Registration Fee</option>
                    </select>

                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {

                    hunts.map(item => (

                        <TalentHuntCard
                            key={item._id}
                            item={item}
                        />

                    ))

                }

            </div>
            {/* Pagination */}
            <div className="flex justify-center gap-3 mt-10">

                <button
                    className="btn"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </button>

                {
                    [...Array(totalPages).keys()].map((number) => (
                        <button
                            key={number}
                            onClick={() => setPage(number + 1)}
                            className={`btn ${page === number + 1
                                ? "btn-primary"
                                : "btn-outline"
                                }`}
                        >
                            {number + 1}
                        </button>
                    ))
                }

                <button
                    className="btn"
                    disabled={page === totalPages}
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>

            </div>

        </div>

    );

};

export default AllTalentHunts;