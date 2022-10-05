// 8 kyu - Training JS #11: loop statement --break,continue  [ ID: 5721c189cdd71194c1000b9b  (training-js-number-11-loop-statement-break-continue) ]
// URL: https://www.codewars.com/kata/5721c189cdd71194c1000b9b
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

function an(dolls) {
  let bag = []
  //set label is corner use of break
  bagisfull: for (let i = 0; i < dolls.length; i++) {
    //unneed to learn it.
    if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue
    bag.push(dolls[i]) //break can also used with a label
    if (bag.length == 3) break bagisfull //but it's easy to mess with code
  } //so it's not a good method.
  return bag
}

function rndc() {
  return String.fromCharCode(~~(26 * Math.random()) + 97)
}
function rnds() {
  let len = ~~(10 * Math.random()) + 1
  for (let i = 0, rs = []; i < len; i++) rs[i] = rndc()
  return rs.join("")
}
//var ss="   abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
function rnddolls() {
  let len = ~~(20 * Math.random()) + 3,
    rs = [],
    alldolls = [
      "Hello Kitty",
      "Hello Kitty",
      "Hello Kitty",
      "Snow white",
      "Barbie doll",
      "Barbie doll",
      "Barbie doll",
      "Tom cat",
      "Snoopy dog",
      "Mickey Mouse",
      "Donald Duck"
    ]
  for (let i = 0; i < len; i++) rs[i] = alldolls[~~(alldolls.length * Math.random())]
  return rs
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")

//test for equations and inequalities

Test.assertSimilar(grabDoll(["Mickey Mouse", "Hello Kitty", "Snow white"]), ["Hello Kitty"])
Test.assertSimilar(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Snow white"]), ["Hello Kitty", "Hello Kitty"])
Test.assertSimilar(grabDoll(["Mickey Mouse", "Hello Kitty", "Hello Kitty", "Barbie doll", "Snow white"]), [
  "Hello Kitty",
  "Hello Kitty",
  "Barbie doll"
])
Test.assertSimilar(grabDoll(["Mickey Mouse", "Barbie doll", "Hello Kitty", "Hello Kitty", "Hello Kitty", "Snow white"]), [
  "Barbie doll",
  "Hello Kitty",
  "Hello Kitty"
])

console.log("<br><font size=4><b>---should coding with 'for','break' and 'continue'---</b></font>")
console.log("")
let code = grabDoll + ""
//console.log(code)
let passswitch =
  /for *\(/.test(code) && /break/.test(code) && /continue/.test(code)
    ? "Passed"
    : 'Your solution should contains keyword "for","break" and "continue"'
Test.assertSimilar(passswitch, "Passed")
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
console.log("<br><font size=4><b>--------100 Random Test --------</b></font>")
console.log("")

for (let myjinxini = 0; myjinxini < 100; myjinxini++) {
  let dd = rnddolls(),
    answer = an(dd)
  console.log("<font color='#CD7F32'>Test for: dolls=[" + dd + "]</font>", "")
  Test.assertSimilar(grabDoll(dd), answer)
}
console.log("<br><font size=4><b>Congratulations, You pass the test!</b></font>", "")
console.log(
  "<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>",
  ""
)
