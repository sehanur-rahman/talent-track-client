import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const [dbUser, setDbUser] = useState(null);
    const [roleLoading, setRoleLoading] = useState(true);

    useEffect(() => {
    let isMounted = true;

    const token = localStorage.getItem("access-token");

    if (!user || loading || !token) {
        if (isMounted) {
            setDbUser(null);
            setRoleLoading(false);
        }
        return;
    }

    setRoleLoading(true);

    axiosSecure
        .get(`/users/${user.email}`)
        .then((res) => {
            if (isMounted) setDbUser(res.data);
        })
        .catch(() => {
            if (isMounted) setDbUser(null);
        })
        .finally(() => {
            if (isMounted) setRoleLoading(false);
        });

    return () => {
        isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [user, loading]); // 🔥 IMPORTANT


    return {
        role: dbUser?.role || "Student",
        name: dbUser?.name,
        email: dbUser?.email,
        dbUser,
        roleLoading,
    };
};

export default useUserRole;
