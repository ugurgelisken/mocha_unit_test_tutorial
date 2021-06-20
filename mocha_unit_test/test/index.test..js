const assert = require('chai').assert;
const init = require('../index').init;
const sum = require('../index').sum;
const diff = require('../index').diff;
const divide = require('../index').divide;
const multiple = require('../index').multiple;

describe("Index başlangıç testi", () => {
    it("Program başladı... mesajının gelmesi gerekiyor", () => {
        assert.equal(init(), "Program başladı...");
    });
});

describe("Toplama işlemi testi", () => {
    it("3+5 işlemi sonucu 8 gelmeli", () => {
        assert.equal(sum(3,5), 8);
    });
});

describe("Çıkarma işlemi testi", () => {
    it("8-2 işlemi sonucu 6 gelmeli", () => {
        assert.equal(diff(8,2), 6);
    });
});

describe("Bölme işlemi testi", () => {
    it("8/2 işlemi sonucu 4 gelmeli", () => {
        assert.equal(divide(8,2), 4);
    });
});

describe("Bölme işlemi 0'a bölme testi", () => {
    it("8/0 işlemi sonucu 0 gelmeli", () => {
        assert.equal(divide(8,0), 0);
    });
});


describe("Çarmpa işlemi testi", () => {
    it("8*2 işlemi sonucu Infinity gelmeli", () => {
        assert.equal(multiple(8,2), 16);
    });
});

describe("Çarmpa işlemi 0 testi", () => {
    it("8*0 işlemi sonucu Infinity gelmeli", () => {
        assert.equal(multiple(8,0), 0);
    });
});