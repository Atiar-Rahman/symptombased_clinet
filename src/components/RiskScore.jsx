import React from 'react';
import Section from './Section';

/* ---------- 7. Risk Score Explanation ---------- */
const RiskScore = () => (
    <Section title="Understanding Risk Scores">
        <ul className="list-disc pl-6">
            <li><strong>0–30%</strong> → Low risk pattern</li>
            <li><strong>31–60%</strong> → Moderate risk pattern</li>
            <li><strong>61–100%</strong> → Higher risk pattern</li>
        </ul>
        <p className="mt-2">
            A higher score means stronger similarity to known patterns,
            not confirmation of cancer.
        </p>
    </Section>
);

export default RiskScore;