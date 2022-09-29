// add whatever parameters you deem necessary
function twoArrayObject(arrOfKeys, arrOfVals){
    let keyIdx = 0;
    let valIdx = 0;
    let result = {};

    if(arrOfKeys.length === arrOfVals.length || arrOfKeys.length < arrOfVals.length ){
        while(keyIdx < arrOfKeys.length){
            result[arrOfKeys[keyIdx]] = arrOfVals[valIdx]
            keyIdx ++ 
            valIdx ++
        }
    }else{
        while(keyIdx < arrOfKeys.length){
            result[arrOfKeys[keyIdx]] = arrOfVals[valIdx] || null
            keyIdx ++ 
            valIdx ++
        }
    }
return result
}


module.exports = twoArrayObject
