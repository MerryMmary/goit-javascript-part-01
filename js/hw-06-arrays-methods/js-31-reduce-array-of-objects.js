/*
Метод reduce() и массив объектов

При работе с массивом объектов выполняется редуцирование по значению какого-то свойства. Например, 
есть массив студентов с баллами за тест. Необходимо получить средний бал.

const students = [
  { name: 'Манго', score: 83 },
  { name: 'Поли', score: 59 },
  { name: 'Аякс', score: 37 },
  { name: 'Киви', score: 94 },
  { name: 'Хьюстон', score: 64 },
];

// Название аккумулятора может быть произвольным, это просто параметр функции
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

Задание
Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, 
и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его 
время (свойство playtime) на количество игр (свойство gamesPlayed).
*/

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//     return (player.playtime + acc) / players.reduce((gamesQuantity, player) => player.gamesPlayed+gamesQuantity, 0);
// }, 0);

const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
    return player.playtime / player.gamesPlayed + acc;
    
    //return (player.playtime + acc) / players.reduce((gamesQuantity, player) => player.gamesPlayed + gamesQuantity, 0);
}, 0);

console.log('31- totalAveragePlaytimePerGame', totalAveragePlaytimePerGame);

