import { Outlet, NavLink, Navigate, Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useUserRole from "../hooks/useUserRole";
import { motion } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";



// Icons
import {
    FaUser,
    FaHome,
    FaClipboardList,
    FaStar,
    FaTasks,
    FaPlusCircle,
    FaUsers,
    FaChartBar,
    FaBars,
    FaTimes,
    FaSignOutAlt,
    FaUserShield,
    FaUserGraduate,
    FaUserTie,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const DashboardLayout = () => {
    const { user, loading, logoutUser } = useContext(AuthContext);
    const { role, name, roleLoading } = useUserRole();
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const isDashboardHome = location.pathname === "/dashboard";

    if (loading || roleLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    if (!user) return <Navigate to="/login" replace />;

    const linkClass = ({ isActive }) =>
        `flex items-center gap-3 px-3 py-2 rounded-lg font-medium
        ${isActive ? "bg-primary text-white" : "hover:bg-base-content/10"}`;

    const handleLogout = async () => {
        try {
            await logoutUser();

            localStorage.removeItem("access-token");
            window.location.href = "/"; 
        } catch (err) {
            console.error(err);
        }
    };


    // Role icon map
    const roleIcon = {
        Admin: <FaUserShield className="text-5xl text-primary" />,
        Moderator: <FaUserTie className="text-5xl text-primary" />,
        Student: <FaUserGraduate className="text-5xl text-primary" />,
    };

    return (
        <div className="min-h-screen flex bg-base-100">
        
            {/* ================= Mobile Header ================= */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-base-100 shadow px-4 py-3 flex items-center justify-between">

                {/*  Menu Button + Title */}
                <div className="flex items-center gap-3">
                    <button
                        className="btn btn-sm btn-circle"
                        onClick={() => setOpen(true)}
                    >
                        <FaBars />
                    </button>
                    <span className="font-semibold text-lg">Dashboard</span>
                </div>

                {/* Profile (Mobile) */}
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="avatar cursor-pointer">
                        <div className="w-9 rounded-full ring ring-primary ring-offset-2">
                            <img
                                src={user.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                                alt="profile"
                            />
                        </div>
                    </label>

                    {/* Role Tooltip / Dropdown */}
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                    >
                        <li className="text-center">
                            <span className="text-sm font-semibold text-primary">
                                {role}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>


            {/* ================= Sidebar ================= */}
            <aside
                className={`
                    fixed md:static z-50
                    w-64 bg-base-200 shadow-xl px-6 py-8
                    h-full md:h-auto
                    transition-transform duration-300
                    ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                `}
            >
                <button
                    className="md:hidden absolute top-4 right-4 btn btn-sm btn-circle"
                    onClick={() => setOpen(false)}
                >
                    <FaTimes />
                </button>
                

                {/* User Info */}
                <div className="text-center mb-6 border-b pb-6">
                    <img
                        src={user.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                        className="w-20 h-20 rounded-full mx-auto"
                        alt="user"
                    />
                    <h3 className="font-bold mt-3">
                        {name || user.displayName}
                    </h3>
                    <p className="text-sm text-base-content/70">{user.email}</p>
                    <span className="badge badge-primary mt-2">{role}</span>
                </div>

                {/* Menu */}
                <ul className="space-y-2">
                    <li onClick={() => setOpen(false)}>
                        <Link to="/" className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-base-content/10 ">
                            <FaHome /> Home
                        </Link>
                    </li>

                    {role === "Student" && (
                        <>
                            <NavLink onClick={() => setOpen(false)} to="/dashboard/profile" className={linkClass}><FaUser /> My Profile</NavLink>
                            <NavLink onClick={() => setOpen(false)} to="/dashboard/my-applications" className={linkClass}><FaClipboardList /> My Applications</NavLink>
                            <NavLink onClick={() => setOpen(false)} to="/dashboard/my-reviews" className={linkClass}><FaStar /> My Reviews</NavLink>
                        </>
                    )}

                    {role === "Moderator" && (
                        <>
                            <NavLink onClick={() => setOpen(false)} to="/dashboard/profile" className={linkClass}><FaUser /> My Profile</NavLink>
                            <NavLink onClick={() => setOpen(false)} to="/dashboard/manage-applications" className={linkClass}><FaTasks /> Manage Applications</NavLink>
                            <NavLink onClick={() => setOpen(false)} to="/dashboard/manage-reviews" className={linkClass}><FaStar /> All Reviews</NavLink>
                        </>
                    )}

                    {role === "Admin" && (
                        <>
                            <NavLink onClick={() => setOpen(false)} to="/dashboard/profile" className={linkClass}><FaUser /> My Profile</NavLink>
                            <NavLink onClick={() => setOpen(false)} to="/dashboard/add-scholarship" className={linkClass}><FaPlusCircle /> Add Scholarship</NavLink>
                            <NavLink onClick={() => setOpen(false)} to="/dashboard/manage-scholarships" className={linkClass}><FaClipboardList /> Manage Scholarships</NavLink>
                            <NavLink onClick={() => setOpen(false)} to="/dashboard/manage-users" className={linkClass}><FaUsers /> Manage Users</NavLink>
                            <NavLink onClick={() => setOpen(false)} to="/dashboard/analytics" className={linkClass}><FaChartBar /> Analytics</NavLink>
                        </>
                    )}
                </ul>

                <div className="mt-8 border-t pt-4">
                    <button onClick={handleLogout} className="flex items-center gap-3 text-red-500 hover:text-red-700 px-3">
                        <FaSignOutAlt /> Logout
                    </button>
                </div>
            </aside>

            {/* ================= Main ================= */}
            <main className=" flex-1 pt-16 md:pt-0 p-6 md:p-10">
                
                {/* ================= CENTER WELCOME CARD ================= */}
                {isDashboardHome && (
                    <div className="flex items-center justify-center min-h-screen">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-base-100 shadow-2xl rounded-3xl px-10 py-12 max-w-xl w-full text-center border"
                        >
                            <div className="flex justify-center mb-4">
                                {roleIcon[role]}
                            </div>

                            <h2 className="text-3xl font-extrabold text-base-content">
                                Welcome,{" "}
                                <span className="text-primary">
                                    {name || user.displayName}
                                </span>
                            </h2>

                            <p className="mt-3 text-base-content/70 text-sm">
                                You are logged in as a{" "}
                                <span className="font-semibold text-primary">
                                    {role}
                                </span>
                                . Manage everything smoothly from your dashboard.
                            </p>

                            <div className="mt-6 flex justify-center">
                                <span className="flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                                    <HiSparkles />
                                    Ready to get started
                                </span>
                            </div>
                        </motion.div>
                    </div>
                )}

                <Outlet />
            </main>
        </div>
    );
};

export default DashboardLayout;
