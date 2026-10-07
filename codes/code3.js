class Product {
    constructor(name, price, stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
}

const inventory = [];

function addProduct(name, price, stock) {
    inventory.push(new Product(name, price, stock));
}

function buyProduct(name, quantity) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === name) {
            if (inventory[i].stock >= quantity) {
                inventory[i].stock -= quantity;
                console.log("\nBought " + quantity + " " + name + "(s)");
            } else {
                console.log("\nNot enough stock for " + name);
            }
            return;
        }
    }
}

function displayInventory() {
    console.log("--- STORE INVENTORY ---");
    for (let i = 0; i < inventory.length; i++) {
        let p = inventory[i];
        console.log(p.name + " - $" + p.price + " [Stock: " + p.stock + "]");
    }
}

addProduct("Laptop", 800, 5);
addProduct("Mouse", 20, 10);

displayInventory();

buyProduct("Mouse", 3);
buyProduct("Laptop", 6);

displayInventory();