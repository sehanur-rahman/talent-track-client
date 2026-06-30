import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
    return (
        <section className="py-12 bg-linear-to-r from-primary to-secondary text-white">
            <div className="max-w-5xl mx-auto px-4 text-center">

                <span className="uppercase tracking-widest text-sm font-semibold opacity-90">
                    Join The Future Of Sports
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mt-4">
                    Take Your First Step Toward
                    <span className="text-primary-content"> Professional Sports</span>
                </h2>

                <p className="mt-6 max-w-2xl mx-auto text-lg text-white/80">
                    Explore football and cricket talent hunt programs, connect
                    with leading academies, and showcase your skills to
                    experienced talent evaluators.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

                    <Link to="/scholarships" className="btn btn-outline"> Browse Talent Hunts <FaArrowRight /> </Link> 
                    <Link to="/register" className="btn btn-neutral"> Become a Player </Link>

                </div>

            </div>
        </section>
    );
};

export default CallToAction;