import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import useUserRole from "../../../hooks/useUserRole";
import { FaEnvelope, FaUserTag } from "react-icons/fa";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const { role, name } = useUserRole();

    return (
        <div className="max-w-4xl  mx-auto mt-20">

            {/* Page Title */}
            <h2 className="text-3xl font-bold mb-8 text-gray-800">
                My Profile
            </h2>

            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                    {/* Avatar */}
                    <div className="relative">
                        <img
                            src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover ring-4 ring-primary"
                        />
                        <span className="absolute bottom-2 right-2 bg-primary text-white text-xs px-3 py-1 rounded-full">
                            {role}
                        </span>
                    </div>

                    {/* User Info */}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gray-800">
                            {name || user?.displayName || "N/A"}
                        </h3>

                        <p className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mt-2">
                            <FaEnvelope className="text-primary" />
                            {user?.email}
                        </p>

                        <p className="flex items-center justify-center md:justify-start gap-2 text-gray-600 mt-1">
                            <FaUserTag className="text-primary" />
                            Role: <span className="font-semibold">{role}</span>
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t"></div>

                {/* Extra Info Section (Future Ready) */}
                <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700">

                    <div className="bg-base-200 rounded-xl p-4">
                        <p className="font-semibold text-gray-800">
                            Account Status
                        </p>
                        <p className="mt-1 text-green-600 font-medium">
                            Active
                        </p>
                    </div>

                    <div className="bg-base-200 rounded-xl p-4">
                        <p className="font-semibold text-gray-800">
                            Member Since
                        </p>
                        <p className="mt-1">
                            {user?.metadata?.creationTime
                                ? new Date(
                                    user.metadata.creationTime
                                ).toLocaleDateString()
                                : "N/A"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
