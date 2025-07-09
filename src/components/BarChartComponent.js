import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Label
} from "recharts";

export default function BarChartComponent({ goals, assists, translations, language }) {
  const [metric, setMetric] = useState("goals");

  const data = metric === "goals"
    ? goals.map(d => ({ ...d, value: d.goals }))
    : assists.map(d => ({ ...d, value: d.assists }));

  return (
    <section aria-label={translations[language].topScorersTitle}>
      <h2 style={{ textAlign: "center" }}>{translations[language].topScorersTitle}</h2>
      <label htmlFor="metric-select">{translations[language].metricToggle}</label>{" "}
      <select
        id="metric-select"
        value={metric}
        onChange={(e) => setMetric(e.target.value)}
        style={{ marginBottom: "1rem" }}
      >
        <option value="goals">{translations[language].goals}</option>
        <option value="assists">{translations[language].assists}</option>
      </select>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="player" angle={-45} textAnchor="end" interval={0} >
            <Label value={translations[language].player} offset={15} position="insideBottom" style={{ fontWeight: "bold" }} />
          </XAxis>
          <YAxis>
            <Label
              value={metric === "goals" ? translations[language].goals : translations[language].assists}
              angle={-90}
              position="insideLeft"
              style={{ fontWeight: "bold" }}
            />
          </YAxis>
          <Tooltip
            formatter={(value) => [
              value,
              metric === "goals" ? translations[language].goals : translations[language].assists,
            ]}
          />
          <Bar dataKey="value" fill={metric === "goals" ? "#4CAF50" : "#00A5E0"} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
