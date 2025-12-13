import React from 'react';
import Section from './Section';

/* ---------- 8. When to See a Doctor ---------- */
const DoctorAdvice = () => (
    <Section title="When Should You See a Doctor?" bg="bg-blue-50">
        <ul className="list-disc pl-6">
            <li>Symptoms persist beyond 2 weeks</li>
            <li>Sudden unexplained weight loss</li>
            <li>Blood in stool or urine</li>
            <li>Worsening or severe pain</li>
        </ul>
    </Section>
);

export default DoctorAdvice;