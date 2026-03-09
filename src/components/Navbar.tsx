import { useState } from "react";
import logo from "../assets/logo.png";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="relative z-50 flex items-center justify-between px-6 py-4 md:px-24 md:py-8">

            <div className="flex items-center gap-3 md:gap-4">
                <div className="w-20 md:w-20 flex items-center justify-center scale-110">
                    <img
                        src={logo}
                        alt="MCSquared Logo"
                        className="h-auto w-full object-contain"
                    />
                </div>

                <div className="flex flex-col leading-tight">
                    <h1 className="text-sm font-bold tracking-wider text-brand-gold-pale md:text-lg">
                        MCSquared <span className="block sm:inline">Solutions</span>
                    </h1>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded border border-brand-gold-pale text-brand-gold-pale md:hidden"
            >
                {isMenuOpen ? "✕" : "☰"}
            </button>

            {/* Desktop Nav */}
            <div className="hidden items-center gap-10 text-[16px] font-medium text-slate-100 md:flex">
                <a href="#">Home</a>

                <div className="relative group">
                    <button className="flex items-center gap-1">
                        What We Do
                        <ChevronDown className="w-4 h-4" />
                    </button>

                    <div className="absolute left-0 top-full mt-2 w-64 rounded-md bg-[#00304a] p-4 shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
                        <div className="flex flex-col gap-6 text-sm text-brand-gold-pale">
                            <Link to="/what-we-do/consulting">Consulting</Link>
                            <Link to="/what-we-do/cyber-security">Cyber Security</Link>
                            <Link to="/what-we-do/software-apps">Software and Applications</Link>
                            <Link to="/what-we-do/support-maintenance">Support and Maintenance</Link>
                        </div>
                    </div>
                </div>

                <Link to="/about">About</Link>
                <a href="#">Contact</a>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute left-0 top-full w-full bg-[#00304a] p-6 shadow-xl md:hidden">
                    <div className="flex flex-col gap-6 text-brand-gold-pale">
                        <Link to="/">Home</Link>

                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex justify-between"
                        >
                            What We Do
                        </button>

                        {isDropdownOpen && (
                            <div className="ml-4 flex flex-col gap-4 text-sm opacity-80">
                                <a href="#">Consulting</a>
                                <a href="#">Cyber Security</a>
                                <a href="#">Software and Applications</a>
                                <a href="#">Support and Maintenance</a>
                            </div>
                        )}

                        <a href="#">About</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    );
}