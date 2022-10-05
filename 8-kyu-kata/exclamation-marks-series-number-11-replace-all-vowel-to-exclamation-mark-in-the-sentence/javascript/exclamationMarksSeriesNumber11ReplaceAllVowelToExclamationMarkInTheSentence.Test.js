// 8 kyu - Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence  [ ID: 57fb09ef2b5314a8a90001ed  (exclamation-marks-series-number-11-replace-all-vowel-to-exclamation-mark-in-the-sentence) ]
// URL: https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function an(s){
  return s.replace(/[aeiou]/gi,"!")
}
function rndc(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length*Math.random())]; 
}
function rndc1(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+\\/"
  return allc[~~(allc.length*Math.random())]; 
}
function rndclo(){
  var allc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_ !@#$%^&*_(),.?|{}[]-=+"
  return allc[~~(allc.length*Math.random())]; 
}
function rndcn(){
  var allc="1234567890"
  return allc[~~(allc.length*Math.random())]; 
}
function rndcl(){
  var allc="abcdefghijklmnopqrstuvwxyz"
  return allc[~~(allc.length*Math.random())]; 
}
function rndcno(){
  var allc="1234567890_ !@#$%^&*_(),.?|{}[]-=+"
  return allc[~~(allc.length*Math.random())]; 
}
function rndch(){
  var allc="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  return allc[~~(allc.length*Math.random())]; 
}
function rnd9(){
  var allc="123456789";
  return allc[~~(allc.length*Math.random())]; 
}
function rnd10(){
  var allc="0123456789";
  return allc[~~(allc.length*Math.random())]; 
}
function rnds(n){
  var len= n||rand(3,7)
  for (var i=0,rs=[];i<len;i++) rs[i]=rndcl();
  return rs.join("");
}
function rndss(n){
  var len= n||rand(3,7)
  for (var i=0,rs=[];i<len;i++) rs[i]=rand(0,1000)%2?rndcl():rndch();
  return rs.join("")
}
function rndsss(n){
  var len= n||rand(5,15)
  for (var i=0,rs=[];i<len;i++) rs[i]=rnds();
  return rndch()+rs.join(" ")
}
function rndname(){
  return rndch()+rnds()
}
function shuff(arr){
  for(var i=0;i<20;i++){
    var idx1=rand(0,arr.length-1),idx2=rand(0,arr.length-1)
    var t=arr[idx1]
    arr[idx1]=arr[idx2]
    arr[idx2]=t
  }
}
function rnds2(n){
  var len= n||~~(15*Math.random())+4;
  for (var i=0,rs=[];i<len;i++) rs[i]=rndcl();
  return rs.join("");
}
function rand(from,to){
  return Math.floor((to-from+1)*Math.random()+from)
}
function rndmark(){
  var len=rand(1,8),r=[]
  for(var i=0;i<len;i++) {
    r[i]="!".repeat(Math.max(0,rand(-5,1)))+rndss()+"!".repeat(Math.max(0,rand(-5,1)))
  }
  return r.join(" ")
}

describe("Basic Tests", function(){
  it("It should works for basic tests", function(){

Test.assertSimilar(replace("Hi!") , "H!!")
Test.assertSimilar(replace("!Hi! Hi!") , "!H!! H!!")
Test.assertSimilar(replace("aeiou") , "!!!!!")
Test.assertSimilar(replace("ABCDE") , "!BCD!")

})})
describe("100 Random Tests", function(){
  it("It should works for random tests too", function(){
    for(var iii=0;iii<100;iii++){
      var lll=rndmark(),ans=an(lll)
      console.log("<font face='sans-serif' color='#00cc00'><b>Testing for:</b></font><font face='sans-serif' color='#cccc00'>"+
      "s = \""+lll+"</font>","")
      var useran=replace(lll)
      Test.assertSimilar(useran,ans)
    }
  });
});

/*describe("Congratulations！ You have passed all the tests!", function(){
  console.log("<font color='#00aa00' size=2><b>I'm waiting for your <font color='#dddd00'>feedback, rank and vote.<font color='#00aa00'>many thanks! ;-)</b></font>","")  
});*/
