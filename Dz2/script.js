function Task11() {
    const number = +prompt("Enter number from 0 to 9");

    switch (number) {
        case 0:
            alert("Your charset is )");
            break;
        case 1:
            alert("Your charset is !");
            break;
        case 2:
            alert("Your charset is @");
            break;
        case 3:
            alert("Your charset is #");
            break;
        case 4:
            alert("Your charset is $");
            break;
        case 5:
            alert("Your charset is %");
            break;
        case 6:
            alert("Your charset is ^");
            break;
        case 7:
            alert("Your charset is &");
            break;
        case 8:
            alert("Your charset is *");
            break;
        case 9:
            alert("Your charset is (");
            break;
        default:
            alert("Wrong number!");
            break;
    }
}
// Task11();

function Task12() {
    const year = +prompt("Enter year");

    if (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
        alert(year + " is leap")
    }
    else {
        alert(year + " isn't leap")
    }

    // (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) ? alert(year + " is leap") : alert(year + " isn't leap");
}
// Task12();

function Task13() {
    let day = +prompt("Enter day");
    let month = +prompt("Enter month");
    let year = +prompt("Enter year");

    const isLeap = (year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) ? true : false;
    const daysInMonth = (month == 2) ? (isLeap ? 29 : 28) : (month == 4 || month == 6 || month == 9 || month == 11) ? 30 : 31;

    if (day > daysInMonth) {
        day -= daysInMonth;
        month++;
    }

    if (month > 12) {
        month -= 12;

        year++;
    }

    alert(`Your date is ${day}.${month}.${year}`)
}
// Task13();

function Task21() {
    let start = +prompt("Enter start");
    let end = +prompt("Enter end");

    let sum = 0;
    if (start <= end) {
        for (let i = start; start <= end; start++) {
            sum += i;
        }

        alert("The sum is: " + sum);
    }
    else {
        alert("You entered wrong range!")
    }
}
// Task21();

function Task22() {
    let number = +prompt("Enter number");
    let count = 0;

    while (number != 0) {
        number = Math.floor(number / 10);
        count++;
    }

    alert("Count of digits in number is " + count)
}
// Task22();

function Task23() {
    let positive = 0, negative = 0, zero = 0, even = 0, odd = 0;

    for (let i = 0; i < 10; i++) {
        const number = +prompt(`Enter number #${i + 1}`);

        if (number > 0) {
            positive++;
        }
        else if (number < 0) {
            negative++;
        }
        else {
            zero++;
        }

        if (number % 2 === 0) {
            even++;
        }
        else {
            odd++;
        }
    }

    alert(`Count of:\nPositive numbers ${positive}\nNegative numbers ${negative}\nZero numbers ${zero}\nEven numbers ${even}\nOdd numbers ${odd}`);
}
// Task23();

function Task24() {
    let weekday = 1;
    let nextDay = true;

    while (nextDay) {
        switch (weekday) {
            case 1:
                alert("Your day is Monday}. Do you want to see the next day?");
                break;
            case 2:
                alert("Your day is Tuesday. Do you want to see the next day?");
                break;
            case 3:
                alert("Your day is Wednesday. Do you want to see the next day?");
                break;
            case 4:
                alert("Your day is Thursday. Do you want to see the next day?");
                break;
            case 5:
                alert("Your day is Friday. Do you want to see the next day?");
                break;
            case 6:
                alert("Your day is Saturday. Do you want to see the next day?");
                break;
            case 7:
                alert("Your day is Sunday. Do you want to see the next day?");
                break;
        }

        nextDay = confirm("Chose your next step");
        weekday = (weekday + 1) % 7;
    }
}
Task24();