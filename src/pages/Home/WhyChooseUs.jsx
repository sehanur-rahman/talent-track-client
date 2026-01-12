import { motion } from "framer-motion";
import {
    FaCheckCircle,
    FaWpforms,
    FaClock,
    FaShieldAlt,
} from "react-icons/fa";

const features = [
    {
        title: "Verified Scholarships",
        desc: "All scholarships are verified and updated regularly to ensure authenticity.",
        icon: <FaCheckCircle />,
    },
    {
        title: "Easy Application",
        desc: "Apply to scholarships with a simple and guided application process.",
        icon: <FaWpforms />,
    },
    {
        title: "Deadline Tracking",
        desc: "Never miss deadlines with automated tracking and reminders.",
        icon: <FaClock />,
    },
    {
        title: "Secure Platform",
        desc: "Your data and documents are protected with secure authentication.",
        icon: <FaShieldAlt />,
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
    return (
        <section className="py-10">
            <div className="max-w-6xl mx-auto px-4">

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-10"
                >
                    Why Choose ScholarStream
                </motion.h2>

                {/* Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-4 gap-6"
                >
                    {features.map((itemData, i) => (
                        <motion.div
                            key={i}
                            variants={item}
                            className="
                                bg-base-200
                                p-6 rounded-xl
                                shadow-xl
                                border border-base-300
                                dark:border-white/40
                                hover:shadow-2xl
                                transition
                            "
                        >
                            {/* Icon */}
                            <div className="text-4xl text-primary mb-4">
                                {itemData.icon}
                            </div>

                            {/* Title */}
                            <h4 className="font-semibold text-lg mb-2 text-base-content">
                                {itemData.title}
                            </h4>

                            {/* Description */}
                            <p className="text-base-content/70 text-sm">
                                {itemData.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
