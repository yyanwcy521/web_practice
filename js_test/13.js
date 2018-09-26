
// const tasks = [];
// for(var i=0;i<5;i++){
//     ((j)=>{
//         tasks.push(new Promise((resolve)=>{
//             setTimeout(()=>{
//                 console.log(new Date,j);
//                 resolve();
//             },1000*j);
//         }))
//     }
//         )(i);
// }
// Promise.all(tasks).then(()=>{
//     setTimeout(()=>{
//         console.log(new Date,i);
//     },1000);
// })


// const tasks = [];
// const output = (i) => new Promise((resolve) => {
//     setTimeout(() => {
//         console.log(new Date,i);
//         resolve();
//     },1000*i);
// });
// for(var i = 0;i<5;i++){
//     tasks.push(output(i));
// }
//  Promise.all(tasks).then(()=>{
//      setTimeout(() => {
//          console.log(new Date,i);
//      }, 1000);
//  })

const sleep = (timeoutMS) => new Promise((resolve)=>{
    setTimeout(resolve , timeoutMS);
});

(async() => {
    for(var i=0;i<5;i++){
        await sleep(1000);
        console.log(new Date,i);
    }

    await sleep(1000);
    console.log(new Date,i);
})();
