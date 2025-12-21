import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const ManageScholarships = () => {
    const axiosSecure = useAxiosSecure();

    const [scholarships, setScholarships] = useState([]);
    const [editing, setEditing] = useState(null);
    const [deleteTarget, setDeleteTarget] = useState(null);

    // 🔹 Load all scholarships (Admin)
    useEffect(() => {
        axiosSecure.get("/scholarships/admin/all").then(res => {
            setScholarships(res.data);
        });
    }, [axiosSecure]);

    // 🔹 Delete
    const confirmDelete = async () => {
        try {
            await axiosSecure.delete(`/scholarships/${deleteTarget._id}`);
            setScholarships(prev =>
                prev.filter(s => s._id !== deleteTarget._id)
            );
            toast.success("Scholarship deleted");
        } catch {
            toast.error("Delete failed");
        } finally {
            setDeleteTarget(null);
        }
    };

    // 🔹 Update
    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;

        const updatedData = {
            scholarshipName: form.scholarshipName.value,
            universityName: form.universityName.value,
            universityImage: form.universityImage.value,
            universityCountry: form.country.value,
            universityCity: form.city.value,
            subjectCategory: form.subjectCategory.value,
            degree: form.degree.value,
            scholarshipCategory: form.scholarshipCategory.value,
            applicationFees: Number(form.applicationFees.value),
            serviceCharge: Number(form.serviceCharge.value),
            applicationDeadline: form.deadline.value,
        };

        try {
            await axiosSecure.patch(
                `/scholarships/${editing._id}`,
                updatedData
            );

            setScholarships(prev =>
                prev.map(s =>
                    s._id === editing._id ? { ...s, ...updatedData } : s
                )
            );

            toast.success("Scholarship updated");
            setEditing(null);
        } catch {
            toast.error("Update failed");
        }
    };

    return (
        <div className="max-w-6xl mx-auto mt-10 px-2 md:px-0">
            <h2 className="text-3xl font-bold mb-6">Manage Scholarships</h2>

            {/* ================= TABLE ================= */}
            <div className="overflow-x-auto bg-white rounded-xl shadow">
                <table className="table w-full">
                    <thead className="bg-base-200">
                        <tr>
                            <th>University</th>

                            {/* Desktop only */}
                            <th className="hidden md:table-cell">
                                Scholarship
                            </th>
                            <th className="hidden md:table-cell">
                                Category
                            </th>
                            <th className="hidden md:table-cell">
                                Fees
                            </th>

                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {scholarships.map(s => (
                            <tr key={s._id}>
                                {/* ✅ Always visible */}
                                <td>{s.universityName}</td>

                                {/* ❌ Hidden on mobile */}
                                <td className="hidden md:table-cell">
                                    {s.scholarshipName}
                                </td>
                                <td className="hidden md:table-cell">
                                    {s.scholarshipCategory}
                                </td>
                                <td className="hidden md:table-cell">
                                    ${s.applicationFees}
                                </td>

                                {/* ✅ Actions always visible */}
                                <td className="flex gap-2 justify-center">
                                    <button
                                        onClick={() => setEditing(s)}
                                        className="btn btn-xs btn-warning"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => setDeleteTarget(s)}
                                        className="btn btn-xs btn-error"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ================= UPDATE MODAL (CENTERED) ================= */}
            {editing && (
                <dialog open className="modal modal-middle">
                    <form onSubmit={handleUpdate} className="modal-box space-y-3">
                        <h3 className="font-bold text-xl">Edit Scholarship</h3>

                        <input
                            name="scholarshipName"
                            defaultValue={editing.scholarshipName}
                            className="input input-bordered w-full"
                            placeholder="Scholarship Name"
                            required
                        />

                        <input
                            name="universityName"
                            defaultValue={editing.universityName}
                            className="input input-bordered w-full"
                            placeholder="University Name"
                            required
                        />

                        <input
                            name="universityImage"
                            defaultValue={editing.universityImage}
                            className="input input-bordered w-full"
                            placeholder="Image URL"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <input
                                name="country"
                                defaultValue={editing.universityCountry}
                                className="input input-bordered w-full"
                                placeholder="Country"
                            />
                            <input
                                name="city"
                                defaultValue={editing.universityCity}
                                className="input input-bordered w-full"
                                placeholder="City"
                            />
                        </div>

                        <input
                            name="subjectCategory"
                            defaultValue={editing.subjectCategory}
                            className="input input-bordered w-full"
                            placeholder="Subject Category"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <select
                                name="degree"
                                defaultValue={editing.degree}
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="">Select Degree</option>
                                <option>Bachelor</option>
                                <option>Masters</option>
                                <option>PhD</option>
                                <option>Diploma</option>
                            </select>

                            <select
                                name="scholarshipCategory"
                                defaultValue={editing.scholarshipCategory}
                                className="select select-bordered w-full"
                                required
                            >
                                <option value="">Scholarship Category</option>
                                <option>Full Fund</option>
                                <option>Partial Fund</option>
                                <option>Self Fund</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <input
                                name="applicationFees"
                                type="number"
                                defaultValue={editing.applicationFees}
                                className="input input-bordered w-full"
                                placeholder="Application Fees"
                                required
                            />
                            <input
                                name="serviceCharge"
                                type="number"
                                defaultValue={editing.serviceCharge}
                                className="input input-bordered w-full"
                                placeholder="Service Charge"
                                required
                            />
                        </div>

                        <input
                            name="deadline"
                            type="date"
                            defaultValue={editing.applicationDeadline}
                            className="input input-bordered w-full"
                            required
                        />

                        <div className="modal-action">
                            <button className="btn btn-primary">Save</button>
                            <button
                                type="button"
                                onClick={() => setEditing(null)}
                                className="btn"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </dialog>
            )}

            {/* ================= DELETE MODAL (CENTERED) ================= */}
            {deleteTarget && (
                <dialog open className="modal modal-middle">
                    <div className="modal-box text-center">
                        <h3 className="font-bold text-lg text-error">
                            Delete Scholarship?
                        </h3>
                        <p className="py-4">
                            Are you sure you want to delete <br />
                            <strong>{deleteTarget.scholarshipName}</strong>?
                        </p>

                        <div className="modal-action justify-center">
                            <button
                                onClick={confirmDelete}
                                className="btn btn-error"
                            >
                                Yes, Delete
                            </button>
                            <button
                                onClick={() => setDeleteTarget(null)}
                                className="btn"
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

export default ManageScholarships;
