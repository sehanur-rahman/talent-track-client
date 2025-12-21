import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import LoadingSpinner from "../components/LoadingSpinner";

const ModeratorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const { role, roleLoading } = useUserRole();

    if (loading || roleLoading) {
        return <LoadingSpinner />;
    }

    if (user && role === "Moderator") {
        return children;
    }

    return <Navigate to="/" replace />;
};

export default ModeratorRoute;
