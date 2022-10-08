function randomNumber() {
  return Math.round(Math.random() * 100)
}

function randomToken() {
  return Math.random().toString(36).slice(8)
}

function randomize(array) {
  const arr = array.concat()
  let i = arr.length
  let j
  let x

  while (i) {
    j = (Math.random() * i) | 0
    x = arr[--i]
    arr[i] = arr[j]
    arr[j] = x
  }
  return arr
}

function sample(array) {
  return array[~~(array.length * Math.random())]
}

function inspect(obj) {
  if (typeof obj === "string") {
    return obj
  } else {
    return obj && obj !== true ? JSON.stringify(obj) : "" + obj
  }
}

const cwUtils = { randomNumber, randomToken, randomize, sample, inspect }
module.exports = cwUtils
