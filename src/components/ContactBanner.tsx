export default function ContactBanner() {
    return (
        <section className="relative z-20 bg-white text-center">
            <div className="bg-brand-gold-pale py-20 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6 text-left">

                <div>
                    <h3 className="text-2xl font-bold text-[#DCA54A] mb-2">
                        Contact Us
                    </h3>

                    <p className="text-gray-700 max-w-3xl">
                        Whether you're inquiring about our services, requesting support, or exploring a potential partnership, we'd love to hear from you.
                    </p>
                </div>

                <button className="bg-brand-gold hover:bg-brand-gold-light text-slate-900 font-bold px-8 py-3 rounded shadow">
                    CONTACT US
                </button>
            </div>
        </section>
    );
}