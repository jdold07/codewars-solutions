// 5 kyu - Caesar Cipher Sorting  [ ID: 5483b69b48cf540cfc000119  (caesar-cipher-sorting) ]
// URL: https://www.codewars.com/kata/5483b69b48cf540cfc000119
// Category: GAMES  |  Tags: PUZZLES | SORTING
// *****************************************************************************
describe( "Caesar Cipher Sorting", ()=>{
  const R = require("ramda");
  const hash = (c,d) => ( c.charCodeAt() - d.charCodeAt() + 26 ) % 26 ;
  const caesarHash = R.liftN (2) (R.prepend) (R.length) (R.ap (R.zipWith(hash)) (R.tail)) ;
  const refCaesarSort = R.compose( R.groupWith(R.eqBy(caesarHash)), R.sortBy(caesarHash) );
  const sort = R.compose( R.sort(R.comparator(R.lt)), R.map(R.sort(R.comparator(R.lt))) ) ;
  const test = input => Test.assertDeepEquals( sort(caesarSort(Array.from(input))), sort(refCaesarSort(input)) ) ;
  it( "Fixed Tests", ()=>{
    test(["a","b","c"]);
    test(["ab","ac"]);
    test(["z","a","az","zy"]);
    test(["ab", "zz", "bc"]);
  });
  it( "Empty Test", ()=>{
    test([]);
  });
  const rnd = n => Math.floor(Math.random()*n) ;
  const chr = n => String.fromCharCode(n+97) ;
  const ord = c => c.charCodeAt() - 97 ;
  const plus = v => w => v+w ;
  const mod = v => w => w%v ;
  const concat = a => [].concat(...a) ;
  const word = n => Array.from( { length: n }, () => chr( Math.floor(Math.random()*26) ) ).join("") ;
  const caesar = n => s => s.split("").map(ord).map(plus(n)).map(mod(26)).map(chr).join("") ;
  const list = m => n => Test.randomize(concat(Array.from( { length: m }, () => { const w = word(n); return Array.from( { length: rnd(13)+1 }, (_,i) => caesar(i)(w) ); } ))) ;
  for ( const n of [1,3,5,10] )
    it( `Random Tests: ${n} characters`, ()=>{
      for ( let i=1; i<=30; i++ )
        test(list(rnd(i))(n));
    });
});
