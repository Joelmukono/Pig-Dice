function playerInfo(status,score){
  this.playerStatus =status;
  this.score = score;
}

playerInfo.prototype.rollDice = function () {
  return Math.floor((Math.random() * 6) + 1);
};

var player1 = new playerInfo(true,0);
var player2 = new playerInfo(true,0);
