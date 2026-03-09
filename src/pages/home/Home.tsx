import WhatWeDo from './WhatWeDo';
import Footer from "../../components/Footer";
import ContactBanner from "../../components/ContactBanner"
import Navbar from "../../components/Navbar";
import Hero from "./Hero";
import ChallengeSection from "./ChallengeSection";

const Background = () => (
    <div className="fixed inset-0 z-0 bg-gradient-to-br from-[#00304a] via-[#001d2d] to-[#000e16]">
        {[1, 2, 3].map((i) => (
            <div
                key={i}
                className={`absolute inset-0 animate-flow-${i}`}
                style={{
                    backgroundImage: 'url(/Zoom_Virtual_Background_Raw.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: i === 3 ? 'center' : 'right center',
                    opacity: i === 1 ? 0.35 : i === 2 ? 0.25 : 0.2,
                    mixBlendMode: i === 2 ? 'screen' : i === 3 ? 'overlay' : 'normal',
                }}
            />
        ))}
    </div>
);

export default function Home() {
    return (
        <div className="relative bg-slate-900 selection:bg-brand-gold/30">
            {/* Background stays fixed and covers the whole viewport */}
            <Background />

            {/* Hero Wrapper: Forces the first view to be exactly full screen */}
            <div className="relative min-h-screen flex flex-col">
                <Navbar />
                <Hero />
            </div>

            {/* Content Section: This will now only appear when you scroll down */}
            <ChallengeSection />
            <WhatWeDo />
            <ContactBanner />
            <Footer />
        </div>
    );
}