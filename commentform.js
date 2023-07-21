

console.log("hello");
fetch('http://127.0.0.1:8080/header.html')
.then(res => res.text())
.then(res => document.getElementById("header-bar").innerHTML = res)

console.log("cool1")

// function createComment(event){
//     // alert("hi")
//     // event.preventDefault();
//     console.log("create comment is called");
// }


const createComment = document.getElementById("creteCommentForm");
createComment.addEventListener("submit",(event) =>{
    event.preventDefault();
    const body = document.getElementById("Body").value;
    const UserId = document.getElementById("UserId").value;
    const postCode = document.getElementById("postCode").value;
      //  add javascript validation
      // check the empty of the body, post id and user id
    if(body == ''){
          alert("Message can not be empty")
          return ;
    }
    if(UserId == ''){
      alert("UserId can not be empty")
      return ;
    }
    if(postCode == ''){
      alert("postCode can not be empty")
      return ;
    }
  
    console.log({body, postCode, UserId});
    
    // TODO check the special character of in the body.

    // TODO hit the POST API to create comment

    // TODO GO TO the comment list    

    submitComment(body, UserId, postCode);
});


function submitComment(body, UserId, postId){
    fetch('https://dummyjson.com/comments/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    body: body,
    postId: postId,
    userId: UserId,
  })
})
.then(res => res.json())
.finally((res) => {

  window.location.href = "http://127.0.0.1:8080/CommentDetail.html?id" + res.id ;

});
            
}