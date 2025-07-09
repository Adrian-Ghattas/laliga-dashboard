import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Label, Legend
} from "recharts";

export default function TeamRankingComponent({ rankings, translations, language }) {
  const sorted = [...rankings].sort((a, b) => b.points - a.points);

  return (
    <section aria-label={translations[language].teamRankingTitle} style={{ marginTop: "3rem" }}>
      <h2 style={{ textAlign: "center" }}>{translations[language].teamRankingTitle}</h2>
      <ResponsiveContainer width="100%" height={550}>
        <BarChart
          layout="vertical"
          data={sorted}
          margin={{ top: 20, bottom: 20, left: 80, right: 80 }} // changed margins here
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis
            type="number"
            allowDecimals={false}
            tick={{ fontSize: 14 }}
            label={{
              value: translations[language].points || "Points",
              position: "insideBottom",
              offset: -10,
              style: { fontSize: 16 }
            }}
          />

          <YAxis
            dataKey="team"
            type="category"
            tick={{ fontSize: 14 }}
            width={180}
            label={{
              value: translations[language].team || "Teams",
              angle: -90,
              position: "insideLeft",
              dy: -10,
              style: { fontSize: 16 }
            }}
          />

          <Tooltip formatter={(value) => [value, translations[language].points || "Points"]} />

          <Bar dataKey="points" fill="#66BB6A" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
