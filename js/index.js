console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".comment-writing-container");
  const input = form.querySelector("input");
  const submitButton = form.querySelector(".submit");
  const commentList = document.querySelector(".comment-list");

  submitButton.addEventListener("click", () => {
    const commentText = input.value.trim();

    if (commentText === "") {
      alert("댓글을 입력해주세요.");
      return;
    }

    // 댓글 요소 생성
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <div class="comment-item">
        <div class="comment-author">
          <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
          <span>방문자</span>
        </div>
        <div class="comment-content">
          ${commentText}
        </div>
      </div>
    `;

    // 목록에 추가
    commentList.appendChild(listItem);

    // 입력 필드 초기화
    input.value = "";

    // 알림 창 띄우기
    alert("댓글이 등록되었습니다.");
  });
});
