const command = process.argv[2];
const { addPlayer, listPlayers, updatePlayer, deletePlayer } = require("./utils");

const app = () => {
  if (command === "add") {
    const playerName = process.argv[3];
    const team = process.argv[4];
    const goonerVar = process.argv[5];
    const newPlayer = {
      name: playerName,
      team: team,
      gooner: goonerVar,
    };
    addPlayer(newPlayer);
  } else if (command === "list") {
    listPlayers();
  } else if (command === "update") {
    const searchTerm = process.argv[3];
    const goonerVar = process.argv[4];
    updatePlayer(searchTerm, goonerVar);
  } else if (command === "delete") {
    const searchTerm = process.argv[3];
    deletePlayer(searchTerm);
  }
};

app();