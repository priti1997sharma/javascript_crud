

console.log("Product Details ");

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log({id_1 : id});

const url = 'https://dummyjson.com/products/' + id ;
console.log({url});
fetch(url)
.then(res => res.json())
.then((response) => {
    console.log(response);
    document.getElementById("product_title").innerHTML = response.title;
    document.getElementById("product_description").innerHTML = response.description;
    document.getElementById("product_price").innerHTML = response.price;
    });

    fetch("http://127.0.0.1:8080/header.html")
    // .then((res) => {
    //     return res.text()
    // })

    .then((res) => res.text())
    .then(res => 
        document.getElementById("header-bar").innerHTML = res);
    