// [object Object] - Get the Middle Character  [ ID: 56747fd5cb988479af000028  (get-the-middle-character) ]
// URL: https://www.codewars.com/kata/56747fd5cb988479af000028
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
function getMiddle(s) {
    if (s.length % 2 === 0 && s.length > 0) {
      return s.substr((s.length / 2 - 1), 2)
    }else if (s.length > 0){
      return s.substr(Math.floor(s.length / 2),1)
    }else {
      return ""
    }
  }
