function Phone(brand, price, color) {
   this.brand = brand;
   this.price = price;
   this.color = color;
}

Phone.prototype.printInfo = function(){
console.log('Ten telefon jest marki'+ this.brand + 'kolor jego to' + this.color + 'a cena jego to' + this.price + ".");
}
    