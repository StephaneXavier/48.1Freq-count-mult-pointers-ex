// add whatever parameters you deem necessary
function isSubsequence(strSought, strMash) {

    let idxOfStrSought = 0;
    let result =''
    
    for(let char of strMash){
        if(char === strSought[idxOfStrSought]){
            idxOfStrSought ++
            result += char
        }
    }
    if(result === strSought) return true
    return false
}


module.exports = isSubsequence