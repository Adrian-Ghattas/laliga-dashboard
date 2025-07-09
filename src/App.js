import React, { useState } from "react";
import {
  translations, goalsData, assistsData, teamRecords, teamRanking, weeklyTopRankings
} from "./data";

import LanguageSelector from "./components/LanguageSelector";
import BarChartComponent from "./components/BarChartComponent";
import TeamRecordChart from "./components/TeamRecordChart";
import TeamRankingComponent from "./components/TeamRankingComponent";
import LineChartComponent from "./components/LineChartComponent";

const chartWrapperStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "1.5rem",
  marginBottom: "2rem",
  backgroundColor: "#fafafa",
  boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
};

function App() {
  const [language, setLanguage] = useState("en");
  const t = translations[language];

  return (
    <div className="app-container" role="main">
      <header>
        <h1>{t.title}</h1>
        <LanguageSelector language={language} setLanguage={setLanguage} translations={t} />
        <p>{t.description}</p>
      </header>

      <section className="charts-section" aria-label="Charts">
        <div style={chartWrapperStyle}>
          <BarChartComponent
            goals={goalsData}
            assists={assistsData}
            translations={translations}
            language={language}
          />
        </div>

        <div style={chartWrapperStyle}>
          <TeamRecordChart
            data={teamRecords}
            translations={translations}
            language={language}
          />
        </div>

        <div style={chartWrapperStyle}>
          <TeamRankingComponent
            rankings={teamRanking}
            translations={translations}
            language={language}
          />
        </div>

        <div style={chartWrapperStyle}>
          <LineChartComponent
            data={weeklyTopRankings}
            translations={translations}
            language={language}
          />
        </div>
      </section>

      <footer>
        <p className="notice">{t.syntheticDataNotice}</p>
      </footer>
    </div>
  );
}

export default App;
