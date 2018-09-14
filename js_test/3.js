function toSet(ele) {
    let arr = new Set(ele);
    return arr;
} 

let a = toSet([1,1,1,1,2,3,3,3,3]);
console.log(a);