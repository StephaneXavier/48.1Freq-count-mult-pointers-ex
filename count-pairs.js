// add whatever parameters you deem necessary


function countPairs(arr, sum) {

let result = 0;
let current = 0;

while(current <= arr.length-1){
    
    if(arr[current] === 0) current ++ 
    if(arr[current] === sum){
        result ++ 
        current ++ 
    }else{
        for(let i = current + 1; i <= arr.length -1; i ++){
            
            if(arr[i] + arr[current] === sum){
                result ++
            }
        }
        current ++
    }
}
return result
}

module.exports = countPairs