function compose() {
    funcs = funcs.reverse();
    return function (arg) {
        for (var func of funcs) {
            arg = func(arg);
        }
        return arg;
    }
}
