

fetch('http://127.0.0.1:8080/header.html')
.then(res => res.text())
.then(res => document.getElementById("header-bar").innerHTML = res)



function getCommentDetail(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const url = 'https://dummyjson.com/comments/' + id;
    fetch(url)
    .then(res => res.json())
    .then((res) => {
        console.log("Hiiiii");
        console.log(res)   
        const body = res.body;
        const postId = res.postId;
        const UserId = res.user.id;
        document.getElementById("Body").innerHTML = body;
        document.getElementById("PostCode").innerHTML = postId;
        document.getElementById("UserId").innerHTML = UserId;
    })
}

getCommentDetail();