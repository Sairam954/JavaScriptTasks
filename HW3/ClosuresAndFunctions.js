function createFunctions(n) {
    var callbacks = [];

    for (let i = 0; i < n; i++) {
        callbacks[i] = function () {
            return i
        };
    }
    return callbacks;
}
