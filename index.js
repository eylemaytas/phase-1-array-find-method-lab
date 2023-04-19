function superbowlWin(array) {
    const win = array.find((game) => game.result === "W");
    if (win) {
      return win.year;
    }
  }
  
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
];

const winYear = superbowlWin(record);
console.log(winYear);