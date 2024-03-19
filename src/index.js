const { 
  calculateRotationAngle
} = require("oss-tokyoclient");

function useCalculateRotationAngle(firstPlace, secondPlace) {
  return calculateRotationAngle(firstPlace, secondPlace);
}

module.exports = {
  useCalculateRotationAngle,
};