// 8 kyu - Are You Playing Banjo?  [ ID: 53af2b8861023f1d88000832  (are-you-playing-banjo) ]
// URL: https://www.codewars.com/kata/53af2b8861023f1d88000832
// Category: undefined  |  Tags: STRINGS | FUNDAMENTALS
// *****************************************************************************
const areYouPlayingBanjo = name =>
    /^r/i.test(name) ? `${name} plays banjo` : `${name} does not play banjo`
