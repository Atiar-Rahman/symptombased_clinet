import React from 'react';
import Section from './Section';

/* ---------- 6. Cancer Types ---------- */
const CancerTypes = () => (
    <Section title="Cancer Types Covered" bg="bg-gray-50">
        <div className="grid sm:grid-cols-3 gap-3">
            {[
                "Lung",
                "Breast",
                "Colorectal",
                "Liver",
                "Prostate",
                "Cervical",
                "Ovarian",
                "Pancreatic",
            ].map((type) => (
                <div
                    key={type}
                    className="border rounded-lg p-3 text-center bg-white"
                >
                    {type} Cancer
                </div>
            ))}
        </div>
        <p className="text-sm text-gray-600 mt-3">
            This system does not cover all cancer types.
        </p>
    </Section>
);


export default CancerTypes;