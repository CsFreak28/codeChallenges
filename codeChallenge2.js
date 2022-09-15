function giveChange(money) {
    var arrayOfDollarBills = [100, 50, 20, 10, 5, 1];
    var remainder = money;
    arrayOfDollarBills.forEach(function (dollarBill) {
        if (remainder >= dollarBill) {
            var amountOfDollarBillsInMoney = Math.floor(remainder / dollarBill);
            console.log("".concat(amountOfDollarBillsInMoney, "--")
            .concat(dollarBill, ",..").concat(remainder));
            remainder = remainder - dollarBill * amountOfDollarBillsInMoney;
        }
        else {
            console.log("".concat(0, "--").concat(dollarBill, "....")
            .concat(remainder));
        }
    });
}
giveChange(366);
