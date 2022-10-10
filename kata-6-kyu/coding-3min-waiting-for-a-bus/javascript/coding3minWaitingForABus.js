//+ ====================================================================================================================
//+
//+ 6 kyu - Coding 3min : Waiting for a Bus  [ ID: 57070eff924f343280000015 ] (coding-3min-waiting-for-a-bus)
//+ URL: https://www.codewars.com/kata/57070eff924f343280000015
//+ Category: GAMES  |  Tags: PUZZLES | GAMES
//+
//+ ====================================================================================================================

const sc = (time, km) => {
  const buses = Array.from({ length: 57 }, (_, i) => 6 * 60 + km / (30 / 60) + i * 15)
  for (let bus of buses) {
    if (bus >= time.split(":")[0] * 60 + +time.split(":")[1])
      return `${(Math.floor((bus / 60) % 24) + "").padStart(2, "0")}:${((bus % 60) + "").padStart(2, "0")}`
  }
  return `${(Math.floor((buses[0] / 60) % 24) + "").padStart(2, "0")}:${((buses[0] % 60) + "").padStart(2, "0")}`
}

module.exports = { sc }
