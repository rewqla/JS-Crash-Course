function Task1() {
    let arr = [];

    //1 and 2
    for (let i = 0; i < 20; i++) {
        arr[i] = Math.floor(Math.random() * 101);
        console.log(`${i + 1} - ${arr[i]}`)
    }

    //3
    arr.sort((a, b) => b - a);

    //5
    let multipleOFSeven = arr.filter(element => element % 7 == 0);
    console.log("Does the array contain an element that is a multiple of 7?");
    (multipleOFSeven.length > 0) ? console.log("Yes, they arr: " + multipleOFSeven) : console.log("No");

    //6
    arr.splice(0, 3);

    //7
    console.log("Count of even elements in array: " + arr.filter(element => element % 2 == 0).length)

    //8
    let valuesBefore = [];
    let containDuplicates = false;
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        console.log(i)
        if (valuesBefore.indexOf(value) !== -1) {
            containDuplicates = true;
            break;
        }
        valuesBefore.push(value);
    }
    (containDuplicates) ? console.log("The array has duplicates") : console.log("The array hasn't duplicates");

    //4
    arr.fill(0, 10)
}
// Task1();



function Task2() {
    //1
    let str = prompt("Enter a string");
    console.log("Number of spaces in string is " + str.split(" ").length - 1)

    //2 
    console.log("Your changed string is " + firstToUpper(str));

    //3
    console.log("Number of words is " + str.split(" ").length);

    //4
    let phrase = prompt("Enter phrase");
    console.log("Your abbreviation: " + convertToAbbreviation(phrase));

    5
    let palindrome = prompt("Enter a string");
    (palindrome == palindrome.split("").reverse().join("")) ? console.log("Your string is palindrome") : console.log("Your string isn't palindrome");

    6
    let url=prompt("Enter a url");
    // let url = "https://career.softserveinc.com/uk-ua/technology/course";
    console.log("Protocol: " + url.substring(0, url.indexOf("://")))
    url = url.substring(url.indexOf("://") + 3)
    console.log("Domain: " + url.substring(0, url.indexOf("/")))
    url = url.substring(url.indexOf("/")+1);
    console.log("Path: "+url)

}
Task2();

function firstToUpper(str) {
    return str[0].toUpperCase() + str.substr(1);
}

function convertToAbbreviation(phrase) {
    return phrase.split(" ").map(word => word[0].toUpperCase()).join("");
}