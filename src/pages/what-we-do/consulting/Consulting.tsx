import React from "react";

interface ServiceItem {
    title: string;
    description: string;
}

const strategicPlanning: ServiceItem[] = [
    {
        title: "Technology Assessment",
        description:
            "We analyze your current IT systems, infrastructure, and workflows to identify strengths, weaknesses, and opportunities.",
    },
    {
        title: "Goal Alignment",
        description:
            "We ensure your technology strategy directly supports your business goals and operational efficiency.",
    },
    {
        title: "Roadmap Development",
        description:
            "We create a clear actionable plan with timelines, budgets, and milestones for your IT initiatives.",
    },
];

const systemIntegration: ServiceItem[] = [
    {
        title: "Software & Hardware Selection",
        description:
            "We guide you toward the right tools and technologies that fit your business needs and budget.",
    },
    {
        title: "Seamless Integration",
        description:
            "We ensure systems integrate flawlessly to avoid data silos and workflow bottlenecks.",
    },
    {
        title: "Change Management",
        description:
            "We provide training and support to ensure smooth adoption of new technologies.",
    },
];

const digitalTransformation: ServiceItem[] = [
    {
        title: "Automate Processes",
        description:
            "Reduce costs and free your team for strategic work by automating repetitive tasks.",
    },
    {
        title: "Enhance Data Capabilities",
        description:
            "Implement analytics tools that provide insights for better decision-making.",
    },
    {
        title: "Innovate & Grow",
        description:
            "Leverage emerging technologies like AI and cloud computing to stay ahead of competitors.",
    },
];

const ServiceGrid = ({ items }: { items: ServiceItem[] }) => (
    <div className="grid md:grid-cols-3 gap-8">
        {items.map((item, index) => (
            <div key={index} className="bg-white p-6 shadow rounded-lg">
                <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
            </div>
        ))}
    </div>
);

const Consulting: React.FC = () => {
    return (
        <div className="bg-white text-gray-800">

            {/* HERO */}
            <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-4xl font-bold mb-4">Consulting</h1>
                    <p className="text-lg max-w-3xl">
                        In today’s competitive landscape, technology is the engine of your business.
                        Our IT consulting services transform technology from a reactive expense
                        into a proactive asset aligned with your business goals.
                    </p>
                </div>
            </section>

            {/* WHAT IS IT CONSULTING */}
            <section className="max-w-6xl mx-auto px-6 py-16">
                <h2 className="text-3xl font-semibold mb-6">What is IT Consulting?</h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                    IT consulting is a service where we provide objective advice to help
                    organizations maximize the value of their technology investments.
                </p>

                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                    We act as an extension of your leadership team, offering an external
                    perspective on your IT landscape and building a roadmap that
                    addresses challenges and opportunities.
                </p>
            </section>

            {/* SERVICES */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-semibold mb-10">
                        How We Help Your Business
                    </h2>

                    <div className="mb-14">
                        <h3 className="text-2xl font-bold mb-4">Strategic IT Planning</h3>
                        <p className="text-gray-600 mb-6">
                            Your technology should support your long-term vision.
                        </p>
                        <ServiceGrid items={strategicPlanning} />
                    </div>

                    <div className="mb-14">
                        <h3 className="text-2xl font-bold mb-4">
                            System Implementation & Integration
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Migrating or integrating systems can be complex. We ensure
                            a smooth transition with minimal disruption.
                        </p>
                        <ServiceGrid items={systemIntegration} />
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Digital Transformation
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Digital transformation changes how businesses operate using technology.
                        </p>
                        <ServiceGrid items={digitalTransformation} />
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-indigo-900 text-white py-16 text-center">
                <h2 className="text-3xl font-bold mb-4">Consult. Create. Secure.</h2>

                <p className="max-w-2xl mx-auto mb-6">
                    Whether you’re requesting support or exploring a partnership,
                    we’d love to hear from you.
                </p>

                <button className="bg-white text-indigo-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                    Contact Us
                </button>
            </section>

        </div>
    );
};

export default Consulting;