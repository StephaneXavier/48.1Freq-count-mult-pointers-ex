// add whatever parameters you deem necessary
function freqCounter(str) {
    let freqCounter = {}

    for (let char of str) {
        freqCounter[char] = (freqCounter[char] + 1) || 1
    }
    return freqCounter
}



function constructNote(message, letters) {

    if (!letters.length) return false
    let messageFreqCounter = freqCounter(message)
    let lettersFreqCounter = freqCounter(letters)

    for (let key of Object.keys(messageFreqCounter)) {
        if (lettersFreqCounter[key] < messageFreqCounter[key]) {
            return false
        }
    }
    return true
}

module.exports = constructNote