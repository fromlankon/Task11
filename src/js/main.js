// Task 1

// let body = document.querySelector('body');

// if(confirm("Change background color to black?")){
//     body.style.backgroundColor = 'black'
// } else{
//     body.style.backgroundColor = 'white'
// };


// Task 2

// let userAge = prompt("Yaşınızı daxil edin");

// if(userAge >= 18){
//     alert("Qeydiyyat uğurla tamamlandı.");
// } else{
//     alert("Yaşınız 18-dən azdır.")
// };


// Task 3

class User {
    constructor(name, surname, password){
        this.name = name;
        this.surname = surname;
        this.password = password;
    }
    getFullName(){
        return `Hi, my name is ${this.name} ${this.surname} :)`;
    }    
}

const user = new User("Rafail", "Abbasov", "12345678");

document.body.innerHTML += user.getFullName().toUpperCase();

