import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import useUserRole from "../../../hooks/useUserRole";
import { FaEnvelope, FaUserTag } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const { role, name } = useUserRole();
    const [isOpen, setIsOpen] = useState(false);
    const axiosSecure = useAxiosSecure();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            name: name || user?.displayName,
            photoURL: user?.photoURL,
        },
    });
    const onSubmit = async (data) => {
        try {
            await axiosSecure.patch("/users/profile", data);
            toast.success("Profile updated successfully");
            setIsOpen(false);     // modal close
            reset(data);          // form reset with new data
        } catch (err) {
            console.error(err);
            toast.error("Failed to update profile");
        }
    };


    return (
        <div className="max-w-4xl  mx-auto mt-20">

            {/* Page Title */}
            <h2 className="text-3xl font-bold mb-8 text-base-content">
                My Profile
            </h2>

            {/* Profile Card */}
            <div className="bg-base-100 rounded-2xl shadow-xl p-6 md:p-10 border border-base-300 dark:border-white/60">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">

                    {/* Avatar */}
                    <div className="relative">
                        <img
                            src={user?.photoURL || "https://i.ibb.co/5GzXkwq/user.png"}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover ring-4 ring-primary"
                        />
                        <span className="absolute bottom-2 right-2 bg-primary text-base-content text-xs px-3 py-1 rounded-full">
                            {role}
                        </span>
                    </div>

                    {/* User Info */}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-base-content">
                            {name || user?.displayName || "N/A"}
                        </h3>

                        <p className="flex items-center justify-center md:justify-start gap-2 text-base-content/70 mt-2">
                            <FaEnvelope className="text-primary" />
                            {user?.email}
                        </p>

                        <p className="flex items-center justify-center md:justify-start gap-2 text-base-content/70 mt-1">
                            <FaUserTag className="text-primary" />
                            Role: <span className="font-semibold">{role}</span>
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-t"></div>

                {/* Extra Info Section */}
                <div className="grid sm:grid-cols-2 gap-6 text-sm text-base-content/70">

                    <div className="bg-base-200 rounded-xl p-4">
                        <p className="font-semibold text-base-content">
                            Account Status
                        </p>
                        <p className="mt-1 text-green-600 font-medium">
                            Active
                        </p>
                    </div>

                    <div className="bg-base-200 rounded-xl p-4">
                        <p className="font-semibold text-base-content">
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
                <div className="flex justify-end mt-6">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="btn btn-outline btn-primary"
                    >
                        Edit Profile
                    </button>
                </div>

            </div>
            {isOpen && (
                <dialog className="modal modal-open">
                    <div className="modal-box bg-base-100 border border-base-300 dark:border-white/60">

                        <h3 className="font-bold text-xl mb-4">
                            Edit Profile
                        </h3>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                            {/* Name */}
                            <div>
                                <label className="font-semibold">Full Name</label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    className="input input-bordered w-full mt-1"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* Photo URL */}
                            <div>
                                <label className="font-semibold">Photo URL</label>
                                <input
                                    {...register("photoURL")}
                                    className="input input-bordered w-full mt-1"
                                />
                            </div>

                            {/* Actions */}
                            <div className="modal-action flex justify-end gap-3">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="btn btn-ghost"
                                >
                                    Cancel
                                </button>

                                <button type="submit" className="btn btn-primary">
                                    Update Profile
                                </button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}

        </div>
    );
};

export default MyProfile;
