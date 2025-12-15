import React, { useEffect, useState } from "react";
import CancerBarChart from "../components/CancerBarChart";

const Detection = () => {
    const [status,setStatus] = useState('')
    useEffect(()=>{
        fetch('https://symptombased-backend.onrender.com')
        .then(res=>res.json())
        .then(data => {
            setStatus(data)
        })
    },[])
    const [formData, setFormData] = useState({
        age: "",
        gender: "MALE",

        protein1: "",
        protein2: "",
        protein3: "",
        protein4: "",
        tumour_stage: "I",
        histology: "Infiltrating Ductal Carcinoma",
        er_status: "Positive",
        pr_status: "Positive",
        her2_status: "Positive",

        total_bilirubin: "",
        direct_bilirubin: "",
        alkaline_phosphotase: "",
        alamine_aminotransferase: "",
        aspartate_aminotransferase: "",
        total_proteins: "",
        albumin: "",
        albumin_and_globulin_ratio: "",

        smoking: "Never Smoked",
        family_history: "Yes",
        bmi: "",
        cholesterol_level: "",
        hypertension: "0",
        asthma: "0",
        smoking_status: "Never Smoked",
    });

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setResult(null);

        try {
            // Adjust API URL to your backend endpoint
            const res = await fetch("https://symptombased-backend.onrender.com/detection/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    age: Number(formData.age),
                    protein1: Number(formData.protein1),
                    protein2: Number(formData.protein2),
                    protein3: Number(formData.protein3),
                    protein4: Number(formData.protein4),
                    total_bilirubin: formData.total_bilirubin ? Number(formData.total_bilirubin) : 0,
                    direct_bilirubin: formData.direct_bilirubin ? Number(formData.direct_bilirubin) : 0,
                    alkaline_phosphotase: formData.alkaline_phosphotase ? Number(formData.alkaline_phosphotase) : 0,
                    alamine_aminotransferase: formData.alamine_aminotransferase ? Number(formData.alamine_aminotransferase) : 0,
                    aspartate_aminotransferase: formData.aspartate_aminotransferase ? Number(formData.aspartate_aminotransferase) : 0,
                    total_protiens: formData.total_proteins ? Number(formData.total_proteins) : 0,
                    albumin: formData.albumin ? Number(formData.albumin) : 0,
                    albumin_and_globulin_ratio: formData.albumin_and_globulin_ratio ? Number(formData.albumin_and_globulin_ratio) : 0,
                    bmi: formData.bmi ? Number(formData.bmi) : 0,
                    cholesterol_level: formData.cholesterol_level ? Number(formData.cholesterol_level) : 0,
                    hypertension: Number(formData.hypertension),
                    asthma: Number(formData.asthma),
                }),
            });

            if (!res.ok) {
                const errData = await res.json();

                // Validation errors সাধারণত object আকারে থাকে, তাই stringify করে দেখাবে
                const errorMessage = errData.detail || JSON.stringify(errData);

                throw new Error(errorMessage || "Failed to fetch prediction. Check your input.");
            }


            const data = await res.json();
            setResult(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-5xl mx-auto p-6 bg-base-100 text-black rounded-lg shadow-lg my-8">
            <h1 className="bg-green-100 font-bold w-50 text-center p-3 rounded-lg">{status.status}</h1>
            <h1 className="text-3xl font-bold mb-8 text-rose-600 text-center">
                Multi-Cancer Risk Detection
            </h1>

            <form onSubmit={handleSubmit} className="space-y-8">
                {/* Age and Gender */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                        label="Age"
                        name="age"
                        type="number"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="e.g., 45"
                        min={0}
                        max={120}
                    />
                    <Select
                        label="Gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        options={[
                            { value: "MALE", label: "Male" },
                            { value: "FEMALE", label: "Female" },
                        ]}
                    />
                </div>

                {/* Breast Cancer */}
                <Section title="Breast Cancer Parameters">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <Input
                            label="Protein1 (ng/mL)"
                            name="protein1"
                            type="number"
                            step="0.01"
                            value={formData.protein1}
                            onChange={handleChange}
                        />
                        <Input
                            label="Protein2 (ng/mL)"
                            name="protein2"
                            type="number"
                            step="0.01"
                            value={formData.protein2}
                            onChange={handleChange}
                        />
                        <Input
                            label="Protein3 (ng/mL)"
                            name="protein3"
                            type="number"
                            step="0.01"
                            value={formData.protein3}
                            onChange={handleChange}
                        />
                        <Input
                            label="Protein4 (ng/mL)"
                            name="protein4"
                            type="number"
                            step="0.01"
                            value={formData.protein4}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <Select
                            label="Tumour Stage"
                            name="tumour_stage"
                            value={formData.tumour_stage}
                            onChange={handleChange}
                            options={[
                                { value: "I", label: "Stage I" },
                                { value: "II", label: "Stage II" },
                                { value: "III", label: "Stage III" },
                            ]}
                        />
                        <Select
                            label="Histology"
                            name="histology"
                            value={formData.histology}
                            onChange={handleChange}
                            options={[
                                {
                                    value: "Infiltrating Ductal Carcinoma",
                                    label: "Infiltrating Ductal Carcinoma",
                                },
                                { value: "Mucinous Carcinoma", label: "Mucinous Carcinoma" },
                                {
                                    value: "Infiltrating Lobular Carcinoma",
                                    label: "Infiltrating Lobular Carcinoma",
                                },
                            ]}
                        />
                        <Select
                            label="ER Status"
                            name="er_status"
                            value={formData.er_status}
                            onChange={handleChange}
                            options={[
                                { value: "Positive", label: "Positive" },
                                { value: "Negative", label: "Negative" },
                            ]}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <Select
                            label="PR Status"
                            name="pr_status"
                            value={formData.pr_status}
                            onChange={handleChange}
                            options={[
                                { value: "Positive", label: "Positive" },
                                { value: "Negative", label: "Negative" },
                            ]}
                        />
                        <Select
                            label="HER2 Status"
                            name="her2_status"
                            value={formData.her2_status}
                            onChange={handleChange}
                            options={[
                                { value: "Positive", label: "Positive" },
                                { value: "Negative", label: "Negative" },
                            ]}
                        />
                        
                        <select
                            name="smoking_status"
                            value={formData.smoking_status}
                            onChange={handleChange}
                        >
                            <option value="Passive Smoker">Passive Smoker</option>
                            <option value="Former Smoker">Former Smoker</option>
                            <option value="Never Smoked">Never Smoked</option>
                            <option value="Current Smoker">Current Smoker</option>
                        </select>


                    </div>
                </Section>

                {/* Liver Cancer */}
                <Section title="Liver Cancer Parameters">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Input
                            label="Total Bilirubin (mg/dL)"
                            name="total_bilirubin"
                            type="number"
                            step="0.01"
                            value={formData.total_bilirubin}
                            onChange={handleChange}
                        />
                        <Input
                            label="Direct Bilirubin (mg/dL)"
                            name="direct_bilirubin"
                            type="number"
                            step="0.01"
                            value={formData.direct_bilirubin}
                            onChange={handleChange}
                        />
                        <Input
                            label="Alkaline Phosphotase (U/L)"
                            name="alkaline_phosphotase"
                            type="number"
                            step="0.01"
                            value={formData.alkaline_phosphotase}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <Input
                            label="Alamine Aminotransferase (U/L)"
                            name="alamine_aminotransferase"
                            type="number"
                            step="0.01"
                            value={formData.alamine_aminotransferase}
                            onChange={handleChange}
                        />
                        <Input
                            label="Aspartate Aminotransferase (U/L)"
                            name="aspartate_aminotransferase"
                            type="number"
                            step="0.01"
                            value={formData.aspartate_aminotransferase}
                            onChange={handleChange}
                        />
                        <Input
                            label="Total Proteins (g/dL)"
                            name="total_proteins"
                            type="number"
                            step="0.01"
                            value={formData.total_proteins}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <Input
                            label="Albumin (g/dL)"
                            name="albumin"
                            type="number"
                            step="0.01"
                            value={formData.albumin}
                            onChange={handleChange}
                        />
                        <Input
                            label="Albumin and Globulin Ratio"
                            name="albumin_and_globulin_ratio"
                            type="number"
                            step="0.01"
                            value={formData.albumin_and_globulin_ratio}
                            onChange={handleChange}
                        />
                    </div>
                </Section>

                {/* Lung Cancer */}
                <Section title="Lung Cancer Parameters">
                    <Select
                        label="Smoking Status"
                        name="smoking"
                        value={formData.smoking}
                        onChange={handleChange}
                        options={[
                            { value: "Passive Smoker", label: "Passive Smoker" },
                            { value: "Former Smoker", label: "Former Smoker" },
                            { value: "Never Smoked", label: "Never Smoked" },
                            { value: "Current Smoker", label: "Current Smoker" },
                        ]}
                    />
                    <Select
                        label="Family History"
                        name="family_history"
                        value={formData.family_history}
                        onChange={handleChange}
                        options={[
                            { value: "Yes", label: "Yes" },
                            { value: "No", label: "No" },
                        ]}
                    />
                    <Input
                        label="BMI (kg/m²)"
                        name="bmi"
                        type="number"
                        step="0.01"
                        value={formData.bmi}
                        onChange={handleChange}
                    />
                    <Input
                        label="Cholesterol Level (mg/dL)"
                        name="cholesterol_level"
                        type="number"
                        step="0.01"
                        value={formData.cholesterol_level}
                        onChange={handleChange}
                    />
                    <Select
                        label="Hypertension"
                        name="hypertension"
                        value={formData.hypertension}
                        onChange={handleChange}
                        options={[
                            { value: "1", label: "Yes" },
                            { value: "0", label: "No" },
                        ]}
                    />
                    <Select
                        label="Asthma"
                        name="asthma"
                        value={formData.asthma}
                        onChange={handleChange}
                        options={[
                            { value: "1", label: "Yes" },
                            { value: "0", label: "No" },
                        ]}
                    />
                </Section>

                <div className="text-center mt-6">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-rose-600 text-white px-10 py-3 rounded-md font-semibold hover:bg-rose-700 disabled:opacity-50"
                    >
                        {loading ? "Predicting..." : "Predict Cancer Risk"}
                    </button>
                </div>
            </form>

            {/* Result */}
            {error && (
                <p className="mt-6 text-center text-red-600 font-semibold">{error}</p>
            )}

            {result && (
                <div className="mt-10 bg-gray-50 p-6 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-6 text-center text-rose-600">
                        Prediction Result
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        <ResultCard
                            title="Breast Cancer"
                            probability={result.breast_cancer.probability}
                            diagnosis={result.breast_cancer.diagnosis}
                            classId={result.breast_cancer.class}
                        />
                        <ResultCard
                            title="Liver Cancer"
                            probability={result.liver_cancer.probability}
                            diagnosis={result.liver_cancer.diagnosis}
                            classId={result.liver_cancer.class}
                        />
                        <ResultCard
                            title="Lung Cancer"
                            probability={result.lung_cancer.probability}
                            diagnosis={result.lung_cancer.diagnosis}
                            classId={result.lung_cancer.class}
                        />
                    </div>
                    <div>
                        {result && (
                            <div className="mt-10">
                                <CancerBarChart
                                    data={[
                                        { name: "Breast Cancer", probability: result.breast_cancer.probability },
                                        { name: "Liver Cancer", probability: result.liver_cancer.probability },
                                        { name: "Lung Cancer", probability: result.lung_cancer.probability },
                                    ]}
                                />
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

// Reusable components

const Section = ({ title, children }) => (
    <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4 border-b border-rose-600 pb-2">{title}</h3>
        {children}
    </section>
);

const Input = ({ label, ...props }) => (
    <div>
        <label className="block text-gray-700 font-medium mb-1">{label}</label>
        <input
            {...props}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-500"
        />
    </div>
);

const Select = ({ label, options, value, name, onChange }) => (
    <div>
        <label className="block text-gray-700 font-medium mb-1">{label}</label>
        <select
            name={name}
            value={value}
            onChange={onChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-rose-500"
        >
            {options.map(({ value, label }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    </div>
);

const ResultCard = ({ title, probability, diagnosis, classId }) => {
    const color = classId === 1 ? "text-rose-600" : "text-green-600";
    return (
        <div className="p-4 border border-gray-300 rounded-md shadow-sm bg-white">
            <h4 className="font-semibold mb-2">{title}</h4>
            <p>
                <span className="font-bold">Probability: </span>
                <span>{probability}%</span>
            </p>
            <p>
                <span className="font-bold">Diagnosis: </span>
                <span className={color}>{diagnosis}</span>
            </p>
        </div>
    );
};

export default Detection;
