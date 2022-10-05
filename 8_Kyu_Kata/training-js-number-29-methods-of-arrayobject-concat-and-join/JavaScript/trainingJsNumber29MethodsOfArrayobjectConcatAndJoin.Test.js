// [object Object] - Training JS #29: methods of arrayObject---concat() and join()  [ ID: 5731861d05d14d6f50000626  (training-js-number-29-methods-of-arrayobject-concat-and-join) ]
// URL: https://www.codewars.com/kata/5731861d05d14d6f50000626
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


function an(arr){
  for (var i=0,r=[];i<arr.length;i++) r=r.concat(arr[i]);
  r.sort((a,b)=>b-a);
  return r.join(">");
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
function rndc1(){
  var allc=" !#$%&*-+=_,.|1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length*Math.random())]; 
}

function rndarr(){
  var len= ~~(8*Math.random())+3;
  for (var i=0,rs=[];i<len;i++) {
    var l=~~(6*Math.random())+1;
    rs[i]=[];
    for (var j=0;j<l;j++) rs[i][j]= ~~(50*Math.random());
  }
  return rs;
}

function rnds(){
  var len= ~~(15*Math.random())+3;
  for (var i=0,rs=[];i<len;i++) rs[i]=rndc1();
  return rs.join("");
}
//var ss="   abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!,.?"
function rndarr1(){
  var len= ~~(10*Math.random())+3;
  for (var i=0,rs=[];i<len;i++) rs[i]=rnds();
  return rs;
}
function rndarr2(nn){
  for (var i=0,rs=[];i<nn;i++) rs[i]= ~~(100*Math.random());
  return rs;
}
function rndex(n){
  var len= ~~(10*Math.random())+1;
  for (var i=0,rs=[];i<len;i++) {
    var t1= ~~(n*Math.random()),t2=~~(n*Math.random());
    while (t1==t2) t2=~~(n*Math.random());
    rs[i]= [t1,t2];
  }
  return rs;
}

console.log("<br><font size=4><b>-------- Basic Test --------</b></font>")
console.log("")
         
    Test.assertSimilar(bigToSmall([[1,2],[3,4],[5,6]]) , "6>5>4>3>2>1");
    Test.assertSimilar(bigToSmall([[1,3,5],[2,4,6]]) , "6>5>4>3>2>1");
    Test.assertSimilar(bigToSmall([[1,1],[1],[1,1]]) , "1>1>1>1>1");
    
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
*/
/*
console.log("<br><font size=4><b>---should not modify the original array---</b></font>")
console.log("")
for (var myjinxini=0;myjinxini<5;myjinxini++){
  var ar= rndarr(), bak=ar.slice(), ans=an(ar);
  console.log("<font color='#CD7F32'>Test for: arr="+JSON.stringify(ar)+"</font>","")
  var useran=isolateIt(ar);
  Test.assertSimilar(useran, ans);
  Test.assertSimilar(ar, bak,"You should not modify the original array");
}
*/
console.log("<br><font size=4><b>--------100 Random Test--------</b></font>")
console.log("")

for (var myjinxini=0;myjinxini<100;myjinxini++){
  var ar= rndarr(), ans=an(ar);
  console.log("<font color='#CD7F32'>Test for: arr="+JSON.stringify(ar)+"</font>","")
  var useran=bigToSmall(ar);
  Test.assertSimilar(useran, ans);
}

console.log('<br><font size=4><b>Congratulations, You pass the test!</b></font>','')
console.log("<br><font size=4><b>After you submit your solution, <font color='yellow'>DON'T FORGET UPVOTE&RANK THIS KATA, THANK YOU!</b></font>","")

