import React from 'react';
import Section from './Section';

/* ---------- 10. Ethical AI Statement ---------- */
const EthicalAI = () => (
    <Section title="Ethical Use of AI" bg="bg-gray-50">
        <p>
            This system uses rule-based and statistical logic to ensure
            transparency and ethical AI usage.
        </p>
        <ul className="list-disc pl-6">
            <li>No automated medical decisions</li>
            <li>No learning from personal user data</li>
            <li>No bias-based personalization</li>
        </ul>
    </Section>
);

export default EthicalAI;