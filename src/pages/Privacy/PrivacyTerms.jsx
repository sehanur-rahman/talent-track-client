import {
    FaUserShield,
    FaLock,
    FaClipboardCheck,
    FaBalanceScale,
    FaShieldAlt,
} from "react-icons/fa";

const PrivacyTerms = () => {
    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Privacy Policy <span className="text-primary">&</span> Terms
                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-lg text-base-content/70">
                        TalentTrack is committed to protecting player information,
                        ensuring secure registrations, and maintaining a fair and
                        transparent sports talent discovery platform.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid md:grid-cols-2 gap-8">

                    {/* Card 1 */}

                    <div className="bg-base-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl duration-300">

                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl mb-5">
                            <FaUserShield />
                        </div>

                        <h3 className="text-2xl font-bold mb-3">
                            Player Privacy
                        </h3>

                        <p className="text-base-content/70 leading-7">
                            We collect only the information required to create
                            player profiles, manage talent hunt applications,
                            and connect athletes with verified academies and
                            talent evaluators.
                        </p>

                    </div>

                    {/* Card 2 */}

                    <div className="bg-base-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl duration-300">

                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl mb-5">
                            <FaLock />
                        </div>

                        <h3 className="text-2xl font-bold mb-3">
                            Data Security
                        </h3>

                        <p className="text-base-content/70 leading-7">
                            Your personal information and payment details are
                            protected using Firebase Authentication, JWT,
                            encrypted communication, and secure cloud services.
                        </p>

                    </div>

                    {/* Card 3 */}

                    <div className="bg-base-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl duration-300">

                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl mb-5">
                            <FaClipboardCheck />
                        </div>

                        <h3 className="text-2xl font-bold mb-3">
                            Player Responsibilities
                        </h3>

                        <p className="text-base-content/70 leading-7">
                            Players must provide accurate personal information,
                            sports experience, and supporting documents during
                            registration and talent hunt applications.
                        </p>

                    </div>

                    {/* Card 4 */}

                    <div className="bg-base-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl duration-300">

                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl mb-5">
                            <FaBalanceScale />
                        </div>

                        <h3 className="text-2xl font-bold mb-3">
                            Fair Platform Usage
                        </h3>

                        <p className="text-base-content/70 leading-7">
                            TalentTrack promotes fair competition. Fake
                            registrations, misleading information, abusive
                            behavior, or fraudulent activities may result in
                            account suspension.
                        </p>

                    </div>

                </div>

                {/* Notice */}

                <div className="mt-16 bg-primary text-primary-content rounded-3xl p-10 shadow-xl">

                    <div className="flex items-center gap-5">

                        <FaShieldAlt className="text-5xl" />

                        <div>

                            <h3 className="text-3xl font-bold mb-3">
                                Your Trust Matters
                            </h3>

                            <p className="opacity-90 leading-8">
                                By using TalentTrack, you agree to our Privacy
                                Policy and Terms of Service. We are committed to
                                creating a secure, transparent, and reliable
                                platform where talented athletes can confidently
                                discover opportunities and connect with
                                professional sports organizations.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default PrivacyTerms;