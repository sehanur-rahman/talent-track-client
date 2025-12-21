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

        if (!user) {
            if (isMounted) {
                setDbUser(null);
                setRoleLoading(false);
            }
            return;
        }

        if (loading) return;

        setRoleLoading(true);

        axiosSecure
            .get(`/users/${user.email}`)
            .then(res => {
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
    }, [user, loading]);

    return {
        role: dbUser?.role || "Student",
        name: dbUser?.name,
        email: dbUser?.email,
        dbUser,
        roleLoading,
    };
};

export default useUserRole;
