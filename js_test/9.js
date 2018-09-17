// process.stdin.setEncoding('utf-8');

// process.stdin.on('readable', function(){
//     var chunk = process.stdin.read();
//     if(chunk !== null){
//         process.stdout.write('data: '+ chunk);
//     }
// });

// process.stdin.on('end', function(){
//     process.stdout.write('end');
// });

// process.stdin.resume();

// process.stdin.on('data', function(chunk){
//     process.stdout.write('data: ' + chunk);
// });
console.log(process.version,process.execPath,process.platform);