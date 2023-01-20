
let age = document.getElementById('age'),
    namem = prompt('Введите имя', 'Oleg'),
    surname = prompt('Введите фамилию', 'Macrby');

function showUser(surname, name) {
    
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age, [surname, namem]);