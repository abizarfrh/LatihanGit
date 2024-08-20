// Latihan 1
window.onload = function() {
    document.querySelector('h1').textContent = "Latihan JavaScript Selesai";
};

// Latihan 2
let name = "John";
const age = 30;
document.getElementById('output').innerHTML = `Nama: ${name} <br> Umur: ${age}`;

let fruits = ["Apple", "Banana", "Mango"];
for(let i = 0; i < fruits.length; i++) {
    document.getElementById('output').innerHTML += `<br> Buah: ${fruits[i]}`;
}

let person = {firstName: "John", lastName: "Doe", age: 30};
document.getElementById('output').innerHTML += `<br> Nama Lengkap: ${person.firstName} ${person.lastName}` + '<br>';

// Latihan 3
document.getElementById('checkValue').addEventListener('click', function() {
    // Membaca nilai dari input
    var userInput = document.getElementById('userInput').value;
    var outputDiv = document.getElementById('output');
    var outputHtml = '';

    // Mengkonversi input ke angka
    var number = parseFloat(userInput);

    // Memeriksa nilai input
    if (number > 10) {
        outputHtml += 'Nilai lebih besar dari 10.<br>';
    } else if (number === 10) {
        outputHtml += 'Nilai sama dengan 10.<br>';
    } else {
        outputHtml += 'Nilai kurang dari 10.<br>';
    }

    // Menampilkan angka 1 hingga nilai yang dimasukkan
    for (var i = 1; i <= number; i++) {
        outputHtml += i + '<br>';
    }

    // Menampilkan hasil di div "output"
    outputDiv.innerHTML = outputHtml;
});

// Latihan 4
// Fungsi greet
let greet = function(name) {
    return "Hello, " + name;
}

// Memanggil fungsi greet dan menampilkan hasilnya
var names = ["Caca", "Cici", "Cucu"];
var greetResults = names.map(greet);
document.getElementById('output').innerHTML += '<br>' + greetResults.join('<br>');

// Fungsi calculateSquare
function calculateSquare(number) {
    return number * number;
}

// Memanggil fungsi calculateSquare dan menampilkan hasilnya
var numbers = [2, 4, 6];
var squareResults = numbers.map(calculateSquare);
document.getElementById('output').innerHTML += '<br>' + squareResults.map(num => "Square: " + num).join('<br>');

// Arrow function untuk menjumlahkan dua angka
const add = (a, b) => a + b;

// Memanggil fungsi penjumlahan dan menampilkan hasilnya
var sumResult = add(5, 7);
document.getElementById('output').innerHTML += '<br>Sum: ' + sumResult + '<br><br>';

// Latihan 5
// Array students
let students = ["Alice", "Bob", "Charlie"];

// Menambahkan nama siswa menggunakan push()
students.push("Dasha");

// Menampilkan semua nama siswa menggunakan forEach()
students.forEach(function(student) {
    document.getElementById('output').innerHTML += student + '<br>';
});

// Objek car
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

// Menampilkan properti dari objek car menggunakan for...in loop
for (let key in car) {
    document.getElementById('output').innerHTML += key + ": " + car[key] + '<br>';
}

// Array objek mobil
let cars = [
    {brand: "Toyota", model: "Corolla", year: 2020},
    {brand: "Honda", model: "Civic", year: 2019},
    {brand: "Ford", model: "Mustang", year: 2021}
];

// Menampilkan informasi setiap mobil menggunakan forEach
cars.forEach(function(car) {
    document.getElementById('output').innerHTML += 'Brand: ' + car.brand + ', Model: ' + car.model + ', Year: ' + car.year + '<br>';
});