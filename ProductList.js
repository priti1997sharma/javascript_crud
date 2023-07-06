var text = '<tr><th>Product id</th><th>Description</th><th>Price</th><th>Rating</th><th>Discount Percentage</th></tr>';
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((b) => {
    console.log(b.products[0]);
     for(i=0; i<b.products.length; i++){
        //console.log(b.products[i]);
       text += '  <tr>'+
        '<td>'+b.products[i].id +' '+ b.products[i].title+'</td>'+
        '<td>' +b.products[i].description +'</td>'+
        '<td>'+b.products[i].price + '</td>'+
        '<td>' +b.products[i].rating + '</td>'+
        '<td>' +b.products[i].discountPercentage + '</td>'+
      '</tr>';

      

      console.log(text);
     }

     document.getElementById("Products_Table").innerHTML = (text);

}
    
    );