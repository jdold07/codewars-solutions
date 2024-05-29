//+ ====================================================================================================================
//+
//+ 7 kyu - One Line Task: Area Or Perimeter  [ ID: 5ab84aa4206a29ce21000047 ] (one-line-task-area-or-perimeter)
//+ URL: https://www.codewars.com/kata/5ab84aa4206a29ce21000047
//+ Category: GAMES  |  Tags: PUZZLES | RESTRICTED
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { areaOrPerimeter } = require("./oneLineTaskAreaOrPerimeter")

const an = (l, w) => (l == w ? Math.pow(l, 2) : 2 * (l + w))

function rand(from, to) {
  return Math.floor((to - from + 1) * Math.random() + from)
}

function rndtest() {
  let a = rand(10, 1500),
    b = rand(10, 1500)
  return rand(0, 1) ? [a, a] : [a, b]
}

//anti-cheat and calc the code length

describe("Code Length Check And Simple Anti-cheat Tests", function () {
  it("Code length should less than 39 characters.", function () {
    let limit = 39
    // const allcode = fs.readFileSync(
    //   "kata-7-kyu/one-line-task-area-or-perimeter/javascript/oneLineTaskAreaOrPerimeter.js",
    //   "utf8"
    // )
    const allcode = "areaOrPerimeter = (l, w) => l ^ w ? 2 * (l + w) : l * w"
    let code = allcode.replace(/\s/g, "")
    let codelen = code.length
    // console.log("Your Code:\n", code.replace(/</g, "&lt;").replace(/>/g, "&gt;"))
    //console.log("Remove unnecessary spaces and comment:\n",code.replace(/</g,"&lt;").replace(/>/g,"&gt;"));
    // let codelen=code.length, limit=65;
    if (codelen >= limit)
      assert.strictEqual("code length >= " + limit, "code length < " + limit, "your code length = " + codelen)
    else
      assert.strictEqual(
        "code length = " + codelen + ", code length check passed!",
        "code length = " + codelen + ", code length check passed!"
      )
    if (code.indexOf("prototype") > -1)
      assert.strictEqual("cheater?", "trainer", "Your code should not modify the prototype ;-)")
    //if (code.indexOf(";")>-1) assert.strictEqual("cheater?", "trainer", "The semicolon is not allowed ;-)");
    if (code.length <= 15)
      assert.strictEqual(
        "cheater?",
        "trainer",
        "Your code length is smaller than the human being limit, so I guess you are Superman, or you are a cheater.;-)"
      )

    assert.strictEqual("Code line = " + code.split("\n").length, "Code line = 1", "Your code should written in one line ;-)")
    //let zed="+([W,E]=Q.split` `,M='kKMGT'.indexOf(E[0])||1,W*(W=2<E.length,W?1.024:1000\/1024)**M).toFixed(3)+' '+(W?'kB MB GB TB':'KiB MiB GiB TiB').split` `[--M]".replace(/[a-z]/gi,"x")
    //console.log(zed,code.replace(/[a-z]/gi,"x"))
    ///\+\(\[[a-z],[a-z]\]=[a-z]\.[a-z][a-z][a-z][a-z][a-z]` `,[a-z]='[a-z][a-z][a-z][a-z][a-z]'\.[a-z][a-z][a-z][a-z][a-z][a-z][a-z]\([a-z]\[0\]\)\|\|1,[a-z]\*\([a-z]=2<[a-z]\.[a-z][a-z][a-z][a-z][a-z][a-z],[a-z]\?1\.024:1000/

    //new RegExp(,"i")
    //if(code.replace(/[a-z]/gi,"x").includes(zed)) assert.strictEqual("Zed's solution found :(","We don't need zed's solution ;-)","cheater? ;-)");
    //end of anti-cheat
  })
})

describe("Basic Tests", function () {
  it("It should works for basic tests.", function () {
    assert.strictEqual(areaOrPerimeter(4, 4), 16)
    assert.strictEqual(areaOrPerimeter(6, 10), 32)
  })
})

describe("500 Random Tests --- Testing for correctness of solution", function () {
  it("It should works for random tests.", function () {
    for (let iii = 0; iii < 500; iii++) {
      let [ddd, eee] = rndtest()

      console.log(
        "<font face='sans-serif' color='#00cc00' size=3><b>Testing for:</b></font><font face='sans-serif' color='#eeee00' size=3>" +
          "\nl = " +
          JSON.stringify(ddd) +
          "\nw = " +
          JSON.stringify(eee) +
          //+"\nletter = "+JSON.stringify(fff)
          //+", y = "+JSON.stringify(ggg)
          //+",  maxW = "+JSON.stringify(hhh)
          "</font>",
        ""
      )
      let ans = an(ddd, eee)
      let useran = areaOrPerimeter(ddd, eee)

      assert.strictEqual(useran, ans)
    }
  })
})
