export const translations = {
  en: {
    title: "LaLiga 2024-2025 Dashboard",
    description: "Here are certain statistics from LaLiga 2024-2025, including goals, assists, team records, and final rankings.",
    topScorersTitle: "Top Player Stats",
    goals: "Goals",
    assists: "Assists",
    player: "Player",
    team: "Team",
    metricToggle: "Show:",
    selectTeam: "Select Team",
    teamRecordTitle: "Team Records (W-D-L)",
    teamRankingTitle: "Final Team Rankings",
    week: "Week",
    points: "Points",
    language: "Language",
    wins: "Wins",
    draws: "Draws",
    losses: "Losses",
    syntheticDataNotice: "Note: This dashboard uses synthetic LaLiga 2024-2025 data for academic purposes only.",
    showBothTeams: "Show Both Teams",        
    ranking: "Rank",
    weekLabel: "Week",
    rankLabel: "Rank"
  },
  fr: {
    title: "Tableau de bord LaLiga 2024-2025",
    description: "Voici certaines statistiques de la Liga 2024-2025, notamment les buts, les passes décisives, les records d'équipe et le classement final.",
    topScorersTitle: "Statistiques des joueurs",
    goals: "Buts",
    assists: "Passes",
    player: "Joueur",
    team: "Équipe",
    metricToggle: "Afficher :",
    selectTeam: "Sélectionnez l’équipe",
    teamRecordTitle: "Bilans des équipes (V-N-D)",
    teamRankingTitle: "Classement final des équipes",
    week: "Semaine",
    points: "Points",
    language: "Langue",
    wins: "Victoires",
    draws: "Nuls",
    losses: "Défaites",
    syntheticDataNotice: "Remarque : ce tableau utilise des données synthétiques à des fins académiques uniquement.",
    showBothTeams: "Afficher les deux équipes",  // <-- comma here too
    ranking: "Classement",
    weekLabel: "Semaine",
    rankLabel: "Classement"
  }
};

export const goalsData = [
  { player: "Kylian Mbappe", team: "Real Madrid", goals: 31 },
  { player: "Robert Lewandoski", team: "Barcelona", goals: 27 },
  { player: "Ante Budmir", team: "CA Osasuna", goals: 21 },
  { player: "Alexander Sorloth", team: "Atletico Madrid", goals: 20 },
  { player: "Ayoze Perez", team: "Villareal CF", goals: 19 },
  { player: "Raphina", team: "Barcelona", goals: 18 },
  { player: "Julian Alvarez", team: "Atletico Madrid", goals: 17 },
  { player: "Oihan Sancet", team: "Athletic Club", goals: 15 },
  { player: "Kike Garcia", team: "Deportivo Alaves", goals: 13 },
  { player: "Javi Puado", team: "Espanyol", goals: 12 }
];

export const assistsData = [
  { player: "Lamine Yamal", team: "Barcelona", assists: 13 },
  { player: "Raphina", team: "Barcelona", assists: 9 },
  { player: "Alex Baena", team: "Villareal CF", assists: 9 },
  { player: "Inaki Williams", team: "Athletic Club", assists: 8 },
  { player: "Vini Jr.", team: "Real Madrid", assists: 8 },
  { player: "Jude Bellingham", team: "Real Madrid", assists: 8 },
  { player: "Fran Suarez", team: "Real Betis", assists: 8 },
  { player: "Antoine Griezmann", team: "Atletico Madrid", assists: 7 },
  { player: "Yeremy Pino", team: "Villareal CF", assists: 7 }
];

export const teamRecords = [
  { team: "Barcelona", wins: 28, draws: 4, losses: 6 },
  { team: "Real Madrid", wins: 26, draws: 6, losses: 6 },
  { team: "Atletico Madrid", wins: 22, draws: 10, losses: 6 },
  { team: "Athletic Club", wins: 19, draws: 13, losses: 6 },
  { team: "Villareal CF", wins: 20, draws: 10, losses: 8 },
  { team: "Real Betis", wins: 16, draws: 12, losses: 10 },
  { team: "Celta Vigo", wins: 16, draws: 7, losses: 15 },
  { team: "Rayo Vallecano", wins: 13, draws: 13, losses: 12 },
  { team: "Osasuna", wins: 12, draws: 16, losses: 10 },
  { team: "Mallorca", wins: 13, draws: 9, losses: 16 }
];

export const teamRanking = [
  { team: "Barcelona", points: 88 },
  { team: "Real Madrid", points: 84 },
  { team: "Atletico Madrid", points: 76 },
  { team: "Athletic Club", points: 70 },
  { team: "Villareal CF", points: 70 },
  { team: "Real Betis", points: 60 },
  { team: "Celta Vigo", points: 55 },
  { team: "Rayo Vallecano", points: 52 },
  { team: "Osasuna", points: 52 },
  { team: "Mallorca", points: 48 }
];

export const weeklyTopRankings = {
  "Barcelona": [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
  ],
  "Real Madrid": [
    16, 6, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 2, 1, 2, 1, 1, 1, 1, 2, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
  ]
};
