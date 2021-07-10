function isLeapYear() {
    let year = parseInt(prompt("Enter a year:"));

    if (year == null) {
        alert("Invalid. Try again!");
        isLeapYear();
    }

    if (year % 4 != 0) {
        let anotherCheck = confirm(year + " is NOT a leap year. \r\n Do you wanna check another year?");
        if (anotherCheck) {
            isLeapYear()
        } else alert("Ok, Bye!");
    } else if (year % 400 == 0) {
        let anotherCheck = confirm(year + " is a leap year. \r\n Do you wanna check another year?");
        if (anotherCheck) {
            isLeapYear()
        } else alert("Ok, Bye!");
    } else if (year % 100 == 0) {
        let anotherCheck = confirm(year + " is NOT a leap year. \r\n Do you wanna check another year?");
        if (anotherCheck) {
            isLeapYear()
        } else alert("Ok, Bye!");
    } else {
        let anotherCheck = confirm(year + " is a leap year. \r\n Do you wanna check another year?");
        if (anotherCheck) {
            isLeapYear()
        } else alert("Ok, Bye!");
    }
}

isLeapYear();