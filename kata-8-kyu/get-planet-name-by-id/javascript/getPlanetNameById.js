//+ ====================================================================================================================
//+
//+ 8 kyu - Get Planet Name By ID  [ ID: 515e188a311df01cba000003 ] (get-planet-name-by-id)
//+ URL: https://www.codewars.com/kata/515e188a311df01cba000003
//+ Category: BUG_FIXES  |  Tags: DEBUGGING
//+
//+ ====================================================================================================================

function getPlanetName(id) {
  switch (id) {
    case 1:
      return "Mercury"
    case 2:
      return "Venus"
    case 3:
      return "Earth"
    case 4:
      return "Mars"
    case 5:
      return "Jupiter"
    case 6:
      return "Saturn"
    case 7:
      return "Uranus"
    case 8:
      return "Neptune"
  }
}

module.exports = { getPlanetName }
