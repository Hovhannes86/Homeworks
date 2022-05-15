/* Davit jan 1-in u 2-rd khndirner@ chen stacvum*/


/*3. Write a recursive function to determine whether all digits of the number are odd or
not.*/

function isAllDigitsOdd(num){
    for(let i=0; num; i++){
        if(num%2===0){
            return false
            breake
        }else{
        return isAllDigitsOdd(parseInt(num/10))
        }
        }
    return true
}

/*4. Given an array of numbers. Write a recursive function to find its minimal positive element. (if
such element does not exist, return -1)․*/

function minPositivEl(arr){
    let positivArr=arr.filter(el=>el>=0)
        if( positivArr.length===0){
        return -1
    }
    return positivArr.sort((a,b)=>a-b).shift()
}

