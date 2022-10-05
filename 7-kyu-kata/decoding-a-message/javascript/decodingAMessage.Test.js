// 7 kyu - Decoding a message  [ ID: 565b9d6f8139573819000056  (decoding-a-message) ]
// URL: https://www.codewars.com/kata/565b9d6f8139573819000056
// Category: GAMES  |  Tags: PUZZLES | ALGORITHMS | CRYPTOGRAPHY | SECURITY | GAMES
// *****************************************************************************
describe("Basic tests",function(){
it("Test cases",function(){
Test.assertEquals(decode("sr"),"hi")
Test.assertEquals(decode("svool"),"hello")
Test.assertEquals(decode("r slkv mlylwb wvxlwvh gsrh nvhhztv"),"i hope nobody decodes this message")
Test.assertEquals(decode("qzezxirkg rh z srts ovevo wbmznrx fmgbkvw zmw rmgvikivgvw kiltiznnrmt ozmtfztv rg szh yvvm hgzmwziwravw rm gsv vxnzxirkg ozmtfztv hkvxrurxzgrlm zolmthrwv sgno zmw xhh rg rh lmv lu gsv gsivv vhhvmgrzo gvxsmloltrvh lu dliow drwv dvy xlmgvmg kilwfxgrlm gsv nzqlirgb lu dvyhrgvh vnkolb rg zmw rg rh hfkkligvw yb zoo nlwvim dvy yildhvih drgslfg koftrmh"), "javacript is a high level dynamic untyped and interpreted programming language it has been standardized in the ecmacript language specification alongside html and css it is one of the three essential technologies of world wide web content production the majority of websites employ it and it is supported by all modern web browsers without plugins") 
Test.assertEquals(decode("gsv vrtsgs hbnkslmb dzh qvzm hryvorfh urmzo nzqli xlnklhrgrlmzo kilqvxg lxxfkbrmt srn rmgvinrggvmgob"), "the eighth symphony was jean sibelius final major compositional project occupying him intermittently")
Test.assertEquals(decode("husbands ask repeated resolved but laughter debating"), "sfhyzmwh zhp ivkvzgvw ivhloevw yfg ozftsgvi wvyzgrmt")
Test.assertEquals(decode("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"), "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
Test.assertEquals(decode(" ")," ")
Test.assertEquals(decode(""),"")
Test.assertEquals(decode("thelastrandomsentence"), "gsvozhgizmwlnhvmgvmxv")
})
})

describe("Random tests",function(){
function randint(a,b){return Math.floor(Math.random()*(b-a+1))+a;}
base="abcdefghijklmnopqrstuvwxyz"

function sol(message){
	let alphabet = [" ","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
	let salphabet = alphabet.slice().join("");
	let sralphabet = alphabet.slice().reverse().join("");
	let a = [];
	let i=0;
	while(a.length<message.length){
		a.push(sralphabet.substring(salphabet.search(message.substring(i,i+1)),salphabet.search(message.substring(i,i+1))+1));
		i++;
	}
	return a.join("");
}

for (let _=0;_<40;_++){
    let s=[], len=randint(1,50);
    for (j=0;j<len;j++){
      s.push(base[randint(0,base.length-1)])
    }
    s=s.join("");
    it("Testing for "+s,function(){
    Test.assertEquals(decode(s),sol(s),"It should work for random inputs too")
    })
}
})
