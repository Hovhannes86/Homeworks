//*1. Get array of node ids from tree (keys).

function getArraOfNode(obj,arr=[]){
    for (let key in obj){
        arr.push(key)
       if(typeof obj[key] === 'object' && typeof obj[key] !== null){
        getArraOfNode(obj[key],arr)
       }
    }
    return arr.sort((a,b)=>a-b)
}


//*3. Implement binary search.

function binarySearch(arr, num){
    let min = 0;
    let max = arr.length-1;
    while (min<=max){
        let mid = Math.floor((min+max)/2)
        if(arr[mid]===num){
            return true
        }else if (arr[mid] < num){
             min = mid+1
        } else {
            max = mid-1
        }
     }
    return false
}
