import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FaTrophy } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";

const successStories = [
    {
        name: "Rakib Hasan",
        sport: "Football",
        image: "https://i.pravatar.cc/300?img=11",
        text: "TalentTrack helped me join a professional football academy after successfully completing a national talent hunt program.",
    },
    {
        name: "Nafisa Akter",
        sport: "Cricket",
        image: "https://i.pravatar.cc/300?img=32",
        text: "The platform connected me with experienced coaches, and I was selected for a regional women's cricket development squad.",
    },
    {
        name: "Mahin Chowdhury",
        sport: "Football",
        image: "https://i.pravatar.cc/300?img=15",
        text: "I discovered an academy through TalentTrack and received professional training that improved my performance significantly.",
    },
    {
        name: "Sadia Islam",
        sport: "Cricket",
        image: "https://i.pravatar.cc/300?img=47",
        text: "Applying through TalentTrack was simple. I participated in a talent hunt and earned a place in a leading cricket academy.",
    },
    {
        name: "Arif Hossain",
        sport: "Football",
        image: "https://i.pravatar.cc/300?img=68",
        text: "The feedback from talent evaluators helped me improve my skills and secure an opportunity to play for a local club.",
    },
    {
        name: "Jannatul Ferdous",
        sport: "Cricket",
        image: "https://i.pravatar.cc/300?img=24",
        text: "TalentTrack made it easy to find verified talent hunt programs and connect with professional sports organizations.",
    },
];

const SuccessStories = () => {
    return (
        <section className="py-10 mt-4">
            <div className="max-w-6xl mx-auto px-4">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
                    Success Stories
                </h2>

                <p className="text-center text-base-content/70 max-w-2xl mx-auto mb-10">
                    Discover inspiring journeys of talented football and cricket
                    players who found opportunities through TalentTrack.
                </p>

                <div className="success-swiper-wrapper">
                    <Swiper
                        modules={[Pagination, Navigation, Autoplay]}
                        slidesPerView={3}
                        centeredSlides
                        loop
                        spaceBetween={40}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            el: ".success-pagination",
                        }}
                        navigation={{
                            prevEl: ".success-prev",
                            nextEl: ".success-next",
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="successSwiper"
                    >
                        {successStories.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="success-card bg-base-100 text-base-content">

                                    <FaTrophy className="text-4xl text-primary" />

                                    <p className="text-base-content/70 italic leading-relaxed">
                                        {item.text}
                                    </p>

                                    <hr className="border-base-300" />

                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />

                                        <div>
                                            <h4 className="font-semibold text-base-content">
                                                {item.name}
                                            </h4>

                                            <p className="text-sm text-base-content/60">
                                                {item.sport} Player
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="flex justify-center mt-10">
                    <div className="flex items-center gap-6">

                        <button className="success-prev btn btn-circle btn-outline">
                            <FiChevronLeft size={22} />
                        </button>

                        <div className="success-pagination flex gap-2"></div>

                        <button className="success-next btn btn-circle btn-outline">
                            <FiChevronRight size={22} />
                        </button>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default SuccessStories;