// [object Object] - Encrypt this!  [ ID: 5848565e273af816fb000449  (encrypt-this) ]
// URL: https://www.codewars.com/kata/5848565e273af816fb000449
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | REGULAR EXPRESSIONS | ARRAYS | CIPHERS | ALGORITHMS | CRYPTOGRAPHY | SECURITY
// *****************************************************************************
import XCTest

class SolutionTest: XCTestCase {
    static var allTests = [
        ("Test Example", testExample),
        ("Test 100 Random", testRandom),
    ]

    func testExample() {
        
        XCTAssertEqual(encryptThis(text: "A wise old owl lived in an oak"), "65 119esi 111dl 111lw 108dvei 105n 97n 111ka")
        XCTAssertEqual(encryptThis(text: "The more he saw the less he spoke"), "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp")
        XCTAssertEqual(encryptThis(text: "The less he spoke the more he heard"), "84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare")
        XCTAssertEqual(encryptThis(text: "Why can we not all be like that wise old bird"), "87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri")
        XCTAssertEqual(encryptThis(text: "Thank you Piotr for all your help"), "84kanh 121uo 80roti 102ro 97ll 121ruo 104ple")
        
    }
    
    func testRandom(){
        let howManyTests = 100
        for _ in 1...howManyTests {
            // need up to 50 words with up to 20 letters (will be randomized)
            var testString = ""
            let numberOfWords = randomNumber(inRange: 1...50)
            
            for _ in 1...numberOfWords {
                let numberOfChars = randomNumber(inRange: 1...20)
                testString += "\(randomString(length: numberOfChars)) "
            }
            testString = String(testString.dropLast())
            
            XCTAssertEqual(encryptThis(text: testString), encryptThisSol(text: testString))
        }
    }
    
    // Solution func
    func encryptThisSol(text:String) -> String{
        let words = text.split(separator: " ")
        var outputString = ""
        
        for word in words{
            //let nsword = word as NSString
            let nsword = NSString(string:String(word))
            let char = nsword.character(at: 0)
            if nsword.length == 1{
                outputString += "\(char) "
            }
            
            if nsword.length == 2{
                outputString += "\(char)\(UnicodeScalar(nsword.character(at: 1))!) "
            }
            
            if nsword.length > 2 {
                outputString += "\(char)"
                var characters = Array(word)
                characters.swapAt(1, characters.endIndex-1)
                let newString = buildStringSol(text: String(characters))
                outputString += "\(newString) "
            }
        }
        
        outputString = String(outputString.dropLast())
        
        return outputString
    }
    
    func buildStringSol(text:String) -> String{
        var outputString = ""
        var copyOfText = text
        copyOfText.remove(at: copyOfText.startIndex)
        for letter in copyOfText{
            outputString += String(letter)
        }
        return outputString
    }
    
    // Helper Functions:
    // For those looking for random functions please use random() since CW uses Swift Linux Posix random()
    // On Xcode you can compile with arc4random or newer Swift has Int.Random built in methods
    // Also had to changed casting below Swift in Linux doesn't like "as" for some reason
    func randomNumber<T : SignedInteger>(inRange range: ClosedRange<T> = 1...6) -> T {
        let length = Int64(range.upperBound - range.lowerBound + 1)
        //let value = Int64(arc4random()) % length + Int64(range.lowerBound)
        let value = Int64(random()) % length + Int64(range.lowerBound)
        return T(value)
    }
    
    func randomString(length: Int) -> String {

        let letters : NSString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        // let len = UInt32(letters.length)
        let len = Int64(letters.length)
        
        var randomString = ""
        
        for _ in 0 ..< length {
            //let rand = arc4random_uniform(len)
            let rand = Int64(random()) % len
            let nextChar = letters.character(at: Int(rand))
            //randomString += NSString(characters: &nextChar, length: 1) as String
            randomString += "\(UnicodeScalar(nextChar)!)"
        }
        
        return randomString
    }
    
}

XCTMain([
    testCase(SolutionTest.allTests)
])
