// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// process.stdin.on('data',function(chunk){
//     process.stdout.write('data: '+chunk);
//     if(chunk.trim()==='bye'){
//     process.stdin.emit('end');
// }
// });
// process.stdin.on('end',function(){
//     process.stdout.write('end!!!');
// });

var readline = require('readline');

//创建readline接口实例
var  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// question方法
rl.question("你叫什么？",function(answer){
    console.log("名字是："+answer);
    // 不加close，则不会结束
    rl.close();
});

// close事件监听
// rl.on("close", function(){
//    // 结束程序
//     process.exit(0);
// });