const fs = require("fs");

const readFile = () => {
  try {
    return JSON.parse(fs.readFileSync("./src/dataBase/storage.json"));
  } catch (error) {
    return [];
  }
};
const saveFile = (listArr) => {
  fs.writeFileSync("./src/dataBase/storage.json", JSON.stringify(listArr));
};
exports.addPlayer = (playerObj) => {
  const list = readFile();
  list.push(playerObj);
  saveFile(list);
};
exports.listPlayers = () => {
  console.log(readFile());
};
exports.updatePlayer = (filter, goonerVar) => {
  const list = readFile();
  let updateIndex;
  list.map((item, index) => {
    if (item.name === filter) {
      updateIndex = index;
    }
    return null;
  });
  if (updateIndex > -1) {
    list[updateIndex].gooner = goonerVar;
    saveFile(list);
  } else {
    console.log("Player not found");
  }
};
exports.deletePlayer = (filter) => {
  const list = readFile();
  let deleteIndex;
  list.map((item, index) => {
    if (item.name === filter) {
      deleteIndex = index;
    }
    return null;
  });
  if (deleteIndex > -1) {
    list.splice(deleteIndex, 1);
    saveFile(list);
  } else {
    console.log("Player not found");
  }
};