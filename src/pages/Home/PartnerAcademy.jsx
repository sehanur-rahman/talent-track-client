import { motion } from "framer-motion";

const partners = [
    {
        name: "Bashundhara Kings",
        img: "https://upload.wikimedia.org/wikipedia/en/5/5b/Bashundhara_Kings_logo.png",
    },
    {
        name: "Abahani Limited Dhaka",
        img: "https://upload.wikimedia.org/wikipedia/en/2/2e/Abahani_Limited_Dhaka_logo.png",
    },
    {
        name: "Mohammedan SC",
        img: "https://upload.wikimedia.org/wikipedia/en/0/06/Mohammedan_SC_Dhaka_logo.png",
    },
    {
        name: "Bangladesh Cricket Board",
        img: "https://upload.wikimedia.org/wikipedia/en/e/e8/Bangladesh_Cricket_Board_Logo.svg",
    },
    {
        name: "Bangladesh Krira Shikkha Protishthan (BKSP)",
        img: "https://upload.wikimedia.org/wikipedia/en/5/55/BKSP_logo.png",
    },
    {
        name: "Sheikh Jamal Dhanmondi Club",
        img: "https://upload.wikimedia.org/wikipedia/en/8/88/Sheikh_Jamal_Dhanmondi_Club_logo.png",
    },
];

const PartnerAcademy = () => {
    return (
        <section className="py-10 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-3">
                    Trusted Partner Academies & Clubs
                </h2>

                <p className="text-center text-base-content/70 mb-10 max-w-2xl mx-auto">
                    Connect with renowned football clubs, cricket academies,
                    and professional sports organizations through TalentTrack.
                </p>

                {/* Marquee */}
                <motion.div
                    className="flex gap-10"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {[...partners, ...partners].map((partner, i) => (
                        <div
                            key={i}
                            className="
                                flex items-center gap-3
                                bg-base-100
                                px-6 py-3
                                rounded-full
                                shadow-xl
                                border border-base-300
                                dark:border-white/40
                                min-w-max
                            "
                        >
                            <img
                                src={partner.img}
                                alt={partner.name}
                                className="w-10 h-10 object-contain"
                            />
                            <span className="font-semibold">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default PartnerAcademy;