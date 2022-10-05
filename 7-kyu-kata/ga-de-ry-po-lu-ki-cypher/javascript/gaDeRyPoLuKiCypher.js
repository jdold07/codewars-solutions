// 7 kyu - GA-DE-RY-PO-LU-KI cypher  [ ID: 592a6ad46d6c5a62b600003f  (ga-de-ry-po-lu-ki-cypher) ]
// URL: https://www.codewars.com/kata/592a6ad46d6c5a62b600003f
// Category: REFERENCE  |  Tags: FUNDAMENTALS | CIPHERS | CRYPTOGRAPHY
// *****************************************************************************
const key = {G:"A",A:"G",D:"E",E:"D",R:"Y",Y:"R",P:"O",O:"P",L:"U",U:"L",K:"I",I:"K",
               g:"a",a:"g",d:"e",e:"d",r:"y",y:"r",p:"o",o:"p",l:"u",u:"l",k:"i",i:"k"}
  
  const encode = (decode = (s) => s.replace(RegExp("[" + [...Object.keys(key)].join("") + "]", "g"), (c) => key[c]))
