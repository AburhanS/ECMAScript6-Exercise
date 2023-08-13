/* //Exercise 1

class User{
    constructor(name, age, isAdmin){
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin || false;
    }
}

let userOne = new User("John", 30)

console.log(userOne); */



/* // Exercise 2

let earth
let user */



/* // Exercise 3

let phrase = "Hello"

if (true) {
    let user = "John";
    function sayHi() {
        alert(`${phrase}, ${user}`)
    }
}

sayHi() //The output should be an error but instead it is "Hello, John" because the default value is true so "if" works and in non-strict mode let variable and the functions can be moved to global scope which lets the whole alert work. */



/* // Exercise 4

let user = {}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user); */



/* // Exercise 5

const user = {
    name: "John"
}

  // does it work?
user.name = "Pete"

console.log(user); // It works because the we are not setting user to John, we are setting another variable inside user to John. So if it was 'const user = "John"' we wouldn't be able to change it as shown below

const user1 = "John"

user1 = "Pete"

console.log(user1); */



/* // Exercise 6

let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
}

let sumSalary = 0;
for (salary in salaries){
    sumSalary += salaries[salary];
}

console.log(sumSalary); */



/* // Exercise 7

let a = 2
let b = 2

a + b < 4 ? result = "Below" : result = "Over";

console.log(result); */



/* // Exercise 8

let login = "Director";
let message;

login == "Employee" ? message = "Hello" : login == "Director" ? message = "Greetings" : login == "" ? message = "No login" : message = "";

console.log(message); */