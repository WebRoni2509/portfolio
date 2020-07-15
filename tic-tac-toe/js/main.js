
var moves = 0;
var buttons = document.querySelectorAll(".btn");
var player_1 = "X";
var player_2 = "O";
var tieText = "Нічия!";
gameInfo.innerHTML = "Хід гравця: " + player_1;

for (var i = 0; i < buttons.length; i++) {
	buttons[i].onclick = makeMove;
}

function makeMove() {
	if (this.getAttribute("data-id") == 0) {
		if(moves % 2 == 0){
			this.innerHTML = player_1;
			this.setAttribute("data-id", "1");
			gameInfo.innerHTML = "Хід гравця: " + player_2;
			checkWinner(1);
		}
		else{
			this.innerHTML = player_2;
			this.setAttribute("data-id", "2");
			gameInfo.innerHTML = "Хід гравця: " + player_1;
			checkWinner(2);
		}
		moves++
	}
}

function checkWinner(dataId) {
	if( (buttons[0].getAttribute("data-id") == dataId && buttons[1].getAttribute("data-id") == dataId && buttons[2].getAttribute("data-id") == dataId) ||
		(buttons[3].getAttribute("data-id") == dataId && buttons[4].getAttribute("data-id") == dataId && buttons[5].getAttribute("data-id") == dataId) || 
		(buttons[6].getAttribute("data-id") == dataId && buttons[7].getAttribute("data-id") == dataId && buttons[8].getAttribute("data-id") == dataId) || 
		(buttons[0].getAttribute("data-id") == dataId && buttons[3].getAttribute("data-id") == dataId && buttons[6].getAttribute("data-id") == dataId) || 
		(buttons[1].getAttribute("data-id") == dataId && buttons[4].getAttribute("data-id") == dataId && buttons[7].getAttribute("data-id") == dataId) || 
		(buttons[2].getAttribute("data-id") == dataId && buttons[5].getAttribute("data-id") == dataId && buttons[8].getAttribute("data-id") == dataId) || 
		(buttons[0].getAttribute("data-id") == dataId && buttons[4].getAttribute("data-id") == dataId && buttons[8].getAttribute("data-id") == dataId) || 
		(buttons[2].getAttribute("data-id") == dataId && buttons[4].getAttribute("data-id") == dataId && buttons[6].getAttribute("data-id") == dataId))
	{
		win(dataId);
	}

	else{
		var fill = 0;
		for (var i = 0; i < buttons.length; i++) {
			if(buttons[i].getAttribute("data-id") > 0){
				fill++
			}
			if(fill == 9){
				console.log("Tie");
				tie();
			}
		}
	}
}

function win(dataId) {
	if(dataId == 1){
		var winner = player_1;
	}
	else{
		var winner = player_2;
	}

	gameInfo.innerHTML = "Перемагає гравець: " + winner; 
	restart();
}

function tie() {
	gameInfo.innerHTML = tieText;
	restart();
}

function restart() {
	restartBtn.style = "display: inline;";		
	restartBtn.onclick = restartGame;
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].disabled = true;
	}
}

function restartGame() {
	moves = 0; 
	gameInfo.innerHTML = "Хід гравця: " + player_1;
	restartBtn.style = "display: none;";
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].disabled = false;
		buttons[i].setAttribute("data-id", "0");
		buttons[i].innerHTML = "";

	}	
}