'use strict'; 

// let hasDriversLicense = false;
// const passTest= true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('has a driving license');


// function logger() {
//     console.log('using the function')
// }

// logger();
// logger();
// logger();
// logger();

// function fruit_processor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice
// }

// fruit_processor(5, 0)


// const fruitJuice = fruit_processor('ma_pomme', 'mon_orange')

// console.log(fruitJuice)

// Coding challenge #1

// const calcAverage  = (score1, score2, score3) => (score1 + score2 + score3 )/3

// const avgDoplhins = calcAverage(44,23,71);
// const avgKoalas = calcAverage(65,54,49);

// const checkWinner = function(avgDoplhins, avgKoalas) {
//     if (avgDoplhins >= avgKoalas * 2) {
//         console.log(`Dolphins wins (${avgDoplhins} vs. ${avgKoalas}).`)
//     } else if (avgKoalas >= avgDoplhins * 2) {
//         console.log(`Koalas wins (${avgKoalas} vs. ${avgDoplhins}).`)
//     } else {
//         console.log(`No one wins.`)
//     }
// }

// checkWinner(avgDoplhins, avgKoalas)


// const avgDoplhins2 = calcAverage(85,54,41);
// const avgKoalas2 = calcAverage(23,34,27);


// checkWinner(avgDoplhins2, avgKoalas2)

// Coding challenges #2

// function calcTip (billValue) {
//     if (billValue >=50 && billValue <=300) {
//         let tip = 0.15
//         return tip * billValue
//     } else {
//         let tip = 0.2
//         return tip * billValue
//     }}
        





// console.log(calcTip(100))

// const calcTip2 = billValue => billValue >=50 && billValue <=300 ? 0.15 * billValue : 0.2 * billValue

// const bills = new Array(125, 555, 44)

// console.log(calcTip(bills[0]));
// console.log(calcTip(bills[1]));
// console.log(calcTip(bills[2]));

// const tips = [calcTip2(bills[0]), calcTip2(bills[1]), calcTip2(bills[2]),]
// console.log(tips)


// console.log(bills[0] + calcTip(bills[0]));
// console.log(bills[1] + calcTip(bills[1]));
// console.log(bills[2] + calcTip(bills[2]));


// const jeremy = {
//     sex: 'masculin',
//     firstName : 'Jérémy',
//     friends : ['Aymeric', 'Matthieu', 'Aurélien', 'David'],
//     hasDrivingLicense: false,
//     birthYear : 1990,
//     calcAge : function () {
//         this.age = 2037 - this.birthYear
//         return this.age
//     },
//     getSummary : function () {
//         return `${this.firstName} is a ${this.calcAge()} old teacher, and he ${this.hasDrivingLicense ? 'has' : 'has not'} a driving license.`
//     }
// };
// console.log(jeremy)


// console.log(`${jeremy.firstName} has ${jeremy['friends'].length}, and his best friend is called ${jeremy['friends'][0]}.`)

// jeremy.calcAge()

// console.log()

// console.log(jeremy.getSummary())


// const mark = {
//     firstName : 'Mark',
//     weight : 78,
//     height :1.69,
//     calcBMI : function () {
//         this.BMI = this.weight / this.height ** 2
//         return this.BMI
//     }
// }

// console.log(mark.calcBMI())

// const john = {
//     firstName : 'John',
//     weight : 92,
//     height :1.95,
//     calcBMI : function () {
//         this.BMI = this.weight / (this.height ** 2)
//         return this.BMI
//     }
// }


// console.log(`${john.firstName}'s BMI (${john.calcBMI()}) is ${john.calcBMI() > mark.calcBMI() ? 'higher' : 'lower'} than ${mark.firstName} (${mark.calcBMI()})`)


// for (let rep=1; rep<=10; rep ++) {
//     console.log(`Lifting weights repition ${rep}  🏋️`)
// }

// Coding challenge #4

const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52]

function calcTip (billValue) {
    if (billValue >=50 && billValue <=300) {
        let tip = 0.15
        return tip * billValue
    } else {
        let tip = 0.2
        return tip * billValue
    }}

const tips = []
const total = []

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    total[i] = bills[i] + tips[i];
}

console.log(tips, total)



const calAverage = function(my_list) {
    let total = 0;
    for (let i=0; i < my_list.length; i++) {
        total += my_list[i]
    }
    return total / my_list.length
}

console.log(calAverage(tips))