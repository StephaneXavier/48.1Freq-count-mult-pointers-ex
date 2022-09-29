// add whatever parameters you deem necessary

function freqCounter(num) {
    let freqCounter = {}

    for (let char of num) {
        freqCounter[char] = (freqCounter[char] + 1) || 1
    }
    return freqCounter
}

function sameFrequency(num1, num2) {
    let num1Str = num1.toString()
    let num2Str = num2.toString()

    if(num1Str.length !== num2Str.length) return false

    let num1FreqCounter = freqCounter(num1Str)
    let num2FreqCounter = freqCounter(num2Str)

    if(Object.keys(num1FreqCounter).length !== Object.keys(num2FreqCounter).length) return false

    for (let key of Object.keys(num1FreqCounter)) {
        if (num1FreqCounter[key] !== num2FreqCounter[key]) {
            return false
        }
    }
    return true

}


module.exports = sameFrequency