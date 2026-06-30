import { motion } from "framer-motion";
import {
    FaFutbol,
    FaUserTie,
    FaClipboardCheck,
    FaShieldAlt,
} from "react-icons/fa";

const features = [
    {
        title: "Verified Talent Hunts",
        desc: "Explore authentic football and cricket talent hunt programs organized by trusted academies and sports clubs.",
        icon: <FaFutbol />,
    },
    {
        title: "Professional Evaluation",
        desc: "Receive fair assessments and valuable feedback from experienced coaches and talent evaluators.",
        icon: <FaUserTie />,
    },
    {
        title: "Easy Online Registration",
        desc: "Apply for talent hunt programs, complete registration, and track your application in just a few steps.",
        icon: <FaClipboardCheck />,
    },
    {
        title: "Secure & Transparent",
        desc: "Your personal information and payments are protected with secure authentication and reliable technologies.",
        icon: <FaShieldAlt />,
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
    return (
        <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Why Choose <span className="text-primary">TalentTrack</span>
                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-base-content/70">
                        TalentTrack helps aspiring athletes connect with top
                        academies, clubs, and talent evaluators through a secure,
                        transparent, and user-friendly platform.
                    </p>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -8 }}
                            className="bg-base-100 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary text-4xl mb-6">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold mb-3">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-base-content/70 leading-7">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default WhyChooseUs;