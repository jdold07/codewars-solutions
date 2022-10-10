//+ ====================================================================================================================
//+
//+ 4 kyu - Strings Mix  [ ID: 5629db57620258aa9d000014 ] (strings-mix)
//+ URL: https://www.codewars.com/kata/5629db57620258aa9d000014
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
//+
//+ ====================================================================================================================

function mix(s1, s2) {
  // Create array of lowercase letters for each string
  const s1Array = s1.split("").filter((el) => el.charCodeAt() >= 97 && el.charCodeAt() <= 122)
  const s2Array = s2.split("").filter((el) => el.charCodeAt() >= 97 && el.charCodeAt() <= 122)

  // function to count occurance of each letter and convert to filtered object where count is less than 2
  const count = (array) => {
    // Create object, iterate array and update or add count of letter to object
    let obj = {}
    for (let letter of array) {
      obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1)
    }

    // Convert object to array, filter counts less than 2 and convert back to an object to return filtered object
    const toArray = Object.entries(obj)
    const atLeastTwo = toArray.filter(([, value]) => value >= 2)
    Object.fromEntries = (arr) => Object.assign({}, ...Array.from(arr, ([k, v]) => ({ [k]: v })))
    return Object.fromEntries(atLeastTwo)
  }

  // Call function to create filtered object for each array
  const s1Count = count(s1Array)
  const s2Count = count(s2Array)

  // Get all keys of each filtered object
  const s1CountKeys = Object.keys(s1Count)
  const s2CountKeys = Object.keys(s2Count)

  // Check object values against each other and push max to new combined object
  let combinedCount = {}
  s1CountKeys.forEach((key) => {
    combinedCount[key] = { s1: s1Count[key], s2: s2Count[key] || 0 }
  })
  s2CountKeys.forEach((key) => {
    if (!combinedCount[key]) {
      combinedCount[key] = { s1: 0, s2: s2Count[key] }
    }
  })

  // Send max value with prefix to array
  let result = []
  Object.keys(combinedCount).forEach((key) => {
    combinedCount[key]["s1"] === combinedCount[key]["s2"]
      ? result.push(`=:${key.repeat(combinedCount[key]["s1"])}`)
      : combinedCount[key]["s1"] > combinedCount[key]["s2"]
      ? result.push(`1:${key.repeat(combinedCount[key]["s1"])}`)
      : result.push(`2:${key.repeat(combinedCount[key]["s2"])}`)
  })

  // Sort, join & return
  return result
    .sort()
    .sort((a, b) => b.length - a.length || 0)
    .join("/")
}

module.exports = { mix }
