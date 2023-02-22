// some method

const userCart = [
    {productId: 1, productName: "mobile", price: 1200},
    {productId: 2, productName: "laptop", price: 2200},
    {productId: 3, productName: "tv", price: 30000},
    {productId: 4, productName: "tv", price: 250000},
];

const ans = userCart.some((cartItem)=>cartItem.price > 10000);
console.log(ans);