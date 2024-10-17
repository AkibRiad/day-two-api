const numbers = [10,50,23,54,67];

const result = numbers.reduce((previous, current) => previous + current, 0);
// console.log(result);



const products = [
    {
        id:1123,
        name:'akib',
        occupation:'student'
    },
    {
        id:1125,
        name:'jahid',
        occupation:'studentssss'
    }
]


const name = products.map(product => product.name)
// console.log(name)
products.forEach(product => console.log(product.id))
// const occupa = products.find(product => product.occupation)
// const name = products.map(product => product.name)
// console.log(occupa)
// console.log(idS)