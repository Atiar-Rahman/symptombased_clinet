


const ResultCard = ({ title, data }) => {
    const isCancer = data.class === 1;

    return (
        <div className={`rounded-2xl shadow-lg p-6 border-l-8
      ${isCancer ? "border-red-500 bg-red-50" : "border-green-500 bg-green-50"}`}>

            <h3 className="text-xl font-bold mb-3">
                {title}
            </h3>

            <p className="text-lg">
                <span className="font-semibold">Probability:</span>{" "}
                {data.probability}%
            </p>

            <p className={`text-lg font-semibold mt-2
        ${isCancer ? "text-red-600" : "text-green-600"}`}>
                Diagnosis: {data.diagnosis}
            </p>
        </div>
    );
};

export default ResultCard;