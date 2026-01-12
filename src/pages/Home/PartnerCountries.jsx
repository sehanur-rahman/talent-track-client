import { motion } from "framer-motion";

const countries = [
    { name: "USA", img: "https://flagcdn.com/w80/us.png" },
    { name: "UK", img: "https://flagcdn.com/w80/gb.png" },
    { name: "Germany", img: "https://flagcdn.com/w80/de.png" },
    { name: "Canada", img: "https://flagcdn.com/w80/ca.png" },
    { name: "Australia", img: "https://flagcdn.com/w80/au.png" },
    { name: "Netherlands", img: "https://flagcdn.com/w80/nl.png" },
];

const PartnerCountries = () => {
    return (
        <section className="py-10 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-10">
                    Popular Study Destinations
                </h2>

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
                    {[...countries, ...countries].map((country, i) => (
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
                                src={country.img}
                                alt={country.name}
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            <span className="font-medium">
                                {country.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PartnerCountries;
