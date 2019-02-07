function Phone(brand, price, color,size) {
   this.brand = brand;
   this.price = price;
   this.color = color;
   this.size = size;
}

Phone.prototype.printInfo = function(){
console.log('Ten telefon jest marki '+ this.brand + ' kolor jego to ' + this.color + ' cena jego to ' + this.price + ' rozmiar ekranu '+ this.size);
}

var iphone6S = new Phone ('Apple','2250','black','4"');

iphone6S.printInfo()

var samsungS6 = new Phone ('Samsung','1500','silver','5,6"');

samsungS6.printInfo()

var OnePlusOne = new Phone ('One Plus', '2000' , 'gold', '5"');

OnePlusOne.printInfo()




    