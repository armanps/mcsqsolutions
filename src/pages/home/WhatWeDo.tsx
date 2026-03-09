import { Lightbulb, Lock, Code, Wrench } from "lucide-react";

const services = [
    { title: "Consulting", icon: Lightbulb },
    { title: "Cyber Security", icon: Lock },
    { title: "Software & Applications", icon: Code },
    { title: "Support & Maintenance", icon: Wrench },
];

export default function WhatWeDo() {
    return (
        <section className="relative z-30 bg-[#FFFDE5] py-24 px-12 md:px-24 text-center">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#0b3c4c] mb-4">
                    What We Do
                </h2>

                <p className="text-gray-500 max-w-2xl mx-auto mb-16">
                    We provide the expertise and tools you need to secure,
                    optimize, and grow your digital operations.
                </p>

                {/* Services */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
                    {services.map((service, i) => {
                        const Icon = service.icon;

                        return (
                            <div key={i} className="flex flex-col items-center gap-4">
                                <div className="w-20 h-20 rounded-full bg-brand-gold flex items-center justify-center text-white">
                                    <Icon size={32} />
                                </div>

                                <h4 className="font-semibold text-[#0b3c4c]">
                                    {service.title}
                                </h4>
                            </div>
                        );
                    })}
                </div>

                {/* Button */}
                <button className="bg-brand-gold hover:bg-brand-gold-light text-slate-900 font-bold px-8 py-3 rounded shadow">
                    EXPLORE MORE
                </button>
            </div>


        </section>
    );
}