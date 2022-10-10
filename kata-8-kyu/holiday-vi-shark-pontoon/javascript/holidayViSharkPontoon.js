//+ ====================================================================================================================
//+
//+ 8 kyu - Holiday VI - Shark Pontoon  [ ID: 57e921d8b36340f1fd000059 ] (holiday-vi-shark-pontoon)
//+ URL: https://www.codewars.com/kata/57e921d8b36340f1fd000059
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | MATHEMATICS
//+
//+ ====================================================================================================================

const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) =>
  pontoonDistance / youSpeed - sharkDistance / (sharkSpeed / (dolphin + 1)) < 0 ? "Alive!" : "Shark Bait!"

module.exports = { shark }
