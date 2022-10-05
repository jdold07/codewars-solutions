// 5 kyu - Trifid Cipher Encoder  [ ID: 5dcf96055ca66e0032b9b958  (trifid-cipher-encoder) ]
// URL: https://www.codewars.com/kata/5dcf96055ca66e0032b9b958
// Category: REFERENCE  |  Tags: CIPHERS | CRYPTOGRAPHY | FUNDAMENTALS
// *****************************************************************************
describe("Encoder Static Tests", function(){
  it("Defense Test", function(){
    let key="EPSDUCVWYM+ZLKXNBTFGORIJHAQ";
    Test.assertEquals(trifidEncode(key, 5, "DEFENDTHEEASTWALLOFTHECASTLE+"), "SUEFECPHSEGYYJIXIMFOFOCEJLBSP");
    Test.assertEquals(trifidEncode(key, 6, "ABCDEFG"), "RSAMXEG");
    Test.assertEquals(trifidEncode(key, 7, "ABCDEFG"), "RSQLPNP");
  });
  it("Alphabet Test", function(){
    let key="ABCDEFGHIJKLMNOPQRSTUVWXYZ+";
    Test.assertEquals(trifidEncode(key, 5, "HELLO+WORLD"), "BOJN+ZOOH+D");
    Test.assertEquals(trifidEncode(key, 7, "HELLO+AGAIN"), "BOHBTRYAPVH");
    Test.assertEquals(trifidEncode(key, 3, "TOP+SECRET"), "WFPYTTDHZT");
  });
});

describe("Decoder Static Tests", function(){
  it("Defense Test", function(){
    let key="EPSDUCVWYM+ZLKXNBTFGORIJHAQ";
    Test.assertEquals(trifidDecode(key, 5, "SUEFECPHSEGYYJIXIMFOFOCEJLBSP"), "DEFENDTHEEASTWALLOFTHECASTLE+");
    Test.assertEquals(trifidDecode(key, 7, "RSQLPNPQBLB"), "ABCDEFGHIJK");
    Test.assertEquals(trifidDecode(key, 2, "JJTAUBLJOEMIESXWYIKM"), "ATTACK+THE+WEST+WALL");
    
  });
  it("Alphabet Test", function(){
    let key="ABCDEFGHIJKLMNOPQRSTUVWXYZ+";
    Test.assertEquals(trifidDecode(key, 7, "WYBYKUFLVW"), "TOP+SECRET");
    Test.assertEquals(trifidDecode(key, 5, "RTSJERFYPXX"), "MYSTERY+BOX");
    Test.assertEquals(trifidDecode(key, 3, "BVOOF+WORJP"), "HELLO+WORLD");
  });
});


describe("Encoder Random Tests", function(){
  const ___encoder_trifid_solution = (t,e,n)=>{let l=function(){let e=[[[],[],[]],[[],[],[]],[[],[],[]]];for(let n=0,l=-1,f=-1;n<27;n++)n%3==0&&f++,n%9==0&&(l++,f=0),e[l][f].push(t[n]);return e}();function f(t){for(let e=0,n=-1,f=-1;e<27;e++)if(e%3==0&&f++,e%9==0&&(n++,f=0),-1!=l[n][f].indexOf(t))return[n,f,l[n][f].indexOf(t)]}let r=[[],[],[]];for(let t=0;t<n.length;t++){let e=f(n[t]);r[0].push(e[0]),r[1].push(e[1]),r[2].push(e[2])}let u=[];for(let t=0,l=0,f=0,h=0;t<3*n.length;t++,f++)(f===h+e||f>=r[0].length)&&(2===l?(l=0,h+=e):l++,f=h),u.push(r[l][f]);let h=[];for(let t=0;t<u.length;t+=3)h.push(l[u[t]][u[t+1]][u[t+2]]);return h.join("")};
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ+".split('');
  const ___generate_data = (l)=>{let o=[];for(let i=0; i<l; i++){o.push(alphabet[Math.floor(Math.random() * 28)]);} return o.join('');};
  it("32 Characters", function(){
    for(let i=0; i<64; i++){
      let key = Test.randomize(alphabet).join('');
      let period = Math.ceil(Math.random() * 13) + 1;
      let data = ___generate_data(32);
      
      Test.assertEquals(trifidEncode(key, period, data), ___encoder_trifid_solution(key, period, data));
    }
  });
  it("256 Characters", function(){
    for(let i=0; i<64; i++){
      let key = Test.randomize(alphabet).join('');
      let period = Math.ceil(Math.random() * 13) + 1;
      let data = ___generate_data(256);
      
      Test.assertEquals(trifidEncode(key, period, data), ___encoder_trifid_solution(key, period, data));
    }
  });
});

describe("Decoder Random Tests", function(){
  const ___decoder_trifid_solution = (e,t,n) => {let f=[[[],[],[]],[[],[],[]],[[],[],[]]];for(let t=0,n=-1,l=-1;t<27;t++)t%3==0&&l++,t%9==0&&(n++,l=0),f[n][l].push(e[t]);function l(e){for(let t=0,n=-1,l=-1;t<27;t++)if(t%3==0&&l++,t%9==0&&(n++,l=0),-1!=f[n][l].indexOf(e))return[n,l,f[n][l].indexOf(e)]}let r=function(){let e=[];for(let t of n){let n=l(t);e.push(n[0],n[1],n[2])}return e}(),o=[[],[],[]];for(let e=0,f=0,l=0,i=0;e<r.length;e++,l++)(l===t+i||l>=n.length)&&(2===f?(f=0,i+=t):f++,l=i),o[f][l]=r[e];let i=[];for(let e=0;e<o[0].length;e++)i.push(f[o[0][e]][o[1][e]][o[2][e]]);return i.join("")}
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ+".split('');
  const ___generate_code = (l)=>{let o=[];for(let i=0; i<l; i++){o.push(alphabet[Math.floor(Math.random() * 28)]);} return o.join('');};
  it("32 Characters", function(){
    for(let i=0; i<64; i++){
      let key = Test.randomize(alphabet).join('');
      let period = Math.ceil(Math.random() * 19) + 1;
      let data = ___generate_code(32);
      
      Test.assertEquals(trifidDecode(key, period, data), ___decoder_trifid_solution(key, period, data));
    }
  });
  
  it("256 Characters", function(){
    for(let i=0; i<64; i++){
      let key = Test.randomize(alphabet).join('');
      let period = Math.ceil(Math.random() * 19) + 1;
      let data = ___generate_code(256);
      
      Test.assertEquals(trifidDecode(key, period, data), ___decoder_trifid_solution(key, period, data));
    }
  });
});
