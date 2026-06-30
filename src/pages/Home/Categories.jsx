import { motion } from "framer-motion";
import {
    FaFutbol,
    FaBaseballBall,
    FaUsers,
    FaChild,
    FaTrophy,
    FaRunning,
} from "react-icons/fa";

const categories = [
    {
        title: "Football Trials",
        icon: <FaFutbol />,
    },
    {
        title: "Cricket Trials",
        icon: <FaBaseballBall />,
    },
    {
        title: "Youth Talent Hunt",
        icon: <FaChild />,
    },
    {
        title: "Professional Academy",
        icon: <FaTrophy />,
    },
    {
        title: "Club Recruitment",
        icon: <FaUsers />,
    },
    {
        title: "Open Selection Camp",
        icon: <FaRunning />,
    },
];

const Categories = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto px-4">

                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-4"
                >
                    Talent Hunt Categories
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center text-base-content/70 max-w-2xl mx-auto mb-10"
                >
                    Explore a variety of football and cricket talent hunt
                    programs designed for aspiring athletes of different age
                    groups and skill levels.
                </motion.p>

                {/* Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -8 }}
                            className="
                                bg-base-200
                                p-8
                                rounded-2xl
                                shadow-xl
                                border border-base-300
                                text-center
                                cursor-pointer
                                transition-all
                                hover:shadow-2xl
                            "
                        >
                            {/* Icon */}
                            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl mb-5">
                                {cat.icon}
                            </div>

                            {/* Title */}
                            <h4 className="font-semibold text-xl text-base-content">
                                {cat.title}
                            </h4>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Categories;