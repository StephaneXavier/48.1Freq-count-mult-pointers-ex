// add whatever parameters you deem necessary
function averagePair(arrOfNums, soughtAvg) {
    let left = 0;
    let right = arrOfNums.length -1;
    
    while(left < right){
        
        const currentAvg = (arrOfNums[left]+ arrOfNums[right]) / 2;

        if(currentAvg === soughtAvg){
            return true
        }else if(currentAvg < soughtAvg){
            left ++
        }else if(currentAvg > soughtAvg){
            right --
        }
    }
    return false
}


module.exports = averagePair