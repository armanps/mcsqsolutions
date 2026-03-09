export default function Hero() {
    return (
        <main className="relative z-10 px-12 md:px-24 
    /* Use min-h-screen to ensure background coverage, but flex to center */
    min-h-screen flex flex-col justify-center 
    /* Reduce top padding on smaller heights so the button stays visible */
    pt-20 pb-12 md:pt-0 md:pb-0 max-w-5xl">

            <h3 className="text-brand-gold-pale font-semibold text-base md:text-lg mb-2 md:mb-6 uppercase tracking-wider">
                Consult. Create. Secure.
            </h3>

            {/* Using clamp or smaller mobile text sizes prevents the title from pushing the button down */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 md:mb-10 tracking-tight text-white">
                Transform Your Technology<br />
                <span className="text-brand-gold">Into a Strategic Advantage</span>
            </h1>

            {/* Limit paragraph length on small screens to save vertical space */}
            <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-12 max-w-xl md:max-w-2xl leading-relaxed opacity-90">
                Tailored IT consulting and managed services to help your business innovate, grow, and lead.
            </p>

            <div>
                <button className="group relative px-8 py-3 md:px-10 md:py-4 bg-brand-gold hover:bg-brand-gold-light text-slate-900 font-bold rounded-md transition overflow-hidden shadow-lg">
                    <span className="relative z-10">CLICK HERE</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </button>
            </div>
        </main>
    );
}