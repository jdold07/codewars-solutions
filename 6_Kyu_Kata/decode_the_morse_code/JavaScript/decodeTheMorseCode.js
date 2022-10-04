// 6 kyu - Decode the Morse code   [ ID: 54b724efac3d5402db00065e  (decode-the-morse-code) ]
// URL: https://www.codewars.com/kata/54b724efac3d5402db00065e
// Category: undefined  |  Tags: ALGORITHMS
// *****************************************************************************
const morseCode = {  
      "-----":"0", 
      ".----":"1",
      "..---":"2",
      "...--":"3",
      "....-":"4",
      ".....":"5",
      "-....":"6",
      "--...":"7",
      "---..":"8",
      "----.":"9",
      ".-":"A",
      "-...":"B",
      "-.-.":"C",
      "-..":"D",
      ".":"E",
      "..-.":"F",
      "--.":"G",
      "....":"H",
      "..":"I",
      ".---":"J",
      "-.-":"K",
      ".-..":"L",
      "--":"M",
      "-.":"N",
      "---":"O",
      ".--.":"P",
      "--.-":"Q",
      ".-.":"R",
      "...":"S",
      "-":"T",
      "..-":"U",
      "...-":"V",
      ".--":"W",
      "-..-":"X",
      "-.--":"Y",
      "--..":"Z",
      "-.-.--":"!",
      ".-.-.-":".",
      "--..--":",",
      "...---...":"SOS"
  }
  
  decodeMorse = function(message){
      return message
          .split("   ")
          .map(word => word
              .split(" ")
              .map(letter => morseCode[letter])
              .join("")
          )
          .join(" ")
          .trim()
  }
