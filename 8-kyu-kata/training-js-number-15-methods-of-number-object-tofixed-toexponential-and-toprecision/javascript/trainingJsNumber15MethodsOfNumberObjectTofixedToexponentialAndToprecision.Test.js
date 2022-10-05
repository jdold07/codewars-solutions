// 8 kyu - Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()  [ ID: 57256064856584bc47000611  (training-js-number-15-methods-of-number-object-tofixed-toexponential-and-toprecision) ]
// URL: https://www.codewars.com/kata/57256064856584bc47000611
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


function an(arr,n){
  for (var i=0,rs=0;i<arr.length;i++) rs+=(n > +arr[i].toFixed(2));
  return rs;
}

function rndc(){
  return String.fromCharCode(~~(26*Math.random())+97); 
}
function rnds(){
  var len= ~~(6*Math.random())+2;
  for (var i=0,rs=[];i<len;i++) rs[i]=rndc();
  return rs.join("");
}
//var ss="   abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
function rndarn(){
  var nn= (~~(100000*Math.random())+(~~(9*Math.random())+1)*100000)/100000
  //console.log("nn=",nn)
  var js=(nn+"").substr(0,4);
  //console.log("js=",js)
  var len= ~~(16*Math.random())+4
  for (var i=0,rs=[];i<len;i++){
    var t=js;
    for (var j=0;j<6;j++) t+= ~~(10*Math.random())
    rs[i]= +t;
  }
  return [rs,nn]
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")
    
//test for equations and inequalities
    //var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
    //Test.assertSimilar(giveMeFive(ob),["Pears","apple","sweet"]);
    
    Test.assertSimilar(howManySmaller([1.234,1.235,1.228],1.24), 2);
    Test.assertSimilar(howManySmaller([1.1888,1.1868,1.1838],1.19), 1);
    Test.assertSimilar(howManySmaller([3.1288,3.1212,3.1205],3.1212), 2);
    
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

for (var myjinxini=0;myjinxini<100;myjinxini++){
  var arn= rndarn(), answer=an(arn[0].slice(),arn[1])
  console.log("<font color='#CD7F32'>Test for: arr=["+arn[0]+"]  n="+arn[1]+"</font>","")
  var useran=howManySmaller(arn[0],arn[1]);
  Test.assertSimilar(useran, answer);
}
console.log('<br><font size=4><b>Congratulations, You pass the test!</b></font>','')
console.log("<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>","")

