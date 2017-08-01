function rentalCarCost(d) {
    let costPerDay = 40,
        numberOfDays = d,
        totalCost,
        discount;
    discount = numberOfDays >= 7 ? 50 : (numberOfDays >= 3 ? 20 : 0);
    totalCost = numberOfDays * costPerDay - discount;
    return totalCost;
}
