// 8 kyu - Did she say hallo?  [ ID: 56a4addbfd4a55694100001f  (did-she-say-hallo) ]
// URL: https://www.codewars.com/kata/56a4addbfd4a55694100001f
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
function validateHello(greetings) {
    res =  /hello|ciao|salut|hallo|hola|ahoj|czesc/gi.test(greetings) 
    return res
  }
