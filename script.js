// 1. Given an object. Invert it (keys become values and values become keys). //
//If there is more than key for that given value create an array.// 
function invertObjKeyValue(object){
    let newObj={};
    for(let key in object){
        newObj[object[key]]=key;
    }
return newObj
} 
//Davit jan sa amboghjakan lucum chi, krknvelu depqum arrayei mas@ chi stacvum//


// 2. Given two objects. Write a function that performs shallow compare.//
function shalowCompare(obj1,obj2){
   for(let key in obj1){
       if(obj1[key]!==obj2[key]){
           return false
       }
         }
         for (let key in obj2){
            if(obj2[key]!==obj1[key]){
                return false
            }
   }
   return true 
}


//3. Given an array. Determine whether it consists only from uniques or not.//
function isArrayValueUniques(arr){
   let isUniques=true
    for(let i=0;i<arr.length;i++){
        let count=arr[i];
        for (let j=i+1;j<arr.length;j++){
            if(count===arr[j]){
                isUniques=false
            }
        }

    }
    return isUniques
}

//4. Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern")//
    // is a word or phrase without a repeating letter.//

function isIsogram(word){
    let arr=word.split('');
    let double=true;
    for (let i=0;i<arr.length;i++){
         if(arr[i]===' ')
            continue
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                double=false
            }
        }
    }
    return double
}

//5. Given an array of integers. All numbers are unique. Find the count of missing numbers//
//between minimum and maximum elements to make integers sequence.//

function arrMax(){
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
        }
return max
};
function arrMin(){
    let min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i]
        }
    }
    return min
};

function countOfMissingNumbers(arr){
    let count=arr.length
    let m=arrMax(arr);
    let s=arrMin(arr);
     return (m-s+1-count)
    };

