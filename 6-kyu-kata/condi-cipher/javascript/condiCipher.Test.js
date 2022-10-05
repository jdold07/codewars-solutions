// 6 kyu - Condi cipher  [ ID: 59bf6b73bf10a4c8e5000047  (condi-cipher) ]
// URL: https://www.codewars.com/kata/59bf6b73bf10a4c8e5000047
// Category: ALGORITHMS  |  Tags: CIPHERS | STRINGS | ALGORITHMS
// *****************************************************************************
describe("Condi", function(){
  it("Basic Condi", function(){
    Test.assertEquals(encode("on","cryptogam",10),"jx" );
    Test.assertEquals(decode("jx","cryptogam",10),"on" );
    Test.assertEquals(decode("....","cryptogam",10),"...." );  
    Test.assertEquals(encode("cryptogram","cryptogam",0),"cytgmdfmbk" );
    Test.assertEquals(decode("abc","keykeykeykey",10),"sit" );
    Test.assertEquals(decode(",abc","keykeykeykey",10),",sit" );
    Test.assertEquals(encode("on the first day i got lost.","cryptogam",10),"jx wnz xrkvz jnd l ufd vwcz." );
    Test.assertEquals(decode("jx wnz xrkvz jnd l ufd vwcz.","cryptogam",10),"on the first day i got lost." );
    Test.assertEquals(encode("i will never eat any grapes again","superkey",4),"n ggka cvssb bfe esz omgdyr bqqva" );
    Test.assertEquals(decode("n ggka cvssb bfe esz omgdyr bqqva","superkey",30),"i will never eat any grapes again" );
    Test.assertEquals(decode("qvf cmnxmdkjfca.p,ab mf,byokf vjhwpcyb","nqhbfgmi",28),"zva nguhbmmgydx.s,ok se,rmafz vpedgbua");
   });

   it("Random Condi - decode", function(){
   let loop = 0;
    while ( loop++ < 50) {
      let str = __makeStr();
      let key = __makeKey();
      let result = __decode(str, key, loop%30);
      console.log(`\nMessage: ${str}, Key:${key} InitShift:${loop%30} \nExpected result: ${result}`);
      Test.assertEquals( decode(str,key,loop%30) , result);
     }
   }); 
   
  it("Random Condi - encode", function(){
   let loop = 0;
    while ( loop++ < 50) {
      let str = __makeStr();
      let key = __makeKey();
      let result = __encode(str, key, loop%30);
      console.log(`\nMessage: ${str}, Key:${key} InitShift:${loop%30} \nExpected result: ${result}`);
      Test.assertEquals( encode(str,key,loop%30) , result);
     }
   }); 
});

function __encode  (message, key, initShift)  {
  let code = key.split('').filter((e,i)=> key.indexOf(e) == i).join('') 
              + "abcdefghijklmnopqrstuvwxyz".split('').filter(e=> !key.includes(e)).join('');
  let mov = (initShift - 1)%26;
  let res = '';
  for (let i=0; i<message.length;i++) {
      res += code.includes(message[i]) ? code[( code.indexOf(message[i])+ mov + 1)%26] : message[i];
      mov = code.includes(message[i]) ? code.indexOf(message[i]) : mov;
  }
  return res;
}

function __decode (message, key, initShift)  {
  let code = key.split('').filter((e,i)=> key.indexOf(e) == i).join('') 
              + "abcdefghijklmnopqrstuvwxyz".split('').filter(e=> !key.includes(e)).join('');
  let mov = (initShift - 1)%26;
  let res = '';
  for (let i=0; i<message.length;i++) {
      res += code.includes(message[i]) ? code[(26+ code.indexOf(message[i])- mov - 1)%26] : message[i];
      mov = code.includes(message[i]) ? code.indexOf(res[res.length-1]) : mov;
  }
  return res;
}

function __makeStr()
{
    let text = "";
    let possible = "abcdefghijklmnop qrstuvwxyz.,";

    for( let i=0; i < Math.round( Math.random() * 200) + 1; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function __makeKey()
{
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz";

    for( let i=0; i < Math.round( Math.random() * 20) + 2; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
