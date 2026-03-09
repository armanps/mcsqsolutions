export default function About() {
    return (
        <section className="bg-mcNavy text-white py-20 px-6 md:px-12 font-bold">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Branding/Visual Side */}
                <div className="flex justify-center items-center">
                    <div className="relative w-64 h-64 border-4 border-mcGold rounded-full flex items-center justify-center">
                        <span className="text-9xl text-mcGold">M</span>
                        {/* Minimalist representation of the logo  */}
                        <div className="absolute -bottom-4 bg-mcGold text-mcNavy px-4 py-1 rounded">
                            EST. 2026
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl uppercase tracking-tighter text-mcGold">
                        MCSquared Solutions
                    </h2>

                    <p className="text-mcGold-pale leading-relaxed text-lg">
                        At MCSquared Solutions, we bridge the gap between complex technical challenges
                        and elegant, high-performance digital results. Our approach is rooted in
                        precision—calculating the best path forward for your brand's evolution.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 mt-2 bg-mcGold-light rounded-full" />
                            <p className="flex-1">
                                Innovative front-end architectures powered by React and TypeScript.
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 mt-2 bg-mcGold-light rounded-full" />
                            <p className="flex-1">
                                Seamless digital experiences designed with Montserrat precision[cite: 8].
                            </p>
                        </div>
                    </div>

                    <button className="mt-8 bg-mcGold hover:bg-mcGold-light text-mcNavy px-8 py-3 rounded-sm transition-colors duration-300">
                        WORK WITH US
                    </button>
                </div>
            </div>
        </section>
    );
}