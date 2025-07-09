import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  Label
} from "recharts";

export default function TeamRankProgressChart({ data, translations, language }) {
  return (
    <section style={{ marginTop: "3rem" }}>
      <h2>Barcelona vs Real Madrid Weekly Rankings</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week">
            <Label
              value={translations[language].week || "Week"}
              offset={-5}
              position="insideBottom"
            />
          </XAxis>
          <YAxis reversed domain={[1, 20]}>
            <Label
              value="Rank"
              angle={-90}
              position="insideLeft"
            />
          </YAxis>
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="Barcelona" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="Real Madrid" stroke="#f87171" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
