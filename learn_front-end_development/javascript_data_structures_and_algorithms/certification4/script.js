let price = 19.5;
let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
let cash = 0;
const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDueDiv = document.getElementById("change-due");


class CashRegister {
    init(cid) {
        let totalCash = 0;
        this.cid = cid.map(([name, money]) => {
            totalCash += money;
            let count = 0;
            let unit = 0;
            switch (name) {
                case "PENNY":
                    unit = 0.01;
                    count = parseInt(money / unit, 10);
                    break;
                case "NICKEL":
                    unit = 0.05;
                    count = parseInt(money / unit, 10);
                    break;
                case "DIME":
                    unit = 0.1;
                    count = parseInt(money / unit, 10);
                    break;
                case "QUARTER":
                    unit = 0.25;
                    count = parseInt(money / unit, 10);
                    break;
                case "ONE":
                    unit = 1;
                    count = money;
                    break;
                case "FIVE":
                    unit = 5;
                    count = parseInt(money / unit, 10);
                    break;
                case "TEN":
                    unit = 10;
                    count = parseInt(money / unit, 10);
                    break;
                case "TWENTY":
                    unit = 20;
                    count = parseInt(money / unit, 10);
                    break;
                case "ONE HUNDRED":
                    unit = 100;
                    count = parseInt(money / 100, 10);
                    break;
            }
            return {
                name: name,
                count: count,
                price: money,
                unit: unit
            }
        })

        this.totalCash = parseFloat(totalCash, 10);
        return this
    }
    changeDue(cash, price) {
        if (cash < price) {
            alert("Customer does not have enough money to purchase the item")
            return;
        }
        if (cash === price) {
            changeDueDiv.textContent = "No change due - customer paid with exact cash"
            return;
        }
        const targetCash = parseFloat((cash - price).toFixed(2));

        const list = this.changeDueHelp(targetCash);
        if (list) {
            changeDueDiv.textContent = `Status: ${targetCash === this.totalCash ? "CLOSED" : "OPEN"}`;

            list.forEach(({ name, count, unit }) => {
                changeDueDiv.textContent += ` ${name}: $${count * unit}`
            })

        } else {
            changeDueDiv.textContent = "Status: INSUFFICIENT_FUNDS"
        }

    }

    changeDueHelp(money) {
        let arr = [];
        for (let i = this.cid.length - 1; i >= 0; i--) {
            if (money >= this.cid[i].unit && this.cid[i].count) {
                let needCount = Math.floor(money / this.cid[i].unit);
                let actualCount = needCount > this.cid[i].count ? this.cid[i].count : needCount;
                arr.push({
                    name: this.cid[i].name,
                    unit: this.cid[i].unit,
                    count: actualCount
                })
                money = parseFloat((money - this.cid[i].unit * actualCount).toFixed(2))
            }
        }

        return money > 0 ? null : arr
    }

}

const cashRegister = new CashRegister();

purchaseBtn.addEventListener("click", () => {
    cash = parseFloat(cashInput.value)
    if (cash !== NaN) {
        cashRegister.init(cid).changeDue(cash, price);
    }
})


/*
const unitMap = {
  "PENNY": 0.01,
  "NICKEL": 0.05,
  "DIME": 0.1,
  "QUARTER": 0.25,
  "ONE": 1,
  "FIVE": 5,
  "TEN": 10,
  "TWENTY": 20,
  "ONE HUNDRED": 100,
}

function checkCashRegister(price, cash, cid) {
  const totalCash = parseFloat(cid.reduce((total, item) => total += item[1], 0).toFixed(2));
  const returnCash = parseFloat((cash - price).toFixed(2));
  if (totalCash < returnCash) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCash === returnCash) {
    return { status: "CLOSED", change: cid };
  } else {
    const computed = computeReturn(returnCash, cid);
    return { status: computed.length ? "OPEN" : "INSUFFICIENT_FUNDS", change: computed };
  }
}

function computeReturn(cash, cid) {
  let arr = [];
  for (let i = cid.length - 1; i >= 0; i--) {
    const unit = unitMap[cid[i][0]];
    if (cash >= unit && cid[i][1]) {
      const needCount = Math.floor(cash / unit);
      const actualCash = needCount * unit > cid[i][1] ? cid[i][1] : needCount * unit;
      arr.push([cid[i][0], actualCash]);
      cash = parseFloat((cash - actualCash).toFixed(2));
    }
  }
  return cash > 0 ? [] : arr;

}

const res = checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(res)
 */