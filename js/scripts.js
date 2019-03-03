function playerInfo(score,status){
  this.score=score;
  this.status= status;
}



playerInfo.prototype.rollDice= function(){
  return Math.floor((Math.random() * 5) + 1);
}

 var playerOne = new playerInfo();
 var playerTwo = new playerInfo();

score = 0;
playerOneTotalScoreArray = [];
playerOneScoreArray = [];





function checkOne(){
  if(playerOneScore==1){

    alert("you score nothing");

  }
}

//checkOne();

function totalRolls(){
  for(var i=0;i<=150;i++){
    playerOneScore = playerOne.rollDice();
    playerOneTotalScoreArray.push(playerOneScore);
    score=score+playerOneScore;
    alert(score);
  }
}
totalRolls();
