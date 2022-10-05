// 6 kyu - Versions manager  [ ID: 5bc7bb444be9774f100000c3  (versions-manager) ]
// URL: https://www.codewars.com/kata/5bc7bb444be9774f100000c3
// Category: ALGORITHMS  |  Tags: ALGORITHMS | ARRAYS | STRINGS | OBJECT-ORIENTED PROGRAMMING
// *****************************************************************************
class VersionManager {
    constructor(version) {
      this.current = this.validateVersion(version)
      this.previous = []
    }
    validateVersion(version) {
      if (!version) version = "0.0.1"
      let [mjr, mnr = "0", ptch = "0"] = version.split(".")
      if ([mjr, mnr, ptch].some((v) => +v != v)) throw new Error("Error occured while parsing version!")
      return [+mjr, +mnr, +ptch]
    }
    updatePrevious() {
      this.previous = [...this.previous, this.current]
    }
    major() {
      this.updatePrevious()
      this.current = [this.current[0] + 1, 0, 0]
      return this
    }
    minor() {
      this.updatePrevious()
      this.current = [this.current[0], this.current[1] + 1, 0]
      return this
    }
    patch() {
      this.updatePrevious()
      this.current = [this.current[0], this.current[1], this.current[2] + 1]
      return this
    }
    rollback() {
      if (!this.previous.length) throw new Error("Cannot rollback!")
      this.current = this.previous.pop()
      return this
    }
    release() {
      return this.current.join(".")
    }
  }
  
  const vm = (version) => new VersionManager(version)
// *****************************************************************************
// *****************************************************************************
class VersionManager {
    constructor(version) {
      console.log(version)
      if (!version) {
        version = "0.0.1"
      }
      this.validateVersion(version)
      ;[this.curMajor, this.curMinor = "0", this.curPatch = "0"] = version.split(".")
      this.prevMajor
      this.prevMinor
      this.prevPatch
    }
    setPrevious() {
      ;[this._prevMajor, this._prevMinor, this._prevPatch] = [this.curMajor, this.curMinor, this.curPatch]
    }
    validateVersion(version) {
      let [tMajor, tMinor = "0", tPatch = "0"] = version.split(".")
      if ([tMajor, tMinor, tPatch].some((v) => isNaN(+v))) throw Error("Error occured while parsing version!")
      return
    }
    major() {
      this.setPrevious()
      ;[this.curMajor, this.curMinor, this.curPatch] = [`${++this.curMajor}`, "0", "0"]
      return this
    }
    minor() {
      this.setPrevious()
      ;[this.curMajor, this.curMinor, this.curPatch] = [this.curMajor, `${++this.curMinor}`, "0"]
      return this
    }
    patch() {
      this.setPrevious()
      ;[this.curMajor, this.curMinor, this.curPatch] = [this.curMajor, this.curMinor, `${++this.curPatch}`]
      return this
    }
    rollback() {
      if (
        (this.curMajor === this._prevMajor && this.curMinor === this._prevMinor && this.curPatch === this._prevPatch) ||
        !(this._prevMajor && this._prevMinor && this._prevPatch)
      ) {
        throw Error("Cannot rollback!")
      }
      ;[this.curMajor, this.curMinor, this.curPatch] = [this._prevMajor, this._prevMinor, this._prevPatch]
      return this
    }
    release() {
      return `${this.curMajor}.${this.curMinor}.${this.curPatch}`
    }
    set prevMajor(prop) {
      this._prevMajor = this.curMajor
    }
    set prevMinor(prop) {
      this._prevMinor = this.curMinor
    }
    set prevPatch(prop) {
      this._prevPatch = this.curPatch
    }
  }
  
  const vm = (version) => new VersionManager(version)
  

