// 8 kyu - Training JS #3:  Basic data types--String  [ ID: 571edea4b625edcb51000d8e  (training-js-number-3-basic-data-types-string) ]
// URL: https://www.codewars.com/kata/571edea4b625edcb51000d8e
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

function an(a, b, c) {
  let result = a + b + c //combine a,b,and c
  return result
}

function rndc() {
  return String.fromCharCode(~~(26 * Math.random()) + 97)
}
function rnds() {
  let len = ~~(8 * Math.random()) + 1
  for (let i = 0, rs = []; i < len; i++) rs[i] = rndc()
  return rs.join("")
}
//var ss="   abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
function rndchars() {
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let rs = []
  rs[0] = chars[~~(52 * Math.random())]
  rs[1] = chars[~~(52 * Math.random())]
  rs[2] = chars[~~(52 * Math.random())]
  return rs
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")

Test.assertSimilar(Dad(), "Dad")
Test.assertSimilar(Bee(), "Bee")
Test.assertSimilar(banana(), "banana")
let text1 =
  "John's iron axe fell into the river. He cried sadly by the river.\n" +
  "Then a monster came out of the water, with a golden axe in his hand.\n" +
  "He asked John: is this golden axe yours?"
console.log(text1)
if (answer1() != "no" && answer1() != "") {
  let fail = 'The monster frowned and said to John: "This is not your axe,\n' + 'you are not an honest boy!!!"'
  console.log(fail)
}
Test.assertSimilar(answer1(), "no")
let text2 =
  "John replied that it was not his axe. The monster took out a silver axe.\n" + "He asked John: is this silver axe yours?"
console.log(text2)
if (answer2() != "no" && answer2() != "") {
  let fail = 'The monster frowned and said to John: "This is not your axe,\n' + 'you are not an honest boy!!!"'
  console.log(fail)
}
Test.assertSimilar(answer2(), "no")
let text3 =
  "John replied that it was not his axe. The monster took out a iron axe.\n" + "He asked John: is this iron axe yours?"
console.log(text3)
if (answer3() != "yes" && answer3() != "") {
  let fail = 'The monster frowned and said to John: "This is your axe,\n' + 'are you a foolish boy???"'
  console.log(fail)
}
Test.assertSimilar(answer3(), "yes")
let text4 = "John said happily: This is my iron axe!!!\n"
console.log(text4)
;(a2 = "x"), (e2 = "x")
if (Dad() == "Dad" || Bee() == "Bee" || banana() == "banana") {
  let text5 =
    'The monster frowned and said to John: "Yes, this is your iron axe,\n' +
    'but you write code that always cheat me, you are not an honest boy!!!"'
  console.log(text5)
  Test.assertNotSimilar(Dad(), "Dad")
  Test.assertNotSimilar(Bee(), "Bee")
  Test.assertNotSimilar(banana(), "banana")
}
let text6 = 'The monster smiled and said to John, "you are an honest boy!"'
console.log(text6)
//var code1=Dad+"";
//var code2=Bee+"";
//var code3=banana+""
//if (code1.indexOf("d1 + a2 + d2")==-1) er1="Your solution of function Dad is not 'd1 + a2 + d2'"
//if (code1.indexOf("b1 + e2 + e2")==-1) er1="Your solution of function Bee is not 'b1 + e2 + e2'"
//if (code1.indexOf("b2 + a2 + n2 + a2 + n2 + a2")==-1) er1="Your solution of function Dad is not 'b2 + a2 + n2 + a2 + n2 + a2'"
//console.log(code1)
/*
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
*/
/*
console.log("<br><font size=4><b>---should not modify the original array---</b></font>")
console.log("")
for (var myjinxini=0;myjinxini<3;myjinxini++){
  var ee= rndexcel(), ww= ~~(10*Math.random()), oarr="["+ee+"]",
      answer=an(ee,ww), uan=solveIt(ee,ww);
  //Test.assertSimilar(uan, answer);
  Test.assertSimilar("["+ee+"]",oarr);
}
*/
/*
console.log("<br><font size=4><b>--------100 Random Test --------</b></font>")
console.log("")

for (var myjinxini=0;myjinxini<100;myjinxini++){
  var cc= rndchars(), answer=an(...cc)
  console.log("<font color='#CD7F32'>Test for: a='"+cc[0]+"'  b='"+cc[1]+"'  c='"+cc[2]+"'</font>","")
  Test.assertSimilar(combineChars(...cc), answer);
}
*/
console.log("<br><font size=4><b>Congratulations, You pass the test!</b></font>", "")
console.log(
  "<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>",
  ""
)
