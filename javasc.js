var inpt=document.getElementById("input")

var score=10
var a=Math.random()

function chK(){

if(Math.floor(a*10+1)==inpt.value){
   document.getElementById("msg").innerHTML="it'zz Right 🎉🥳"
    alert(
       " You 🏁🌟 Won"
    )
}
else{
    document.getElementById("msg").innerHTML="Noooo 😱,it's Wrong..."
    score=score-1;
 document.getElementById("scrore").innerHTML="Hurry UP:"+score+"🏃"
}
if(score==0){
    alert("You Lose")
}
if(score==5){
    alert("Last Five Chance 👻🚫💔")
}
}

function del(event){
    inpt.value=""
}

