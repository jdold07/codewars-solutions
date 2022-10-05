// 8 kyu - Training JS #9: loop statement --while and do..while  [ ID: 57216d4bcdd71175d6000560  (training-js-number-9-loop-statement-while-and-do-dot-while) ]
// URL: https://www.codewars.com/kata/57216d4bcdd71175d6000560
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


function an(str,n){
  var times=0;
  while (times<n){
    if (times%2==0) str="*"+str;
    else str=str+"*";
    times++;
  }
  return str;
}

function rndc(){
  return String.fromCharCode(~~(26*Math.random())+97); 
}
function rnds(){
  var len= ~~(10*Math.random())+1;
  for (var i=0,rs=[];i<len;i++) rs[i]=rndc();
  return rs.join("");
}
//var ss="   abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
function rndtf(){
  var chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      values=[true,123,"123",["123"],"false",false,0,"",null,undefined],
      jl= ~~(100*Math.random())%6,rs;
  if (jl==0) rs=~~(100*Math.random())
  else if (jl==1) rs=rnds();
  else rs=values[~~(10*Math.random())]
  return rs;
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")
    
//test for equations and inequalities
    
    Test.assertSimilar(padIt("a",1),"*a");
    Test.assertSimilar(padIt("a",2),"*a*");
    Test.assertSimilar(padIt("a",3),"**a*");
    Test.assertSimilar(padIt("a",4),"**a**");
    Test.assertSimilar(padIt("a",5),"***a**");
    
    
console.log("<br><font size=4><b>---should coding with 'while'---</b></font>")
console.log("")
var code=padIt+""
//console.log(code)
var passswitch=code.indexOf("while")>-1 ? "Passed":"Your solution should contains keyword \"while\"";
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

for (var myjinxini=0;myjinxini<100;myjinxini++){
  var ss= rnds(),nn=~~(30*Math.random())+1, answer=an(ss,nn)
  console.log("<font color='#CD7F32'>Test for: str=\""+ss+"\"  n="+nn+"</font>","")
  Test.assertSimilar(padIt(ss,nn), answer);
}
console.log('<br><font size=4><b>Congratulations, You pass the test!</b></font>','')
console.log("<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>","")

