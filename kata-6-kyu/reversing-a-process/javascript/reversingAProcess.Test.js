//+ ====================================================================================================================
//+
//+ 6 kyu - Reversing a Process  [ ID: 5dad6e5264e25a001918a1fc ] (reversing-a-process)
//+ URL: https://www.codewars.com/kata/5dad6e5264e25a001918a1fc
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { decode } = require("./reversingAProcess")

describe("decode", function () {
  function testing_decode(r, expected) {
    let actual = decode(r)
    assert.strictEqual(actual, expected)
  }

  it("Basic tests", function () {
    testing_decode("1273409kuqhkoynvvknsdwljantzkpnmfgf", "uogbucwnddunktsjfanzlurnyxmx")
    testing_decode("1544749cdcizljymhdmvvypyjamowl", "mfmwhbpoudfujjozopaugcb")
    testing_decode("1122305vvkhrrcsyfkvejxjfvafzwpsdqgp", "rrsxppowmjsrclfljrajtybwviqb")
    testing_decode("7235897srigyvazffyrtxizwgpmvpts", "qfkoexapddefbtkpiojcxjbq")
    testing_decode("618429goojwdyprdyymgwziqrrdpzm", "oyyvihejfheecoipkuffhjpc")
    testing_decode("10559625hbkeohysnztuuqdznnkkcgjndbujej", "dtiygdoenhxqqsfhnniimkpnftqpyp")
    testing_decode("1046635sjmzbanpsqtudulyeftadf", "ohsfvandoyjelexkgbjalb")
    testing_decode("506787fjubvgxtrcrktbmlbastrt", "ztwfbelrhkhyrfidfamrhr")
    testing_decode("25209ummknswdinkkizudtedyqlphzqcu", "kggsnwyvenssetkvdcvmizbxtiok")
    testing_decode("188685iapnbpnbaoqlnefepdulf", "uafnjfnjawovnktkfbyvt")
    testing_decode("3254515gfbytnmijzsigvogqtzqpezuvizht", "ilxgvnqczdycipkievdehodspcdfv")
    testing_decode("260357facjeyzpbyvveutffveoijmxccfj", "dawvsepjlexxsmbddxsykvctwwdv")
    testing_decode("105860ymmgegeeiwaigsqkcaeguicc", "Impossible to decode")
    testing_decode("2460721mlptwabtlnnymizdkvfwlpwufhdsx", "evfpqajpvnnieurbmhtqvfqytlbgz")
    testing_decode("1194995fpuzgxclcsyeaokcbnygz", "ptixsrghgcumaqegdnusx")
    testing_decode("1877138eieaqgumigywmicwgcgg", "Impossible to decode")
    testing_decode("761328qockcouoqmoayqwmkkic", "Impossible to decode")
    testing_decode("673334wauamqaamqkuusqegeqmi", "Impossible to decode")
    testing_decode("3354197gtenwuwqdygpnwconjeywp", "qdcnykyivmqbnyounlcmyb")
    testing_decode("141783ujpvpovwyxxjvkbtnzgksnj", "ehdzdizukpphzcvjnfwconh")
    testing_decode("3140105foihymuhskfvyjfskfmzxnfiqbalja", "xcqbwyobkuxdwfxkuxylhnxqgpajfa")
    testing_decode("3756769icheawypyroztzdcpzpk", "uslkaqifixwrprbsfrfm")
    testing_decode("1523839ldnqrwunddttgtulzfgho", "xlnytuenlljjwjexfbwri")
    testing_decode("529807cgxntwyioufhxshuhjgkz", "qwpnjukmiebrporerhwcf")
    testing_decode("26405tmwmkhiykmyzpftesnnna", "dgygsxemsgmtbjdcwnnna")
    testing_decode("1020861edilawkhjdqadsozplynxuvv", "qzgfakopxzmazuejvfsnbctt")
    testing_decode("8955645pflqzrnxbhwmqbubalbsludej", "vhfmjdnbrpkwmrcrafrufczqx")
    testing_decode("1806479vtvazkzwkgzgscbgvmqpxaejxwaqxn", "fhfabqbequbuiyzufokldawrdeakdn")
    testing_decode(
      "3029347kzyvpwglwxkganxuncwjkvvgjypuquplewyxntyvpxkabqavmplkbksmeisafpaunvukgtavvknswvbanbbkab",
      "exultoshoresanringobellsbutiwithmournfultreadwalkthedeckmycaptainliesfallencoldanddead"
    )
    testing_decode("664443ymmgegeeiwaigsqkcaeguicc", "Impossible to decode")
  })

  it("Random tests", function () {
    function codePs(s, num) {
      let a = "abcdefghijklmnopqrstuvwxyz"
      let n = num % 26
      let res = ""
      for (let c of s) {
        let i = a.indexOf(c)
        res += a[(n * i) % 26]
      }
      return +num + res
    }
    function decodePs(r) {
      let a = "abcdefghijklmnopqrstuvwxyz"
      let m = r.match(/(\d+)([a-z]+)/)
      let nb = parseInt(m[1]) % 26
      let s = m[2]
      let dict = { 3: 9, 9: 3, 21: 5, 5: 21, 7: 15, 15: 7, 11: 19, 19: 11, 17: 23, 23: 17, 25: 25, 1: 1 }
      let n = dict[nb]
      if (n === undefined) return "Impossible to decode"
      let res = ""
      for (let c of s) res += a[(a.indexOf(c) * n) % 26]
      return res
    }

    function randint(a, b) {
      return Math.floor(Math.random() * (b - a + 1) + a)
    }
    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
      return arr
    }
    function doStr(nb) {
      let i = 0
      let res = ""
      while (i < nb) {
        let n = randint(97, 122)
        res += String.fromCharCode(n)
        i++
      }
      return res
    }
    function doEx(nb) {
      let p = [3, 5, 7, 11, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
      let q = [3, 9, 21, 5, 7, 15, 11, 19, 17, 23, 25]
      let qq = [4, 8, 16, 32, 64, 128, 13, 52, 78, 104, 208]
      p = shuffle(p)
      q = shuffle(q)
      qq = shuffle(qq)
      let n = randint(0, 100)
      let num = 0
      if (n % 5 != 0) num = p[0] * p[1] * p[2] * 26 + q[0]
      else num = p[0] * p[1] * p[2] * 26 + qq[0]
      return [doStr(nb), num]
    }

    function random_tests() {
      let i = 0
      while (i < 200) {
        let z = doEx(randint(100, 150))
        let s = z[0]
        let num = z[1]
        let sol = codePs(s, num)
        if (decodePs(sol) != "Impossible to decode") testing_decode(sol, s)
        else testing_decode(sol, "Impossible to decode")
        i++
      }
    }
    random_tests()
  })
})
