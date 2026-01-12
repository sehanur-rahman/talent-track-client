import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const roles = ["Student", "Moderator", "Admin"];

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("All");
    const [loading, setLoading] = useState(true);
    const [deleteUser, setDeleteUser] = useState(null);

    useEffect(() => {
        axiosSecure
            .get("/users")
            .then(res => setUsers(res.data))
            .catch(() => toast.error("Failed to load users"))
            .finally(() => setLoading(false));
    }, [axiosSecure]);

    const updateRole = async (id, role) => {
        try {
            await axiosSecure.patch(`/users/role/${id}`, { role });
            toast.success(`Role updated to ${role}`);
            setUsers(prev =>
                prev.map(u => (u._id === id ? { ...u, role } : u))
            );
        } catch {
            toast.error("Failed to update role");
        }
    };

    const confirmDelete = async () => {
        try {
            await axiosSecure.delete(`/users/${deleteUser._id}`);
            toast.success("User deleted");
            setUsers(prev =>
                prev.filter(u => u._id !== deleteUser._id)
            );
        } catch {
            toast.error("Delete failed");
        } finally {
            setDeleteUser(null);
        }
    };

    const filteredUsers =
        filter === "All" ? users : users.filter(u => u.role === filter);

    if (loading) {
        return (
            <div className="flex justify-center py-10">
                <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
        );
    }

    return (
        <div>
            {/* ===== Header ===== */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 mt-10">
                <h2 className="text-3xl font-bold">Manage Users</h2>

                {/* Filter Right Side (Desktop) */}
                <select
                    className="select select-bordered w-full md:w-56"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                >
                    <option value="All">All Roles</option>
                    {roles.map(r => (
                        <option key={r} value={r}>{r}</option>
                    ))}
                </select>
            </div>

            {/* ===== Table ===== */}
            <div className="overflow-x-auto bg-base-200 rounded-xl shadow">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>

                            {/* Hide Email on Mobile */}
                            <th className="hidden md:table-cell">
                                Email
                            </th>

                            <th>Role</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredUsers.map(user => (
                            <tr key={user._id}>
                                <td className="font-medium">
                                    {user.name || "N/A"}
                                </td>

                                {/* Email hidden on mobile */}
                                <td className="hidden md:table-cell">
                                    {user.email}
                                </td>

                                <td>
                                    <span className="badge badge-primary">
                                        {user.role}
                                    </span>
                                </td>

                                {/* Actions */}
                                <td>
                                    <div className="flex flex-col md:flex-row gap-2 justify-center">
                                        {roles.map(r => (
                                            <button
                                                key={r}
                                                disabled={user.role === r}
                                                onClick={() =>
                                                    updateRole(user._id, r)
                                                }
                                                className={`btn btn-xs ${
                                                    user.role === r
                                                        ? "btn-disabled"
                                                        : "btn-outline"
                                                }`}
                                            >
                                                {r}
                                            </button>
                                        ))}

                                        <button
                                            onClick={() => setDeleteUser(user)}
                                            className="btn btn-xs btn-error"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredUsers.length === 0 && (
                    <p className="text-center py-6 text-gray-500">
                        No users found
                    </p>
                )}
            </div>

            {/* ===== Delete Confirmation Modal ===== */}
            {deleteUser && (
                <dialog className="modal modal-open">
                    <div className="modal-box text-center">
                        <h3 className="text-xl font-bold text-red-600">
                            Delete User
                        </h3>

                        <p className="py-4">
                            Are you sure you want to delete
                            <br />
                            <span className="font-semibold">
                                {deleteUser.email}
                            </span>
                            ?
                        </p>

                        <div className="modal-action justify-center gap-4">
                            <button
                                onClick={() => setDeleteUser(null)}
                                className="btn btn-outline"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="btn btn-error"
                            >
                                Yes, Delete
                            </button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default ManageUsers;
