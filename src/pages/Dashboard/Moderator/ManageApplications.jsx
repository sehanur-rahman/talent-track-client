import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const ManageApplications = () => {
    const axiosSecure = useAxiosSecure();

    const [applications, setApplications] = useState([]);
    const [detailsApp, setDetailsApp] = useState(null);
    const [feedbackApp, setFeedbackApp] = useState(null);
    const [feedbackText, setFeedbackText] = useState("");

    // ================= FETCH =================
    useEffect(() => {
        axiosSecure.get("/applications").then(res => {
            setApplications(res.data);
        });
    }, [axiosSecure]);

    const isRejected = (app) => app.applicationStatus === "rejected";

    // ================= STATUS UPDATE =================
    const handleStatusChange = async (id, status) => {
        try {
            await axiosSecure.patch(`/applications/status/${id}`, { status });

            toast.success("Status updated");

            setApplications(prev =>
                prev.map(app =>
                    app._id === id
                        ? { ...app, applicationStatus: status }
                        : app
                )
            );
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed");
        }
    };

    // ================= CANCEL =================
    const handleReject = async (id) => {
        try {
            await axiosSecure.patch(`/applications/status/${id}`, {
                status: "rejected",
            });

            toast.success("Application rejected");

            setApplications(prev =>
                prev.map(app =>
                    app._id === id
                        ? { ...app, applicationStatus: "rejected" }
                        : app
                )
            );
        } catch {
            toast.error("Failed to reject");
        }
    };

    // ================= SAVE FEEDBACK =================
    const saveFeedback = async () => {
        if (!feedbackText.trim()) {
            toast.error("Feedback cannot be empty");
            return;
        }

        try {
            await axiosSecure.patch(`/applications/${feedbackApp._id}`, {
                feedback: feedbackText,
            });

            toast.success("Feedback saved");

            setApplications(prev =>
                prev.map(app =>
                    app._id === feedbackApp._id
                        ? { ...app, feedback: feedbackText }
                        : app
                )
            );

            setFeedbackApp(null);
            setFeedbackText("");
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to save feedback");
        }
    };

    return (
        <div className="mt-10">
            <h2 className="text-3xl font-bold mb-6">Manage Applications</h2>

            {/* ================= DESKTOP TABLE ================= */}
            <div className="hidden md:block bg-white rounded-xl shadow overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Applicant</th>
                            <th>Email</th>
                            <th>University</th>
                            <th>Feedback</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {applications.map(app => (
                            <tr key={app._id}>
                                <td>{app.userName || "N/A"}</td>
                                <td>{app.userEmail}</td>
                                <td>{app.universityName}</td>

                                {/* FEEDBACK COLUMN */}
                                <td className="max-w-xs">
                                    {app.feedback ? (
                                        <span className="text-sm text-gray-700">
                                            {app.feedback}
                                        </span>
                                    ) : (
                                        <span className="text-xs text-gray-400 italic">
                                            No feedback yet
                                        </span>
                                    )}
                                </td>

                                <td>
                                    <span className="badge badge-outline">
                                        {app.applicationStatus}
                                    </span>
                                </td>

                                <td>
                                    <span
                                        className={`badge ${app.paymentStatus === "paid"
                                            ? "badge-success"
                                            : "badge-error"
                                            }`}
                                    >
                                        {app.paymentStatus}
                                    </span>
                                </td>

                                {/* ================= ACTIONS ================= */}
                                <td className="w-60 space-y-2">
                                    {/* Row 1 */}
                                    <div className="grid grid-cols-2 gap-2">
                                        <button
                                            onClick={() => setDetailsApp(app)}
                                            className="btn btn-xs w-full bg-primary"
                                        >
                                            Details
                                        </button>

                                        <button
                                            onClick={() => {
                                                setFeedbackApp(app);
                                                setFeedbackText(app.feedback || "");
                                            }}
                                            className="btn btn-xs btn-info w-full"
                                        >
                                            Feedback
                                        </button>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="grid grid-cols-2 gap-2">
                                        <select
                                            className="select select-xs select-bordered w-full"
                                            value={app.applicationStatus}
                                            disabled={isRejected(app)}
                                            onChange={e =>
                                                handleStatusChange(
                                                    app._id,
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option
                                                value="pending"
                                                disabled={app.applicationStatus !== "pending"}
                                            >
                                                Pending
                                            </option>
                                            <option value="processing">Processing</option>
                                            <option value="completed">Completed</option>
                                        </select>

                                        <button
                                            onClick={() => handleReject(app._id)}
                                            disabled={isRejected(app)}
                                            className="btn btn-xs btn-error w-full"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ================= MOBILE CARD VIEW ================= */}
            <div className="md:hidden flex flex-col items-center gap-4">
                {applications.map(app => (
                    <div
                        key={app._id}
                        className="bg-white p-6 rounded-xl shadow w-full max-w-sm space-y-3"
                    >
                        <p className="font-bold">{app.userName || "N/A"}</p>
                        <p className="text-sm">{app.userEmail}</p>
                        <p>{app.universityName}</p>

                        <p className="text-sm">
                            <b>Feedback:</b>{" "}
                            {app.feedback || (
                                <span className="italic text-gray-400">
                                    No feedback yet
                                </span>
                            )}
                        </p>

                        <div className="flex gap-2">
                            <span className="badge badge-outline">
                                {app.applicationStatus}
                            </span>
                            <span
                                className={`badge ${app.paymentStatus === "paid"
                                    ? "badge-success"
                                    : "badge-error"
                                    }`}
                            >
                                {app.paymentStatus}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <button
                                onClick={() => setDetailsApp(app)}
                                className="btn btn-sm w-full bg-primary"
                            >
                                Details
                            </button>

                            <button
                                onClick={() => {
                                    setFeedbackApp(app);
                                    setFeedbackText(app.feedback || "");
                                }}
                                className="btn btn-sm btn-info w-full"
                            >
                                Feedback
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                        <select
                            className="select select-sm select-bordered w-full"
                            value={app.applicationStatus}
                            disabled={isRejected(app)}
                            onChange={e =>
                                handleStatusChange(app._id, e.target.value)
                            }
                        >
                            <option
                                value="pending"
                                disabled={app.applicationStatus !== "pending"}
                            >
                                Pending
                            </option>
                            <option value="processing">Processing</option>
                            <option value="completed">Completed</option>
                        </select>

                        <button
                            onClick={() => handleReject(app._id)}
                            disabled={isRejected(app)}
                            className="btn btn-sm btn-error w-full"
                        >
                            Cancel
                        </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= DETAILS MODAL ================= */}
            {detailsApp && (
                <dialog open className="modal modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-4">
                            Application Details
                        </h3>

                        {/* Applicant Info */}
                        <div className="space-y-1 mb-4 bg-base-300 p-3 rounded-lg">
                            <p><b>Applicant Name:</b> {detailsApp.userName}</p>
                            <p><b>Email:</b> {detailsApp.userEmail}</p>
                        </div>

                        {/* Scholarship Info */}
                        <div className="space-y-1 bg-base-300 p-3 rounded-lg">
                            <p><b>University:</b> {detailsApp.universityName}</p>
                            <p><b>Scholarship Category:</b> {detailsApp.scholarshipCategory}</p>
                            <p><b>Degree:</b> {detailsApp.degree}</p>
                            <p><b>Application Fee:</b> ${detailsApp.applicationFees}</p>
                            <p><b>Service Charge:</b> ${detailsApp.serviceCharge}</p>
                            <p><b>Application Status:</b> {detailsApp.applicationStatus}</p>
                            <p><b>Payment Status:</b> {detailsApp.paymentStatus}</p>
                        </div>

                        <div className="modal-action justify-end">
                            <button
                                className="btn btn-md bg-primary"
                                onClick={() => setDetailsApp(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </dialog>
            )}


            {/* ================= FEEDBACK MODAL ================= */}
            {feedbackApp && (
                <dialog open className="modal modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-3">
                            Write Feedback
                        </h3>

                        <textarea
                            className="textarea textarea-bordered w-full"
                            rows="4"
                            value={feedbackText}
                            onChange={e => setFeedbackText(e.target.value)}
                        />

                        <div className="modal-action grid grid-cols-2 gap-2">
                            <button
                                className="btn btn-primary w-full"
                                onClick={saveFeedback}
                            >
                                Save
                            </button>
                            <button
                                className="btn w-full"
                                onClick={() => setFeedbackApp(null)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default ManageApplications;
