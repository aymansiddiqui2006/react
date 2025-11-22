function Contact() {
    return (
        <>

            <main className="min-h-screen bg-gray-100 flex justify-center items-center p-10">

                <div className="bg-white shadow-lg shadow-gray-400 rounded-lg p-10 w-full max-w-5xl flex justify-between items-center">

                    {/* Left: Logo */}
                    <div className="flex flex-col items-start">
                        <span className="text-gray-500 text-[40px] leading-none">your</span>
                        <span className="text-orange-500 text-[40px] leading-none">logo</span>

                        <p className="mt-5 text-gray-600 text-lg">
                            We’d love to hear from you.
                            <br />
                            Reach out anytime!
                        </p>

                        <div className="mt-6 space-y-2">
                            <p className="text-lg text-gray-700">
                                📍 Kurla, Mumbai, India
                            </p>
                            <p className="text-lg text-gray-700">
                                📞 +91 98765 43210
                            </p>
                            <p className="text-lg text-gray-700">
                                ✉️ contact@example.com
                            </p>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="w-1/2">
                        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-right">Contact Us</h2>

                        <form className="flex flex-col gap-4">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />

                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-orange-600 text-white py-2 px-4 rounded-md font-semibold hover:scale-95 shadow-md"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>
            </main>

        </>
    )
}

export default Contact