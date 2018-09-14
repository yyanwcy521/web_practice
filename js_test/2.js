function jugle(element){
    if(Object.prototype.toString.call(element) === "[object Object]"){
        console.log( `${element} 是对象!`);
    }
    else if(Object.prototype.toString.call(element) === "[object Array]"){
        console.log(`${element} 是数组!`);
    }
    else{
        console.log( `${element}是其他!`);
    }
}
let arr = [1,2,3];
let obj = {};
jugle(arr);
jugle(obj);