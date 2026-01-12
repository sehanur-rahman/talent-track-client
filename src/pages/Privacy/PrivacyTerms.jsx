const PrivacyTerms = () => {
    return (
        <section className="py-20">
            <div className="max-w-4xl mx-auto px-4">

                <h1 className="text-4xl font-bold mb-6 text-center">
                    Privacy Policy & Terms
                </h1>

                <div className="space-y-6 text-base-content/80">
                    <p>
                        ScholarStream respects your privacy and is committed
                        to protecting your personal data.
                    </p>

                    <div>
                        <h3 className="font-semibold text-lg mb-2">
                            Information We Collect
                        </h3>
                        <p>
                            We collect basic user information such as name,
                            email, and application details to provide our services.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2">
                            Data Security
                        </h3>
                        <p>
                            All user data is securely stored and protected
                            using modern authentication and encryption techniques.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-2">
                            User Responsibility
                        </h3>
                        <p>
                            Users are responsible for providing accurate
                            information during registration and applications.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyTerms;
