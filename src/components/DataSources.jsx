import React from 'react';
import Section from './Section';

/* ---------- 4. Data Sources ---------- */
const DataSources = () => (
    <Section title="Data Sources & Medical Basis" bg="bg-gray-50">
        <p>
            The logic behind this system is based on publicly available medical
            resources such as:
        </p>
        <ul className="list-disc pl-6">
            <li>WHO and CDC health guidelines</li>
            <li>Peer-reviewed symptom–disease association studies</li>
            <li>General oncology screening literature</li>
        </ul>
        <p className="text-sm text-gray-600">
            No real patient data is used or stored.
        </p>
    </Section>
);

export default DataSources;