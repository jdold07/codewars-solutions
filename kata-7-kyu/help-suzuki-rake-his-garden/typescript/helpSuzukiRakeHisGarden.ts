//+ ====================================================================================================================
//+
//+ 7 kyu - Help Suzuki rake his garden!  [ ID: 571c1e847beb0a8f8900153d ] (help-suzuki-rake-his-garden)
//+ URL: https://www.codewars.com/kata/571c1e847beb0a8f8900153d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const rakeGarden = (garden: string) => garden.replace(/\b(?!gravel\b|rock\b)\w+/g, "gravel")

export { rakeGarden }
