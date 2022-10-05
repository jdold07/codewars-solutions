// [object Object] - Affine Cipher Helper  [ ID: 52f2f1ea12b5cbc66900300a  (affine-cipher-helper) ]
// URL: https://www.codewars.com/kata/52f2f1ea12b5cbc66900300a
// Category: ALGORITHMS  |  Tags: ALGORITHMS | CIPHERS | SECURITY | OBJECT-ORIENTED PROGRAMMING | STRINGS
// *****************************************************************************
class AffineCipher {
    constructor(abc, a, b) {
      if (gcd(a, abc.length) !== 1) throw new Error(`${a} is not co-prime with ${abc.length}`)
      this.abc = abc
      this.a = a
      this.b = b
      this.m = this.abc.length
    }
    encode(str) {
      const e = (v) => (this.a * this.abc.indexOf(v) + this.b) % this.m
      return str.replace(RegExp("[" + this.abc + "]", "g"), (v) => this.abc.substr(e(v), 1))
    }
    decode(str) {
      const d = (v) => (inverse() * (this.abc.indexOf(v) - this.b)) % this.m
      const inverse = () => [...Array(this.m).keys()].filter((v) => (v * this.a) % this.m === 1)[0]
      return str.replace(RegExp("[" + this.abc + "]", "g"), (v) => this.abc.substr(d(v), 1))
    }
  }
// *****************************************************************************
// *****************************************************************************
class AffineCipher {
    constructor(abc, a, b) {
      this.abc = abc // the alphabet used in this instance
      this.a = gcd(abc.length, a) == 1 ? a : this._aError() // non-negative integer co-prime with the alphabet length
      this.b = b // any non-negative integer
      this.m = this.abc.length // length of the alphabet used in the object instance
    }
    _aError() {throw new Error("a is not co-prime with m")}
    _x(letter) {return this.abc.indexOf(letter)}
    
    encode(str) {
      const e = (v) => (this.a * this._x(v) + this.b) % this.m
      return str.replace(RegExp("[" + this.abc + "]", "g"), (v) => this.abc.substr(e(v), 1))
    }
    decode(str) {
      const inverse = () => [...Array(this.m).keys()].filter((v) => (v * this.a) % this.m === 1)[0]
      const d = (v) => (inverse() * (this._x(v) - this.b)) % this.m
      return str.replace(RegExp("[" + this.abc + "]", "g"), (v) => this.abc.substr(d(v), 1))
    }
  }

