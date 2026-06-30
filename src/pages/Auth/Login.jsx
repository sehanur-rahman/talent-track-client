import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Login = () => {
    const { loginUser, googleLogin } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [firebaseError, setFirebaseError] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    // ===== Email + Password Login =====
    const [loadingLogin, setLoadingLogin] = useState(false);

    const onSubmit = async ({ email, password }) => {
        setFirebaseError("");
        setLoadingLogin(true);

        try {
            const result = await loginUser(email, password);

            const jwtRes = await axiosSecure.post("/jwt", {
                email: result.user.email,
            });

            localStorage.setItem("access-token", jwtRes.data.token);
            navigate("/");
        } catch (err) {
            console.error(err);
            setFirebaseError("Login failed. Please try again.");
        } finally {
            setLoadingLogin(false);
        }
    };


    // ===== Google Login =====
    const handleGoogleLogin = async () => {
        setFirebaseError("");
        setLoadingLogin(true);

        try {
            const result = await googleLogin();
            const user = result.user;

            // Save user (ignore if already exists)
            await axiosSecure.post("/users", {
                name: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
            });

            // Get JWT
            const jwtRes = await axiosSecure.post("/jwt", {
                email: user.email,
            });

            localStorage.setItem("access-token", jwtRes.data.token);
            navigate("/");
        } catch (err) {
            console.error(err);
            setFirebaseError("Google login failed. Please try again.");
        } finally {
            setLoadingLogin(false);
        }
    };

    // ===== Demo Student Login =====
    const handleDemoLogin = async () => {
        setFirebaseError("");
        setLoadingLogin(true);

        try {
            const email = "anis@gmail.com";
            const password = "123456aS@";

            const result = await loginUser(email, password);

            const jwtRes = await axiosSecure.post("/jwt", {
                email: result.user.email,
            });

            localStorage.setItem("access-token", jwtRes.data.token);

            navigate("/");
        } catch (err) {
            console.error(err);
            setFirebaseError("Demo login failed. Please try again.");
        } finally {
            setLoadingLogin(false);
        }
    };



    return (
        <div className="flex justify-center items-center py-10">
            <div className="card w-full max-w-md bg-base-100 shadow-2xl p-8 border border-base-300 dark:border-white/60">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                            })}
                            className="input input-bordered w-full"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    {/* Forgot Password */}
                    <div className="text-right mt-1">
                        <button
                            type="button"
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Forgot password?
                        </button>
                    </div>

                    {firebaseError && (
                        <p className="text-red-500 text-sm">{firebaseError}</p>
                    )}

                    <button className="btn btn-primary w-full" disabled={loadingLogin}>
                        {loadingLogin ? "Logging in..." : "Login"}
                    </button>

                </form>

                <div className="divider">OR</div>

                <button
                    onClick={handleGoogleLogin}
                    disabled={loadingLogin}
                    className="btn btn-outline w-full flex items-center gap-2"
                >
                    {loadingLogin ? (
                        <span className="loading loading-spinner loading-sm"></span>
                    ) : (
                        <>
                            <FcGoogle className="text-2xl" />
                            Continue with Google
                        </>
                    )}
                </button>

                <button
                    onClick={handleDemoLogin}
                    disabled={loadingLogin}
                    className="btn btn-secondary w-full mt-3"
                >
                    Demo Player Login
                </button>



                <p className="text-center mt-4">
                    New here?
                    <Link to="/register" className="text-blue-600 font-semibold ms-1">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
