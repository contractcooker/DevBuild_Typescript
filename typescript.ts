interface Mountain {
    name:string;
    height:number;
}

let k:Mountain = {
    name:"Kilimanjaro",
    height:19341,
}
let e:Mountain = {
    name:"Everest",
    height:29029,
}
let d:Mountain = {
    name:"Denali",
    height:20310,
}

let mountains:Mountain[] = [k,e,d]

function findNameOfTallestMountain(mountains:Mountain[]):void{
    let maxheight = 0;
    let result = '';
    for (let m of mountains){
        if (m.height > maxheight){
            maxheight = m.height
            result = m.name
        }
    }
    console.log(result);
}

findNameOfTallestMountain(mountains);

interface Product {
    name:string;
    price:number;
}
let prod1:Product = {
    name:"motor",
    price:10.00,
}
let prod2:Product = {
    name:"sensor",
    price:12.50,
}
let prod3:Product = {
    name:"LED",
    price:1.00,
}

let products:Product[] = [prod1, prod2, prod3]

function calcAverageProductPrice(products:Product[]):void{
    let sum = 0;
    for (let p of products){
        sum += p.price;
    }
    let average:number = sum/products.length;    
    console.log(average);
}
calcAverageProductPrice(products);

interface InventoryItem {
    product:Product;
    quantity:number;
}
let inv1:InventoryItem = {
    product:prod1,
    quantity:10,
}
let inv2:InventoryItem = {
    product:prod2,
    quantity:4,
}
let inv3:InventoryItem = {
    product:prod3,
    quantity:20,
}

let inventory:InventoryItem[] = [inv1, inv2, inv3]

function calcInventoryValue(inventory:InventoryItem[]):void{
    let sum = 0;
    for(let i of inventory){
        sum += (i.product.price * i.quantity)
    }
    console.log(sum);
}
calcInventoryValue(inventory);

