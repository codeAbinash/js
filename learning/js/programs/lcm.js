function lcm(a, b) {
    let min = a > b ? b : a
    while (true) {
        if (min % a == 0 && min % b == 0)
            return min;
        min++
    }
}

console.log(lcm(10, 15))