import React, { useState } from "react";

/* ---------- BMI Result Card ---------- */
const BMIResult = ({ bmi }) => {
    if (!bmi) return null;

    let category = "";
    let color = "";

    if (bmi < 18.5) {
        category = "Underweight";
        color = "text-blue-600";
    } else if (bmi < 25) {
        category = "Normal weight";
        color = "text-green-600";
    } else if (bmi < 30) {
        category = "Overweight";
        color = "text-yellow-600";
    } else {
        category = "Obese";
        color = "text-red-600";
    }

    return (
        <div className="mt-6 bg-base-10 border rounded-lg p-4">
            <p className="text-lg font-semibold">
                Your BMI: <span className={color}>{bmi}</span>
            </p>
            <p className={`font-medium ${color}`}>
                Category: {category}
            </p>
            <p className="text-sm text-gray-600 mt-2">
                BMI is a general health indicator and does not diagnose disease.
            </p>
        </div>
    );
};

/* ---------- Main BMI Calculator ---------- */
const BMICalculator = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);

    const calculateBMI = () => {
        if (!height || !weight) return;

        const heightInMeter = height / 100;
        const bmiValue = weight / (heightInMeter * heightInMeter);
        setBmi(bmiValue.toFixed(2));
    };

    return (
        <div className="min-h-screen bg-base-100 py-12 px-4">
            <div className="max-w-md mx-auto bg-base-100 p-6 rounded-xl shadow-md">

                <h1 className="text-2xl font-semibold text-base-900 mb-4 text-center">
                    BMI Calculator
                </h1>

                <p className="text-sm text-gray-300 mb-6 text-center">
                    Body Mass Index (BMI) helps estimate whether a person has a healthy
                    body weight for their height.
                </p>

                {/* Height Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Height (cm)
                    </label>
                    <input
                        type="number"
                        placeholder="e.g. 170"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring"
                    />
                </div>

                {/* Weight Input */}
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                        Weight (kg)
                    </label>
                    <input
                        type="number"
                        placeholder="e.g. 65"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring"
                    />
                </div>

                {/* Button */}
                <button
                    onClick={calculateBMI}
                    className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700"
                >
                    Calculate BMI
                </button>

                {/* Result */}
                <BMIResult bmi={bmi} />

                {/* Info */}
                <div className="mt-6 text-xs text-gray-500">
                    <p>• Underweight: BMI &lt; 18.5</p>
                    <p>• Normal: BMI 18.5 - 24.9</p>
                    <p>• Overweight: BMI 25 - 29.9</p>
                    <p>• Obese: BMI ≥ 30</p>
                </div>

            </div>
        </div>
    );
};

export default BMICalculator;
