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
score2 =0;
playerOneTotalScoreArray = [];
playerTwoTotalScoreArray = [];

playerOneScoreArray = [];




//checkOne();

function totalRollsOne(){
  for(var i=0;i<=0;i++){
    playerOneScore = playerOne.rollDice();
    playerOneTotalScoreArray.push(playerOneScore);
    score=score+playerOneScore;
    document.getElementById('rollCount1').innerHTML = score;

    if (playerOneScore==1){
        score=0;
        document.getElementById('rollCount1').innerHTML = "You score nothing";
    }else if(score == 100){
        document.getElementById('rollCount2').innerHTML = "You Won";
    }

  }
}

function totalRollsTwo(){
  for(var i=0;i<=0;i++){
    playerTwoScore = playerTwo.rollDice();
    playerTwoTotalScoreArray.push(playerTwoScore);
    score2=score2+playerTwoScore;
    document.getElementById('rollCount2').innerHTML = score2;

    if (playerTwoScore==1){
        score2=0;
        document.getElementById('rollCount2').innerHTML = "You score nothing";

    }else if(score2 == 100){
        document.getElementById('rollCount2').innerHTML = "You Won";
    }

  }
}
