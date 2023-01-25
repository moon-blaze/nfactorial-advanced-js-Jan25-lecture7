// Задержка на промисах

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
  
//   delay(3000).then(() => alert('выполнилось через 3 секунды'));


// Можно ли "перевыполнить" промис?

// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
//     setTimeout(() => resolve(2), 1000);
// });
// promise.then(alert);  
// нет, нельзя перевыполнить. в алерте выйдет 1.


// Промисы: сравните then и catch

// promise.then(f1).catch(f2);
// promise.then(f1, f2);

// нет, then and catch - не эквивалентны.