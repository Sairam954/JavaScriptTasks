var Cat = (function () {
    var catCount = 0,
        catAggWeight = 0,
        constructor = function (name, weight) {
            if (!name || !weight) {
                throw new 'Must provide a name and a weight!';
            }
            catCount++;
            catAggWeight = catAggWeight + weight;
            Object.defineProperty(this, 'weight', {
                set: function (v) {
                    catAggWeight = catAggWeight + v - weight;
                    weight = v;
                },
                get: function () {
                    return weight;
                }
            });
        }
    constructor.averageWeight = function () {
        return catAggWeight / catCount;
    }
    return constructor;
}());
