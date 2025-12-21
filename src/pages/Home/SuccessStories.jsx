import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { SiSemanticscholar } from "react-icons/si";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";
import "swiper/css/pagination";

const successStories = [
    {
        name: "Ayesha Rahman",
        country: "Germany",
        image: "https://i.ibb.co/wVQdySR/Ayesha.jpg",
        text: "ScholarStream helped me secure a fully funded Master's scholarship in Germany.",
    },
    {
        name: "Tanvir Hasan",
        country: "Canada",
        image: "https://i.ibb.co/rGmt75Hx/tanvir.jpg",
        text: "I found Canadian scholarships easily and applied without confusion.",
    },
    {
        name: "Farzana Akter",
        country: "Netherlands",
        image: "https://i.ibb.co/twZxgH95/Farzana.jpg",
        text: "I never missed a deadline thanks to ScholarStream.",
    },
    {
        name: "Imran Hossain",
        country: "Australia",
        image: "https://i.ibb.co/mVGjk9qX/imran.jpg",
        text: "ScholarStream simplified the entire scholarship application process.",
    },
    {
        name: "Nusrat Jahan",
        country: "UK",
        image: "https://i.ibb.co/NgDCgCjh/nusrat.jpg",
        text: "Finding UK scholarships became effortless with ScholarStream.",
    },
    {
        name: "Sajid Ahmed",
        country: "USA",
        image: "https://i.ibb.co/TB3pQ2fK/sajid.jpg",
        text: "I secured a partial scholarship in the USA using ScholarStream.",
    },
];

const SuccessStories = () => {
    return (
        <section className=" py-10 mt-4">
            {/* Width controller (MainLayout friendly) */}
            <div className="max-w-6xl mx-auto px-4">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
                    Success Stories
                </h2>

                {/* Swiper wrapper */}
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
                                <div className="success-card">
                                    {/* Icon */}
                                    <SiSemanticscholar className="text-4xl text-primary" />

                                    {/* Story */}
                                    <p className="text-gray-600 italic leading-relaxed">
                                        {item.text}
                                    </p>

                                    <hr />

                                    {/* User info */}
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 className="font-semibold">{item.name}</h4>
                                            <p className="text-sm text-gray-500">
                                                Studying in {item.country}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Controls row */}
                <div className="flex justify-center mt-10">
                    <div className="flex items-center gap-6">
                        {/* Previous */}
                        <button className="success-prev btn btn-circle btn-outline">
                            <FiChevronLeft size={22} />
                        </button>

                        {/* Pagination */}
                        <div className="success-pagination flex gap-2"></div>

                        {/* Next */}
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
