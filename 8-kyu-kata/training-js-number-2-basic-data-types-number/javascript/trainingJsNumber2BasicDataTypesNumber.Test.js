// 8 kyu - Training JS #2:  Basic data types--Number  [ ID: 571edd157e8954bab500032d  (training-js-number-2-basic-data-types-number) ]
// URL: https://www.codewars.com/kata/571edd157e8954bab500032d
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


function an1(){
  let a=v1;   //set number value to a
  let b=v1;   //set number value to b
  return a+b;
}
function an21(){
  let a=v3;   //set number value to a
  let b=v1;   //set number value to b
  return a-b;
}
function an22(){
  let a=v4;   //set number value to a
  let b=v2;   //set number value to b
  return a-b;
}
function an23(){
  let a=v6;   //set number value to a
  let b=v3;   //set number value to b
  return a-b;
}
function an3(){
  let a=v1;   //set number value to a
  let b=v5;   //set number value to b
  return a*b;
}
function an4(){
  let a=v4;   //set number value to a
  let b=v5;     //set number value to b
  return a/b;
}
function an51(){
  let a=v6;   //set number value to a
  let b=v3;   //set number value to b
  return a%b;
}
function an52(){
  let a=v2;   //set number value to a
  let b=v3;   //set number value to b
  return a%b;
}
function an53(){
  let a=v2;   //set number value to a
  let b=v4;   //set number value to b
  return a%b;
}
function an54(){
  let a=v2;   //set number value to a
  let b=v6;   //set number value to b
  return a%b;
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

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")
    Test.assertSimilar(equal1(),100);
    Test.assertSimilar(equal2(),100);
    Test.assertSimilar(equal3(),100);
    Test.assertSimilar(equal4(),100);
    Test.assertSimilar(equal5(),100);
    
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
console.log("<br><font size=4><b>When v1-v6 values is changed, function's return value should be changed too</b></font>")
console.log("<br><font size=4><b>--------100 Random Test --------</b></font>")
console.log("")

for (let myjinxini=0;myjinxini<25;myjinxini++){
  v1=~~(100*Math.random())+1,v2=~~(100*Math.random())+1,v3=~~(100*Math.random())+1,
  v4=~~(100*Math.random())+1,v5=~~(100*Math.random())+1,v6=~~(100*Math.random())+1
  let ans21=an21(), ans22=an22(), ans23=an23(), ans3=an3(), ans4=an4(), ans51=an51(), ans52=an52(), ans53=an53(), ans54=an54();
  //console.log("<font color='#CD7F32'>Test for: v1="+v1+" v2="+v2+"  v3="+v3+"  v4="+v4+"  v5="+v5+"  v6="+v6+"</font>","")
    if (equal2()==ans21||equal2()==ans22||equal2()==ans23) Test.assertSimilar("Random Test"+(myjinxini*4+1)+" Passed!","Random Test"+(myjinxini*4+1)+" Passed!");
    else Test.assertSimilar("Your function equal2 got a wrong answer, you should solve kata by use v1-v6","Test Passed");
    if (equal3()==ans3) Test.assertSimilar("Random Test"+(myjinxini*4+2)+" Passed!","Random Test"+(myjinxini*4+2)+" Passed!");
    else Test.assertSimilar("Your function equal3 got a wrong answer, you should solve kata by use v1-v6","Test Passed");
    if (equal4()==ans4) Test.assertSimilar("Random Test"+(myjinxini*4+3)+" Passed!","Random Test"+(myjinxini*4+3)+" Passed!");
    else Test.assertSimilar("Your function equal4 got a wrong answer, you should solve kata by use v1-v6","Test Passed");
    if (equal5()==ans51||equal5()==ans52||equal5()==ans53||equal5()==ans54) Test.assertSimilar("Random Test"+(myjinxini*4+4)+" Passed!","Random Test"+(myjinxini*4+4)+" Passed!");
    else Test.assertSimilar("Your function equal5 got a wrong answer, you should solve kata by use v1-v6","Test Passed");
}
console.log('<br><font size=4><b>Congratulations, You pass the test!</b></font>','')
console.log("<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>","")

