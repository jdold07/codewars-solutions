// 6 kyu - Prize Draw  [ ID: 5616868c81a0f281e500005c  (prize-draw) ]
// URL: https://www.codewars.com/kata/5616868c81a0f281e500005c
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | SORTING
// *****************************************************************************
const assert = require('chai').assert

describe("Rank",function() {
it("Basic tests",function() {
    assert.strictEqual(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4), "Benjamin")
    assert.strictEqual(rank("Elijah,Chloe,Elizabeth,Matthew,Natalie,Jayden", [1, 3, 5, 5, 3, 6], 2), "Matthew")
    assert.strictEqual(rank("Aubrey,Olivai,Abigail,Chloe,Andrew,Elizabeth", [3, 1, 4, 4, 3, 2], 4), "Abigail")
    assert.strictEqual(rank("Lagon,Lily", [1, 5], 2), "Lagon")
    assert.strictEqual(rank("Elijah,Michael,Avery,Sophia,Samantha", [2, 1, 5, 2, 2], 3), "Sophia")
    assert.strictEqual(rank("William,Willaim,Olivia,Olivai,Lily,Lyli", [1, 1, 1, 1, 1, 1], 1), "Willaim")
    assert.strictEqual(rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 8), "Not enough participants")
    assert.strictEqual(rank("", [4, 2, 1, 4, 3, 1, 2], 6), "No participants")
    assert.strictEqual(rank("Addison,William,Jayden", [3, 5, 6], 1), "William")
    assert.strictEqual(rank("Joshua,Grace,Isabella", [1, 5, 4], 1), "Isabella")
    assert.strictEqual(rank("Elijah,Addison", [3, 6], 2), "Elijah")
    assert.strictEqual(rank("Willaim,Liam,Daniel,Alexander", [6, 4, 6, 2], 2), "Daniel")
    assert.strictEqual(rank("Avery,Olivai,Sophia,Michael,Elizabeth,Willaim,Liam", [5, 5, 3, 2, 1, 3, 6], 5), "Sophia")
    assert.strictEqual(rank("Liam,Madison,Lyli,Jacob,Matthew,Michael", [2, 6, 5, 5, 3, 4], 6), "Liam")
    assert.strictEqual(rank("Sophia,Robert,Abigail,Grace,Lagon", [1, 2, 2, 6, 4], 5), "Sophia")
    assert.strictEqual(rank("Samantha,Ella", [5, 6], 1), "Samantha")
    assert.strictEqual(rank("Aubrey,Jayden", [3, 4], 2), "Aubrey")
    assert.strictEqual(rank("Jacob,Elijah", [4, 3], 1), "Elijah")
})})

describe("Random tests",function() {
    let exstr  = "Sophia,Jacob,Isabella,Mason,Emma,William,Willaim,Olivia,Olivai,Jayden,Ava,Noah,Naoh,Emily,Michael,Abigail,Ethan,Madison,";
    exstr += "Alexander,Mia,Aiden,Chloe,Daniel,Elizabeth,Robert,Ella,Matthew,Addison,Elijah,Natalie,Joshua,Lily,Lyli,Liam,Grace,Andrew,Samantha,";
    exstr += "James,Avery,David,Sofia,Benjamin,Aubrey,Logan,Lagon,xxxxx,yyyyy,zzzzz";

    function randint(a, b) { 
        return Math.floor(Math.random() * (b - a + 1) + a); 
    }
    function combstr(s, n) {
        let res = "";
        let f = s.split(",");
        let nb = [];
        let i = 0;
        while (i < n) {
            let h = randint(0, 44);
            if (nb.indexOf(h) === -1) {
                nb.push(h);
                res += f[h] + ",";
            }
            i++;
        }
        return res.slice(0, -1);
    }
    function combnbr(n) {
        let res = [];
        let i = 0;
        while (i < n) {
            let h = randint(1, 6);
            res.push(h);
            i++;
        }
        return res;
    }
    //................
    function compSol(a, b) {
        let r;
        let cp = b[1] - a[1];
        if (cp === 0) {
            if (a[0] < b[0]) r = -1; else r = 1;
        } else {
            r = cp;
        }
        return r;
    }
    function ponderSol(s, w) {
        let ss =  s.toUpperCase();
        let sm = 0;
        for (let c in ss) {
            sm += 1 + ss[c].charCodeAt(0) - "A".charCodeAt(0);
        }
        sm += ss.length;
        return sm * w;
    }
    function rankSol(st, we, n) {
        if (st === "") return "No participants";
        let f = st.split(",");
        if (n > f.length) return "Not enough participants";
        let res = f.map(function (e, i) { return [f[i], ponderSol(f[i], we[i])]; }).sort(compSol);
        return res[n - 1][0];
    }
    
    for (let i = 0; i < 50; i++) {
        let h = randint(1, 40);
        let st = combstr(exstr, h);
        let l = st.split(',').length;
        let we = combnbr(l);
        let k = randint(1, l-1);
        let e = JSON.stringify(we);
        //console.log(rank(st, we, k));
        it("Testing Rank: " + st + ", " + e + ", " + k, function() {
            assert.strictEqual(rank(st, we, k), rankSol(st, we, k) ,"It should work for random tests too")
        }
    )}
})
