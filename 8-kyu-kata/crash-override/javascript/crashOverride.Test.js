// 8 kyu - Crash Override  [ ID: 578c1e2edaa01a9a02000b7f  (crash-override) ]
// URL: https://www.codewars.com/kata/578c1e2edaa01a9a02000b7f
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
describe("Lets go...", () => {
  it("Tests to see if your function returns the correct values.", () => {
    Test.assertEquals(aliasGen("Mike", "Millington"),"Malware Mike");
    Test.assertEquals(aliasGen("Fahima", "Tash"),"Function T-Rex");
    Test.assertEquals(aliasGen("Daisy", "Petrovic"),"Data Payload");
    Test.assertEquals(aliasGen("Barny", "White"),"Beta Worm");
    Test.assertEquals(aliasGen("Hank", "Kutz"),"Half-life Killer");
    Test.assertEquals(aliasGen("7393424", "Anumbha"),"Your name must start with a letter from A - Z.")
    Test.assertEquals(aliasGen("Anuddanumbha", "23200"),"Your name must start with a letter from A - Z.")
  });

it("Your code should also work for random tests", () => {
    
function newAliasGen(a, b){
  a = a.slice(0,1).toUpperCase()
  b = b.slice(0,1).toUpperCase()

  let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; 

  if (letters.indexOf(a) === -1 || letters.indexOf(b) === -1){
    return "Your name must start with a letter from A - Z." 
  }  

  return firstName[a] + ' ' + surname[b]
}
 
  for (let index = 0; index < 155; index++){
	  	let a = Math.random().toString(36).replace(/[^a-z1-9]/g, '').substr(0, 5);	
	    let b = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    Test.assertEquals(aliasGen(a, b), newAliasGen(a, b));
    }
});
});
