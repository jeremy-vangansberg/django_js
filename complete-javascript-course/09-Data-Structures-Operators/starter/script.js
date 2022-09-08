'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// // const arr = [1, 2, 3];

// // let [x, , z] = arr;

// // console.log(x, z);

// // [x, z] = [z, x];

// // const nested = [2, 4, [5, 6]];

// // let [i, , b] = nested;

// // let [j, , [a, g]] = nested;

// // let [q = 1, w = 1, e = 1] = [1, 2];

// // console.log(q, w, e);

// // const { name: newName } = restaurant;

// // console.log(newName);

// // const arr1 = ['carbo', 'bolo'];
// // const arr2 = ['pizza', 'arrabiata'];

// // const newArr = [...arr1, ...arr2];

// // console.log(newArr);

// // const newRestaurant = { ...restaurant };

// // // console.log(newRestaurant);

// // restaurant.location = 'la madeleine';

// // console.log(restaurant.location);
// // console.log(newRestaurant.location);

// // const add = function (...numbers) {
// //   let sum = 0;
// //   for (let i = 0; i < numbers.length; i++) {
// //     sum += numbers[i];
// //   }
// //   return sum;
// // };

// // // console.log(add(1, 2, 6, 7, 8));

// // const arr1 = [1, 2, 3];

// // console.log(add(...arr1));

// // ------

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// for (const [i, x] of game.scored.entries()) {
//   console.log(`Goal ${i + 1} : ${x}`);
// }

// const odds = Object.entries(game.odds);

// let sum = 0;
// for (const [k, v] of odds) {
//   sum += v;
// }
// console.log(sum / odds.length);

// for (const [k, v] of odds) {
//   console.log(
//     `Odd of ${k === 'x' ? 'draw' : 'victory'} ${k === 'x' ? '' : game[k]}: ${v}`
//   );
// }

// const scored = Object.values(game.scored);
// console.log(scored);

// const scorers = {};

// const scorersFun = function () {
//   for (const k of scored) {
//     console.log(k);
//     if (!scorers[k]) {
//       scorers[k] = 1;
//     } else {
//       scorers[k] += 1;
//     }
//   }
// };

// scorersFun();

// console.log(scorers);

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// console.log(gameEvents.values());

// const events = [...new Set(gameEvents.values())];

// gameEvents.delete(64);

// const avg = 90 / gameEvents.size;

// console.log(`An event happened, on average, every ${avg} minutes`);

// for (const [k, v] of gameEvents) {
//   let scoreTime = k < 46 ? '[First half]' : '[Second half]';
//   console.log(`${scoreTime} ${k}: ${v}`);
// // }

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// /*

// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
// */

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const myArr = text.split('\n');
//   for (let [i, s] of myArr.entries()) {
//     s = s.toLowerCase().trim();
//     s = s.split('_');
//     s = s[0] + s[1][0].toUpperCase() + s[1].slice(1);
//     s = s + ' ' + '☑️'.repeat(i + 1);
//     console.log(s);
//   }
// });

// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // 🔴 Delayed Departure from FAO to TXL (11h25)
// //              Arrival from BRU to FAO (11h45)
// //   🔴 Delayed Arrival from HEL to FAO (12h05)
// //            Departure from FAO to LIS (12h30)

const greet = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

greet('hello')('you');

const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

console.log(addTax(5)(1));
