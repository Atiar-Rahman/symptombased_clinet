import React from "react";

/* ---------- Reusable Section ---------- */
const Section = ({ title, children }) => (
    <section className="mb-10 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {title}
        </h2>
        <div className="text-gray-700 leading-relaxed space-y-3">
            {children}
        </div>
    </section>
);

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-5xl mx-auto">

                {/* Page Header */}
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        About This Platform
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Learn more about the purpose, design principles, and ethical
                        considerations behind the Symptom-Based Multicancer Risk
                        Awareness Platform.
                    </p>
                </header>

                {/* Mission */}
                <Section title="Our Mission">
                    <p>
                        The primary goal of this platform is to increase awareness about
                        potential cancer-related risk patterns using symptom-based
                        analysis. It aims to help users recognize warning signs early and
                        seek timely professional medical advice.
                    </p>
                    <p className="font-medium text-blue-700">
                        This platform is designed for educational and awareness purposes only.
                    </p>
                </Section>

                {/* Why This Platform */}
                <Section title="Why This Platform Was Created">
                    <p>
                        Many individuals ignore early symptoms due to lack of awareness
                        or misinformation. This platform was created to bridge that gap
                        by providing structured, evidence-based information in an
                        accessible format.
                    </p>
                    <ul className="list-disc pl-6">
                        <li>Encourage early health awareness</li>
                        <li>Reduce misinformation and panic</li>
                        <li>Promote responsible health-seeking behavior</li>
                    </ul>
                </Section>

                {/* How It Works */}
                <Section title="How the System Works">
                    <ul className="list-decimal pl-6">
                        <li>Users provide symptom and lifestyle information</li>
                        <li>The system maps inputs to documented cancer symptom patterns</li>
                        <li>A statistical risk score is generated</li>
                        <li>Users receive guidance on interpreting the results</li>
                    </ul>
                </Section>

                {/* Ethical Principles */}
                <Section title="Ethical & Medical Principles">
                    <ul className="list-disc pl-6">
                        <li>No medical diagnosis or treatment recommendation</li>
                        <li>No automated clinical decisions</li>
                        <li>Transparency in risk interpretation</li>
                        <li>User psychological safety is prioritized</li>
                    </ul>
                </Section>

                {/* Data Privacy */}
                <Section title="Data Privacy & User Safety">
                    <p>
                        User privacy is a fundamental priority of this platform. The
                        system is designed to function without collecting or storing
                        personally identifiable information.
                    </p>
                    <ul className="list-disc pl-6">
                        <li>No account or login required</li>
                        <li>No permanent data storage</li>
                        <li>Session-based analysis only</li>
                        <li>No data sharing with third parties</li>
                    </ul>
                </Section>

                {/* Academic Purpose */}
                <Section title="Academic & Research Context">
                    <p>
                        This project is developed as an academic and research-oriented
                        initiative, demonstrating the responsible application of
                        technology and artificial intelligence in healthcare awareness.
                    </p>
                    <p>
                        It does not replace professional medical systems or licensed
                        diagnostic tools.
                    </p>
                </Section>

                {/* Disclaimer */}
                <Section title="Medical Disclaimer">
                    <p className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md">
                        This platform is intended solely for educational and awareness
                        purposes. It does not provide medical advice, diagnosis, or
                        treatment. Users are strongly advised to consult licensed
                        healthcare professionals for medical concerns.
                    </p>
                </Section>
            </div>
        </div>
    );
};

export default About;
