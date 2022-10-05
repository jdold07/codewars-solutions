// 7 kyu - Help the Fruit Guy  [ ID: 557af4c6169ac832300000ba  (help-the-fruit-guy) ]
// URL: https://www.codewars.com/kata/557af4c6169ac832300000ba
// Category: REFERENCE  |  Tags: ARRAYS | STRINGS | FUNDAMENTALS
// *****************************************************************************
const removeRotten = (bagOfFruits) => 
    bagOfFruits ? bagOfFruits.map(el => el.replace("rotten", "").toLowerCase()) : []
