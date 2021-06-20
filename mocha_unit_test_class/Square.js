class Square {

    constructor(a,b,h){
        this.a = this.generateA(a);
        this.b = this.generateB(b);
        this.h = this.generateH(h);
    }

    generateA(max) {
        return Math.ceil(Math.random() * max + 1);
    }

    generateB(max) {
        return Math.ceil(Math.random() * max + 2);
    }

    generateH(max) {
        return Math.ceil(Math.random() * max + 6);
    }

    calcuateVolume() {
        return this.a * this.b * this.h;
    }

    getA () { return this.a };
    getB () { return this.b };
    getH () { return this.h };

}

module.exports = Square;