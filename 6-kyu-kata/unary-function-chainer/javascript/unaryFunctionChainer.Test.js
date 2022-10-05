// 6 kyu - Unary function chainer  [ ID: 54ca3e777120b56cb6000710  (unary-function-chainer) ]
// URL: https://www.codewars.com/kata/54ca3e777120b56cb6000710
// Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING | FUNDAMENTALS
// *****************************************************************************
function f1(x){ return x*2 }
function f2(x){ return x+2 }
function f3(x){ return Math.pow(x,2) }

function f4(x){ return x.split("").concat().reverse().join("").split(" ")}
function f5(xs){ return xs.concat().reverse() }
function f6(xs){ return xs.join("_") }

Test.assertEquals( chained([f1,f2,f3])(0), 4 )
Test.assertEquals( chained([f1,f2,f3])(2), 36 )
Test.assertEquals( chained([f3,f2,f1])(2), 12 )

Test.assertEquals(chained([f4,f5,f6])("lorem ipsum"), "merol_muspi")


let testFns = [
  ['ss', function(s){return s.toUpperCase()}],
  ['ss', function(s){return s.toLowerCase()}],
  ['ss', function(s){return s[0].toUpperCase() + s.substring(1).toLowerCase()}],
  ['sl', function(s){return s.split("")}],
  ['ls', function(l){return l.join("*")}],
  ['ls', function(l){return l.join("-")}],
  ['ll', function(l){let r=l.concat();r.reverse(); return r}]
];


let rndChoice = function(items) {
  return items[Math.floor(Math.random() * items.length)]
};

let rndFn = function(t) {
  return rndChoice(testFns.filter(function(fn){ return fn[0]==t}))

};

let rndFn2 = function(t) {
  return rndChoice(testFns.filter(function(fn){ return fn[0][0]==t}))
};

let rndFnChain = function() {
  let ret=[];
  ret.push(rndFn("ss"))
  while(ret.length < 5) {
    ret.push(rndFn2(ret[ret.length-1][0][1]))
  }
  return ret.map(function(item){return item[1]})
};

let rndString = function() {return Math.random().toString(36).substring(7)};

let _solChained = function(functions) {
  return function(initial) {
    return functions.reduce(function(acc,fn) { return fn(acc) }, initial)
  }
};

for(let i=0;i<30; ++i) {
  let fns = rndFnChain();
  let r = rndString();
  Test.assertEquals(JSON.stringify(chained(fns)(r)), 
                    JSON.stringify(_solChained(fns)(r)),
                    "Random test "+i)
}

