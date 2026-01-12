const AboutUs = () => {
    return (
        <section className="py-20">
            <div className="max-w-5xl mx-auto px-4">

                <h1 className="text-4xl font-bold text-center mb-6">
                    About ScholarStream
                </h1>

                <p className="text-center text-base-content/70 max-w-3xl mx-auto mb-12">
                    ScholarStream is a modern scholarship management platform
                    designed to help students discover, apply, and track
                    international scholarship opportunities with ease.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-base-100 p-6 rounded-xl shadow border">
                        <h3 className="font-semibold text-lg mb-2">
                            Our Mission
                        </h3>
                        <p className="text-sm text-base-content/70">
                            To simplify the scholarship application process
                            and make global education accessible to everyone.
                        </p>
                    </div>

                    <div className="bg-base-100 p-6 rounded-xl shadow border">
                        <h3 className="font-semibold text-lg mb-2">
                            Our Vision
                        </h3>
                        <p className="text-sm text-base-content/70">
                            Empower students worldwide by connecting them
                            with verified and transparent funding opportunities.
                        </p>
                    </div>

                    <div className="bg-base-100 p-6 rounded-xl shadow border">
                        <h3 className="font-semibold text-lg mb-2">
                            Why Trust Us
                        </h3>
                        <p className="text-sm text-base-content/70">
                            We verify scholarships, protect user data, and
                            maintain transparency throughout the application process.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
