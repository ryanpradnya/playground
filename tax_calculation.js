let taxData = [
    {
        minAmount: 1,
        maxAmount: 30000000,
        percentage: 0.05
    },
    {
        minAmount: 30000001,
        maxAmount: 100000000,
        percentage: 0.1
    },
    {
        minAmount: 100000001,
        maxAmount: 300000000,
        percentage: 0.2
    },
    {
        minAmount: 300000001,
        percentage: 0.4
    }
]

let taxData1 = [
    {
        minAmount: 1,
        maxAmount: 30000000,
        percentage: 0.05
    }
]

function dynamicTax(annualSalary, taxData) {
    console.log('=========');
    let tax = 0;
    let different;
    for (let i = 0; i < taxData.length; i++) {
        if (taxData[i + 1]) {
            different = taxData[i + 1].minAmount - taxData[i].minAmount
        } else {
            different = taxData[i].minAmount;
        }
        if (annualSalary > different) {
            tax = tax + (different * taxData[i].percentage);
            annualSalary = annualSalary - different;
        } else if (annualSalary > 0 && annualSalary <= different) {
            tax = tax + (annualSalary * taxData[i].percentage);
            break;
        } else {
            break;
        }
        console.log('Process #' + i);
        console.log('tax: ', tax);
        console.log('annualSalary: ', annualSalary);


    }

    return tax;
}

console.log('taxToPay 1: ', dynamicTax(20000000, taxData));
console.log('taxToPay 2: ', dynamicTax(40000000, taxData));
console.log('taxToPay 3: ', dynamicTax(140000000, taxData));
console.log('taxToPay 4: ', dynamicTax(330000000, taxData));

console.log('taxToPay 5: ', dynamicTax(30000000, taxData));
console.log('taxToPay 6: ', dynamicTax(100000000, taxData));
console.log('taxToPay 7: ', dynamicTax(300000000, taxData));