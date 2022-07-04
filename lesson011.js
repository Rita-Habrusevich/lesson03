class Sweet {
    constructor(weight, qty, sugar, price) {
        this.weight = weight;
        this.qty = qty;
        this.sugar = false;
        this.price = price;
    }
}

class CandyBuilder {
    constructor() {
        this.candy = new Sweet();
    }

    addName(name) {
        this.candy.name = name;
        return this;
    }

    addQty(qty) {
        this.candy.qty = qty;
        return this;
    }

    addWeight(weight) {
        this.candy.weight = weight;
        return this;
    }

    addSugar(sugar) {
        this.candy.sugar = sugar;
        return this;
    }

    addPrice(price) {
        this.candy.price = price;
        return this;
    }

    build() {
        return this.candy;
    }
}

class BarBuilder {
    constructor() {
        this.bar = new Sweet();
    }

    addName(name) {
        this.bar.name = name;
        return this;
    }

    addQty(qty) {
        this.bar.qty = qty;
        return this;
    }

    addWeight(weight) {
        this.bar.weight = weight;
        return this;
    }

    addSugar(sugar) {
        this.bar.sugar = sugar;
        return this;
    }

    addPrice(price) {
        this.bar.price = price;
        return this;
    }
    addKcal(kcal) {
        this.bar.kcal = kcal;
        return this;
    }
    build() {
        return this.bar;
    }
}

class ChocolateBuilder {
    constructor() {
        this.chocolate = new Sweet();
    }

    addName(name) {
        this.chocolate.name = name;
        return this;
    }

    addQty(qty) {
        this.chocolate.qty = qty;
        return this;
    }

    addWeight(weight) {
        this.chocolate.weight = weight;
        return this;
    }

    addSugar(sugar) {
        this.chocolate.sugar = sugar;
        return this;
    }

    addPrice(price) {
        this.chocolate.price = price;
        return this;
    }
    addKindOfChocolate(kind) {
        this.chocolate.kind = kind;
        return this;
    }

    build() {
        return this.chocolate;
    }
}

class Gift {
    constructor() {
        this.candyAlenka = new CandyBuilder().addName('Alenka').addQty(20).addWeight(25).addSugar(false).addPrice(3).build();
        this.candyKomunarka = new CandyBuilder().addName('Komunarka').addQty(15).addWeight(50).addSugar(false).addPrice(2).build();
        this.candyBarbaris = new CandyBuilder().addName('Barbaris').addQty(10).addWeight(50).addSugar(true).addPrice(1).build();
        this.barSnikers = new BarBuilder().addName('Snikers').addQty(2).addWeight(100).addSugar(true).addPrice(10).addKcal(500).build();
        this.barTwix = new BarBuilder().addName('Twix').addQty(2).addWeight(75).addSugar(true).addPrice(10).addKcal(400).build();
        this.chocolateRitterSport = new ChocolateBuilder().addName('RitterSport').addQty(1).addWeight(150).addSugar(false).addPrice(15).addKindOfChocolate('milk').build();
    }
    getGiftWeight(allSweets) {
        let totalGiftWeight = 0;
        allSweets.forEach((sweet) => {
            totalGiftWeight += sweet.weight * sweet.qty
        });
        return totalGiftWeight
    }

    getSweetByParameters(allSweets, sugarParam, priceMin, priceMax){
        let allSweetsByParameters =[];
        allSweets.forEach((sweet) => {
            if(sweet.sugar === sugarParam && sweet.price >= priceMin && sweet.price <= priceMax) {
                allSweetsByParameters.push(sweet.name)
            }
        });
        return allSweetsByParameters
    }

    getSortByPrice(allSweets){
        return allSweets.sort(((a, b) => a.price - b.price))
    }
    getSortByName(allSweets) {
        let allSweetName =[];
        allSweets.forEach((sweet) => {
            allSweetName.push(sweet.name)
        });
        return allSweetName.sort()
    }
}
let GiftObj = new Gift();

allSweets = [
    GiftObj.candyAlenka,
    GiftObj.candyKomunarka,
    GiftObj.candyBarbaris,
    GiftObj.barSnikers,
    GiftObj.barTwix,
    GiftObj.chocolateRitterSport
];

console.log(GiftObj.getGiftWeight(allSweets));
console.log(GiftObj.getSweetByParameters(allSweets, false, 1, 50));
console.log(GiftObj.getSortByPrice(allSweets));
console.log(GiftObj.getSortByName(allSweets));