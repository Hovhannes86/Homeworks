/*1. Given an array of numbers which is almost sorted in ascending order.  Find the index
where sorting order is violated.*/

function arrClassification(arr){
    for (let i=0; i<arr.length-1; i++){
        if(arr[i]>arr[i+1]){
            return i+1
        }
    }
return -1
}

/*2. Given an array consisting from the arrays of numbers (like a two-dimensional array).
Find sum of each row and print them as an array*/

let sumArrayElements= function (arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]}
        return  sum
        }
arr.map(function fn(el){
   let result= sumArrayElements(el)
    return result
})

/*3. Given an array of integers. Write a function that return new array from first array,
where removed even numbers, and odd numbers was multiplied with new array length*/

function newArray(arr){
    let oddArr=arr.filter(function fn(el,i,arr){
    if (el %2!==0){
        return true
    }
    })
    const a=oddArr.map(function (el,i,arr){
    return el*arr.length
})
  return a  
}

/*4. Given a number. Write a function that calculates its sum of the digits and if that sum
has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
return the result.*/


/* Tarberak 1*/

let sumNumbersDigit= function (num){
    let sum=0;
    for(let i=0;num;i++){
    sum+=num%10;
    num=(num-num%10)/10    
    }
        return  sum
        }

function sumAsOfDigit(num=+prompt('insert any digit',)){
let result= sumNumbersDigit(num)
while(result>10){
    sumNumbersDigit(result)
}
return result
}

/*Tarberak 2*/

function sumDigit(number=+prompt('insert any digit',)){
    if(number<10)
        return number
    if(number%9==0){
        return 9
    }else{
        return number%9
    }
}



/*5. Write a recursive function which receives  a number as arguments and returns the
fibonacci sequence as array.*/

function fibonacciSequence(num){
    let f1=0
    let f2=1
    let next
    let arr=[1]
    if (0<num&&num<2){
        return arr
    }
    for (let i=2;i<=num;i++){
        next=f1+f2;
        f1=f2;
        f2=next
        arr.push(next)
        }
    return arr
}

