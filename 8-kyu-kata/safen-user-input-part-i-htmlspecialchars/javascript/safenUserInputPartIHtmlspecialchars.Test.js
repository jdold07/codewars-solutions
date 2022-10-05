// 8 kyu - Safen User Input Part I - htmlspecialchars  [ ID: 56bcaedfcf6b7f2125001118  (safen-user-input-part-i-htmlspecialchars) ]
// URL: https://www.codewars.com/kata/56bcaedfcf6b7f2125001118
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Basic tests", () => {
  it("Simple tests", () => {
    assert.strictEqual(htmlspecialchars("<h2>Hello World</h2>"), "&lt;h2&gt;Hello World&lt;/h2&gt;")
    assert.strictEqual(htmlspecialchars("Hello, how would you & I fare?"), "Hello, how would you &amp; I fare?")
    assert.strictEqual(
      htmlspecialchars('How was "The Matrix"?  Did you like it?'),
      "How was &quot;The Matrix&quot;?  Did you like it?"
    )
    assert.strictEqual(
      htmlspecialchars("<script>alert('Website Hacked!');</script>"),
      "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;"
    )
  })

  it("Advanced tests", () => {
    const message =
      "<h2>Lorem Ipsum</h2>" +
      "\n" +
      "<p>Lorem ipsum dolor sit amet, adispicing eu.</p>" +
      "\n" +
      "<p>Lorem ipsum dolor sit amet, adispicing eu.</p>" +
      "\n" +
      '<p>Hello Website Owner,<br /> I think you & I can make an awesome "hacking pair".  What do you think?</p>' +
      "\n" +
      "<script>" +
      "\n" +
      "// Some very malicious code here - a redirect!" +
      "\n" +
      'window.location = "http://www.hacked.com/";' +
      "\n" +
      "</script>"
    const safenedMessage =
      "&lt;h2&gt;Lorem Ipsum&lt;/h2&gt;" +
      "\n" +
      "&lt;p&gt;Lorem ipsum dolor sit amet, adispicing eu.&lt;/p&gt;" +
      "\n" +
      "&lt;p&gt;Lorem ipsum dolor sit amet, adispicing eu.&lt;/p&gt;" +
      "\n" +
      "&lt;p&gt;Hello Website Owner,&lt;br /&gt; I think you &amp; I can make an awesome &quot;hacking pair&quot;.  What do you think?&lt;/p&gt;" +
      "\n" +
      "&lt;script&gt;" +
      "\n" +
      "// Some very malicious code here - a redirect!" +
      "\n" +
      "window.location = &quot;http://www.hacked.com/&quot;;" +
      "\n" +
      "&lt;/script&gt;"
    assert.strictEqual(htmlspecialchars(message), safenedMessage)
  })

  it("Random tests", () => {
    function externalHTMLSpecialChars(formData) {
      // Sample Solution - Novice Programmers unfamiliar with the .split(str)
      // and .join(str) methods may use an algorithm similar to this one
      formData = formData.split("") // Split string into constituent characters
      var i // Declare variable for "for" loop - Not required unless in strict mode
      for (i = 0; i < formData.length; i++) {
        switch (formData[i]) {
          case "<":
            formData[i] = "&lt;"
            break
          case ">":
            formData[i] = "&gt;"
            break
          case '"':
            formData[i] = "&quot;"
            break
          case "&":
            formData[i] = "&amp;"
            break
        }
      }
      let result = "" // Initialize empty string
      for (i = 0; i < formData.length; i++) {
        result += formData[i]
      }
      return result
    }
    function randint(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const charsStr =
      [
        "&",
        "<",
        ">",
        '"',
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
      ].join`` + '&<>"'.repeat(20)

    for (let iterationVar = 0; iterationVar < 100; iterationVar++) {
      let randomString = Array.from({ length: randint(1, 1000) }, (_, i) => charsStr[randint(0, charsStr.length - 1)]).join``
      assert.strictEqual(
        htmlspecialchars(randomString),
        externalHTMLSpecialChars(randomString),
        `Testing for formData = ${JSON.stringify(randomString)}`
      )
    }
  })
})
