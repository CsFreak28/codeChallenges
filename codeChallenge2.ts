function giveChange(money: number) {
  let arrayOfDollarBills = [100, 50, 20, 10, 5, 1];
  let remainder: number = money;
  arrayOfDollarBills.forEach((dollarBill) => {
    if (remainder >= dollarBill) {
      let amountOfDollarBillsInMoney: number = Math.floor(
        remainder / dollarBill
      );
      console.log(`${amountOfDollarBillsInMoney}--${dollarBill},..${remainder}`);
      remainder = remainder - dollarBill * amountOfDollarBillsInMoney;
    } else {
      console.log(`${0}--${dollarBill}....${remainder}`);
    }
  });
}
giveChange(366);
