// [object Object] - Welcome!  [ ID: 577ff15ad648a14b780000e7  (welcome) ]
// URL: https://www.codewars.com/kata/577ff15ad648a14b780000e7
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
Test.assertEquals(greet('english'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");
Test.assertEquals(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom'. Try again.");
Test.assertEquals(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome'. Try again.");

function greetCheck(lang) {
	return langs[lang]||langs['english'];
}

let langs = {
'english': 'Welcome',
'czech': 'Vitejte',
'danish': 'Velkomst',
'dutch': 'Welkom',
'estonian': 'Tere tulemast',
'finnish': 'Tervetuloa',
'flemish': 'Welgekomen',
'french': 'Bienvenue',
'german': 'Willkommen',
'irish': 'Failte',
'italian': 'Benvenuto',
'latvian': 'Gaidits',
'lithuanian': 'Laukiamas',
'polish': 'Witamy',
'spanish': 'Bienvenido',
'swedish': 'Valkommen',
'welsh': 'Croeso'
};

for(let i = 0; i < 200; i++){
  let random = Math.round(Math.random() * 25);
  let inputs = ['english','czech','IP_ADDRESS_INVALID','danish','IP_ADDRESS_NOT_FOUND','dutch','estonian','IP_ADDRESS_NOT_FOUND','finnish','flemish','french','german','irish','italian', 'IP_ADDRESS_REQUIRED','latvian', 'IP_ADDRESS_REQUIRED','lithuanian','polish', 'IP_ADDRESS_NOT_FOUND','spanish','swedish', 'IP_ADDRESS_NOT_FOUND','welsh','IP_ADDRESS_NOT_FOUND','IP_ADDRESS_INVALID'];
  let thing = inputs[random];
  Test.assertEquals(greet(thing), greetCheck(thing));
}
  });
});

