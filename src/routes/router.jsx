import { createBrowserRouter } from "react-router-dom";

// ===== Main Layout & Public Pages =====
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import AllScholarships from "../pages/Scholarships/AllScholarships";
import ScholarshipDetails from "../pages/Scholarships/ScholarshipDetails";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import NotFound from "../pages/Error/NotFound";

// ===== Payment Pages =====
import Checkout from "../pages/Payment/Checkout";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import PaymentFailed from "../pages/Payment/PaymentFailed";


// ===== Dashboard Layout =====
import DashboardLayout from "../layout/DashboardLayout";
import MyProfile from "../pages/Dashboard/Common/MyProfile";

// ===== Student =====
import MyApplications from "../pages/Dashboard/Student/MyApplications";
import MyReviews from "../pages/Dashboard/Student/MyReviews";

// ===== Moderator =====
import ManageApplications from "../pages/Dashboard/Moderator/ManageApplications";
import ManageReviews from "../pages/Dashboard/Moderator/ManageReviews";

// ===== Admin =====
import AddScholarship from "../pages/Dashboard/Admin/AddScholarship";
import ManageScholarships from "../pages/Dashboard/Admin/ManageScholarships";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Analytics from "../pages/Dashboard/Admin/Analytics";

// ===== Route Protection =====
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import ModeratorRoute from "./ModeratorRoute";
import StripeWrapper from "../stripe/StripeWrapper";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },

            { path: "scholarships", element: <AllScholarships /> },
            { path: "scholarships/:id", element: <ScholarshipDetails /> },

            { path: "login", element: <Login /> },
            { path: "register", element: <Register /> },

            // ===== Checkout (Private + Stripe) =====
            {
                path: "checkout",
                element: (
                    <PrivateRoute>
                        <StripeWrapper>
                            <Checkout />
                        </StripeWrapper>
                    </PrivateRoute>
                ),
            },

            // ===== Payment Result =====
            {
                path: "payment-success",
                element: (
                    <PrivateRoute>
                        <PaymentSuccess />
                    </PrivateRoute>
                ),
            },
            {
                path: "payment-failed",
                element: (
                    <PrivateRoute>
                        <PaymentFailed />
                    </PrivateRoute>
                ),
            },

        ],
    },

    // ================= DASHBOARD =================
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        children: [
            // ---- Common ----
            { path: "profile", element: <MyProfile /> },

            // ---- Student ----
            { path: "my-applications", element: <MyApplications /> },
            { path: "my-reviews", element: <MyReviews /> },

            // ---- Moderator ----
            {
                path: "manage-applications",
                element: (
                    <ModeratorRoute>
                        <ManageApplications />
                    </ModeratorRoute>
                ),
            },
            {
                path: "manage-reviews",
                element: (
                    <ModeratorRoute>
                        <ManageReviews />
                    </ModeratorRoute>
                ),
            },

            // ---- Admin ----
            {
                path: "add-scholarship",
                element: (
                    <AdminRoute>
                        <AddScholarship />
                    </AdminRoute>
                ),
            },
            {
                path: "manage-scholarships",
                element: (
                    <AdminRoute>
                        <ManageScholarships />
                    </AdminRoute>
                ),
            },
            {
                path: "manage-users",
                element: (
                    <AdminRoute>
                        <ManageUsers />
                    </AdminRoute>
                ),
            },
            {
                path: "analytics",
                element: (
                    <AdminRoute>
                        <Analytics />
                    </AdminRoute>
                ),
            },
        ],
    },

    // ===== 404 =====
    { path: "*", element: <NotFound /> },
]);
