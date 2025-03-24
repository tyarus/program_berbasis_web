const kalkulator = (operator, ...numbers) => {
    const validOperators = ['+', '-', '*', '/', '%'];
    
    if (!validOperators.includes(operator)) {
        return `Operator "${operator}" tidak valid! Gunakan salah satu dari: +, -, *, /, %`;
    }

    switch (operator) {
        case '+':
            return numbers.reduce((acc, num) => acc + num, 0);
        case '-':
            return numbers.reduce((acc, num) => acc - num);
        case '*':
            return numbers.reduce((acc, num) => acc * num, 1);
        case '/':
            return numbers.reduce((acc, num) => acc / num);
        case '%':
            return numbers.reduce((acc, num) => acc % num);
    }
};

console.log(kalkulator('+', 10, 20, 30));
console.log(kalkulator('-', 50, 20, 5));      
console.log(kalkulator('*', 2, 3, 4));      
console.log(kalkulator('/', 100, 2, 5));     
console.log(kalkulator('%', 50, 8));          
console.log(kalkulator('^', 2, 3));           
