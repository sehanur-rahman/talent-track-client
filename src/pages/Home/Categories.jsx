import { motion } from "framer-motion";
import {
    FaGraduationCap,
    FaBook,
    FaBrain,
    FaMoneyBillWave,
    FaFileInvoiceDollar,
    FaGlobe,
} from "react-icons/fa";

const categories = [
    {
        title: "Undergraduate",
        icon: <FaGraduationCap />,
    },
    {
        title: "Masters",
        icon: <FaBook />,
    },
    {
        title: "PhD",
        icon: <FaBrain />,
    },
    {
        title: "Fully Funded",
        icon: <FaMoneyBillWave />,
    },
    {
        title: "Partial Funded",
        icon: <FaFileInvoiceDollar />,
    },
    {
        title: "Country Based",
        icon: <FaGlobe />,
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
                    className="text-3xl font-bold text-center mb-10"
                >
                    Scholarship Categories
                </motion.h2>

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
                            whileHover={{ y: -6 }}
                            className="
                                bg-base-200
                                p-8 rounded-xl
                                shadow-xl
                                border border-base-300
                                dark:border-white/40
                                text-center
                                cursor-pointer
                                transition
                            "
                        >
                            {/* Icon */}
                            <div className="text-4xl text-primary mb-4 flex justify-center">
                                {cat.icon}
                            </div>

                            {/* Title */}
                            <h4 className="font-semibold text-lg text-base-content">
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
