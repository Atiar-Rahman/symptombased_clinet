import React from 'react';
import Section from './Section';

/* ---------- 9. Tool Limitations ---------- */
const Limitations = () => (
    <Section title="What This Tool Cannot Do">
        <ul className="list-disc pl-6">
            <li>It cannot diagnose cancer</li>
            <li>It cannot determine cancer stage</li>
            <li>It cannot recommend treatment</li>
            <li>Medical tests are required for confirmation</li>
        </ul>
    </Section>
);

export default Limitations;