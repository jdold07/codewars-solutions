//+ ====================================================================================================================
//+
//+ 7 kyu - The old switcheroo  [ ID: 55d410c492e6ed767000004f ] (the-old-switcheroo)
//+ URL: https://www.codewars.com/kata/55d410c492e6ed767000004f
//+ Category: REFERENCE  |  Tags: STRINGS | REGULAR EXPRESSIONS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { vowel2index } = require("./theOldSwitcheroo")

it("Initial test", () => {
  assert.strictEqual(vowel2index("this is my string"), "th3s 6s my str15ng")
  assert.strictEqual(vowel2index("Codewars is the best site in the world"), "C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld")
  assert.strictEqual(vowel2index("Tomorrow is going to be raining"), "T2m4rr7w 10s g1415ng t20 b23 r2627n29ng")
  assert.strictEqual(vowel2index(""), "")
})

it("Hipster ipsums", () => {
  assert.strictEqual(
    vowel2index(
      "90's cornhole Austin, pickled butcher yr messenger bag gastropub next level leggings listicle meditation try-hard Vice. Taxidermy gastropub gentrify, meh fap organic ennui fingerstache pickled vegan. Seitan sustainable PBR&B cornhole VHS. Jean shorts actually bitters ugh blog Intelligentsia. Artisan Kickstarter DIY, fixie cliche salvia lo-fi four loko. PBR&B Odd Future ugh fingerstache cray Wes Anderson chia typewriter iPhone bespoke four loko, Intelligentsia photo booth direct trade. Aesthetic Tumblr Portland XOXO squid, synth viral listicle skateboard four dollar toast cornhole Blue Bottle semiotics."
    ),
    "90's c7rnh11l13 1516st19n, p24ckl28d b32tch36r yr m43ss46ng49r b53g g57str61p63b n67xt l72v74l l78gg81ngs l87st90cl93 m96d98t100t102103n try-h111rd V116c118. T122x124d126rmy g132str136p138b g142ntr146fy, m152h f156p 159rg162n164c 167nn170171 f174ng177rst181ch184 p187ckl191d v195g197n. S202203t205n s209st212213n215bl218 PBR&B c227rnh231l233 VHS. J241242n sh247rts 252ct255256lly b262tt265rs 269gh bl275g 278nt281ll284g286nts290291. 294rt297s299n K303ckst308rt311r D315Y, f320x322323 cl327ch330 s333lv336337 l340-f343 f346347r l351k353. PBR&B 362dd F367t369r371 373gh f378ng381rst385ch388 cr392y W396s 399nd402rs405n ch410411 typ416wr419t421r 424Ph427n429 b432sp435k437 f440441r l445k447, 450nt453ll456g458nts462463 ph467t469 b472473th d478r480ct tr486d488. 491492sth496t498c T502mblr P509rtl513nd X518X520 sq524525d, synth v536r538l l542st545cl548 sk552t554b556557rd f562563r d567ll570r t574575st c580rnh584l586 Bl590591 B594ttl598 s601m603604t606cs."
  )
})

it("Random Tests", function () {
  let rand = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  let char = function () {
    return String.fromCharCode(rand(97, 122))
  }
  let times = 100
  let s1

  function sol(str) {
    return str.replace(/[aeiou]/gi, function (v, i) {
      return ++i
    })
  }
  let randomStr = function (length) {
    let arr = []
    for (let i = 0; i <= length; i++) arr.push(char())
    return arr.join("")
  }
  while (--times >= 0) {
    s1 = randomStr(rand(0, 500))
    assert.strictEqual(vowel2index(s1), sol(s1))
  }
})
