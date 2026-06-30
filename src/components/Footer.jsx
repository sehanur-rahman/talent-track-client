import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-12 pb-4">
            <div className="max-w-6xl mx-auto px-4 space-y-10">

                {/* ===== Brand ===== */}
                <div className="flex flex-col items-center gap-3 text-center">
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="ScholarStream logo"
                            className="h-14 w-14 object-contain"
                        />
                        <div className="flex flex-col leading-tight -ms-3">
                            <span className="text-sm font-bold tracking-tight">
                                Talent
                            </span>
                            <span className="text-sm font-bold text-primary -mt-1.5 tracking-wide">
                                Track
                            </span>
                        </div>
                    </Link>

                    <p className="text-sm text-gray-400 max-w-md">
                        Connecting talented athletes with academies, clubs, and professional scouts through a modern sports talent discovery platform.
                    </p>
                </div>

                {/* ===== Inline Links ===== */}
                <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                    <Link to="/about" className="hover:text-white transition">
                        About Us
                    </Link>
                    <Link to="/contact" className="hover:text-white transition">
                        Contact
                    </Link>
                    <Link to="/privacy" className="hover:text-white transition">
                        Privacy & Terms
                    </Link>
                </div>

                {/* ===== Social ===== */}
                <div className="flex justify-center gap-6 text-xl">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-300 transition"
                        aria-label="Twitter"
                    >
                        <FaXTwitter />
                    </a>

                    <a
                        href="https://www.facebook.com/sehanur.rahman.siam"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-300 transition"
                        aria-label="Facebook"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sehanur-rahman-siam"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-300 transition"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>
                </div>

                {/* ===== Copyright ===== */}
                <div className="border-t border-white/10 pt-2 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} TalentTrack. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
