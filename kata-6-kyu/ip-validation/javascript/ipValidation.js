/* eslint-disable regexp/no-empty-alternative */
//+ ====================================================================================================================
//+
//+ 6 kyu - IP Validation  [ ID: 515decfd9dcfc23bb6000006 ] (ip-validation)
//+ URL: https://www.codewars.com/kata/515decfd9dcfc23bb6000006
//+ Category: ALGORITHMS  |  Tags: REGULAR EXPRESSIONS | ALGORITHMS
//+
//+ ====================================================================================================================

const isValidIP = (str) => (str.match(/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/g) == str ? true : false)

module.exports = { isValidIP }
