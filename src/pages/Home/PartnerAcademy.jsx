import { motion } from "framer-motion";

const partners = [
    {
        name: "Bashundhara Kings",
        img: "https://i.ibb.co/vxVxjDJ4/e737f5d53e8800b371e3d78d8fa403a2.jpg",
    },
    {
        name: "Abahani Limited Dhaka",
        img: "https://i.ibb.co/0y63jCvT/1cf11b56678add185fcc870fde6ad0ba.jpg",
    },
    {
        name: "Mohammedan SC",
        img: "https://i.ibb.co/S1ZfKyS/5cdad36ec636b8abd422591147ce81ca.jpg",
    },
    {
        name: "Bangladesh Cricket Board",
        img: "https://i.ibb.co/bM7p0sR1/d988a838c1bad37b2211336ec81d7a45.jpg",
    },
    {
        name: "Bangladesh Krira Shikkha Protishthan (BKSP)",
        img: "https://i.ibb.co/q3G2YhWV/images-q-tbn-ANd9-Gc-RPjsoc-Neim-QXAq-D-h5-ADPwm-DE2-EGCOg-V2mg-Wu-Wbtb-O9-Rmhuv-F0-Tp2qk3-Me-s-10.jpg",
    },
    {
        name: "Sheikh Jamal Dhanmondi Club",
        img: "https://i.ibb.co/8LjPDz1B/229fc706951d4d6de16ecee5583ebc5e.jpg",
    },
];

const PartnerAcademy = () => {
    return (
        <section className="py-10 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">

                {/* Heading */}
                <h2 className="text-3xl font-bold text-center mb-3">
                    Trusted Partner Academies & Clubs
                </h2>

                <p className="text-center text-base-content/70 mb-10 max-w-2xl mx-auto">
                    Connect with renowned football clubs, cricket academies,
                    and professional sports organizations through TalentTrack.
                </p>

                {/* Marquee */}
                <motion.div
                    className="flex gap-10"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {[...partners, ...partners].map((partner, i) => (
                        <div
                            key={i}
                            className="
                                flex items-center gap-3
                                bg-base-100
                                px-6 py-3
                                rounded-full
                                shadow-xl
                                border border-base-300
                                dark:border-white/40
                                min-w-max
                            "
                        >
                            <img
                                src={partner.img}
                                alt={partner.name}
                                className="w-10 h-10 object-contain"
                            />
                            <span className="font-semibold">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default PartnerAcademy;