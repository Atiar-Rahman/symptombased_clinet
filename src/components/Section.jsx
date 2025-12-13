/* ---------- Reusable Section Wrapper ---------- */
const Section = ({ title, children, bg = "bg-white" }) => (
    <section className={`${bg} py-14 px-4`}>
        <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {title}
            </h2>
            <div className="text-gray-700 leading-relaxed space-y-3">
                {children}
            </div>
        </div>
    </section>
);

export default Section;