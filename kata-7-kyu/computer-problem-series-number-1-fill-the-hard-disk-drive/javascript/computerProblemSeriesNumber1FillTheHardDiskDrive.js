//+ ====================================================================================================================
//+
//+ 7 kyu - Computer problem series #1: Fill the Hard Disk Drive  [ ID: 5d49c93d089c6e000ff8428c ] (computer-problem-series-number-1-fill-the-hard-disk-drive)
//+ URL: https://www.codewars.com/kata/5d49c93d089c6e000ff8428c
//+ Category: REFERENCE  |  Tags: LISTS | ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

function save(sizes, hd, files = 0) {
  return hd - sizes[0] >= 0 ? save(sizes.slice(1), (hd -= sizes[0]), ++files) : files
}

module.exports = { save }
