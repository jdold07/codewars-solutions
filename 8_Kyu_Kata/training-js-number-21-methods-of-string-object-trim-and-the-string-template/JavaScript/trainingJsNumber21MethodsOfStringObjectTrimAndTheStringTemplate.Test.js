// [object Object] - Training JS #21: Methods of String object--trim() and the string template  [ ID: 5729b103dd8bac11a900119e  (training-js-number-21-methods-of-string-object-trim-and-the-string-template) ]
// URL: https://www.codewars.com/kata/5729b103dd8bac11a900119e
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


process.reallyExit=bak;

const fcode=function(str){
  const isChar = function(a) {
    if(a){
      var code = a.toLowerCase().charCodeAt(0)
      return code >= 97 && code <= 122;
    }
    return false;
  }
  return str.replace(/\r?\n|\r/g, '').split('').filter((a,i,x) => {
    return a===' '?isChar(x[i-1])&&isChar(x[i+1])?true:false:true;
  }).join('');
}


function an(s){
  var a=s.trim();
  return `${a}\n${a+a}\n${a+a+a}\n${a+a+a+a}\n${a+a+a+a+a}`;
}
function enIt(str){
  var chars=str.split("");
  for (var i=0;i<chars.length;i++){
    var tmp=chars[i];
    if (/[a-z]/i.test(tmp)){
      var cod=tmp.charCodeAt(), sub=cod>96 ? 97:65;
      chars[i]=String.fromCharCode((cod-sub+3)%26+sub);
    }
  }
  return chars.join("");
}

function rndc(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length*Math.random())]; 
}
function rndsp(){
  var all=" !#$%&*-+=_,.|".split("")
  return all[~~(all.length*Math.random())]; 
}

function rnds(){
  var len= ~~(4*Math.random())+3;
  for (var i=0,rs=[];i<len;i++) rs[i]=rndc();
  return rs.join("");
}
//var ss="   abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
function rndtrim(){
  var ws=[" ","\n","\t","\r"],l=[],r=[],m=[];
  var len= ~~(5*Math.random())+3;
  for (var i=0;i<len;i++) l[i]=ws[~~(4*Math.random())]
  var len= ~~(5*Math.random())+3;
  for (var i=0;i<len;i++) r[i]=ws[~~(4*Math.random())]
  var len= ~~(8*Math.random())+1;
  for (var i=0;i<len;i++) m[i]=rndc();
  return l.join("")+m.join("")+r.join("");
}
function checkfile(nb,nm,tm){
  if (!nb||!nm||!tm) return false;
  if (isNaN(nb)) return false;
  if (nm.length<3) return false;
  if (tm=="?") return false;
  if (tm.length<8) return false;
  if (/[^a-z]/i.test(nm)) return false;
  if (/[^a-z '?]/i.test(tm)) return false;
  var name= nm, tt=tm,s=name+tt,num=0;
  for (var i=0;i<s.length;i++){
    var tmp=s[i].charCodeAt();
    num+=tmp%2 ? tmp*3+1:tmp/2
  }
  return num==nb;
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")
    
    Test.assertSimilar(fiveLine("  a") , "a\naa\naaa\naaaa\naaaaa");
    Test.assertSimilar(fiveLine("\txy \n") , "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy");
    Test.assertSimilar(fiveLine("           Ok               ") , "Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk");
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
console.log("<br><font size=4><b>--------100 Random Test--------</b></font>")
console.log("")

for (var myjinxini=0;myjinxini<100;myjinxini++){
  var tt= rndtrim(), ans="\n"+an(tt)
  console.log("<font color='#CD7F32'>Test for: s="+tt+"</font>","")
  var useran="\n"+fiveLine(tt);
  Test.assertSimilar(useran, ans);
}

console.log('<br><font size=4><b>Congratulations, You pass the test!</b></font>','')
console.log("<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>","")

