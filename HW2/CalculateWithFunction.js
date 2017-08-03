var expression = [];
var equation;

function zero(innerFunction) {
    expression.unshift('0');

    if (expression.length === 3) {
        equation = expression.join('');
        expression = [];
        return math.evaluate(equation);
    }
}

function one(innerFunction) {
    expression.unshift('1');

    if (expression.length === 3) {
        equation = expression.join('');
        expression = [];
        return math.evaluate(equation);
    }
}

function two(innerFunction) {
    expression.unshift('2');

    if (expression.length === 3) {
        equation = expression.join('');
        expression = [];
        return math.evaluate(equation);
    }
}

function three(innerFunction) {
    expression.unshift('3');

    if (expression.length === 3) {
        equation = expression.join('');
        expression = [];
        return math.evaluate(equation);
    }
}

function four(innerFunction) {
    expression.unshift('4');

    if (expression.length === 3) {
        equation = expression.join('');
        expression = [];
        return math.evaluate(equation);
    }
}

function five(innerFunction) {
    expression.unshift('5');

    if (expression.length === 3) {
        equation = expression.join('');
        expression = [];
        return math.evaluate(equation);
    }
}

function six(innerFunction) {
    expression.unshift('6');

    if (expression.length === 3) {
        equation = expression.join('');
        expression = [];
        return math.evaluate(equation);
    }
}

function seven(innerFunction) {
    expression.unshift('7');

    if (expression.length === 3) {
        equation = expression.join('');
        expression = [];
        return math.evaluate(equation);
    }
}

function eight(innerFunction) {
    expression.unshift('8');

    if (expression.length === 3) {
        equation = expression.join('');
        expression = [];
        return math.evaluate(equation);
    }
}

function nine(innerFunction) {
    expression.unshift('9');

    if (expression.length === 3) {
        equation = expression.join('');
        expression = [];
        return math.evaluate(equation);
    }
}

function plus(innerFunction) {
    expression.unshift('+');
}

function minus(innerFunction) {
    expression.unshift('-');
}

function times(innerFunction) {
    expression.unshift('*');
}

function dividedBy(innerFunction) {
    expression.unshift('/');
}
