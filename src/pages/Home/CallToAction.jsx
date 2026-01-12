import { Link } from "react-router-dom";

const CallToAction = () => {
    return (
        <section className="py-20 bg-primary text-center ">
            <h2 className="text-3xl font-bold text-black">
                Start Your Scholarship Journey Today
            </h2>
            <p className="mt-3 text-black/80">
                Explore verified scholarships and apply before deadlines close.
            </p>

            <div className="mt-6 flex justify-center gap-4">
                <Link to="/scholarships" className="btn btn-outline">
                    Browse Scholarships
                </Link>
                <Link to="/register" className="btn btn-neutral">
                    Create Account
                </Link>
            </div>
        </section>
    );
};

export default CallToAction;
