// 8 kyu - Training JS #14: Methods of Number object--toString() and toLocaleString()  [ ID: 57238ceaef9008adc7000603  (training-js-number-14-methods-of-number-object-tostring-and-tolocalestring) ]
// URL: https://www.codewars.com/kata/57238ceaef9008adc7000603
// Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
// *****************************************************************************
/*
function an(ex){
  var st="2";
  for (var i=0;i<ex.length;i++){
    var tmp=ex[i].replace(st,"").replace("-","")
    if (tmp.length==1) st=tmp
  }
  return st;
}
*/

process.reallyExit = bak

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

function an(r, g, b) {
  let cv = function (n) {
    let s = n.toString(16)
    return s.length == 2 ? s : "0" + s
  }
  return "#" + cv(r) + cv(g) + cv(b)
}

function rndc() {
  return String.fromCharCode(~~(26 * Math.random()) + 97)
}
function rnds() {
  let len = ~~(6 * Math.random()) + 2
  for (let i = 0, rs = []; i < len; i++) rs[i] = rndc()
  return rs.join("")
}
//var ss="   abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
function rndnum() {
  let jl = ~~(100 * Math.random()) % 10
  switch (jl) {
    case 0:
      return NaN
    case 1:
      return Number.MAX_VALUE
    case 2:
      return Number.MIN_VALUE
    case 3:
      return -Infinity
    case 4:
      return Infinity
    default:
      return ~~(100 * Math.random())
  }
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")

//test for equations and inequalities
//var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
//Test.assertSimilar(giveMeFive(ob),["Pears","apple","sweet"]);

Test.assertSimilar(colorOf(255, 0, 0), "#ff0000")
showColor("#ff0000")
Test.assertSimilar(colorOf(0, 111, 0), "#006f00")
showColor("#006f00")
Test.assertSimilar(colorOf(1, 2, 3), "#010203")
showColor("#010203")

/*
console.log("<br><font size=4><b>---should coding with 'for in'---</b></font>")
console.log("")
var code=giveMeFive+""
//console.log(code)
var passswitch=/for *\(.* in .*\)/.test(code) ? "Passed":"Your solution should contains keyword \"for in\"";
Test.assertSimilar(passswitch,"Passed");
//anti-cheat and calc the code length
console.log("<br><font size=4><b>--------Code length check --------</b></font>")
var catchcode;
describe("", function() {
  var dump = arguments.callee.caller.caller.caller.toString();
  const FIXED = arguments.callee.caller.caller.toString().length;
  var idx1=dump.indexOf("myjinxin code")+17,
      idx2=dump.indexOf("var Test = global.Test")-";\n ;\n (function () {\n var ".length-1
  catchcode = dump.slice(idx1,idx2)
});
var allcode=catchcode.replace(/\/\/.*?(\n|$)/g,"").replace(/(\n)+/g,"\n"); 
var code=fcode(allcode);
var codelen=code.length, limit=0;
if (codelen<=limit) Test.assertSimilar("code length<="+limit,"code length>"+limit,  "your code length = "+codelen+", please try this code in challage version.\n the simple version only accept the solution which length>"+limit);
else Test.assertSimilar("PASS", "PASS", ";-)");

//end of anti-cheat

console.log("<br><font size=4><b>---should not modify the original array---</b></font>")
console.log("")
for (var myjinxini=0;myjinxini<3;myjinxini++){
  var ee= rndexcel(), ww= ~~(10*Math.random()), oarr="["+ee+"]",
      answer=an(ee,ww), uan=solveIt(ee,ww);
  //Test.assertSimilar(uan, answer);
  Test.assertSimilar("["+ee+"]",oarr);
}
*/
console.log("<br><font size=4><b>--------100 Random Test --------</b></font>")
console.log("")

for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
  let rr = ~~(256 * Math.random()),
    gg = ~~(256 * Math.random()),
    bb = ~~(256 * Math.random()),
    answer = an(rr, gg, bb)
  console.log("<font color='" + answer + "'>Test for: r=" + rr + "  g=" + gg + "  b=" + bb + "</font>", "")
  let useran = colorOf(rr, gg, bb)
  Test.assertSimilar(useran, answer)
  console.log("<font color='" + useran + "'>Your color code is \"" + useran + '"</font>', "")
}
console.log("<br><font size=4><b>Congratulations, You pass the test!</b></font>", "")
console.log(
  "<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>",
  ""
)
