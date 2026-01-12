import { motion } from "framer-motion";

const Statistics = () => {
    return (
        <section className="py-8">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-10"
                >
                    Our Impact
                </motion.h2>

                <div className="grid md:grid-cols-4 gap-6 text-center">
                    {[
                        { label: "Scholarships", value: "120+" },
                        { label: "Students Applied", value: "850+" },
                        { label: "Approved", value: "320+" },
                        { label: "Countries", value: "25+" },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-base-200 p-6 rounded-xl shadow-xl border border-base-300 dark:border-white/40"
                        >
                            <h3 className="text-3xl font-bold text-primary">
                                {stat.value}
                            </h3>
                            <p className="text-base-content/70 mt-1">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;
