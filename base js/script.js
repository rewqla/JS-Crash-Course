function Task1() {
    let year = prompt("Enter your birth year");
    alert("Your age is " + (2023 - year));
}
// Task1()

function Task2() {
    let radius = prompt("Enter radius of a circle");
    alert("Area of a circle is " + (radius * radius) + "π");
}
// Task2()

function Task3() {
    let distance = prompt("Enter distance in km between two cities");
    let time = prompt("Enter amount of time in hours");
    alert("The speed is " + (distance / time) + " km/hours");
}
// Task3()

function Task4() {
    const currencyRate = 0.85;
    let dollars = prompt("Enter the dollar amount:");
    let euros = dollars * currencyRate;
    alert(`${dollars}$ = ${euros}€`);
}
// Task4()

function Task5() {
    const file_size = 820;
    const gb_to_mb = 1024;

    let gb_capacity = prompt('Enter the capacity of a flash drive in GB');

    let files_count = Math.floor((gb_capacity * gb_to_mb) / file_size);

    alert(`${files_count} files of size 820 MB can be saved on the flash drive`);
}
// Task5()