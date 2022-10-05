// [object Object] - One Line Task: Area Or Perimeter  [ ID: 5ab84aa4206a29ce21000047  (one-line-task-area-or-perimeter) ]
// URL: https://www.codewars.com/kata/5ab84aa4206a29ce21000047
// Category: GAMES  |  Tags: PUZZLES | RESTRICTED
// *****************************************************************************
/*

*/
const an = (l , w) => l == w ? Math.pow(l , 2) : 2 * (l + w)


function rndc(){
  let allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return allc[~~(allc.length*Math.random())]; 
}
function rndc1(){
  let allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  return allc[~~(allc.length*Math.random())]; 
}
function rndclo(){
  let allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return allc[~~(allc.length*Math.random())]; 
}
function rndcn(){
  let allc="1234567890";
  return allc[~~(allc.length*Math.random())]; 
}
function rndcl(){
  let allc="abcdefghijklmnopqrstuvwxyz";
  return allc[~~(allc.length*Math.random())]; 
}
function rndcno(){
  let allc="1234567890_ !@#$%^&*_(),.?|{}[]-=+";
  return allc[~~(allc.length*Math.random())]; 
}
function rndch(){
  let allc="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return allc[~~(allc.length*Math.random())]; 
}
function rnd9(){
  let allc="123456789";
  return allc[~~(allc.length*Math.random())]; 
}
function rnd10(){
  let allc="0123456789";
  return allc[~~(allc.length*Math.random())]; 
}
function rnds(n){
  let len= n||rand(5,11);
  for (let i=0, rs=[];i<len;i++) rs[i]=rndcl();
  return rs.join("");
}
function rndsx(n){
  let len= n||rand(5,11), c=rand(0,2)?"abc":"abcdefg";
  for (let i=0, rs=[];i<len;i++) rs[i]=c[rand(0,c.length-1)];
  return rs.join("");
}
function rndss(n){
  let len= n||rand(2,5);
  for (let i=0, rs=[];i<len;i++) rs[i]=rnds();
  return rs.join(" ")+".?!,"[rand(0,3)]
}
function rndsss(n){
  let len= n||rand(5,15);
  for (let i=0, rs=[];i<len;i++) rs[i]=rnds();
  return rndch()+rs.join(" ")
}

function shuff(arr){
  for(let i=0;i<100;i++){
    let idx1=rand(0,arr.length-1), idx2=rand(0,arr.length-1);
    let t=arr[idx1];
    arr[idx1]=arr[idx2]
    arr[idx2]=t
  }
}
function rnds2(n){
  let len= n||~~(15*Math.random())+4;
  for (let i=0, rs=[];i<len;i++) rs[i]=rndcl();
  return rs.join("");
}
function rand(from,to){
  return Math.floor((to-from+1)*Math.random()+from)
}




function rndtest(big){
  let a=rand(10,1500), b=rand(10,1500);
  return rand(0,1)?[a,a]:[a,b]
}







//anti-cheat and calc the code length
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
let passed=0, failed=0, recfailed=[];
describe("Code Length Check And Simple Anti-cheat Tests", function(){
it("Code length should less than 39 characters.", function(){


let limit=39;
//const fs = require('fs');
//const allcode = fs.readFileSync('/home/codewarrior/solution.txt', 'utf8');
//var code=allcode;
//var codelen=code.length;
console.log("Your Code:\n",code.replace(/</g,"&lt;").replace(/>/g,"&gt;"));
//console.log("Remove unnecessary spaces and comment:\n",code.replace(/</g,"&lt;").replace(/>/g,"&gt;"));
//var codelen=code.length, limit=65;
if (codelen>=limit) Test.assertEquals("code length >= "+limit,"code length < "+limit,  "your code length = "+codelen);
else Test.assertEquals("code length = "+codelen+", code length check passed!","code length = "+codelen+", code length check passed!");
if (code.indexOf("prototype")>-1) Test.assertEquals("cheater?", "trainer", "Your code should not modify the prototype ;-)");
//if (code.indexOf(";")>-1) Test.assertEquals("cheater?", "trainer", "The semicolon is not allowed ;-)");
if (code.length<=15) Test.assertEquals("cheater?", "trainer", "Your code length is smaller than the human being limit, so I guess you are Superman, or you are a cheater.;-)");

Test.assertEquals("Code line = "+code.split("\n").length,"Code line = 1","Your code should written in one line ;-)");
//var zed="+([W,E]=Q.split` `,M='kKMGT'.indexOf(E[0])||1,W*(W=2<E.length,W?1.024:1000\/1024)**M).toFixed(3)+' '+(W?'kB MB GB TB':'KiB MiB GiB TiB').split` `[--M]".replace(/[a-z]/gi,"x")
//console.log(zed,code.replace(/[a-z]/gi,"x"))
///\+\(\[[a-z],[a-z]\]=[a-z]\.[a-z][a-z][a-z][a-z][a-z]` `,[a-z]='[a-z][a-z][a-z][a-z][a-z]'\.[a-z][a-z][a-z][a-z][a-z][a-z][a-z]\([a-z]\[0\]\)\|\|1,[a-z]\*\([a-z]=2<[a-z]\.[a-z][a-z][a-z][a-z][a-z][a-z],[a-z]\?1\.024:1000/

//new RegExp(,"i")
//if(code.replace(/[a-z]/gi,"x").includes(zed)) Test.assertEquals("Zed's solution found :(","We don't need zed's solution ;-)","cheater? ;-)");
//end of anti-cheat
})})


function showResult(s,color="00cc00",who="Your"){
  console.log("<font face='sans-serif' color='#"+color+"' size=3><b>"+who+" result is:</b></font><font face='sans-serif' color='#cccc00' size=3>"+
      "\n"+s+"</font>","")
}





describe("Basic Tests", function(){ 
it("It should works for basic tests.", function(){

Test.assertEquals(areaOrPerimeter(4 , 4) , 16);
Test.assertEquals(areaOrPerimeter(6 , 10) , 32);

})})


describe("500 Random Tests --- Testing for correctness of solution", function(){
  it("It should works for random tests.", function(){
    
    for(let iii=0;iii<500;iii++){
      
      let [ddd,eee] = rndtest();
      
      console.log("<font face='sans-serif' color='#00cc00' size=3><b>Testing for:</b></font><font face='sans-serif' color='#eeee00' size=3>"+
       "\nl = "+JSON.stringify(ddd)
      +"\nw = "+JSON.stringify(eee)
      //+"\nletter = "+JSON.stringify(fff)
      //+", y = "+JSON.stringify(ggg)
      //+",  maxW = "+JSON.stringify(hhh)
      +"</font>","")
      let ans=an(ddd,eee);
      let useran=areaOrPerimeter(ddd,eee);
    
      if(JSON.stringify(useran)!=JSON.stringify(ans)) {
        failed++  
      }
      else passed++
      Test.assertEquals(useran,ans)
      
    }
  });
  
});
//console.log(recfailed)
if(passed==100){
/*describe("Happy Coding ^_^", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")  
});*/
}
