// reduce method

const userChart = [
    {productId: 1, productName: "mobile", price: 1200}, 
    {productId: 1, productName: "laptop", price: 2200}, 
    {productId: 1, productName: "mobile", price: 1500}, 
]

const totalAmount = userChart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price
}, 0)

console.log(totalAmount);

