import { motion } from "framer-motion";
import {
    FaUserPlus,
    FaSearch,
    FaFileAlt,
    FaTasks,
    FaCheckCircle,
} from "react-icons/fa";

const steps = [
    {
        title: "Create an Account",
        desc: "Sign up with your email to access verified scholarships.",
        icon: <FaUserPlus />,
    },
    {
        title: "Browse Scholarships",
        desc: "Explore scholarships based on country, degree, and category.",
        icon: <FaSearch />,
    },
    {
        title: "Submit Application",
        desc: "Apply online by filling out the application and documents.",
        icon: <FaFileAlt />,
    },
    {
        title: "Track Progress",
        desc: "Monitor your application status in real time.",
        icon: <FaTasks />,
    },
    {
        title: "Get Results",
        desc: "Receive updates once your application is reviewed.",
        icon: <FaCheckCircle />,
    },
];

const HowItWorks = () => {
    return (
        <section className="mt-12">
            <div className="max-w-6xl mx-auto px-4">

                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center mb-8"
                >
                    How ScholarStream Works
                </motion.h2>

                {/* Steps */}
                <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
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
                            <div className="text-4xl text-primary mb-4 flex justify-center">
                                {step.icon}
                            </div>

                            {/* Title */}
                            <h4 className="font-semibold text-lg mb-2 text-base-content">
                                {step.title}
                            </h4>

                            {/* Description */}
                            <p className="text-sm text-base-content/70">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
