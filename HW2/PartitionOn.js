function partitionOn(pred, items) {
    let trueItems = items.filter(pred),s
        falseItems = [];
    items.forEach(function (item) {

        if (!pred(item)) {
            falseItems.push(item);
        }


    })

    items.length = 0;
    items.push.apply(items, falseItems.concat(trueItems));

    return falseItems.length;
}
