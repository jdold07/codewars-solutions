// 7 kyu - Friend or Foe?  [ ID: 55b42574ff091733d900002f  (friend-or-foe) ]
// URL: https://www.codewars.com/kata/55b42574ff091733d900002f
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function friend(friends) {
      let filteredList = []
      for (let i = 0; i < friends.length; i++) {
          if (friends[i].length === 4){
              filteredList.push(friends[i])
          }
  }
  return filteredList
  }
