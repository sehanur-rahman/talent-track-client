const Faq = () => {
    return (
        <section className="py-16 rounded-3xl">
            <div className="max-w-4xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-content">
                        Frequently Asked Questions (FAQ)
                    </h2>
                    <p className="text-base-content/70 mt-3 text-sm md:text-base">
                        Everything you need to know about TalentTrack, talent hunt programs, player registration, and application process.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">

                    {/* Q1 */}
                    <div className="collapse collapse-arrow bg-base-200 rounded-xl border">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-base-content">
                            What is TalentTrack and how does it work?
                        </div>
                        <div className="collapse-content text-base-content/70 text-sm leading-relaxed">
                            TalentTrack is a sports talent discovery platform that connects aspiring football and cricket players
                            with professional academies, clubs, and talent evaluators. Players can explore talent hunt programs,
                            apply online, and track their application status from one place.
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="collapse collapse-arrow bg-base-200 rounded-xl border">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-base-content">
                            Is player registration free?
                        </div>
                        <div className="collapse-content text-base-content/70 text-sm leading-relaxed">
                            Yes, creating a TalentTrack account is completely free. Registration fees are only required
                            when applying for specific talent hunt programs that charge an application fee.
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="collapse collapse-arrow bg-base-200 rounded-xl border">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-base-content">
                            How do I apply for a talent hunt program?
                        </div>
                        <div className="collapse-content text-base-content/70 text-sm leading-relaxed">
                            Browse available talent hunt programs, view the program details, complete the application,
                            and pay the registration fee securely through Stripe. Your application will then be submitted
                            for evaluation.
                        </div>
                    </div>

                    {/* Q4 */}
                    <div className="collapse collapse-arrow bg-base-200 rounded-xl border">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-base-content">
                            Who reviews my application?
                        </div>
                        <div className="collapse-content text-base-content/70 text-sm leading-relaxed">
                            Applications are reviewed by experienced Talent Evaluators. They assess player information,
                            provide professional feedback, and update the application status to Pending, Selected,
                            Rejected, or Completed.
                        </div>
                    </div>

                    {/* Q5 */}
                    <div className="collapse collapse-arrow bg-base-200 rounded-xl border">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-base-content">
                            Can I edit or withdraw my application?
                        </div>
                        <div className="collapse-content text-base-content/70 text-sm leading-relaxed">
                            Yes. Players can edit or withdraw their application while its status is still pending.
                            Once the evaluation process begins, modifications are no longer allowed.
                        </div>
                    </div>

                    {/* Q6 */}
                    <div className="collapse collapse-arrow bg-base-200 rounded-xl border">
                        <input type="checkbox" />
                        <div className="collapse-title font-semibold text-base-content">
                            When can I submit a review?
                        </div>
                        <div className="collapse-content text-base-content/70 text-sm leading-relaxed">
                            Players can submit a review after completing a talent hunt program. This helps future
                            athletes learn about academies and ensures genuine, experience-based feedback.
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Faq;