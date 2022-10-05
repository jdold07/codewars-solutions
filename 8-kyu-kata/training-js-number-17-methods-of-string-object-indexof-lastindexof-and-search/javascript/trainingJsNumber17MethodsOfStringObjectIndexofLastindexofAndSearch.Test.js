// 8 kyu - Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()  [ ID: 57277a31e5e51450a4000010  (training-js-number-17-methods-of-string-object-indexof-lastindexof-and-search) ]
// URL: https://www.codewars.com/kata/57277a31e5e51450a4000010
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
      var code = a.toLowerCase().charCodeAt(0)
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

function an(str, c) {
  return str.indexOf(c) == -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c)
}

function rndc() {
  return String.fromCharCode(~~(26 * Math.random()) + 97)
}
function rnds() {
  var len = ~~(16 * Math.random()) + 4
  for (var i = 0, rs = []; i < len; i++) rs[i] = rndc()
  return rs.join("")
}
//var ss="   abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
function rndstr() {
  var len = ~~(50 * Math.random()) + 10
  for (var i = 0, rs = []; i < len; i++) rs[i] = rndc()
  return rs.join("")
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")

Test.assertSimilar(firstToLast("ababc", "a"), 2)
Test.assertSimilar(firstToLast("ababc", "c"), 0)
Test.assertSimilar(firstToLast("ababc", "d"), -1)

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

for (var myjinxini = 0; myjinxini < 100; myjinxini++) {
  var ss = rndstr(),
    cc = rndc(),
    answer = an(ss, cc)
  console.log("<font color='#CD7F32'>Test for: str=\"" + ss + '"  c="' + cc + '"</font>', "")
  var useran = firstToLast(ss, cc)
  Test.assertSimilar(useran, answer)
}
console.log("<br><font size=4><b>Congratulations, You pass the test!</b></font>", "")
console.log(
  "<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>",
  ""
)
