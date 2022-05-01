/*1. Given an array. Write a recursive function that removes the first element and returns the given
array. (without using arr.unshift(),assign second element to first, third element to second...)*/

function removeFirstElement(arr,i=0){
    if(arr.length === i){
        arr.pop()
        return arr
    }
    arr[i] = arr[i+1]
    i++
    return removeFirstElement(arr,i)
}


/*2. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function
that concats arrays).*/

function arrayCopy(arr){
    let newArray = []
    for( let i=0; i<arr.length; i++){
        if(typeof arr[i] === 'object' ){
            newArray = newArray.concat(arrayCopy(arr[i]))
        } else {
            newArray.push(arr[i])
        }
    }
    return newArray
}


/*3. Given an array and a number N.  Write a recursive function that rotates an array N places to the
left. (Hint: to add element to the beginning use arr.unshift())*/

/*Tarberak 1 aranc rekursia*/

function arrayElMove(arr,n){
    let firstEl
    if(arr.length<=n){
        return arr
    }
    for(let i=0; i<n; i++){
        firstEl=arr.shift()
        arr.push(firstEl)
    }
    return arr
}

/* Tarberak 2 recursiayov*/

function arrayElMoveR(arr,n){
    let firstEl
    if(n===0){
        return arr
    }
    firstEl=arr.shift()
    arr.push(fisrtEl)
    return arrayElMoveR(arr,n-1)
}

/*4. Given the list of the following readers:
let books= [
{ book: "Catcher in the Rye", readStatus: true, percent: 40},
{ book: "Animal Farm&quot", readStatus: true, percent: 20},
{ book: "Solaris&quot", readStatus: false, percent: 90 },
{ book: "The Fall&quot", readStatus: true, percent: 50 },
{ book: "White Nights&quot", readStatus: false, percent: 60 } ,
{ book: "After Dark&quot", readStatus: true, percent: 70 }
];
Output the books sorted by the percent in descending order which readStatus is true.*/

function sortedBooks(books){
let readBooks = books.filter (el=>el.readStatus===true)
                     .sort ((a,b)=>b.percent-a.percent)
        return readBooks
}

/*5. Implement “map” method for plain objects (same as Array map method.)*/

function objectMap(fn){
    let result={}
        for (let key in this){
        if (fn(this.key,this)){
          result[key]=this[key]  
        }
     }
    return result
}






