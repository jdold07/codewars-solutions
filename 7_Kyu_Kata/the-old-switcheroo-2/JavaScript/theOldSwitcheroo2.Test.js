// [object Object] - The old switcheroo 2  [ ID: 55d6a0e4ededb894be000005  (the-old-switcheroo-2) ]
// URL: https://www.codewars.com/kata/55d6a0e4ededb894be000005
// Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
describe('Initial Tests', () => {
  Test.assertEquals(encode('abc'),'123');
  Test.assertEquals(encode('ABCD'),'1234');
  Test.assertEquals(encode('ZzzzZ'),'2626262626');
  Test.assertEquals(encode('abc-#@5'),'123-#@5');
  Test.assertEquals(encode('this is a long string!! Please [encode] @C0RrEctly'),'208919 919 1 1215147 1920189147!! 161251195 [51431545] @30181853201225');
});
describe('Random Tests', function () {
    if (Math.random == undefined)
        Test.assertEquals(false, true, 'Math Object must contain random Method!')
    if (Math.floor == undefined)
        Test.assertEquals(false, true, 'Math Object must contain floor Method!')
    if (Math.random.toString().indexOf('[native code]') == -1 || Math.random.toString().length != 35)
        Test.assertEquals(false, true, 'Math.random method must be Native!')
    if (Math.floor.toString().indexOf('[native code]') == -1 || Math.floor.toString().length != 34)
        Test.assertEquals(false, true, 'Math.floor method must be Native!')

    let rand = function (min, max) { return Math.floor(Math.random() * (max - min + 1) + min) };
    let char = function () { return String.fromCharCode(rand(97, 122)); };
    let times = 100;
    let s1, s2;

    function sol(str) {
        return str.replace(/[a-z]/gi, c => c.charCodeAt(0) - (c.charCodeAt(0) > 96 ? 96 : 64));
    }
    let randomStr = function (length) {
        let arr = [];
        for (let i = 0; i <= length; i++)
            arr.push(rand(1,100)+char()+rand(1,100));
        return arr.join('');
    };
    while (--times >= 0) {
        s1 = randomStr(rand(0, 40));
        Test.assertEquals(encode(s1), sol(s1));
    }
});

