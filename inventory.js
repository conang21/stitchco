// StitchCo. Inventory Data
// Easy to edit - just change the values

const inventory = [
    {
        id: 1,
        name: "Vintage Dad Hat",
        category: "hat",
        price: 29.99,
        sizes: ["S", "M", "L"],
        colors: ["black", "brown", "navy"],
        stock: 15,
        emoji: "🧢"
    },
    {
        id: 2,
        name: "Classic Beanie",
        category: "hat",
        price: 24.99,
        sizes: ["One Size"],
        colors: ["black", "gray", "navy"],
        stock: 20,
        emoji: "🎩"
    },
    {
        id: 3,
        name: "Bucket Hat",
        category: "hat",
        price: 34.99,
        sizes: ["S", "M", "L"],
        colors: ["olive", "black"],
        stock: 12,
        emoji: "🪖"
    },
    {
        id: 4,
        name: "Mountain Tee",
        category: "tshirt",
        price: 34.99,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["white", "gray"],
        stock: 25,
        emoji: "🏔️"
    },
    {
        id: 5,
        name: "Eagle Logo Tee",
        category: "tshirt",
        price: 32.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["white", "black"],
        stock: 18,
        emoji: "🦅"
    },
    {
        id: 6,
        name: "Wolf Pack Tee",
        category: "tshirt",
        price: 33.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["white", "gray"],
        stock: 15,
        emoji: "🐺"
    },
    {
        id: 7,
        name: "Flame Hoodie",
        category: "hoodie",
        price: 69.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "gray"],
        stock: 10,
        emoji: "🔥"
    },
    {
        id: 8,
        name: "Dragon Hoodie",
        category: "hoodie",
        price: 74.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "red"],
        stock: 8,
        emoji: "🐲"
    },
    {
        id: 9,
        name: "Moon Hoodie",
        category: "hoodie",
        price: 64.99,
        sizes: ["S", "M", "L"],
        colors: ["black", "purple"],
        stock: 12,
        emoji: "🌙"
    },
    {
        id: 10,
        name: "Wave Hoodie",
        category: "hoodie",
        price: 66.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["blue", "black"],
        stock: 14,
        emoji: "🌊"
    }
];

// Functions to use with the website
function getProductsByCategory(category) {
    return inventory.filter(p => p.category === category);
}

function getProductById(id) {
    return inventory.find(p => p.id === id);
}

function getTotalStock() {
    return inventory.reduce((sum, p) => sum + p.stock, 0);
}
