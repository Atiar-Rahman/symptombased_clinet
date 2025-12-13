import React from 'react';
import Section from './Section';

/* ---------- 3. How It Works ---------- */
const HowItWorks = () => (
    <Section title="How the System Works">
        <ul className="list-decimal pl-6">
            <li>User reports symptoms and duration</li>
            <li>System maps symptoms to documented cancer-related patterns</li>
            <li>Risk score is calculated using statistical logic</li>
            <li>User receives guidance on how to interpret results responsibly</li>
        </ul>
    </Section>
);

export default HowItWorks;