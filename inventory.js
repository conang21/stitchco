// StitchCo. Inventory Data
// Stock by color and size

const inventory = [
    {
        id: 1,
        name: "Vintage Dad Hat",
        category: "hat",
        price: 29.99,
        sizes: ["S", "M", "L"],
        colors: ["black", "brown", "navy"],
        stock: {
            "black": { "S": 3, "M": 5, "L": 4 },
            "brown": { "S": 2, "M": 3, "L": 2 },
            "navy": { "S": 1, "M": 2, "L": 3 }
        },
        emoji: "🧢"
    },
    {
        id: 2,
        name: "Classic Beanie",
        category: "hat",
        price: 24.99,
        sizes: ["One Size"],
        colors: ["black", "gray", "navy"],
        stock: {
            "black": { "One Size": 8 },
            "gray": { "One Size": 7 },
            "navy": { "One Size": 5 }
        },
        emoji: "🎩"
    },
    {
        id: 3,
        name: "Bucket Hat",
        category: "hat",
        price: 34.99,
        sizes: ["S", "M", "L"],
        colors: ["olive", "black"],
        stock: {
            "olive": { "S": 2, "M": 3, "L": 2 },
            "black": { "S": 2, "M": 2, "L": 1 }
        },
        emoji: "🪖"
    },
    {
        id: 4,
        name: "Mountain Tee",
        category: "tshirt",
        price: 34.99,
        sizes: ["S", "M", "L", "XL", "XXL"],
        colors: ["white", "gray"],
        stock: {
            "white": { "S": 3, "M": 4, "L": 3, "XL": 2, "XXL": 3 },
            "gray": { "S": 2, "M": 3, "L": 3, "XL": 2, "XXL": 2 }
        },
        emoji: "🏔️"
    },
    {
        id: 5,
        name: "Eagle Logo Tee",
        category: "tshirt",
        price: 32.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["white", "black"],
        stock: {
            "white": { "S": 3, "M": 3, "L": 2, "XL": 2 },
            "black": { "S": 2, "M": 3, "L": 2, "XL": 3 }
        },
        emoji: "🦅"
    },
    {
        id: 6,
        name: "Wolf Pack Tee",
        category: "tshirt",
        price: 33.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["white", "gray"],
        stock: {
            "white": { "S": 2, "M": 3, "L": 2, "XL": 2 },
            "gray": { "S": 2, "M": 2, "L": 2, "XL": 2 }
        },
        emoji: "🐺"
    },
    {
        id: 7,
        name: "Flame Hoodie",
        category: "hoodie",
        price: 69.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "gray"],
        stock: {
            "black": { "S": 2, "M": 2, "L": 1, "XL": 2 },
            "gray": { "S": 1, "M": 1, "L": 2, "XL": 1 }
        },
        emoji: "🔥"
    },
    {
        id: 8,
        name: "Dragon Hoodie",
        category: "hoodie",
        price: 74.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["black", "red"],
        stock: {
            "black": { "S": 1, "M": 2, "L": 1, "XL": 1 },
            "red": { "S": 1, "M": 1, "L": 1, "XL": 1 }
        },
        emoji: "🐲"
    },
    {
        id: 9,
        name: "Moon Hoodie",
        category: "hoodie",
        price: 64.99,
        sizes: ["S", "M", "L"],
        colors: ["black", "purple"],
        stock: {
            "black": { "S": 2, "M": 2, "L": 2 },
            "purple": { "S": 2, "M": 2, "L": 2 }
        },
        emoji: "🌙"
    },
    {
        id: 10,
        name: "Wave Hoodie",
        category: "hoodie",
        price: 66.99,
        sizes: ["S", "M", "L", "XL"],
        colors: ["blue", "black"],
        stock: {
            "blue": { "S": 2, "M": 3, "L": 2, "XL": 2 },
            "black": { "S": 2, "M": 2, "L": 2, "XL": 1 }
        },
        emoji: "🌊"
    }
];

// Helper functions
function getProductsByCategory(category) {
    return inventory.filter(p => p.category === category);
}

function getProductById(id) {
    return inventory.find(p => p.id === id);
}

function getTotalStock(product) {
    let total = 0;
    for (let color in product.stock) {
        for (let size in product.stock[color]) {
            total += product.stock[color][size];
        }
    }
    return total;
}

function getStockForColor(product, color) {
    if (!product.stock[color]) return 0;
    let total = 0;
    for (let size in product.stock[color]) {
        total += product.stock[color][size];
    }
    return total;
}
