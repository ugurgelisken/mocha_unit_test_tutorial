const assert = require("chai").assert;

let Square = require('../Square');


describe("Square", function () {

  let square;

  beforeEach(() => {
    square = new Square(1, 2, 15);
  });

  describe("Minimum değer kontrolleri :", function () {

    it("A minimum geçerli değerini kontrol et", function () {
      assert.isAbove(square.getA(), 1, "A uzunluğu 1'den büyük.");
    });

    it("B minimum geçerli değerini kontrol et", function () {
      assert.isAbove(square.getB(), 2, "A uzunluğu 2'den büyük.");
    });

    it("H minimum geçerli değerini kontrol et", function () {
      assert.isAbove(square.getH(), 6, "A uzunluğu 6'den büyük.");
    });

   });

   describe("Hacim hesabı:", function () {

    it("Hacim 12 metre küpten büyük olmalı", function () {
      assert.isAbove(square.calcuateVolume(), 12, "Hacim hesabı geçerli");
    });

    it("Hacim (1*1)*(2*2)*(15*6) metre küpten küçük olmalı", function () {
      assert.isBelow(square.calcuateVolume(), 360, "Hacim hesabı geçerli");
    });


    it("Hacim yapan fonksiyon var mı", function () {
      assert.exists(square.calcuateVolume(), "Hacim hesabı yapılabilir");
    });

    it("Hacim değeri sayı olmalı", function () {
      assert.typeOf(square.calcuateVolume(), "number", "Hacim hesabı geçerli");
    });

   });


  after(() => console.log("=> Testler bitti."));


});
