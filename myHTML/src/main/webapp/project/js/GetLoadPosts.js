function loadPosts() {
    let posts = localStorage.getItem("posts");
    if (posts) {
        posts = JSON.parse(posts);
        const postTable = document.getElementById("postTable").getElementsByTagName('tbody')[0];
        postTable.innerHTML = ""; 
        posts.forEach(post => {
            let row = postTable.insertRow();
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            cell1.innerHTML = post.user;
            cell2.innerHTML = `<a href="./PostDetail.html?user=${encodeURIComponent(post.user)}">${post.title}</a>`;
            cell3.innerHTML = post.date;
        });
		
    }

}

window.onload = function() {
    loadPosts();
};