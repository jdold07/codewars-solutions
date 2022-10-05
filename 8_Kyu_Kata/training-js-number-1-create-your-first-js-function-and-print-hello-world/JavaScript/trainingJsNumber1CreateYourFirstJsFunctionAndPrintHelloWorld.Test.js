// [object Object] - Training JS #1: create your first JS function and print "Hello World!"  [ ID: 571ec274b1c8d4a61c0000c8  (training-js-number-1-create-your-first-js-function-and-print-hello-world) ]
// URL: https://www.codewars.com/kata/571ec274b1c8d4a61c0000c8
// Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
// *****************************************************************************
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




function rndc(){
  return String.fromCharCode(~~(26*Math.random())+97); 
}
function rnds(){
  let len= ~~(8*Math.random())+1;
  for (let i=0, rs=[];i<len;i++) rs[i]=rndc();
  return rs.join("");
}
//var ss="   abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
function rndexcel(){
  let len=~~(20*Math.random())+5;
  for (let i=0, rs=[];i<len;i++) {
    let jl=~~(100*Math.random())%4;
    if (jl==0) rs[i]=rnds();
    else if(jl==1) rs[i]=~~(1000000*Math.random());
    else if(jl==2) rs[i]= +(~~(100*Math.random())+"."+(~~(10000*Math.random())))
    else{
      let yy= ~~(50*Math.random())+2000, mm= ~~(12*Math.random())+1, dd= ~~(28*Math.random())+1;
      rs[i]=new Date(`${yy}-${mm}-${dd}`);
    }
  }
  return rs;
}

console.log("<br><font size=4><b>Test for mission 1: should create a function helloWorld</b></font>")
console.log("")
    Test.expect(helloWorld, "helloWorld is not defined")
console.log("<br><font size=4><b>Test for mission 2: should defined a variable str and set value</b></font>")
let code=helloWorld+"";
let varstr=/(var|let|const) +str/.test(code)?"variable str is defined":"variable str is not defined";
    Test.assertSimilar(varstr,"variable str is defined")
console.log("<br><font size=4><b>Test for mission 3: should use method console.log() to print Hello World!</b></font>")
helloWorld();
let recsave=rec;
let typelog=/console\.log/.test(code)?"console.log() found in function":"console.log() is not found";
    Test.assertSimilar(typelog,"console.log() found in function")
    
Test.assertSimilar("print value is \""+recsave+"\"","print value is \"Hello World!\"","you did not print \"Hello World!\" to the screen");
    
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

console.log("<br><font size=4><b>--------100 Random Test --------</b></font>")
console.log("")

for (var myjinxini=0;myjinxini<100;myjinxini++){
  var ee= rndexcel(), ww= ~~(10*Math.random()), answer=an(ee,ww)
  console.log("<font color='#CD7F32'>Test for: excel=["+ee+"]  width="+ww+"</font>","")
  Test.assertSimilar(solveIt(ee,ww), answer);
}
console.log('<br><font size=4><b>Congratulations, You pass the test!</b></font>','')
console.log("<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>","")
*/
