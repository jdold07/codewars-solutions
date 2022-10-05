// [object Object] - Training JS #6:  Basic data types--Boolean  and conditional statements if..else  [ ID: 571f832f07363d295d001ba8  (training-js-number-6-basic-data-types-boolean-and-conditional-statements-if-dot-else) ]
// URL: https://www.codewars.com/kata/571f832f07363d295d001ba8
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


function an(val){
  if (val) return "true";
  else     return "false";
}

function rndc(){
  return String.fromCharCode(~~(26*Math.random())+97); 
}
function rnds(){
  var len= ~~(8*Math.random())+1;
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
    var a=1,b=2,c=1;
    Test.assertSimilar(trueOrFalse(a>b),"false");
    Test.assertSimilar(trueOrFalse(a===b),"false");
    Test.assertSimilar(trueOrFalse(a<b),"true");
    Test.assertSimilar(trueOrFalse(a!==b),"true");
    Test.assertSimilar(trueOrFalse(b>c),"true");
    Test.assertSimilar(trueOrFalse(b===c),"false");
    Test.assertSimilar(trueOrFalse(b<c),"false");
    Test.assertSimilar(trueOrFalse(b!==c),"true");
    Test.assertSimilar(trueOrFalse(a===c),"true");
    Test.assertSimilar(trueOrFalse(a!==c),"false");
    //test for logical operators and bitwise operators
    var t=true,f=false;
    Test.assertSimilar(trueOrFalse(t&&f),"false");
    Test.assertSimilar(trueOrFalse(f&&f),"false");
    Test.assertSimilar(trueOrFalse(t&&t),"true");
    Test.assertSimilar(trueOrFalse(t||f),"true");
    Test.assertSimilar(trueOrFalse(t||t),"true");
    Test.assertSimilar(trueOrFalse(f||f),"false");
    Test.assertSimilar(trueOrFalse(t&f),"false");
    Test.assertSimilar(trueOrFalse(t&t),"true");
    Test.assertSimilar(trueOrFalse(f&f),"false");
    Test.assertSimilar(trueOrFalse(t|f),"true");
    Test.assertSimilar(trueOrFalse(t|t),"true");
    Test.assertSimilar(trueOrFalse(f|f),"false");
    Test.assertSimilar(trueOrFalse(!t),"false");
    Test.assertSimilar(trueOrFalse(!f),"true");
    Test.assertSimilar(trueOrFalse(t^f),"true");
    Test.assertSimilar(trueOrFalse(t^t),"false");
    Test.assertSimilar(trueOrFalse(f^f),"false");
    //test for implicit conversion 
    Test.assertSimilar(trueOrFalse(true),"true");
    Test.assertSimilar(trueOrFalse(123),"true");
    Test.assertSimilar(trueOrFalse("123"),"true");
    Test.assertSimilar(trueOrFalse(["123"]),"true");
    Test.assertSimilar(trueOrFalse("false"),"true");
    Test.assertSimilar(trueOrFalse(false),"false");
    Test.assertSimilar(trueOrFalse(0),"false");
    Test.assertSimilar(trueOrFalse(""),"false");
    Test.assertSimilar(trueOrFalse(null),"false");
    Test.assertSimilar(trueOrFalse([].length),"false");
    Test.assertSimilar(trueOrFalse(undefined),"false");
    
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
  var tt= rndtf(), answer=an(tt)
  console.log("<font color='#CD7F32'>Test for: val="+tt+"</font>","")
  Test.assertSimilar(trueOrFalse(tt), answer);
  
}
console.log('<br><font size=4><b>Congratulations, You pass the test!</b></font>','')
console.log("<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>","")

