// 7 kyu - SantaClausable Interface  [ ID: 52b50a20fa0e77b304000103  (santaclausable-interface) ]
// URL: https://www.codewars.com/kata/52b50a20fa0e77b304000103
// Category: undefined  |  Tags: OBJECT-ORIENTED PROGRAMMING
// *****************************************************************************
function isSantaClausable(obj) {
    console.log(obj)
    return (
      obj.sayHoHoHo !== undefined &&
      typeof obj.sayHoHoHo !== "boolean" &&
      obj.distributeGifts !== undefined &&
      typeof obj.distributeGifts !== "boolean" &&
      obj.goDownTheChimney !== undefined &&
      typeof obj.goDownTheChimney !== "boolean"
    )
  }
