//+ ====================================================================================================================
//+
//+ 7 kyu - Exes and Ohs  [ ID: 55908aad6620c066bc00002a ] (exes-and-ohs)
//+ URL: https://www.codewars.com/kata/55908aad6620c066bc00002a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

function xo(str: string) {
  return (str.match(/o/gi) || []).length === (str.match(/x/gi) || []).length
}

export { xo }
