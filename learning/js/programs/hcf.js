function hcf(a, b) {
    if (b == 0)
        return a
    return hcf(b, a % b)
}

console.log(hcf(15, 20))