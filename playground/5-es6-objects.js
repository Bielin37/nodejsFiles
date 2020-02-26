//Object property shotrhand

const name = 'Adrian';
const userAge = '28';

const user = {
    name,
    age: userAge,
    location: 'Berlin'
}

console.log(user)

//Object desctructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 210,
    salePrice: undefined,
    rating: 4.2
}

/* const label = product.label;
const stock = product.stock; 
console.log(label, stock) */

/* const {label: productLabel, stock, rating = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating) */

const transaction = (type, { label, stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)