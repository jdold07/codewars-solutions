// [object Object] - First Variation on Caesar Cipher  [ ID: 5508249a98b3234f420000fb  (first-variation-on-caesar-cipher) ]
// URL: https://www.codewars.com/kata/5508249a98b3234f420000fb
// Category: REFERENCE  |  Tags: FUNDAMENTALS | CIPHERS | STRINGS
// *****************************************************************************
describe("Tests", () => {
  it("test", () => {
var u = "I should have known that you would have a perfect answer for me!!!"
var v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]
Test.assertSimilar(movingShift(u, 1), v)
Test.assertSimilar(demovingShift(v, 1), u)
var u = "O CAPTAIN! my Captain! our fearful trip is done;"
Test.assertSimilar(demovingShift(movingShift(u, 1), 1), u)
var u = "For you bouquets and ribbon'd wreaths--for you the shores a-crowding;"
Test.assertSimilar(demovingShift(movingShift(u, 1), 1), u)
var u = "Exult, O shores, and ring, O bells! But I, with mournful tread, Walk the deck my Captain lies, Fallen cold and dead. "
Test.assertSimilar(demovingShift(movingShift(u, 1), 1), u)
var u = "As human beings, when we encounter a challenge, we have freedom to choose how to react."
Test.assertSimilar(demovingShift(movingShift(u, 1), 1), u)
var u = "Every decision that we make leads us down a different road."
var v = ["Fxhvd kmlsdu", "bb jysm ra k", "zkf oifjz dc", " pbkc r wcab", "bpdnu usfj."]
Test.assertSimilar(movingShift(u, 1), v)
Test.assertSimilar(demovingShift(v, 1), u)
var u = "How can we become the kind of people that face our fear and do it anyway?"
var v = ["Iqz hgu fo nrqd", "cv mbz hgmd qi ", "ukvxuo fuoi wsv", "y krp ffcu ftk ", "my ug pdpots?"]
Test.assertSimilar(movingShift(u, 1), v)
Test.assertSimilar(demovingShift(v, 1), u)

//-----------------------

Test.assertSimilar(
    movingShift(" uoxIirmoveNreefckgieaoiEcooqo", 2), 
    [' xscOp', 'zvygqA', 'ftuwud', 'adaxmh', 'Edqrut'])
Test.assertSimilar(
    movingShift("uaoQop jx eh osr okaKv vzagzwpxagokBKriipmc U", 2), 
    ['wdsVuw sh', ' qu dii h', 'evGs uzbi', 'caudhoxuM', 'Wewxfdu O'])
Test.assertSimilar(
    movingShift("kgpiqislyhvmffdzlyehjiIteAaaotcoapk bbMgaHlda", 2), 
    ['mjtnwpaui', 'shztutqdr', 'ycffGseBc', 'dsyiviyu ', 'noAvqYdwu'])
Test.assertSimilar(
    movingShift("abcdefghjuty", 1), ["bdf", "hjl", "nps", "eek", ""])
Test.assertSimilar(
    movingShift("abcdefghjuty1234", 1), ["bdfh", "jlnp", "seek", "1234", ""])

//-----------------------

//-----------------------

Test.assertSimilar(
    demovingShift([' xscOp', 'zvygqA', 'ftuwud', 'adaxmh', 'Edqrut'], 2), " uoxIirmoveNreefckgieaoiEcooqo")
Test.assertSimilar(
    demovingShift(['wdsVuw sh', ' qu dii h', 'evGs uzbi', 'caudhoxuM', 'Wewxfdu O'], 2), "uaoQop jx eh osr okaKv vzagzwpxagokBKriipmc U")
Test.assertSimilar(
    demovingShift(['mjtnwpaui', 'shztutqdr', 'ycffGseBc', 'dsyiviyu ', 'noAvqYdwu'], 2), "kgpiqislyhvmffdzlyehjiIteAaaotcoapk bbMgaHlda")

//-----------------------

  });
});

