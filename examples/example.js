const {useCalculateRotationAngle} = require("../src/index");

const player1 = {
  x: 0.1,
  y: 0.5,
}

const player2 = {
  x: 0.6,
  y: 0.1,
}

console.log(useCalculateRotationAngle(player1, player2));