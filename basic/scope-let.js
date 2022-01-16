for (let i = 0; i < 5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}


// 印出什麼?
// 0
// 1
// 2
// 3
// 4

// 為什麼?
// let會活在自己的block內(大括號內)