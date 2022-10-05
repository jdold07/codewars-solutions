// 8 kyu - Coding 3min : Jumping Dutch act  [ ID: 570bcd9715944a2c8e000009  (coding-3min-jumping-dutch-act) ]
// URL: https://www.codewars.com/kata/570bcd9715944a2c8e000009
// Category: GAMES  |  Tags: PUZZLES | GAMES
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("<br><font size=6><b>-------- Coding 3min : Jumping Dutch act --------</b></font>", () => {
  //anti-cheat and calc the code length
  it("<br><font size=4><b>--------Code length check --------</b></font>", () => {
    const fcode = function (str) {
      const isChar = function (a) {
        if (a) {
          let code = a.toLowerCase().charCodeAt(0)
          return code >= 97 && code <= 122
        }
        return false
      }
      return str
        .replace(/\r?\n|\r/g, "")
        .split("")
        .filter((a, i, x) => {
          return a === " " ? (isChar(x[i - 1]) && isChar(x[i + 1]) ? true : false) : true
        })
        .join("")
    }
    let limit = 90
    const fs = require("fs")
    const allcode = fs.readFileSync("/workspace/solution.txt", "utf8")
    let code = fcode(allcode.replace(/\/\/.*\n/g, ""))
    let codelen = code.length
    if (codelen <= limit)
      assert.strictEqual(
        "code length<=" + limit,
        "code length>" + limit,
        "your code length = " +
          codelen +
          ", please try this code in challage version.\n the simple version only accept the solution which length>" +
          limit
      )
    else assert.strictEqual("PASS", "PASS", ";-)")
    //end of anti-cheat
  })
  it("<br><font size=4><b>-------- Basic Test --------</b></font>", () => {
    assert.strictEqual(sc(2), "Aa~ Pa! Aa!", "good luck!")
    assert.strictEqual(sc(6), "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!")
    assert.strictEqual(sc(7), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!")
    assert.strictEqual(sc(10), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!")
    assert.strictEqual(sc(1), "", "good luck!")
    assert.strictEqual(sc(-1), "", "good luck!")
  })
  it("<br><font size=4><b>--------100 Random Test --------</b></font>", () => {
    function an(floor) {
      //130
      if (floor < 2) return ""
      if (floor < 7) return Array(floor).join("Aa~ ") + "Pa! Aa!"
      return Array(floor).join("Aa~ ") + "Pa!"
    }
    for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
      let ff = ~~(40 * Math.random()) - 5,
        answer = an(ff)
      assert.strictEqual(sc(ff), answer, "Test: floor=" + ff)
    }
  })
})

/*
function sc(floor){//130
  if (floor<2) return "";
  if (floor<7) return Array(floor).join("Aa~ ")+"Pa! Aa!";
  return Array(floor).join("Aa~ ")+"Pa!";
}
//78
function sc(f){s=f>1?Array(f).join("Aa~ ")+"Pa!":"";return f<2||f>6?s:s+" Aa!"}
//83
function sc(f){f<2?s="":s="Pa!"+(f>6?"":" Aa!");while(--f>0) s="Aa~ "+s;return s}
*/

/* process.reallyExit=bak;

function rndc(){
  return String.fromCharCode(~~(26*Math.random())+97); 
}
function rnds(){
  let len= ~~(8*Math.random())+1;
  for (let i=0, rs=[];i<len;i++) rs[i]=rndword();
  return rs.join(" ");
}
const wd="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function rndregex(){
  let len1= ~~(8*Math.random())+1, len2= ~~(20*Math.random())+1;
  for (let i=0, rs1=[];i<len1;i++) rs1[i]=wd[~~(62*Math.random())];
  let word=rs1.join("");
  return `/${Array(len2+1).join(word)}/`;
}
function rndsx(){
  let t=~~(100*Math.random())%3;
  if (t==0) return rndword(~~(100*Math.random())+4);
  if (t==1) return rnds(~~(100*Math.random())+4)
  if (t==2) {
    let nn= ~~(100*Math.random())+4, a= rnds(nn), b=rndword(nn);
    for (let i=0, rs=[];i<nn;i++) {
      let x=~~(100*Math.random())%2;
      rs[i]= x==1 ? a[i] : b[i];
    }
    return rs.join("");
  }
} */

//console.log('<br><font size=4><b>Congratulations, You pass the test!</b></font>','')
//console.log("<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>","")
