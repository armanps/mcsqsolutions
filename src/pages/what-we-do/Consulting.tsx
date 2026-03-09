import React from 'react';
import { 
  Lightbulb, 
  Settings, 
  TrendingUp, 
  BarChart, 
  Cpu, 
  Zap, 
  CheckCircle2 
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactBanner from '../../components/ContactBanner';

const ConsultingCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-slate-800/50 p-10 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-all group">
    <div className="mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const ConsultingPage: React.FC = () => {
  return (    
    <>
    <Navbar />
    <div className="min-h-screen bg-white font-sans text-gray-900">        
      {/* Hero Section */}
      <header className="relative bg-[#0a0f1a] py-28 px-6 text-center text-white overflow-hidden">
        {/* Subtle animated background element overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            IT Consulting
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Transforming technology from a reactive expense into a proactive strategic asset.
          </p>
        </div>
      </header>

      {/* What is IT Consulting Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Strategic Vision for Digital Excellence
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              In today's landscape, technology is the engine of your business. Without a clear strategy, it can become a burden. Our consulting services align every IT decision with your core business objectives.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We act as an extension of your leadership team, offering an unbiased perspective on your current IT landscape. We don't just recommend solutions; we build a comprehensive roadmap for your unique challenges.
            </p>
            <div className="pt-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:-translate-y-1">
                Schedule a Consultation
              </button>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-blue-600" /> Our Approach
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">01.</span>
                  <span><strong>Assess:</strong> Deep dive into current workflows and systems.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">02.</span>
                  <span><strong>Align:</strong> Ensuring tech strategy supports long-term business goals.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-blue-600">03.</span>
                  <span><strong>Execute:</strong> Actionable plans with clear milestones and budgets.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Pillars */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Help Your Business</h2>
            <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <ConsultingCard 
              icon={<Lightbulb className="text-yellow-400" size={40} />}
              title="Strategic IT Planning"
              description="Technology Assessment and Goal Alignment to create a blueprint for your long-term vision."
            />
            <ConsultingCard 
              icon={<Settings className="text-blue-400" size={40} />}
              title="System Implementation"
              description="Overseeing complex migrations and software/hardware selection with minimal disruption."
            />
            <ConsultingCard 
              icon={<TrendingUp className="text-green-400" size={40} />}
              title="Digital Transformation"
              description="Embedding emerging tech like AI and cloud computing to automate processes and innovate."
            />
          </div>
        </div>
      </section>

      {/* Feature Focus Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-slate-800">Key Focus Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <BarChart />, label: "Data Analytics" },
            { icon: <Zap />, label: "Process Automation" },
            { icon: <Cpu />, label: "Infrastructure Optimization" },
            { icon: <TrendingUp />, label: "Change Management" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-white border border-slate-100 rounded-xl hover:bg-blue-50 transition-colors group">
              <div className="mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="font-bold text-slate-700">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-brand to-brand-dark rounded-[2rem] p-12 text-white text-center shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate and Grow?</h2>
          <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
            Partner with expert guides who handle the IT challenges so you can focus on leading your industry.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-brand-gold-light text-brand px-10 py-4 rounded-full font-bold text-lg hover:bg-brand-gold transition-all">
              Contact Our Consultants
            </button>
          </div>
        </div>
      </section>
    </div>
                
                <Footer />
    </>
  );
};

export default ConsultingPage;