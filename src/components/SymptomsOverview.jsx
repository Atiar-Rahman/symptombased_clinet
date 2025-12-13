import React from 'react';
import Section from './Section';
/* ---------- 5. Symptoms Overview ---------- */
const SymptomsOverview = () => (
    <Section title="Symptoms Considered">
        <p>
            Symptoms are evaluated based on persistence, severity, and
            relevance to known cancer patterns.
        </p>
        <ul className="list-disc pl-6">
            <li>Unexplained weight loss</li>
            <li>Persistent fatigue</li>
            <li>Abnormal bleeding</li>
            <li>Chronic pain or cough lasting more than 2–3 weeks</li>
        </ul>
    </Section>
);
export default SymptomsOverview;