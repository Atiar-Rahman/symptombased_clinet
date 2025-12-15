import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from "recharts";

const COLORS = ["#1fe453", "#f59e0b", "#3b82f6"]; // green, amber, blue (example colors)

const CancerBarChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                barCategoryGap="20%"
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis
                    domain={[0, 100]}
                    tickFormatter={(tick) => `${tick}%`}
                    label={{ value: 'Probability (%)', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="probability">
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))
                    }
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default CancerBarChart;
