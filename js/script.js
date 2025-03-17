document.addEventListener("DOMContentLoaded", function() {
  console.log("학원 홈페이지가 로드되었습니다.");

  // header.html 파일을 가져와서 #header-container에 삽입
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
    });
});
