// src/components/Navbar.jsx
import { Link, NavLink} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import logo from "../assets/logo.png";

const Navbar = () => {
    const { user, logoutUser, loading } = useAuth();
    const { name } = useUserRole(); 

    const handleLogout = async () => {
        try {
            await logoutUser();

            // 🔥 FULL RESET
            localStorage.removeItem("access-token");
            window.location.href = "/"; // hard reload
        } catch (err) {
            console.error(err);
        }
    };


    // ✅ Active link styling (PRIMARY COLOR)
    const navLinkClass = ({ isActive }) =>
        isActive ? "text-primary font-semibold" : "font-medium";

    const navLinks = (
        <>
            <li>
                <NavLink to="/" className={navLinkClass}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/scholarships" className={navLinkClass}>
                    All Scholarships
                </NavLink>
            </li>
            {user && (
                <li>
                    <NavLink to="/dashboard" className={navLinkClass}>
                        Dashboard
                    </NavLink>
                </li>
            )}
        </>
    );

    return (
        <div className="bg-white shadow-md sticky top-0 z-50">
            <div className="navbar max-w-6xl mx-auto px-4">

                {/* ================= LEFT ================= */}
                <div className="navbar-start">

                    {/* 📱 MOBILE MENU */}
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h12M4 18h16"
                                />
                            </svg>
                        </label>

                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 shadow bg-base-100 rounded-box w-52"
                        >
                            {navLinks}
                        </ul>
                    </div>

                    {/* 🔰 LOGO (UNCHANGED) */}
                    <Link to="/" className="flex items-center gap-3">
                        <img
                            src={logo}
                            alt="logo"
                            className="h-14 w-14 object-contain"
                        />
                        <div className="flex flex-col leading-tight -ms-4">
                            <span className="text-sm font-bold tracking-tight">
                                Scholar
                            </span>
                            <span className="text-sm font-bold text-primary -mt-1.5 tracking-wide">
                                Stream
                            </span>
                        </div>
                    </Link>
                </div>

                {/* ================= CENTER (Desktop) ================= */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4">
                        {navLinks}
                    </ul>
                </div>

                {/* ================= RIGHT ================= */}
                <div className="navbar-end gap-3">


                    {/* ❌ NOT LOGGED IN */}
                    {!loading && !user && (
                        <>
                            <Link to="/login" className="btn btn-outline btn-md">
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="btn btn-primary text-black btn-md"
                            >
                                Register
                            </Link>
                        </>
                    )}

                    {/* ✅ LOGGED IN */}
                    {!loading && user && (
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost btn-circle avatar ring ring-primary ring-offset-2"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        src={
                                            user.photoURL ||
                                            "https://i.ibb.co/4pDNDk1/default-avatar.png"
                                        }
                                        alt="user"
                                    />
                                </div>
                            </label>

                            {/* 👤 DROPDOWN */}
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <span className="font-semibold">
                                        {name || user.displayName || "User"}
                                    </span>
                                </li>
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
