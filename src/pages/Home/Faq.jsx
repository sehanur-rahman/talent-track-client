const Faq = () => {
    return (
        <section className=" py-16  rounded-3xl">
            <div className="max-w-4xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                        Frequently Asked Questions (FAQ)
                    </h2>
                    <p className="text-base-content/70 mt-3 text-sm md:text-base">
                        Everything you need to know about scholarships, applications, and payments on ScholarStream.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">

                    {/* Q1 */}
                    <div className="collapse collapse-arrow bg-base-200 rounded-xl border">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-base-content">
                            How does ScholarStream help students find scholarships?
                        </div>
                        <div className="collapse-content text-base-content/70 text-sm leading-relaxed">
                            ScholarStream provides a centralized platform where students can browse verified scholarships
                            from universities worldwide, filter by degree, country, and category, and apply easily without
                            missing deadlines.
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="collapse collapse-arrow bg-base-200 rounded-xl border">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-base-content">
                            Is registration free for students?
                        </div>
                        <div className="collapse-content text-base-content/70 text-sm leading-relaxed">
                            Yes, creating an account on ScholarStream is completely free. Students only pay application
                            fees when applying for specific scholarships that require payment.
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="collapse collapse-arrow bg-base-200 rounded-xl border">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-base-content">
                            How does the scholarship application payment work?
                        </div>
                        <div className="collapse-content text-base-content/70 text-sm leading-relaxed">
                            Payments are securely processed using Stripe. After successful payment, your application is
                            submitted and marked as paid. If payment fails, you can retry
                            from your dashboard.
                        </div>
                    </div>

                    {/* Q4 */}
                    <div className="collapse collapse-arrow bg-base-200 rounded-xl border">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-base-content">
                            Who reviews my scholarship application?
                        </div>
                        <div className="collapse-content text-base-content/70 text-sm leading-relaxed">
                            Applications are reviewed by platform moderators. They can provide feedback, update application
                            status (Pending → Processing → Completed), or reject applications if needed.
                        </div>
                    </div>

                    {/* Q5 */}
                    <div className="collapse collapse-arrow bg-base-200 rounded-xl border">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-base-content">
                            Can I edit or delete my application after submission?
                        </div>
                        <div className="collapse-content text-base-content/70 text-sm leading-relaxed">
                            You can edit or delete your application only while its status is pending.
                            Once it moves to processing or completed, changes are no longer allowed.
                        </div>
                    </div>

                    {/* Q6 */}
                    <div className="collapse collapse-arrow bg-base-200 rounded-xl border">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-base-content">
                            When can I add a review for a scholarship?
                        </div>
                        <div className="collapse-content text-base-content/70 text-sm leading-relaxed">
                            Students can add reviews only after their application status is marked as
                            completed. This ensures authentic and meaningful feedback.
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Faq;
