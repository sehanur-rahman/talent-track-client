import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import banner1 from "../../assets/banner/banner1.jpg";
import banner2 from "../../assets/banner/banner2.jpg";
import banner3 from "../../assets/banner/banner3.jpg";

const Banner = () => {
    const slides = [
        {
            img: banner1,
            position: "left",
            title: "Free Scholarships For Every Bright Student",
            desc: "Find scholarships for every level of education and shape a brighter future.",
        },
        {
            img: banner2,
            position: "center",
            title: "Build Your Dream Career With the Right Funding",
            desc: "Discover scholarships that match your goals and start your academic journey.",
        },
        {
            img: banner3,
            position: "right",
            title: "Global Scholarship Opportunities For You",
            desc: "Access top universities offering world-class funding worldwide.",
        },
    ];

    const horizontalAlign = {
        left: "md:justify-start",
        center: "md:justify-center",
        right: "md:justify-end",
    };

    const textAlign = {
        left: "md:text-left",
        center: "md:text-center",
        right: "md:text-right",
    };

    return (
        <div className="rounded-3xl shadow-lg overflow-hidden">
            <Carousel
                autoPlay
                infiniteLoop
                interval={3000}
                showStatus={false}
                showThumbs={false}
                swipeable
                emulateTouch
            >
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className="
              relative w-full
              h-[45vh] sm:h-[50vh]
              md:h-[75vh] lg:h-[85vh]
            "
                    >
                        {/* IMAGE */}
                        <img
                            src={slide.img}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />

                        {/* OVERLAY */}
                        <div className="absolute inset-0 bg-black/40"></div>

                        {/* TEXT CONTENT */}
                        <div
                            className={`
                absolute inset-0 flex items-center
                px-4 sm:px-6 md:px-16
                justify-center
                ${horizontalAlign[slide.position]}
              `}
                        >
                            <div
                                className={`
                  text-white
                  space-y-2 sm:space-y-3 md:space-y-4
                  text-center
                  ${textAlign[slide.position]}
                  max-w-md md:max-w-xl
                `}
                            >
                                <h2
                                    className="
                    text-lg sm:text-xl
                    md:text-4xl lg:text-5xl
                    font-extrabold leading-tight
                  "
                                >
                                    {slide.title}
                                </h2>

                                <p className="text-gray-200 text-xs sm:text-sm md:text-base">
                                    {slide.desc}
                                </p>

                                {/* SEARCH SCHOLARSHIP BUTTON */}
                                <Link
                                    to="/scholarships"
                                    className="btn btn-primary btn-sm sm:btn-md md:btn-lg mt-1 md:mt-2"
                                >
                                    Search Scholarships
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Banner;
