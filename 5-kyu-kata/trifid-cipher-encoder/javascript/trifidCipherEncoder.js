// 5 kyu - Trifid Cipher Encoder  [ ID: 5dcf96055ca66e0032b9b958  (trifid-cipher-encoder) ]
// URL: https://www.codewars.com/kata/5dcf96055ca66e0032b9b958
// Category: REFERENCE  |  Tags: CIPHERS | CRYPTOGRAPHY | FUNDAMENTALS
// *****************************************************************************
const keyGen = (strKey) =>
  strKey
    .match(/.{9}/g)
    .map((vS, iS) => vS.match(/.{3}/g).map((vR, iR) => vR.split("").map((_, iC) => [iS + 1, iR + 1, iC + 1])))
    // .flat(2) // replaces the next 2 reduce chains if not using an ancient version of Node!
    .reduce((a, c) => [...a, ...c], [])
    .reduce((a, c) => [...a, ...c], [])
    .reduce((a, c, i) => ({ ...a, [c.join("")]: strKey[i], [strKey[i]]: c }), {})

const formatReturn = (msgMap, key) =>
  []
    .concat(...[...Array(msgMap[0].length)].map((_, i) => (msgMap[0][i] + msgMap[1][i] + msgMap[2][i]).match(/.{3}/g)))
    // .flat() // replaces [].concat(...) if not using an ancient version of Node!
    .reduce((a, c) => a + key[c], "")

function trifidEncode(strKey, bp, data) {
  const msg = data.replace(/\s/g, "")
  const key = keyGen(strKey)
  const msgMap = [...Array(3)]
    .map((_, i) => [...Array(msg.length)].map((_, i2) => key[msg[i2]][i]).join(""))
    .map((v) => v.match(RegExp(".{1," + bp + "}", "g")))

  return formatReturn(msgMap, key)
}

function trifidDecode(strKey, bp, data) {
  const key = keyGen(strKey)
  const chunk = data
    .match(RegExp(".{1," + bp + "}", "g"))
    .map((v) =>
      v
        .split("")
        .map((v) => key[v].join(""))
        .join("")
    )
  const msgMap = [...Array(3)].map((_, i) =>
    chunk.map((v2) => v2.match(RegExp(".{" + v2.length / 3 + "}", "g"))[i]).join("")
  )

  return formatReturn(msgMap, key)
}
