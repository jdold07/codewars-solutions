// 8 kyu - Training JS #8: Conditional statement--switch  [ ID: 572059afc2f4612825000d8a  (training-js-number-8-conditional-statement-switch) ]
// URL: https://www.codewars.com/kata/572059afc2f4612825000d8a
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
      let code = a.toLowerCase().charCodeAt(0);
      return code >= 97 && code <= 122;
    }
    return false;
  }
  return str.replace(/\r?\n|\r/g, '').split('').filter((a,i,x) => {
    return a===' '?isChar(x[i-1])&&isChar(x[i+1])?true:false:true;
  }).join('');
}


function an(month){
  let days;
  switch (month){
    case 2:
      days=28;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days=30;
      break;
    default:
      days=31;
  }
  return days;
}

function rndc(){
  return String.fromCharCode(~~(26*Math.random())+97); 
}
function rnds(){
  let len= ~~(8*Math.random())+1;
  for (let i=0, rs=[];i<len;i++) rs[i]=rndc();
  return rs.join("");
}
//var ss="   abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
function rndtf(){
  let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", values=[true,123,"123",["123"],"false",false,0,"",null,undefined], jl= ~~(100*Math.random())%6, rs;
  if (jl==0) rs=~~(100*Math.random())
  else if (jl==1) rs=rnds();
  else rs=values[~~(10*Math.random())]
  return rs;
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")
    
//test for equations and inequalities
    
    Test.assertSimilar(howManydays(1),31);
    Test.assertSimilar(howManydays(2),28);
    Test.assertSimilar(howManydays(3),31);
    Test.assertSimilar(howManydays(4),30);
    Test.assertSimilar(howManydays(12),31);
    
console.log("<br><font size=4><b>---should coding with switch---</b></font>")
console.log("")
let code=howManydays+"";
//console.log(code)
let passswitch=code.indexOf("switch")>-1 ? "Passed":"Your solution should contains keyword \"switch\"";
Test.assertSimilar(passswitch,"Passed");
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

for (let myjinxini=0;myjinxini<100;myjinxini++){
  let mm= ~~(12*Math.random())+1, answer=an(mm);
  console.log("<font color='#CD7F32'>Test for: month="+mm+"</font>","")
  Test.assertSimilar(howManydays(mm), answer);
  
}
console.log('<br><font size=4><b>Congratulations, You pass the test!</b></font>','')
console.log("<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>","")

