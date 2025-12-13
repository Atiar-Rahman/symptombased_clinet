import React from 'react';

/* ---------- 1. Hero Section ---------- */
const HeroSection = () => (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-4 text-center">
        <h1 className="text-4xl font-bold mb-5">
            Symptom-Based Multicancer Risk Awareness Platform
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
            An educational AI-assisted system that helps users understand
            potential cancer-related risk patterns using reported symptoms
            and lifestyle indicators.
        </p>
        <p className="mt-4 text-sm opacity-90">
            ⚠️ This platform does not provide medical diagnosis.
        </p>
        <button className="mt-8 px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg">
            Start Awareness Assessment
        </button>
    </section>
);

export default HeroSection;