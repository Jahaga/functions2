function add(x, y) {
    return x + y
}

console.log(add(2, 4))

function multiply(x, y) {
    let currentValue = 0
    for (let i = 0; i < y; i += 1) {
        currentValue = add(x, currentValue)
    }

    return currentValue
}

console.log(multiply(6, 4))

function power(x, n) {
    let currentValue = 1
    for (let i = 0; i < n; i += 1) {
        currentValue = multiply(x, currentValue)
    }

    return currentValue
}

console.log(power(3, 4))

function factorial(x) {
    let currentValue = 1
    for (let i = x; i > 0; i -= 1) {
        currentValue = multiply(i, currentValue)
    }

    return currentValue

}

console.log(factorial(5))

function fibonacci(x) {
    if (x === 1) {
        return 0
    } else if (x === 2) {
        return 1
    }
}