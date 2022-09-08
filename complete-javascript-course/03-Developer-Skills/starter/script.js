// Remember, we're gonna use strict mode in all scripts now!
// 'use strict';

// const x = '23';

// console.log('');

// console.log('test');

// const calcTempAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// console.log(calcTempAmplitudeBug([1, 2], [2, 3]));

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (my_list) {
  let string = '';
  for (let index = 0; index < my_list.length; index++) {
    string += `... ${my_list[index]}C in ${index + 1} days`;
    // list_string.push(my_string);
  }
  return string;
};
console.log(printForecast(data1));
console.log(printForecast(data2));
