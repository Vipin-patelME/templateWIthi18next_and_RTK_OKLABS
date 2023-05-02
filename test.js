const arr = [1,0,5,7,3,2,6,4,8,9,6,5,3,2,8,]
let newArr = arr.sort()
//console.log(arr.length = arr.length-1)

// let position = 3;
// let value = 234;

// for (let i=newArr.length-1; i>=0; i--){
//     if (i >= position){
//         newArr[i+1] = newArr[i]
//         if(i === position){
//             newArr[position] = value
//         }
//     }
// }
// console.log(newArr)

const a =  [2,4,7,9,10,22]
const b = [3,5,11,15]
const c = []

let i =  0;
let j = 0;
let k = 0

while(i < a.length && j < b.length ){
    if (a[i] < b[j]){
        c[k] = a[i]
        console.log(a[i])
        i++
    }
    else{
        c[k] = b[j]
        console.log(b[j])
        j++

    }
    k++
}
console.log(c)
