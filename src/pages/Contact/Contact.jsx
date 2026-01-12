const Contact = () => {
    return (
        <section className="py-20 bg-base-200">
            <div className="max-w-5xl mx-auto px-4">

                <h1 className="text-4xl font-bold text-center mb-6">
                    Contact Us
                </h1>

                <p className="text-center text-base-content/70 mb-12">
                    Have questions or need support? Reach out to us anytime.
                </p>

                <div className="grid md:grid-cols-2 gap-10">
                    
                    {/* Contact Info */}
                    <div className="space-y-4">
                        <p><strong>Email:</strong> support@scholarstream.com</p>
                        <p><strong>Phone:</strong> +880 1234 567 890</p>
                        <p><strong>Address:</strong> Dhaka, Bangladesh</p>
                    </div>

                    {/* Contact Form (UI only – professional) */}
                    <form className="bg-base-100 p-6 rounded-xl shadow border space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="textarea textarea-bordered w-full"
                        ></textarea>

                        <button className="btn btn-primary w-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
