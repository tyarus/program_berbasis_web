function tugas_no_1(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}

const n = 21 ; 
console.log(`Deret Fibonacci sebanyak ${n} angka:`);
console.log(tugas_no_1(n).join(", "));
