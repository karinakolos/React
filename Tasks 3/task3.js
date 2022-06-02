var users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    },
];
function usersName(arr) {
    var len = arr.length;
    var count = 0;
    var str = "";
    arr.forEach(function (el) {
        str += el.name;
        count++;
        if (count < len) {
            str = str + ", ";
        }
    });
    return str;
}
function carsTotal(arr) {
    var count = 0;
    var cars = 0;
    arr.forEach(function (el) {
        if (typeof el["cars"] !== "undefined") {
            count = el.cars.length;
            cars += count;
        }
    });
    return cars;
}
function isEducation(arr) {
    var pers = [];
    arr.filter(function (el) {
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
