//laboratoio 6
///P. Ligia Tapia Arce
///resolucion
type Product = {
    id: number;
    description: string;
    price: number;
};

let products: Product[] = [
    { id: 1, description: 'Smartphone', price: 200 },
    { id: 2, description: 'Laptop', price: 1000 },
    { id: 3, description: 'Mouse', price: 30 },
    { id: 4, description: 'Keyboard', price: 50 },
    { id: 5, description: 'Headphones', price: 45 },
];

let Price= [10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000];

function isEven(n: number): boolean {
    return n % 2 === 0;
}

let EvenPrice = evenPrice.filter(isEven);
console.log(EvenPrice); 


let price = [10,20,30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000];

let evenPrice= price.filter(n => n % 2 === 0);
console.log(evenPrice); 

let expensiveProducts = [];
for (let product of products) {
    if (product.price > 50) {
        expensiveProducts.push(product);
    }
}

let offerLabels = [];
for (let product of expensiveProducts) {
    offerLabels.push(`¡Oferta especial! ${product.description} por solo $${product.price}`);
}

offerLabels.sort();

console.log(offerLabels);
