

var roll= Math.floor((Math.random() * 6) + 1);
var totalScore =0 ;


function replay(){
if(roll==1){
  alert("repeat");
}
}
replay();

if(roll>1&& roll<6){
  score=roll+=roll;
  alert(score);
}
