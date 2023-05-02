
let arr = [1,3,4,5,8,9];
let missingNum = []
let k = 0;
for  (let j=1; j<10; j++) {
    if (arr.indexOf(j) < 0){
        missingNum[k] = j
        k++
    }
}
console.log(missingNum)