// 1. Получить средний возраст пользователей.
// 2. Отсортировать массив по возрасту от большего к меньшему.
// 3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли
// пользователь соотвествуещего возраста.
// Например, есть ли пользователь, которому 22 года? Ответ должен быть: true
// const users = [
//  {
//  id: 1,
//  username: "Michael Lawson",
//  age: 22,
//  },
//  {
//  id: 2,
//  username: "Tom Spot",
//  age: 32,
//  },
//  {
//  id: 3,
//  username: "Kate Ford",
//  age: 18,
//  }
// ]

const users = [
  {
    id: 1,
    username: "Michael Lawson",
    age: 22,
  },
  {
    id: 2,
    username: "Tom Spot",
    age: 32,
  },
  {
    id: 3,
    username: "Kate Ford",
    age: 18,
  },
];

function middleAge(arr) {
  return arr.reduce((sum, a) => sum + a.age, 0) / arr.length;
}
function sortAge(arr) {
  return arr.sort((a, b) => b.age - a.age);
}
function answerTrueOrFalse(arr, number) {
  let tr = 0;
  let fl = 0;
  arr.forEach((el) => {
    if (el.age == number) {
      tr++;
    } else fl++;
  });
  if (tr > 0) {
    console.log("true");
  } else console.log("false");
}
