// [object Object] - Interview Question (easy)  [ ID: 5b358a1e228d316283001892  (interview-question-easy) ]
// URL: https://www.codewars.com/kata/5b358a1e228d316283001892
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
// *****************************************************************************
describe("Fixed tests", function() {
  it("Tests", function() {
    assert.equal(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
    assert.equal(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
    assert.equal(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");
    assert.equal(getStrings("Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch"), "l:***********,a:***,n:****,f:*,i:***,r:****,p:*,w:****,g:*******,y:*****,o:******,e:*,c:**,h:**,d:*,b:*,t:*,s:*");
  });
});

function solution(city) {
  const o = {}, res = [];
  for (const c of city.toLowerCase().replace(/[^a-z]/gi,"")) 
    o[c] = o[c] ? o[c]+"*" : c+":*";
  for (const k in o) 
    res.push(o[k]);
  return res.join(",");
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

describe("Random Tests", function() {
  it ("Tests", function() {
    let cities = "Ahmedabad,Albuquerque,Alexandria,Arlington,Atlanta,Austin,Baghdad,Baltimore,Bangalore,Bangkok,Barcelona,Beijing,Belgrade,Belo Horizonte,Berlin,Birmingham,Bogota,Boston,Brussels,Bucharest,Budapest,Buenos Aires,Cairo,Charlotte,Chengdu,Chennai,Chicago,Chongqing,Cologne,Colorado Springs,Columbus,Dalian,Dallas,Dar es Salaam,Delhi,Denver,Detroit,Dhaka,Dongguan,El Paso,Fort Worth,Foshan,Fresno,Fukuoka,Guadalajara,Guangzhou,Hamburg,Hangzhou,Harbin,Ho Chi Minh City,Hong Kong,Houston,Hyderabad,Indianapolis,Istanbul,Jacksonville,Jakarta,Jinan,Johannesburg,Kansas City,Karachi,Kazan,Kharkiv,Khartoum,Kiev,Kinshasa,Kolkata,Kuala Lumpur,Lagos,Lahore,Las Vegas,Lima,London,Long Beach,Los Angeles,Louisville,Luanda,Madrid,Manila,Memphis,Mesa,Mexico City,Miami,Milan,Milwaukee,Minneapolis,Minsk,Moscow,Mumbai,Munich,Nagoya,Nanjing,Nashville,New Orleans,New York,New York City,Nizhny Novgorod,Oakland,Odessa,Oklahoma City,Omaha,Osaka,Paris,Perm,Philadelphia,Phoenix,Portland,Prague,Pune,Qingdao,Raleigh,Rio de Janeiro,Riyadh,Rome,Rostov,Sacramento,Saint Petersburg,Samara,San Antonio,San Diego,San Francisco,San Jose,Santiago,Sao Paulo,Seattle,Seoul,Shanghai,Shenyang,Shenzhen,Singapore,Sofia,Surat,Suzhou,Tampa,Tehran,Tekirdag,Tianjin,Tokyo,Toronto,Tucson,Tulsa,Ufa,Vienna,Virginia Beach,Volgograd,Voronezh,Warsaw,Washington,Washington DC,Wuhan,Xian,Yangon".split(",");
    shuffle(cities);
    for (let x of cities)
      assert.strictEqual(getStrings(x), solution(x));
  });
});
