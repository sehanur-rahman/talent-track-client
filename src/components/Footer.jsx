import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-black text-white p-10">

            <div>
                    <Link to="/" className="flex items-center gap-3">
                        <img src={logo} alt="logo" className="h-14 w-14 object-contain" />

                        <div className="flex flex-col leading-tight -ms-4">
                            <span className="text-sm font-bold tracking-tight">Scholar</span>
                            <span className="text-sm font-bold text-yellow-600 -mt-1.5 tracking-wide">
                                Stream
                            </span>
                        </div>
                    </Link>

                <p className="font-bold">Connecting students with global opportunities.</p>
                <p>© {new Date().getFullYear()} — All Rights Reserved</p>
            </div>

            <nav>
                <div className="grid grid-flow-col gap-5 text-2xl">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-200 transition"
                    >
                        <FaXTwitter />
                    </a>

                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-200 transition"
                    >
                        <FaFacebookF />
                    </a>

                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-gray-200 transition"
                    >
                        <FaYoutube />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
