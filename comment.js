var text = '<tr><th>id</th><th>body</th><th>postId</th><th>id</th><th>username</th></tr>';

fetch('https://dummyjson.com/comments')
.then(res => {
    return res.json()
})
.then((p) => {
    console.log(p.comments[0]);
     for(i=0; i<p.comments.length; i++){
        //console.log(p.comments[i]);
       text += '  <tr>'+
        '<td>'+p.comments[i].id +'</td>'+
        '<td>' +p.comments[i].body +'</td>'+
        '<td>'+p.comments[i].postId + '</td>'+
        '<td>'+p.comments[i].user.id + '</td>'+
        '<td>'+p.comments[i].user.username + '</td>'+
        // '<td> <a href="productsDetail.html?id='+ p.comments[i].id + '"> Detail</a></td>'+
      '</tr>';

      

      console.log(text);
     }

     document.getElementById("Comments_Table").innerHTML = (text);

}
    
    );

    