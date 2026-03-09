import logo from "../assets/transparentlogo.png";
import { Facebook, Linkedin, ChevronUp } from "lucide-react";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative bg-[#003b55] text-white">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-12 md:px-24 py-20 grid gap-12 md:grid-cols-3">

                {/* Left Column */}
                <div className="space-y-6">
                    <img src={logo} alt="MCSquared Solutions" />

                    <p className="text-gray-300 text-center">Consult. Create. Secure.</p>

                    <div className="flex gap-5">
                        <Facebook className="w-6 h-6 cursor-pointer hover:text-brand-gold transition" />
                        <Linkedin className="w-6 h-6 cursor-pointer hover:text-brand-gold transition" />
                    </div>
                </div>

                {/* Company Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-6">Company</h3>

                    <ul className="space-y-3 text-gray-300">
                        <li className="hover:text-brand-gold cursor-pointer">Home</li>
                        <li className="hover:text-brand-gold cursor-pointer">What We Do</li>

                        <ul className="ml-4 text-sm space-y-2 opacity-80">
                            <li>Consulting</li>
                            <li>Cyber Security</li>
                            <li>Software and Applications</li>
                            <li>Support and Maintenance</li>
                        </ul>

                        <li className="hover:text-brand-gold cursor-pointer">About</li>
                        <li className="hover:text-brand-gold cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>

                    <ul className="space-y-3 text-gray-300">
                        <li>Address</li>
                        <li>info@example.com</li>
                        <li>0999999999</li>
                        <li>+63 999999999</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#111] text-center py-6 text-gray-300 text-sm">
                Copyright © {year} MCSquared Solutions
            </div>

            {/* Scroll To Top */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="absolute right-6 bottom-10 bg-[#004b6b] hover:bg-brand-gold p-3 rounded-full shadow-lg transition"
            >
                <ChevronUp size={20} />
            </button>

        </footer>
    );
}