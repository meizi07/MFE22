function sum(n) {
    //TODO:
    //result = 1 + 2 + 3 + ... + n
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }

    return result;
}

console.log(sum(1)); // 1
console.log(sum(2)); // 3
console.log(sum(5)); // 15
console.log(sum(10)); // 55