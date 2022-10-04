// 7 kyu - Over The Road  [ ID: 5f0ed36164f2bc00283aed07  (over-the-road-1) ]
// URL: https://www.codewars.com/kata/5f0ed36164f2bc00283aed07
// Category: undefined  |  Tags: FUNDAMENTALS | MATHEMATICS | PERFORMANCE
// *****************************************************************************
const overTheRoad = (address, n) => (address % 2 ? n * 2 + ((address - 1) / 2) * -2 : 1 + ((address - n * 2) / -2) * 2)

// Why do I always over-complicate it?
// I got tunnel vision on this being two sequences,
// finding the sequence number and then calculating the nth value of the opposite sequence
// Talk about not being able to see the forest for the trees!!!
// *****************************************************************************
// *****************************************************************************
const overTheRoad = (address, n) =>
  address % 2 ? n * 2 + ((address - 1) / 2 + 1 - 1) * -2 : 1 + ((address - n * 2) / -2 + 1 - 1) * 2
