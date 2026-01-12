import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const AddScholarship = () => {
    const axiosSecure = useAxiosSecure();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.target;

        const scholarship = {
            scholarshipName: form.scholarshipName.value,
            universityName: form.universityName.value,
            universityImage: form.image.value,
            universityCountry: form.country.value,
            universityCity: form.city.value,
            universityWorldRank: Number(form.rank.value),
            subjectCategory: form.subject.value,
            scholarshipCategory: form.category.value,
            degree: form.degree.value,
            tuitionFees: form.tuition.value || null,
            applicationFees: Number(form.applicationFees.value),
            serviceCharge: Number(form.serviceCharge.value),
            applicationDeadline: form.deadline.value,
            scholarshipPostDate: form.postDate.value,
            postedUserEmail: form.email.value,
        };

        try {
            await axiosSecure.post("/scholarships", scholarship);
            toast.success("Scholarship added successfully");
            form.reset();
        } catch {
            toast.error("Failed to add scholarship");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto bg-base-300 p-8 mt-10 rounded-xl shadow">
            <h2 className="text-3xl font-bold mb-6">Add Scholarship</h2>

            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
                <input name="scholarshipName" placeholder="Scholarship Name" required className="input input-bordered" />
                <input name="universityName" placeholder="University Name" required className="input input-bordered" />
                <input name="image" placeholder="University Image URL" required className="input input-bordered" />
                <input name="country" placeholder="Country" required className="input input-bordered" />
                <input name="city" placeholder="City" required className="input input-bordered" />
                <input name="rank" placeholder="World Rank" type="number" required className="input input-bordered" />

                <select name="subject" className="select select-bordered" required>
                    <option value="">Subject Category</option>
                    <option>Science</option>
                    <option>Engineering</option>
                    <option>Business</option>
                    <option>Arts</option>
                </select>

                <select name="category" className="select select-bordered" required>
                    <option value="">Scholarship Category</option>
                    <option>Full Fund</option>
                    <option>Partial</option>
                    <option>Self-Fund</option>
                </select>

                <select name="degree" className="select select-bordered" required>
                    <option value="">Degree</option>
                    <option>Diploma</option>
                    <option>Bachelor</option>
                    <option>Masters</option>
                </select>

                <input name="tuition" placeholder="Tuition Fees (optional)" className="input input-bordered" />
                <input name="applicationFees" placeholder="Application Fees" type="number" required className="input input-bordered" />
                <input name="serviceCharge" placeholder="Service Charge" type="number" required className="input input-bordered" />
                <input name="deadline" type="date" required className="input input-bordered" />
                <input name="postDate" type="date" required className="input input-bordered" />
                <input name="email" placeholder="Posted User Email" required className="input input-bordered" />

                <button disabled={loading} className="btn btn-primary md:col-span-2">
                    {loading ? "Adding..." : "Add Scholarship"}
                </button>
            </form>
        </div>
    );
};

export default AddScholarship;
