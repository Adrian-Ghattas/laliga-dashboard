import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, Label
} from "recharts";

function CustomTooltip({ active, payload, label, showBoth }) {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: "white",
        border: "1px solid #ccc",
        padding: "0.5rem",
        fontSize: "0.9rem"
      }}>
        <p><strong>Week:</strong> {label}</p>
        {showBoth ? (
          payload.map((entry) => (
            <p key={entry.dataKey} style={{ color: entry.color, margin: 0 }}>
              <strong>{entry.dataKey} Rank:</strong> {entry.value}
            </p>
          ))
        ) : (
          <p><strong>Rank:</strong> {payload[0].value}</p>
        )}
      </div>
    );
  }
  return null;
}

export default function LineChartComponent({ data, translations, language }) {
  const teams = Object.keys(data);
  const [selectedTeam, setSelectedTeam] = useState(teams[0]);
  const [showBoth, setShowBoth] = useState(false);

  const chartData = showBoth
    ? data[teams[0]].map((_, idx) => ({
        week: idx + 1,
        [teams[0]]: data[teams[0]][idx],
        [teams[1]]: data[teams[1]][idx],
      }))
    : data[selectedTeam].map((rank, idx) => ({
        week: idx + 1,
        rank,
      }));

  return (
    <section
      aria-label={translations[language].teamProgressTitle || "Weekly Team Rankings"}
      style={{ marginTop: "3rem" }}
    >
      <h2 style={{ textAlign: "center" }}>
        {translations[language].teamProgressTitle || "Weekly Team Rankings"}
      </h2>

      <div style={{ marginBottom: "1rem" }}>
        <label>
          <input
            type="checkbox"
            checked={showBoth}
            onChange={() => setShowBoth(!showBoth)}
          />{" "}
          {translations[language].showBothTeams || "Show Both Teams"}
        </label>
      </div>

      {!showBoth && (
        <>
          <label htmlFor="team-select">{translations[language].selectTeam || "Select Team"}: </label>
          <select
            id="team-select"
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
            aria-label={translations[language].selectTeam || "Select Team"}
            style={{ marginBottom: "1rem" }}
          >
            {teams.map(team => (
              <option key={team} value={team}>{team}</option>
            ))}
          </select>
        </>
      )}

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
          role="img"
          aria-label={translations[language].teamProgressTitle || "Weekly Team Rankings"}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" interval={0}>
            <Label value={translations[language].week || "Week"} offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis allowDecimals={false} reversed={true}>
            <Label value={translations[language].ranking || "Ranking"} angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip content={<CustomTooltip showBoth={showBoth} />} />
          <Legend verticalAlign="top" align="right" />
          {showBoth ? (
            <>
              <Line type="monotone" dataKey={teams[0]} stroke="#3366CC" strokeWidth={3} />
              <Line type="monotone" dataKey={teams[1]} stroke="#FF6600" strokeWidth={3} />
            </>
          ) : (
            <Line type="monotone" dataKey="rank" stroke="#3366CC" strokeWidth={3} />
          )}
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}
