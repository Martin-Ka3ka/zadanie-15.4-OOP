function Phone(brand, color, size) {
   this.brand = brand;
   this.color = color;
   this.size = size;
   this.price = [];
}

Phone.prototype.printInfo = function () {
   console.log('Ten telefon jest marki ' + this.brand + ' kolor jego to ' + this.color + ' cena jego to ' + this.price + ' rozmiar ekranu ' + this.size);
}
Phone.prototype.addprice = function (brand) {
   this.price.push(brand);
}


var iphone6S = new Phone('Apple', 'black', '4"');

var samsungS6 = new Phone('Samsung', 'silver', '5,6"');

var OnePlusOne = new Phone('One Plus', 'gold', '5"');

iphone6S.addprice('2250');

samsungS6.addprice('1500');

OnePlusOne.addprice('1800');

OnePlusOne.printInfo();

samsungS6.printInfo();

iphone6S.printInfo();