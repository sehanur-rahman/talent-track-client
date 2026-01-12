import { motion } from "framer-motion";
import {
    FaCheckCircle,
    FaLanguage,
    FaFileAlt,
    FaGlobe,
    FaClipboardCheck,
} from "react-icons/fa";

const requirements = [
    {
        text: "Minimum academic qualification",
        icon: <FaCheckCircle />,
    },
    {
        text: "Language proficiency (IELTS / TOEFL if required)",
        icon: <FaLanguage />,
    },
    {
        text: "Valid academic documents and certificates",
        icon: <FaFileAlt />,
    },
    {
        text: "Country specific eligibility requirements",
        icon: <FaGlobe />,
    },
    {
        text: "Completed online application submission",
        icon: <FaClipboardCheck />,
    },
];

const Eligibility = () => {
    return (
        <section className="py-8">
            <div className="max-w-6xl mx-auto px-4">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Eligibility & Requirements
                </motion.h2>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <img
                            src="https://i.ibb.co/RkfTFRwf/The-Ultimate-Guide-to-Finding-a-Trustworthy-Lawyer-10-Point-Checklist.jpg"
                            alt="Eligibility requirements"
                            className="w-full rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
                        />
                    </motion.div>

                    {/* Right Points */}
                    <motion.ul
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        {requirements.map((item, i) => (
                            <li
                                key={i}
                                className="
                                    flex items-start gap-4
                                    bg-base-100
                                    p-5 rounded-xl
                                    shadow-xl
                                    border border-base-300
                                    dark:border-white/40
                                "
                            >
                                <span className="text-primary text-xl mt-1">
                                    {item.icon}
                                </span>
                                <span className="text-base-content">
                                    {item.text}
                                </span>
                            </li>
                        ))}
                    </motion.ul>
                </div>
            </div>
        </section>
    );
};

export default Eligibility;
