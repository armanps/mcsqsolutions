import React from 'react';
import { Shield, Lock, Activity, Users, Cloud, FileCheck, ChevronRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactBanner from '../../components/ContactBanner';

const CyberSecurityPage = () => {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Hero Section */}
      <header className="relative bg-slate-900 py-24 px-6 text-center text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Cyber Security</h1>
          <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
            Proactive protection is no longer optional—it's essential for survival and growth.
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Why Cybersecurity Consulting is Crucial</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At MCSquared Solutions, our cybersecurity consulting services are designed to be your first and strongest line of defense. We provide the expert guidance, strategic vision, and hands-on support you need to safeguard your critical assets.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The digital threat landscape is constantly evolving. From ransomware to phishing attacks, a single breach can have devastating consequences. Relying solely on off-the-shelf software is no longer enough.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors">
              Get Started
            </button>
          </div>
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Key Benefits</h3>
            <ul className="space-y-4">
              {[
                { title: "Proactive Threat Identification", desc: "Using advanced tools to conduct risk assessments and penetration testing." },
                { title: "Expertise on Demand", desc: "Immediate access to a team of certified cybersecurity professionals." },
                { title: "Compliance & Governance", desc: "Navigating complex regulations like GDPR, HIPAA, or PCI-DSS." },
                { title: "Tailored Security Strategies", desc: "Customized plans specific to your industry, size, and risk tolerance." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 bg-blue-100 p-1 rounded-full text-blue-600">
                    <ChevronRight size={16} />
                  </div>
                  <div>
                    <span className="font-bold block">{item.title}</span>
                    <span className="text-sm text-gray-500">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Comprehensive Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a full spectrum of consulting services to build, assess, and mature your security posture.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon={<Shield className="text-blue-600" size={32} />}
            title="Risk Assessments"
            desc="We evaluate your current security posture to pinpoint vulnerabilities and prioritize a roadmap for remediation."
          />
          <ServiceCard 
            icon={<Lock className="text-blue-600" size={32} />}
            title="Security Strategy"
            desc="Crafting robust, long-term security strategies that align with your business objectives and future threats."
          />
          <ServiceCard 
            icon={<Activity className="text-blue-600" size={32} />}
            title="Incident Response"
            desc="Developing and testing swift, strategic response plans to minimize damage and accelerate recovery during a breach."
          />
          <ServiceCard 
            icon={<Users className="text-blue-600" size={32} />}
            title="Employee Training"
            desc="Educating your staff on security best practices, making them an active part of your defense strategy."
          />
          <ServiceCard 
            icon={<Cloud className="text-blue-600" size={32} />}
            title="Cloud Security"
            desc="Securing your cloud environments to ensure data protection and regulatory compliance as you scale."
          />
          <ServiceCard 
            icon={<FileCheck className="text-blue-600" size={32} />}
            title="Compliance Audit"
            desc="Ensuring your organization meets industry standards and regulatory requirements through rigorous auditing."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto bg-blue-600 rounded-3xl p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-6">Ready to secure your business?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Whether you're inquiring about our services or exploring a potential partnership, we'd love to hear from you.
          </p>
          <a 
            href="tel:5853190810" 
            className="bg-brand-gold-light text-brand px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-gold transition-colors inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      {/* Footer Minimal */}
<Footer />
    </div>

                    
    </>
  );
};

const ServiceCard = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default CyberSecurityPage;