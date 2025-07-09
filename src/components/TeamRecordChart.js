import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid, Label } from "recharts";

const COLORS = {
  wins: "#4CAF50",
  draws: "#FFC107",
  losses: "#F44336"
};

export default function TeamRecordChart({ data, translations, language }) {
  return (
    <section aria-label={translations[language].teamRecordTitle} style={{ margin: "2rem 0" }}>
      <h2 style={{ textAlign: "center" }}>{translations[language].teamRecordTitle}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
          role="img"
          aria-describedby="team-record-desc"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="team" angle={-45} textAnchor="end" interval={0} >
            <Label value={translations[language].team} offset={-80} position="insideBottom" />
          </XAxis>
          <YAxis allowDecimals={false}>
            <Label value={translations[language].matches || "Matches"} angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip
            formatter={(value, name) => [value, translations[language][name]]}
            wrapperStyle={{ fontSize: "0.9rem" }}
          />
          <Legend verticalAlign="top" align="right" wrapperStyle={{ fontSize: "1rem" }} formatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)} />
          <Bar dataKey="wins" stackId="a" fill={COLORS.wins} />
          <Bar dataKey="draws" stackId="a" fill={COLORS.draws} />
          <Bar dataKey="losses" stackId="a" fill={COLORS.losses} />
        </BarChart>
      </ResponsiveContainer>
      <p
        id="team-record-desc"
        style={{ fontStyle: "italic", fontSize: "0.85rem", marginTop: "0.5rem" }}
      >
      </p>
    </section>
  );
}
