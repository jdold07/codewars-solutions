# [object Object] - Make Class  [ ID: 5d774cfde98179002a7cb3c8  (make-class) ]
# URL: https://www.codewars.com/kata/5d774cfde98179002a7cb3c8
# Category: ALGORITHMS  |  Tags: OBJECT-ORIENTED PROGRAMMING | ALGORITHMS
# ******************************************************************************
Animal = (@name, @species, @age, @health, @weight, @color) ->
Animel = makeClass 'name', 'species', 'age', 'health', 'weight', 'color'

describe "Basic Tests", ->
  dog1 = new Animal 'Bob', 'Dog', '5', 'good', '50lb', 'brown'
  dog2 = new Animel 'Bob', 'Dog', '5', 'good', '50lb', 'brown'
  it "check for object similarity", ->
    Test.assertEquals Object.keys(dog2).join(","), Object.keys(dog1).join(",")
    Test.assertEquals Object.values(dog2).join(","), Object.values(dog1).join(",")
  it "anti-cheat", ->
    Test.assertEquals dog2 instanceof Animel, yes, '"instances" of your class need to be instances of your class.'
    Test.assertEquals dog2.constructor is Animel, true, 'what are you doing'

Obj = (@x, @y, @z) ->
ObjClass = makeClass 'x', 'y', 'z'

describe "Some random Tests", ->
  for i in [0...50]
    [a, b] = [Math.random() * 1000, Math.random() * 1000]
    o = new Obj a, b, (a, b) -> a + b
    p = new ObjClass a, b, (a, b) -> a + b
    Test.assertEquals JSON.stringify(p), JSON.stringify(o), "JSON representation of object instances must be the same"
    Test.assertEquals p.z(p.x, p.y), o.z(o.x, o.y)

describe "Some more random Tests", ->
  for i in [0...20]
    parameters = Array.from(length: 26, -> String.fromCharCode Math.random() * 25 + 65 | 0).filter (x, i, a) -> a.indexOf(x) is i
    
    eval "function MyClass(#{parameters.join(', ')}) {" + parameters.reduce(((a, p) -> a + "\n  this.#{p} = #{p};"), '') + '\n}'
    
    YourClass = makeClass parameters...
    
    Test.assertEquals JSON.stringify(YourClass), JSON.stringify MyClass
    for j in [0...20]
      randomArguments = (Math.random() * Number.MAX_SAFE_INTEGER | 0).toString().split('')
      myInstance = new MyClass randomArguments...
      yourInstance = new YourClass randomArguments...
      Test.assertEquals JSON.stringify(yourInstance), JSON.stringify(myInstance), "JSON representation of object instances must be the same"
