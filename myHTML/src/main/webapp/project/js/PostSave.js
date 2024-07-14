function postSave() {
    const title = document.getElementById("title").value;
    const contents = document.getElementById("contents").value;
    const user = document.getElementById("user").value;

    let date = new Date();
    let getDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; // Corrected month display

    let posts = localStorage.getItem("posts");
    if (posts) {
        posts = JSON.parse(posts);
    } else {
        posts = [];
    }
	
	let isUserExist = posts.some(post => post.user == user);
	if(isUserExist){
		alert("이미 사용 중인 이름입니다. 다른 이름을 사용하세요.");
	}else{
		posts.push({ title, contents, user, date: getDate });

		localStorage.setItem("posts", JSON.stringify(posts));

		document.getElementById("title").value = "";
		document.getElementById("contents").value = "";
		document.getElementById("user").value = "";
		
		alert("저장되었습니다.");
	}

}
