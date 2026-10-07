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
                let totalCost = inventory[i].price * quantity;
                console.log("\nBought " + quantity + " " + name + "(s) for $" + totalCost);
            } else {
                console.log("\nNot enough stock for " + name);
            }
            return;
        }
    }
}

function restockProduct(name, quantity) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === name) {
            inventory[i].stock += quantity;
            console.log("\nRestocked " + quantity + " " + name + "(s)");
            return;
        }
    }
}

function displayInventory() {
    let totalValue = 0;

    console.log("--- STORE INVENTORY ---");
    for (let i = 0; i < inventory.length; i++) {
        let p = inventory[i];
        let itemTotal = p.price * p.stock;
        totalValue += itemTotal;
        console.log(p.name + " - $" + p.price + " [Stock: " + p.stock + "]");
    }

    console.log("Total Inventory Value: $" + totalValue);
}

addProduct("Laptop", 800, 5);
addProduct("Mouse", 20, 10);

displayInventory();

buyProduct("Mouse", 3);

restockProduct("Laptop", 2);

displayInventory();