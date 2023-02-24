// optional chaining

const user = {
    firstName: "john",
    address: {houseNumber: '1234'}
}

console.log(user.firstName);
console.log(user?.address?.houseNumber);