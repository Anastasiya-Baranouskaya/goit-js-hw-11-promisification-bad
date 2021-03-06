// task 1
const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(ms), ms);
  });
};

// Вызовы функции для проверки
delay(2000).then((ms) => console.log(`Resolved after ${ms}`)); // Resolved after 2000ms
delay(1000).then((ms) => console.log(`Resolved after ${ms}`)); // Resolved after 1000ms
delay(1500).then((ms) => console.log(`Resolved after ${ms}`)); // Resolved after 1500ms

// =======  task 2  ======
// const users = [
//   { name: "Mango", active: true },
//   { name: "Poly", active: false },
//   { name: "Ajax", active: true },
//   { name: "Lux", active: false },
// ];

// const toggleUserState = (allUsers, userName) => {
//   return new Promise((resolve) => {
//     const updatedUsers = allUsers.map((user) =>
//       user.name === userName ? { ...user, active: !user.active } : user
//     );
//     resolve(updatedUsers);
//   });
// };

// const toggleUserState = async (allUsers, userName) => {
//   const updatedUsers = allUsers.map((user) =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );

//   return updatedUsers;
// };
// console.log(toggleUserState(users, "Mango"));

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map((user) =>
//     user.name === userName ? { ...user, active: !user.active } : user
//   );

//   return Promise.resolve(updatedUsers);
// };

// const logger = (updatedUsers) => console.table(updatedUsers);

// // /*
// //  * Должно работать так
// //  */
// toggleUserState(users, "Mango").then(logger);
// toggleUserState(users, "Lux").then(logger);

// // === task 3 =====

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const makeTransaction = (transaction) => {
//   const delay = randomIntegerFromInterval(200, 500);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const canProcess = Math.random() > 0.3;

//       if (canProcess) {
//         resolve([transaction.id, delay]);
//       } else {
//         reject(transaction.id);
//       }
//     }, delay);
//   });
// };

// const logSuccess = (arr) => {
//   console.log(arr[0]);
//   console.log(`Transaction ${arr[0]} processed in ${arr[1]}ms`);
// };

// const logError = (id) => {
//   console.warn(`Error processing transaction ${id}. Please try again later.`);
// };

// // // //  * Должно работать так
// // //  */
// makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

// makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

// makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

// makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
