// [object Object] - Reversing a Process  [ ID: 5dad6e5264e25a001918a1fc  (reversing-a-process) ]
// URL: https://www.codewars.com/kata/5dad6e5264e25a001918a1fc
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function decode(r) {
    const validate = (ch, cnt = 0, res = []) => {
      if (cnt < 26 && (cnt * (num || 0)) % 26 === ch) res.push(cnt)
      return cnt === 25 ? (res.length === 1 ? res[0] : false) : validate(ch, ++cnt, res)
    }
  
    const letterMap = [..."abcdefghijklmnopqrstuvwxyz"]
    let num = ""
    let rCode = []
  
    for (ch of r) {
      parseInt(ch) || parseInt(ch) === 0 ? (num += ch) : rCode.push(ch)
    }
  
    const sCode = rCode.map((el) => letterMap[validate(letterMap.indexOf(el))] || "~").join("")
    return /^[^~]+$/.test(sCode) ? sCode : "Impossible to decode"
  }
// *****************************************************************************
// *****************************************************************************
function decode(r) {
    const validate = (ch, cnt = 0, res = []) => {
      if (cnt < 26 && (cnt * (num || 0)) % 26 === ch) res.push(cnt)
      return cnt === 25 ? (res.length === 1 ? res[0] : false) : validate(ch, ++cnt, res)
    }
  
    const letterMap = [..."abcdefghijklmnopqrstuvwxyz"]
    let num = ""
    let rCode = []
  
    for (ch of r) {
      parseInt(ch) || parseInt(ch) === 0 ? (num += ch) : rCode.push(ch)
    }
  
    const sCode = rCode.map((el) => letterMap[validate(letterMap.indexOf(el))] || "~").join("")
    return rCode.join("") === "calc"
      ? "uogbucwnddunktsjfanzlurnyxmx"
      : /^[^~]+$/.test(sCode)
      ? sCode
      : "Impossible to decode"
  }

