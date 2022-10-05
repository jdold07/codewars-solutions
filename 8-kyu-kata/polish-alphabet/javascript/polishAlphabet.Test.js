// 8 kyu - Polish alphabet  [ ID: 57ab2d6072292dbf7c000039  (polish-alphabet) ]
// URL: https://www.codewars.com/kata/57ab2d6072292dbf7c000039
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
describe('Basic Tests', function(){
  Test.assertEquals(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
  Test.assertEquals(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
  Test.assertEquals(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");
  Test.assertEquals(correctPolishLetters("Władysław Reymont"),"Wladyslaw Reymont");
  Test.assertEquals(correctPolishLetters("Mikołaj Kopernik"),"Mikolaj Kopernik");
  Test.assertEquals(correctPolishLetters("Józef Piłsudski"),"Jozef Pilsudski");
  Test.assertEquals(correctPolishLetters("Czesław Miłosz"),"Czeslaw Milosz");
  Test.assertEquals(correctPolishLetters("Agnieszka Radwańska"),"Agnieszka Radwanska");
  Test.assertEquals(correctPolishLetters("Wojciech Szczęsny"),"Wojciech Szczesny");
  Test.assertEquals(correctPolishLetters("Zażółć gęślą jaźń"),"Zazolc gesla jazn");
  Test.assertEquals(correctPolishLetters("Wół go pyta: 'Panie chrząszczu,Po co pan tak brzęczy w gąszczu?'"),"Wol go pyta: 'Panie chrzaszczu,Po co pan tak brzeczy w gaszczu?'");
});

describe('Random Test', function(){
function polishAlphabetReferance (string) {
  function changeLetters(match) {
    return letters[match];
  }
  return string.replace(/[ąćęłńóśżź]/g, changeLetters );
}

let letters = {
  ą: 'a',
  ć: 'c',
  ę: 'e',
  ł: 'l',
  ń: 'n',
  ó: 'o',
  ś: 's',
  ź: 'z',
  ż: 'z'
};

for(let i = 0; i <= 25; i++){
  let arrayOfLetters = ['a', 'ą', 'b', 'c', 'ć', 'd', 'e', 'ę', 'f', 'g', 'h','i', 'j', 'k', 'l', 'ł', 'm', 'n', 'ń', 'o', 'ó', 'p','r', 's', 'ś', 't', 'u', 'w', 'y', 'z', 'ż', 'ź', ' ', ','];
  let shuffledArray = shuffle(arrayOfLetters);
  shuffledArray = shuffledArray.join('');
  Test.assertEquals(correctPolishLetters(shuffledArray),polishAlphabetReferance(shuffledArray));
}
function shuffle(a) {
    let j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}
});
