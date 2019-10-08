class GuessingGame {
    constructor() {
        let a;
        let b;
        let mid_number;
    }


    setRange(min, max) {
        this.a = min;
        this.b = max;
    }

    guess() {
        this.mid_number = Math.ceil((this.a+this.b)/2);
        return this.mid_number;
    }

    lower() {
        this.setRange(this.a, this.mid_number);
    }

    greater() {
        this.setRange(this.mid_number, this.b);
    }
}

module.exports = GuessingGame;
