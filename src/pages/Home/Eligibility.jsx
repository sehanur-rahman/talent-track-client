import { motion } from "framer-motion";
import {
    FaUserCheck,
    FaRunning,
    FaHeartbeat,
    FaIdCard,
    FaClipboardCheck,
} from "react-icons/fa";

const requirements = [
    {
        text: "Players must meet the required age criteria for the selected talent hunt program.",
        icon: <FaUserCheck />,
    },
    {
        text: "Basic football or cricket skills and a passion for competitive sports.",
        icon: <FaRunning />,
    },
    {
        text: "Applicants should be physically fit and medically capable of participating in trials.",
        icon: <FaHeartbeat />,
    },
    {
        text: "Provide accurate personal information and valid identification during registration.",
        icon: <FaIdCard />,
    },
    {
        text: "Complete the online application and registration fee payment before the deadline.",
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
                    className="text-3xl font-bold text-center mb-4"
                >
                    Eligibility & Requirements
                </motion.h2>

                <p className="text-center text-base-content/70 max-w-2xl mx-auto mb-12">
                    Before applying for a football or cricket talent hunt,
                    make sure you meet the following eligibility requirements.
                </p>

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
                            src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=900&q=80"
                            alt="Sports Talent Hunt"
                            className="w-full h-[500px] object-cover rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]"
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
                                    hover:shadow-2xl
                                    hover:-translate-y-1
                                    duration-300
                                "
                            >
                                <span className="text-primary text-2xl mt-1">
                                    {item.icon}
                                </span>

                                <span className="text-base-content leading-7">
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