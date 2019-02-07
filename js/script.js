function Phone(brand, price, color) {
   this.brand = brand;
   this.price = price;
   this.color = color;
}

Phone.prototype.printInfo = function(){
console.log('Ten telefon jest marki '+ this.brand + ' kolor jego to ' + this.color + ' cena jego to ' + this.price + ".");
}

var iphone6S = new Phone ('Apple','2250','black');

iphone6S.printInfo()

var samsungS6 = new Phone ('Samsung','1500','silver');

samsungS6.printInfo()

var OnePlusOne = new Phone ('One Plus', '2000' , 'gold');

OnePlusOne.printInfo(

)
    