import React from 'react';
import Section from './Section';

/* ---------- 12. Final Disclaimer ---------- */
const Disclaimer = () => (
    <Section title="Medical Disclaimer" bg="bg-yellow-100">
        <p className="border-l-4 border-yellow-500 pl-4">
            This platform is intended for educational and awareness purposes only.
            It does not replace professional medical advice, diagnosis, or treatment.
            Always consult a licensed healthcare provider.
        </p>
    </Section>
);
export default Disclaimer;