import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
    const { pathname } = useLocation();

    // SCROLL TO TOP ON ROUTE CHANGE
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen flex flex-col font-[Urbanist]">
            <Navbar />
            <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
