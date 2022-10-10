# 6 kyu - Kama Sutra Cipher Helper

##### **ID**: [5361372e700d2a9627000cf1](https://www.codewars.com/kata/5361372e700d2a9627000cf1) | **Slug**: [kama-sutra-cipher-helper](https://www.codewars.com/kata/5361372e700d2a9627000cf1) | **Category**: `ALGORITHMS` | **Rank**: <span style="color:yellow">6 kyu</span>

##### **First Published**: 2014-06-17 ***by*** [jacobb](https://www.codewars.com/users/jacobb) | **Approved**: 2015-07-13 ***by*** [GiacomoSorbi](https://www.codewars.com/users/GiacomoSorbi)

##### **Languages Available**: javascript

##### **My Completed Languages**: javascript ***as at*** 2022-10-08 | **Originally completed**: 2022-09-18

---

## Kata Description


###Definition of Kama: [love, pleasure and sensual gratification](http://en.wikipedia.org/wiki/Kama)



[The Kama Sutra cipher](http://en.wikipedia.org/wiki/Vatsyayana_cipher), also known as the Vatsyayana cipher is a classical monoalphabetic cipher with the property of being symmetric (**Note**: *the Wikipedia entry is inaccurate about the origins of the cipher as of 2014-06-17*). It is one of the earliest known substitution ciphers and is believed to predate the Caesar cipher. Its different names correspond to the book that led to its recognition, the [Kama Sutra](http://en.wikipedia.org/wiki/Kama_Sutra), and the author of that book, [Vātsyāyana](http://en.wikipedia.org/wiki/Vatsyayana). The book is considered to be the standard on human sexual behavior in Sanskrit literature.



In the Hindu traditions, [Kama](http://en.wikipedia.org/wiki/Kama), the subject of this book, is one of the four goals of human life (the others being [Dharma](http://en.wikipedia.org/wiki/Dharma), [Artha](http://en.wikipedia.org/wiki/Artha) and [Moksha](http://en.wikipedia.org/wiki/Moksha)). Contrary to popular beliefs about this book, the Kama Sutra is not exclusively about sex. It relates to all manners of human pleasure.



The Kama Sutra recommends 64 pursuits for women, [amongst many other things](http://books.google.com/books?id=u3KgfdrdAVQC&lpg=PA71&dq=Kamasutra%20cipher&pg=PA69#v=onepage&q&f=false) is mlecchita-vikalpa, or the art of secret writing, number 44 on the list. Different writers have provided commentary on the Kama Sutra and proposed different cipher techniques. One method described, **Muladeviya**, pairs different letters of the alphabet and uses reciprocal ones, with letters remaining unchanged. E.g. if the letters *a* and *b* are paired, *a* replaces *b* in the plaintext, and *b* replaces *a* in the plaintext.



There are other types of ciphers based on the Kama Sutra, some of which are based on phonetic relationships (e.g. Kautiliyam, in which vowels become consonants). However, this kata will focus on Muladeviya. An interesting face about this cipher: it provides a set of all symmetric monoalphabetic substitution ciphers in which the input alphabet is the same as the output alphabet.



An example using the Latin lowercase alphabet:



    d|n|a|f|h|l|m|x|e|r|k|u|t

    p|o|w|c|s|v|j|b|z|i|y|q|g

    

* `"mutt"` becomes `"jqgg"`

* `"panda"` becomes `"dwopw"`



Kata specifications:



* The value of `key` is an array of pairs of characters in which all letters are unique.

* The resulting object should support methods `encode` and `decode` using the earlier described Kama Sutra cipher algorithm.

* Any character not represented in the key should be left in situ (case sensitive).

---


🏷 `CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS | ALGORITHMS`


[View this Kata on Codewars.com](https://www.codewars.com/kata/5361372e700d2a9627000cf1)

![](https://www.codewars.com/users/jdold07/badges/large "JDOld07 Codewars Badge")

---

###### *This Kata description was compiled by [**JDOld07**](https://tpstech.dev) with data provided by the [Codewars.com](https://www.codewars.com) API.  The solutions in this repo associated with this kata are my solutions unless otherwise noted in the code file.  Test cases are generally those as provided in the Kata, but may include additional test cases I created while coding my solution.  My solutions are not always commented as the solutions are rarely submitted with comments.*
