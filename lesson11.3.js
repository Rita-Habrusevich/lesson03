class Sweet {
    constructor(weight, qty, sugar, price) {
        this.weight = weight;
        this.qty = qty;
        this.sugar = false;
        this.price = price;
    }
    addName(name) {
        this.name = name;
        return this;
    }
    addQty(qty) {
        this.qty = qty;
        return this;
    }

    addWeight(weight) {
        this.weight = weight;
        return this;
    }

    addSugar(sugar) {
        this.sugar = sugar;
        return this;
    }

    addPrice(price) {
        this.price = price;
        return this;
    }

    build() {
        return this;
    }
}

class CandyBuilder extends Sweet{
    addType(type) {
        this.type = type;
        return this;
    }
}

class BarBuilder extends Sweet{
    addKcal(kcal) {
        this.kcal = kcal;
        return this;
    }
}

class ChocolateBuilder extends Sweet{
    addKindOfChocolate(kind) {
        this.kind = kind;
        return this;
    }
}

class Gift {
    constructor() {
        this.candyAlenka = new CandyBuilder().addName('Alenka').addQty(20).addWeight(25).addSugar(false).addPrice(3).addType('chocolate').build();
        this.candyKomunarka = new CandyBuilder().addName('Komunarka').addQty(15).addWeight(50).addSugar(false).addPrice(2).addType('wafer').build();
        this.candyBarbaris = new CandyBuilder().addName('Barbaris').addQty(10).addWeight(50).addSugar(true).addPrice(1).addType('caramel').build();
        this.barSnikers = new BarBuilder().addName('Snikers').addQty(2).addWeight(100).addSugar(true).addPrice(10).addKcal(500).build();
        this.barTwix = new BarBuilder().addName('Twix').addQty(2).addWeight(75).addSugar(true).addPrice(10).addKcal(400).build();
        this.chocolateRitterSport = new ChocolateBuilder().addName('RitterSport').addQty(1).addWeight(150).addSugar(false).addPrice(15).addKindOfChocolate('milk').build();
    }

    getGiftWeight(allSweets) {
        let totalGiftWeight = 0;
        allSweets.forEach((sweet) => {
            totalGiftWeight += sweet.weight * sweet.qty
        });
        return totalGiftWeight;
    }

    getSweetByParameters(allSweets, sugarParam, priceMin, priceMax){
        let allSweetsByParameters =[];
        allSweets.forEach((sweet) => {
            if(sweet.sugar === sugarParam && sweet.price >= priceMin && sweet.price <= priceMax) {
                allSweetsByParameters.push(sweet.name)
            }
        });
        return allSweetsByParameters;
    }

    getSortByParameter(allSweets, sortKey){
        return allSweets.sort(((a, b) => a[sortKey] - b[sortKey]));
    }
}

let GiftObj = new Gift();

let allSweets = [
    GiftObj.candyAlenka,
    GiftObj.candyKomunarka,
    GiftObj.candyBarbaris,
    GiftObj.barSnikers,
    GiftObj.barTwix,
    GiftObj.chocolateRitterSport
];

console.log(GiftObj.getGiftWeight(allSweets));
console.log(GiftObj.getSweetByParameters(allSweets, false, 1, 50));
console.log(GiftObj.getSortByParameter(allSweets, 'price'));