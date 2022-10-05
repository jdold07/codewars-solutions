// [object Object] - Salesman's Travel  [ ID: 56af1a20509ce5b9b000001e  (salesmans-travel) ]
// URL: https://www.codewars.com/kata/56af1a20509ce5b9b000001e
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
const chai = require('chai');
const assert = chai.assert;


const ad = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432,"
  + "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000,"
  + "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000,"
  + "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000,"
  + "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000,"
  + "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654,"
  + "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200,"
  + "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001,"
  + "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655,"
  + "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655,"
  + "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000"


const code = "OH 43071,NY 56432,ZP 32908,AE 56210,RE 13000,EX 34342,SW 43098,AA 45521,GG 30654,ZP 32908,AE 56215,RE 13200,EX 34345,"
     + "RE 13222,RE 13001,SW 43198,AA 45522,GG 30655,XX 32321,YY 45098"
     
function testing(actual, expected) {
    assert.strictEqual(actual, expected)
}

describe("travel",function() {
it("Basic tests",function() {    
    testing(travel(ad, "AA 45522"), "AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670")
    testing(travel(ad, "EX 34342"), "EX 34342:Pussy Cat Rd. Chicago,Pussy Cat Rd. Chicago/10,100")
    testing(travel(ad, "EX 34345"), "EX 34345:Pussy Cat Rd. Chicago/100")
    testing(travel(ad, "AA 45521"), "AA 45521:Paris bd. Abbeville,Paris St. Abbeville/674,67")
    testing(travel(ad, "AE 56215"), "AE 56215:Main Al. Bern/320")

    testing(travel(ad, "GG 30654"), "GG 30654:Surta Alley Goodtown,Surta Avenue Goodtown/10,11")
    testing(travel(ad, "OH 43071"), "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432")
    testing(travel(ad, "AE 56210"), "AE 56210:Main Rd. Bern,Main Al. Bern,Main Rd. Bern/3200,320,3")
    testing(travel(ad, "YY 45098"), "YY 45098:/")

    testing(travel(ad, ""), ":/");
    testing(travel(ad, "OH 430"), "OH 430:/");
})})

describe("Random tests",function() {

    function randint(a, b) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    
  //................
    function work_one39(r, srch) {
        let res = [];
        let searched = r.indexOf(srch);
        if (searched < 0) return res;
        let a = r.match(/[A-Z]{1,2}\s\d+\s*$/g);
        if ((a === null) || (a[0] !== srch)) return res;
        let b = r.match(/^\s*\d+/);
        let c = r.replace(/[A-Z]{1,2}\s\d+$/, "");
        let d = c.replace(/^\s*\d+\s*/, " ").trim();
        res.push(b); res.push([d]); res.push(a);
        return res;
    }

    function travel39(r, zipcode) {
        if (zipcode === "") return ":/";
        let result = [[], []];
        let arr = r.split(",");
        arr.forEach( 
            function(u) {
                let res = work_one39(u, zipcode);
                if (res.length !== 0) {
                    result[0] = result[0].concat(res[0]);
                    result[1] = result[1].concat(res[1]);
                }
                return result;
            })
        return zipcode + ":" + result[1].join(",") + "/" + result[0].join(",");
    }  
  //................
    let t = code.split(",");
    for (let i = 0; i < 10; i++) {
        let n = randint(0, t.length - 1);
        let toF = t[n];
        it("Testing travel: ", function() {
          testing(travel(ad, toF), travel39(ad, toF));
        }
    )}
})
