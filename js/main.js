
const data = [
    { title: 'Notebook',id:1,price:2000 +' руб.'},
    { title: 'Keyboard',id:2,price:200 +' руб.'},
    { title: 'Mouse',id:3,price:100 + ' руб.'},
    { title: 'Gamepad',id:4},
    { title: 'Monitor', id:5,price:1000 + ' руб.'},
    { title: 'Web camera', id:6, price:500 + ' руб.'}
];

const renderProduct=(title, id, price='нет в наличии') => `<div class="product-item"> <h3>${title}</h3><img src="pics/img.png" class="product-img"><p id="${id}"> Цена: ${price} </p>
<button class="add">Добавить</button> </div>`;


/*код программы который был выдан
const render = (products) => {
    const productsList= products.map(item=>renderProduct(item.title,item.id,item.price));
    console.log(productsList);
    document.querySelector('.products').innerHTML= productsList;

}*/
// тоже рабочий вариант
/*const render = (products) => {
    for(let i=0;i<products.length;i++){
        const productsList= renderProduct(products[i].title,products[i].id,products[i].price);
        document.querySelector('.products').innerHTML+= productsList;
    }
}*/
// поправленная функция. Запятая выводится  потому что innerHTML  выводит массив как строку и запятая это разделитель по умолчанию.
// я добавила JOIN для объединения строк массива через пробел
const render = (products) => {
    document.querySelector('.products').innerHTML= products.map(item=>renderProduct(item.title,item.id,item.price)).join(' ');

}

render(data);