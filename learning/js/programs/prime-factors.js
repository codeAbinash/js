function primeFactors(num) {
    const factors = []
    let i = 2
    while (i <= num) {
        if (num % i == 0) {
            factors.push(i)
            num /= i
        } else
            i++
    }
    return factors
}

console.log(primeFactors(255))