// 현재 페이지의 URL에서 사용자 이름 파라미터 가져오기
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get('user');

if (userName == null) {
    console.error('URL에서 사용자 이름 파라미터를 찾을 수 없습니다.');
} else {
    // localStorage에서 게시물 로드
    const posts = JSON.parse(localStorage.getItem("posts"));

    if (posts) {
        // 사용자 이름과 일치하는 게시물 찾기
        const post = posts.find(post => post.user === userName);

        // 게시물을 찾았을 경우 테이블에 세부 정보 표시
        if (post) {
            const userTd = document.getElementById("userTd");
            const titleTd = document.getElementById("titleTd");
            const contentsTd = document.getElementById("contentsTd");
            const dateTd = document.getElementById("dateTd");

            userTd.innerText = post.user;
            titleTd.innerText = post.title;
            contentsTd.innerText = post.contents;
            dateTd.innerText = post.date;
        } else {
            console.error(`사용자 ${userName}에 대한 게시물을 찾을 수 없습니다.`);
        }
    } else {
        console.error('localStorage에 저장된 게시물이 없습니다.');
    }
}
