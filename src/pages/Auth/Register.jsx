// src/pages/Auth/Register.jsx
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
    const { registerUser, updateUserProfile } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [firebaseError, setFirebaseError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async ({ name, photo, email, password }) => {
        setFirebaseError("");

        try {
            // 1️⃣ Firebase register
            await registerUser(email, password);

            // 2️⃣ Update profile
            await updateUserProfile(name, photo);

            // 3️⃣ Save user in MongoDB
            await axiosSecure.post("/users", {
                name,
                email,
                photoURL: photo,
            });

            // 🔥🔥🔥 4️⃣ GET JWT TOKEN (THIS WAS MISSING)
            const jwtRes = await axiosSecure.post("/jwt", { email });

            localStorage.setItem("access-token", jwtRes.data.token);

            // 5️⃣ Redirect
            navigate("/");
        } catch (err) {
            setFirebaseError(err.message);
        }
    };


    return (
        <div className="flex justify-center items-center py-10">
            <div className="card w-full max-w-md bg-base-100 shadow-xl p-8">
                <h2 className="text-2xl font-bold text-center mb-4">
                    Create an Account
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="font-semibold">Full Name</label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            className="input input-bordered w-full"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    {/* Photo */}
                    <div>
                        <label className="font-semibold">Photo URL</label>
                        <input
                            {...register("photo", { required: "Photo URL is required" })}
                            className="input input-bordered w-full"
                        />
                        {errors.photo && (
                            <p className="text-red-500 text-sm">
                                {errors.photo.message}
                            </p>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="font-semibold">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            className="input input-bordered w-full"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="font-semibold">Password</label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Minimum 6 characters required",
                                },
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                                    message:
                                        "Must include 1 capital letter & 1 special character",
                                },
                            })}
                            className="input input-bordered w-full"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    {firebaseError && (
                        <p className="text-red-500 text-sm">{firebaseError}</p>
                    )}

                    <button className="btn btn-primary w-full">Register</button>
                </form>

                <p className="text-center mt-4">
                    Already have an account?
                    <Link to="/login" className="text-blue-600 font-semibold ms-1">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
