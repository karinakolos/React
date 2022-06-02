//  1. Создать строку из имен пользователей через запятую
//     2. Посчитать общее количнство машин у пользователей
//     3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//     4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//     5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
type Car = "bmw" | "audi";
type User = {
  name: string;
  phone: string;
  email: string;
  animals?: string[];
  cars?: Car[];
  hasChildren: boolean;
  hasEducation: boolean;
};

const users: Array<User> = [
  {
    name: "Harry Felton",
    phone: "(09) 897 33 33",
    email: "felton@gmail.com",
    animals: ["cat"],
    cars: ["bmw"],
    hasChildren: false,
    hasEducation: true,
  },
  {
    name: "May Sender",
    phone: "(09) 117 33 33",
    email: "sender22@gmail.com",
    hasChildren: true,
    hasEducation: true,
  },
  {
    name: "Henry Ford",
    phone: "(09) 999 93 23",
    email: "ford0@gmail.com",
    cars: ["bmw", "audi"],
    hasChildren: true,
    hasEducation: false,
  },
];

function usersName(arr: any[]): string {
  let len: number = arr.length;
  let count: number = 0;
  let str: string = "";
  arr.forEach((el) => {
    str += el.name;
    count++;
    if (count < len) {
      str = str + ", ";
    }
  });
  return str;
}
function carsTotal(arr: any[]): number {
  let count: number = 0;
  let cars: number = 0;
  arr.forEach((el) => {
    if (typeof el["cars"] !== "undefined") {
      count = el.cars.length;
      cars += count;
    }
  });
  return cars;
}
function isEducation(arr: any[]) {
  let pers: any[] = [];
  arr.filter((el) => {
    el.hasEducation == true ? pers.push(el) : null;
    if (typeof el["cars"] !== "undefined") {
      str += el.cars;
      str = str + ", ";
    }
  });
  return str
    .split(" ")
    .join("")
    .replace(/,/g, ", ")
    .substring(0, str.length - 1);
}
