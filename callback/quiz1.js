// 41325
// function test(){
//     console.log(1);

//     setTimeout(()=>{
//         console.log(2);
//     },0);

//     console.log(3);
// }

// console.log(4);
// test();
// console.log(5);


/// 41352
// function test(){
//     console.log(1);
//     new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log(2);
//             resolve();
//         },0);
//     })
//     console.log(3);
// }

// console.log(4);
// test();
// console.log(5);


// 41523
async function test(){
    console.log(1);
    await new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log(2);
            resolve();
        },0);
    })
    console.log(3);
}

console.log(4);
test();
console.log(5);