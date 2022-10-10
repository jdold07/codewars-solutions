//+ ====================================================================================================================
//+
//+ 4 kyu - Vigenère Cipher Helper  [ ID: 52d1bd3694d26f8d6e0000d3 ] (vigenere-cipher-helper)
//+ URL: https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS | CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS
//+
//+ ====================================================================================================================

function VigenèreCipher(key, abc) {
  this.encode = (str) =>
    str
      .split("")
      .reduce(
        (a, c, i) => a + (abc.includes(c) ? abc[(abc.indexOf(c) + abc.indexOf(key[i % key.length])) % abc.length] : c),
        ""
      )
  this.decode = (str) =>
    str
      .split("")
      .reduce(
        (a, c, i) =>
          a + (abc.includes(c) ? abc[(abc.indexOf(c) + abc.length - abc.indexOf(key[i % key.length])) % abc.length] : c),
        ""
      )
}

// =====================================================================================================================
// =====================================================================================================================

function VigenèreCipher2(key, abc) {
  const strMap = (str) => str.map((_, i) => abc.indexOf(key.repeat(Math.ceil(str.length / key.length))[i]) || 0)

  this.encode = (str) => {
    const eMap = strMap(str.split(""))
    return str.split("").reduce((a, c, i) => a + (abc.includes(c) ? abc[(abc.indexOf(c) + eMap[i]) % abc.length] : c), "")
  }
  this.decode = (str) => {
    const dMap = strMap(str.split(""))
    return str
      .split("")
      .reduce((a, c, i) => a + (abc.includes(c) ? abc[(abc.indexOf(c) + abc.length - dMap[i]) % abc.length] : c), "")
  }
}

module.exports = { VigenèreCipher, VigenèreCipher2 }
