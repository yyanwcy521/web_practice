function toSet(ele) {
    let new_arr = [];
    let arr = new Set(ele);

    console.log(Array.from(arr));
// ​    for(i in arr){
//     new_arr.push(S[i]);​
// ​}
// ​    return new_arr;
} 

let a = toSet([1,1,1,1,2,3,3,3,3]);
console.log(a);