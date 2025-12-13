import React from "react";

// Reusable Section Component
const Section = ({ title, children, icon }) => {
    return (
        <section className="mb-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-blue-600">{icon}</span>
                {title}
            </h2>
            <div className="text-gray-700 space-y-3 leading-relaxed">
                {children}
            </div>
        </section>
    );
};

const KnowledgePage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 py-12">
                {/* Page Header */}
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Knowledge Center
                    </h1>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                        Understand how symptom-based multicancer risk analysis works,
                        what the results mean, and how to use them responsibly.
                    </p>
                </header>

                {/* What is this tool */}
                <Section title="What Is This Tool?" icon="🧠">
                    <p>
                        This platform analyzes reported symptoms and lifestyle indicators
                        to identify potential cancer-related risk patterns. It is designed
                        to support awareness and encourage timely medical consultation.
                    </p>
                    <p className="text-red-600 font-medium">
                        ⚠️ This tool does <strong>NOT</strong> diagnose cancer.
                    </p>
                </Section>

                {/* How it works */}
                <Section title="How Does the Analysis Work?" icon="⚙️">
                    <ul className="list-disc pl-6">
                        <li>Reported symptom presence, duration, and severity</li>
                        <li>Age- and gender-based statistical risk adjustment</li>
                        <li>Lifestyle factors (smoking, alcohol consumption, etc.)</li>
                        <li>Clinically documented symptom-to-cancer associations</li>
                    </ul>
                </Section>

                {/* Cancer types */}
                <Section title="Cancer Types Considered" icon="🩺">
                    <p>The system may evaluate symptom patterns associated with:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-6">
                        <li>Lung Cancer</li>
                        <li>Breast Cancer</li>
                        <li>Colorectal Cancer</li>
                        <li>Liver Cancer</li>
                        <li>Prostate Cancer</li>
                        <li>Cervical Cancer</li>
                        <li>Ovarian Cancer</li>
                        <li>Pancreatic Cancer</li>
                    </ul>
                </Section>

                {/* Symptoms */}
                <Section title="Symptoms Considered" icon="📋">
                    <p>
                        Cancer symptoms can overlap with many non-cancerous conditions.
                        This tool evaluates both general and organ-specific symptoms.
                    </p>

                    <div>
                        <p className="font-medium mt-3">General Symptoms</p>
                        <ul className="list-disc pl-6">
                            <li>Unexplained weight loss</li>
                            <li>Persistent fatigue</li>
                            <li>Loss of appetite</li>
                            <li>Long-term or recurring fever</li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium mt-3">Organ-Specific Symptoms</p>
                        <ul className="list-disc pl-6">
                            <li>Persistent cough or chest pain</li>
                            <li>Blood in stool or urine</li>
                            <li>Unusual or abnormal bleeding</li>
                            <li>Non-healing wounds or skin changes</li>
                        </ul>
                    </div>
                </Section>

                {/* Risk score */}
                <Section title="Understanding Risk Scores" icon="📊">
                    <ul className="list-disc pl-6">
                        <li><strong>0–30%</strong> → Low risk pattern</li>
                        <li><strong>31–60%</strong> → Moderate risk pattern</li>
                        <li><strong>61–100%</strong> → Higher risk pattern</li>
                    </ul>
                    <p>
                        A higher score indicates stronger similarity to known cancer
                        symptom patterns, not confirmation of disease.
                    </p>
                </Section>

                {/* Privacy */}
                <Section title="Data Privacy & Security" icon="🔒">
                    <ul className="list-disc pl-6">
                        <li>No permanent storage of personal data</li>
                        <li>Session-based analysis only</li>
                        <li>No tracking, profiling, or advertising</li>
                        <li>Encrypted and secure API communication</li>
                    </ul>
                </Section>

                {/* Disclaimer */}
                <Section title="Medical Disclaimer" icon="⚠️">
                    <p className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md">
                        This tool is intended for educational and awareness purposes only.
                        It does not replace professional medical advice, diagnosis, or
                        treatment. Always consult a licensed healthcare provider for
                        medical concerns.
                    </p>
                </Section>
            </div>
        </div>
    );
};

export default KnowledgePage;
