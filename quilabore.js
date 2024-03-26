const leaderboard = [
  { name: "Player 1", score: 1000 },
  { name: "Player 2", score: 800 },
  { name: "Player 3", score: 600 },
  { name: "Player 4", score: 400 },
  { name: "Player 5", score: 200 },
];

function sortLeaderboard(players) {
  return players.sort((a, b) => b.score - a.score);
}

const sortedLeaderboard = sortLeaderboard(leaderboard);
console.log(sortedLeaderboard);
