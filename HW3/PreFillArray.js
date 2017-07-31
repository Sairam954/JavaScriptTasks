function prefill(n, v) {
    let arr = [];
    if (Number.isNaN(parseInt(n, 10)) || n < 0 || n % 1 !== 0) {

        throw new TypeError(n + " is invalid");
    } else {
        arr.length = n;

        return arr.fill(v, 0, n);

    }
}
