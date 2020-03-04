const fibonacci = position => {
    console.log((position - 1) + (position - 2));
    if (position < 3) return 1;
    else return fibonacci(position - 1) + fibonacci(position - 2);
};
console.log(fibonacci(6))