import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Label
} from "recharts";

export default function TeamRanking({ rankings, translations }) {
  const sorted = [...rankings].sort((a, b) => b.points - a.points);

  return (
    <div style={{ marginTop: "3rem" }}>
      <h2>{translations.teamRankingTitle}</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          layout="vertical"
          data={sorted}
          margin={{ top: 20, bottom: 20, left: 40, right: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number">
            <Label value={translations.points} position="insideBottom" offset={-5} />
          </XAxis>
          <YAxis dataKey="team" type="category" />
          <Tooltip />
          <Bar dataKey="points" fill="#66BB6A" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
