function rotate(arr,n){
    let i
    
    for (i=0;i<n;i++){
        const el=arr.shift()
        arr.push(el)
        
    }
    return arr
}

const arr = [1, 3, 5, 7, 9, 11];
const rotateTime=1
console.log(rotate(arr,rotateTime))


// ANOTHER METHOD

// function shiftedArray(arr) {
//   const item = arr.shift();

//   arr.push(item);
//   return arr;
// }
// const arr = [1, 3, 5, 7, 9, 11];

// console.log(shiftedArray(arr))
