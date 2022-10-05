// [object Object] - Autocomplete! Yay!  [ ID: 5389864ec72ce03383000484  (autocomplete-yay) ]
// URL: https://www.codewars.com/kata/5389864ec72ce03383000484
// Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | ARRAYS | FUNDAMENTALS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
let dictionaryNoGuess = [
'airplane','apple','air','avenue','airport','adamantium','awkwardness','awesome','amazing',
'ball','book','bike','bill','billiard','bell','bowl','Blastoise','beautiful',
'car','cookie','coup','candle','change','champion','call','camel','Charizard','catastrophic','cat',
'dog','down','dirigible','dare','doll','decode','digit','download','digital','dollar','decompose','declaration','dream',
'eat','excellent','elephant','ear','eye','eagle','evil','elevator','electronic','electron','elegant','easy',
'fairy','fin','flower','floral','float','fight','finish','finally','figure',
'gold','ghost','grate','grapes','giant','godzilla','gigantic','gigabyte','gremlin','gravel','game','Gyarados',
'howl','house','hot','hidden','heat','Hyrule','heart','health','hammer','harmony',
'igloo','inn','inside','inverted','infection','imagine','imagination','image','internal','impressive','inconceivable',
'jump','jumping','judge','judging','juggle','juggling','juggler','jiggle','jello','jelly','jam',
'king','key','kingdom','keepsake','kick','kicker','knot','kit','kitten',
'lamp','light','lol','llama','lake','love','link','league','legend','laboratory','lab',
'more','morbid','move','mover','movie','monocle','murica','molar','mouth','muscle','montage',
'nope','no','naughty','nice','nail polish','noodles','niece','nissan',
'octopus','orange','oval','orderly','order','orbit','ordinal','orion',
'pinch','pallet','paint','portrait','photograph','photo','pork','pig','pigeon',
'queen','quick','quickly','quest','question','quarry','quintuplets','query','quandary','quesadilla',
'royal','ruler','regal','rhino','rage','right','regular','regulate','regurgitate','reasonable','roll','rolling',
'same','sum','sip','sum','small','suggestion','seven','sink','sinker','string',
'tyrant','tiger','tired','tied','trick','trap','titan','titanic','tower','towering','trouble','terrific','terrible','this',
'umbrella','unicorn','under','undercover','united','unbelievable','unimaginable','ultra','ultraviolet',
'victory','violin','viola','vibrant','video playback','velcro','velvet',
'window','win','wedding','wet','where','wild','well','welcome','wonderful',
'xylophone','x-ray','X-Men','Xavier','xenon','xerox','Xerneas',
'Yaphi','you','yourself','your','yonder','yodel','yammer','Yveltal',
'Zelda','Zygarde','zebra','zero','Zeus','zap cannon','zephyr','zig-zag'
];

function masterNoGuess(input, dictionary){
  return dictionary.filter(function(v){return (RegExp('^'+input, 'i')).test(v)}).filter(function(v,i){return i<5});
}

function getRandInputYeah(){
  return ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'][Math.floor(Math.random()*26)]
  +['','i','','a','','o','','u','','e','','','','','',''][Math.floor(Math.random()*16)];
}

Test.assertSimilar(autocomplete('a', dictionaryNoGuess) , masterNoGuess('a', dictionaryNoGuess));

for(let i=0; i<30; i++){
  let randInput = getRandInputYeah();
  Test.assertSimilar(autocomplete(randInput, dictionaryNoGuess) , masterNoGuess(randInput, dictionaryNoGuess));  
}

Test.assertSimilar(autocomplete('z', dictionaryNoGuess) , masterNoGuess('z', dictionaryNoGuess));

Test.assertSimilar(autocomplete('t', dictionaryNoGuess) , masterNoGuess('t', dictionaryNoGuess));

Test.assertSimilar(autocomplete('nothinghere', dictionaryNoGuess) , masterNoGuess('nothinghere', dictionaryNoGuess));

Test.expect(autocomplete('yaph', dictionaryNoGuess)=='Yaphi', 'Nice try, hacker :)');

Test.expect(autocomplete('zo',['Zygarde','Zork'])=='Zork', 'Nice try, hacker :)');

Test.expect(autocomplete('nope',['Nopesville','Green','Narnia'])=='Nopesville', 'Nice try, hacker :)');

Test.expect(autocomplete('n~!@#$%^&*()_+1234567890ope',['Nopesville','Green','Narnia'])=='Nopesville', "Don't forget those special characters!");

  });
});

