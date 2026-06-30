import { motion } from "framer-motion";
import {
    FaUserPlus,
    FaSearch,
    FaFileSignature,
    FaClipboardCheck,
    FaTrophy,
} from "react-icons/fa";

const steps = [
    {
        number: "01",
        title: "Create Your Account",
        desc: "Register as a player using your email and complete your sports profile.",
        icon: <FaUserPlus />,
    },
    {
        number: "02",
        title: "Explore Talent Hunts",
        desc: "Browse football and cricket talent hunt programs from verified academies and clubs.",
        icon: <FaSearch />,
    },
    {
        number: "03",
        title: "Apply & Complete Registration",
        desc: "Submit your application and complete the registration fee securely online.",
        icon: <FaFileSignature />,
    },
    {
        number: "04",
        title: "Attend Evaluation",
        desc: "Participate in trials and receive professional feedback from talent evaluators.",
        icon: <FaClipboardCheck />,
    },
    {
        number: "05",
        title: "Get Selected",
        desc: "Track your application status and begin your journey toward professional sports.",
        icon: <FaTrophy />,
    },
];

const HowItWorks = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold">
                        How <span className="text-primary">TalentTrack</span> Works
                    </h2>

                    <p className="mt-5 max-w-3xl mx-auto text-base-content/70">
                        Follow five simple steps to showcase your talent,
                        connect with top academies, and build your sports career.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            className="relative bg-base-100 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl duration-300"
                        >

                            {/* Step Number */}

                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg">
                                {step.number}
                            </div>

                            {/* Icon */}

                            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary text-4xl mt-6 mb-6">
                                {step.icon}
                            </div>

                            {/* Title */}

                            <h3 className="text-xl font-bold mb-3">
                                {step.title}
                            </h3>

                            {/* Description */}

                            <p className="text-base-content/70 leading-7">
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