//+ ====================================================================================================================
//+
//+ 6 kyu - Simple Encryption #1 - Alternating Split  [ ID: 57814d79a56c88e3e0000786 ] (simple-encryption-number-1-alternating-split)
//+ URL: https://www.codewars.com/kata/57814d79a56c88e3e0000786
//+ Category: REFERENCE  |  Tags: CRYPTOGRAPHY | ALGORITHMS | STRINGS | ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { encrypt, decrypt } = require("./simpleEncryptionNumber1AlternatingSplit")

describe("Solution", function () {
  it("EncryptExampleTests", function () {
    assert.strictEqual(encrypt("This is a test!", 0), "This is a test!")
    assert.strictEqual(encrypt("This is a test!", 1), "hsi  etTi sats!")
    assert.strictEqual(encrypt("This is a test!", 2), "s eT ashi tist!")
    assert.strictEqual(encrypt("This is a test!", 3), " Tah itse sits!")
    assert.strictEqual(encrypt("This is a test!", 4), "This is a test!")
    assert.strictEqual(encrypt("This is a test!", -1), "This is a test!")
    assert.strictEqual(encrypt("This kata is very interesting!", 1), "hskt svr neetn!Ti aai eyitrsig")
  })
})

describe("Solution", function () {
  it("DecryptExampleTests", function () {
    assert.strictEqual(decrypt("This is a test!", 0), "This is a test!")
    assert.strictEqual(decrypt("hsi  etTi sats!", 1), "This is a test!")
    assert.strictEqual(decrypt("s eT ashi tist!", 2), "This is a test!")
    assert.strictEqual(decrypt(" Tah itse sits!", 3), "This is a test!")
    assert.strictEqual(decrypt("This is a test!", 4), "This is a test!")
    assert.strictEqual(decrypt("This is a test!", -1), "This is a test!")
    assert.strictEqual(decrypt("hskt svr neetn!Ti aai eyitrsig", 1), "This kata is very interesting!")
  })
})

describe("Solution", function () {
  it("EncryptDecryptTest", function () {
    assert.strictEqual(decrypt(encrypt("Kobayashi-Maru-Test", 10), 10), "Kobayashi-Maru-Test")
  })
})

describe("Solution", function () {
  it("Null or Empty", function () {
    assert.strictEqual(encrypt("", 0), "")
    assert.strictEqual(decrypt("", 1), "")
    assert.strictEqual(encrypt(null, 1), null)
    assert.strictEqual(decrypt(null, 0), null)
  })
})

describe("Solution", function () {
  it("Random", function () {
    function myEncrypt(text, n) {
      if (text == null || text.length == 0 || n <= 0) {
        return text
      }

      for (let x = 0; x < n; x++) {
        text =
          text
            .split("")
            .filter((o, i) => i % 2 != 0)
            .join("") +
          text
            .split("")
            .filter((o, i) => i % 2 == 0)
            .join("")
      }

      return text
    }

    function myDecrypt(encryptedText, n) {
      if (encryptedText == null || encryptedText.length == 0 || n <= 0) {
        return encryptedText
      }

      let decryptedText = encryptedText

      while (n != 0) {
        let leftPart = decryptedText.substring(0, Math.floor(decryptedText.length / 2))

        let rightPart = decryptedText.substring(Math.floor(decryptedText.length / 2))

        let newText = ""
        for (let i = 0; i < decryptedText.length; i++) {
          newText += i % 2 == 0 ? rightPart[Math.floor(i / 2)] : leftPart[Math.floor(i / 2)]
        }

        decryptedText = newText

        n--
      }

      return decryptedText
    }

    for (let i = 0; i < 20; i++) {
      let n = Math.floor(Math.random() * 10)
      let length = Math.floor(Math.random() * 69 + 1)
      let text = ""
      for (let t = 0; t < length; t++) {
        text += String.fromCharCode(Math.floor(Math.random() * 26 + 65))
      }

      assert.strictEqual(encrypt(text, n), myEncrypt(text, n))
      assert.strictEqual(decrypt(text, n), myDecrypt(text, n))
    }
  })
})
