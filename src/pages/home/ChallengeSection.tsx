
export default function ChallengeSection() {
    return (
        <section className="relative z-20 bg-white py-24 px-12 md:px-24 text-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-brand text-3xl md:text-5xl font-bold mb-4">
                        The Challenge of Modern Technology
                    </h2>
                    <p className="text-brand text-xl md:text-2xl font-semibold">
                        Why Technology Should Empower—Not Limit—Business
                    </p>
                    <div className="w-24 h-1 bg-gray-200 mx-auto mt-8" />
                </div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                        <p>In today’s relentlessly accelerating digital landscape, technology is no longer a mere tool; it’s the very foundation of business innovation and growth. However, for many organizations, keeping up with this rapid pace can transform a powerful asset into a source of immense frustration.</p>

                        <p>Dated systems, inefficient workflows, and security vulnerabilities can hinder progress and stifle potential.</p>

                        <hr className="border-gray-100" />
                        <p>
                            At <span className="font-bold text-brand">MCSquared Solutions</span>, we believe your technology should be a competitive advantage, a strategic partner that propels your business forward. We are more than just a service provider; we are your expert guides through the complexities of the digital world. By offering tailored IT consulting and comprehensive managed services, we empower businesses like yours to not only navigate but thrive in this ever-changing environment. We handle the IT challenges so you can focus on what you do best: innovating, growing, and leading your industry.
                        </p>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                        <img src="src/assets/team-working.webp" alt="Team collaborating" className="w-full h-full object-cover" />
                    </div>
                </div>

                <div className="text-center mt-16">
                    <button className="bg-brand-gold hover:bg-brand-gold-light text-slate-900 px-10 py-4 rounded font-bold transition-all uppercase shadow-lg">
                        Book a Meeting
                    </button>
                </div>
            </div>
        </section>

    );
}