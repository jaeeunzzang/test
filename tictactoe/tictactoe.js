var startButton = document.getElementById("start");
var restartButton = document.getElementById("restart");
var flag = true;
const player1 = "O";
const player2 = "X";
drawBoard(); //보드 그려주면서 시작

function startGame() {
  //게임 시작함수
  const row = document.getElementsByClassName("row");
  for (let index = 0; index < row.length; index++) {
    row[index].onclick = clickBoard; //각 row클릭시 이벤트
  }
}
function startClick() {
  //start버튼 클릭시 실행
  startButton.hidden = true;
  restartButton.hidden = false;
  startGame();
}
function restartClick() {
  //restart버튼 클릭시 실행. 게임 초기화
  drawBoard();
  startGame();
}
function gameOver() {
  //winCheck후 자동 실행. 게임초기화
  drawBoard();
  startGame();
}
function drawBoard() {
  //게임판 그려주는 함수
  var player = document.getElementById("player");
  var rowWrap = document.getElementById("rowWrap");
  player.innerHTML = player1;
  rowWrap.innerHTML = "";
  for (let index = 0; index < 9; index++) {
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    row.setAttribute("id", "row" + index); //각 row div 의 id 설정.
    rowWrap.appendChild(row);
  }
}

function clickBoard() {
  var div = document.getElementById(this.id);
  var alertDiv = document.getElementById("alert"); //알림 출력할 div
  alertDiv.innerHTML = ""; //일단 초기화해주고
  if (div.innerText.length > 0) {
    //notnullCheck
    alertDiv.innerHTML = "<h3>이미 선택 된 칸입니다</h3>";
    return false;
  }
  if (flag == true) {
    //flag가 true이면
    div.innerText = player1; //div안에 "o" 넣어주고
    player.innerText = player2; //player div에는 "x" 출력
    winCheck(); //winCheck실행
  } else {
    div.innerText = player2;
    player.innerText = player1;
    winCheck();
  }
  playerCheck(); //winCheck에서 아무 이벤트가 없으면 실행
}
function playerCheck() {
  //플레이어 턴 바꿔주는 함수
  flag == false ? (flag = true) : (flag = false);
  startGame();
}
function winCheck() {
  //이겼는지 체크해주는 함수 이렇게까지밖에 할수없는건가싶고ㅜㅜ
  var row0 = document.getElementById("row0").innerText;
  var row1 = document.getElementById("row1").innerText;
  var row2 = document.getElementById("row2").innerText;
  var row3 = document.getElementById("row3").innerText;
  var row4 = document.getElementById("row4").innerText;
  var row5 = document.getElementById("row5").innerText;
  var row6 = document.getElementById("row6").innerText;
  var row7 = document.getElementById("row7").innerText;
  var row8 = document.getElementById("row8").innerText;
  var column1 = [row0.length, row3.length, row6.length]; //세로줄 체크해줄 변수
  var column2 = [row1.length, row4.length, row7.length];
  var column3 = [row2.length, row5.length, row8.length];
  var tuple1 = [row0.length, row1.length, row2.length]; //가로줄 체크해줄 변수
  var tuple2 = [row3.length, row4.length, row5.length];
  var tuple3 = [row6.length, row7.length, row8.length];
  var cross1 = [row0.length, row4.length, row8.length]; //대각선 체크해줄 변수
  var cross2 = [row2.length, row4.length, row6.length];

  if (!tuple1.includes(0) && row0 == row1 && row1 == row2) {
    alert(row0 + " Player Win");
    gameOver();
  } else if (!tuple2.includes(0) && row3 == row4 && row4 == row5) {
    alert(row3 + " Player Win");
    gameOver();
  } else if (!tuple3.includes(0) && row6 == row7 && row7 == row8) {
    alert(row6 + " Player Win");
    gameOver();
  } else if (!column1.includes(0) && row0 == row3 && row3 == row6) {
    alert(row0 + " Player Win");
    gameOver();
  } else if (!column2.includes(0) && row1 == row4 && row4 == row7) {
    alert(row1 + " Player Win");
    gameOver();
  } else if (!column3.includes(0) && row2 == row5 && row5 == row8) {
    alert(row2 + " Player Win");
    gameOver();
  } else if (!cross1.includes(0) && row0 == row4 && row4 == row8) {
    alert(row0 + " Player Win");
    gameOver();
  } else if (!cross2.includes(0) && row2 == row4 && row4 == row6) {
    alert(row2 + " Player Win");
    gameOver();
  } else if (
    !column1.includes(0) &&
    !column2.includes(0) &&
    !column3.includes(0)
  ) {
    alert("draw");
    gameOver();
  }
}
