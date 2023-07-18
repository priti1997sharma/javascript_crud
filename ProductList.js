var text = '<tr><th>Product id</th><th>Title</th><th>Description</th><th>Price</th><th>Rating</th><th>Discount Percentage</th><th>Detail</th></tr>';
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((b) => {
    console.log(b.products[0]);
     for(i=0; i<b.products.length; i++){
        //console.log(b.products[i]);
       text += '  <tr>'+
        '<td>'+b.products[i].id +'</td>'+
        '<td>'+b.products[i].title +'</td>'+
        '<td>' +b.products[i].description +'</td>'+
        '<td>'+b.products[i].price + '</td>'+
        '<td>' +b.products[i].rating + '</td>'+
        '<td>' +b.products[i].discountPercentage + '</td>'+
        '<td> <a href="productsDetail.html?id='+ b.products[i].id + '"> Detail</a></td>'+
      '</tr>';

      

      console.log(text);
     }

     document.getElementById("Products_Table").innerHTML = (text);

}
    
    );

    fetch("http://127.0.0.1:8080/header.html")
    .then(res=> res.text())
    .then(res=> {
      console.log("shakti sharma")
      console.log(res);

      document.getElementById("header-bar").innerHTML=res;
    })