import { motion } from "framer-motion";

const Statistics = () => {
    return (
        <section className="py-10">
            <div className="max-w-6xl mx-auto px-4">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-3"
                >
                    Our Impact
                </motion.h2>

                <p className="text-center text-base-content/70 max-w-2xl mx-auto mb-10">
                    Empowering talented football and cricket players by connecting
                    them with leading academies, clubs, and professional talent
                    evaluators.
                </p>

                <div className="grid md:grid-cols-4 gap-6 text-center">

                    {[
                        {
                            label: "Talent Hunt Programs",
                            value: "120+",
                        },
                        {
                            label: "Registered Players",
                            value: "3,500+",
                        },
                        {
                            label: "Partner Academies",
                            value: "80+",
                        },
                        {
                            label: "Players Selected",
                            value: "950+",
                        },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-base-200 p-6 rounded-xl shadow-xl border border-base-300 hover:shadow-2xl hover:-translate-y-2 duration-300"
                        >
                            <h3 className="text-4xl font-bold text-primary">
                                {stat.value}
                            </h3>

                            <p className="text-base-content/70 mt-2 font-medium">
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