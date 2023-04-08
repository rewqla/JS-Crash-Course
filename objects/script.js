function Task1() {
    const time = {
        hours: 0,
        minutes: 0,
        seconds: 0,

        displayTime() {
            document.write(`<p>${this.hours}:${this.minutes}:${this.seconds}</p>`);
        },

        addSecond() {
            if (this.seconds == 59) {
                this.seconds = 0;
                if (this.minutes == 59) {
                    this.minutes = 0;
                    this.hours++;
                }
                else {
                    this.minutes++;
                }
            } else {
                this.seconds++;
            }
        },

        substractSecond() {
            if (this.seconds == 0) {
                this.seconds = 59;
                if (this.minutes == 0) {
                    this.minutes = 59;
                    this.hours--;
                }
                else {
                    this.minutes--;
                }
            } else {
                this.seconds--;
            }
        },

        displayCurrentTime() {
            const currentTime = new Date();
            this.hours = currentTime.getHours();
            this.minutes = currentTime.getMinutes();
            this.seconds = currentTime.getSeconds();
            this.displayTime();
        },
    };

    time.hours = 7;
    time.minutes = 12;
    time.seconds = 2;

    time.displayTime();

    time.addSecond();
    time.displayTime();

    time.substractSecond();
    time.displayTime();

    time.displayCurrentTime();
}
Task1();

function Task2() {
    const car = {
        manufacturer: '',
        model: '',
        year: 0,
        averageSpeed: 0,

        displayInfo() {
            document.write(`<p>Manufacturer: ${this.manufacturer}</p>`);
            document.write(`<p>Model: ${this.model}</p>`);
            document.write(`<p>Year of manufacture: ${this.year}</p>`);
            document.write(`<p>Average speed: ${this.averageSpeed}</p>`);
        },

        calculateTimeToCoverDistance(distance) {
            let hours = distance / this.averageSpeed;
            let breaks = Math.floor(hours / 4);
            hours += breaks;
            let minutes = Math.floor(+(hours + "").split(".")[1] * 60 / 100);
            hours = Math.floor(hours);
            document.write(`<p>The required time  : ${hours} hours ${minutes} minutes</p>`);
        }
    };

    car.manufacturer = 'Ford',
        car.model = 'Escape',
        car.year = 2019,
        car.averageSpeed = 100,

        car.displayInfo();
    car.calculateTimeToCoverDistance(222);
}
Task2();

