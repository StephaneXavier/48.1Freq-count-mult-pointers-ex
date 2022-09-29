// add whatever parameters you deem necessary
function separatePositive(arr) {
    
    const allSame = arr.every(num => Math.sign(num) === Math.sign(arr[0]))
    if(allSame) return arr
    
    let endOfArr = arr.length -1

    for(let i = arr.length -2; i >= 0; i --){
        if(arr[i] < 0){
            const negNum = arr.splice(i,1)
            arr.splice(endOfArr, 0, negNum[0] )
        }
    }
   
    return arr
}


module.exports = separatePositive