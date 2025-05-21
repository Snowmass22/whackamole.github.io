let currmoletile;
let currplantile;
let score=0;
let gameover=false;
let music=new Audio("./edm.mp3");
 
window.onload = function() {setgame();}
function setgame(){
       
    
    for(let i=0;i<9;i++){
        let tile=document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click",function(){
            if(gameover){
                return;
            }
            if(currmoletile&& currmoletile.id==tile.id){
                score++;
                document.getElementById("score").innerHTML=score;
                currmoletile.innerHTML="";
                currmoletile=null;
            }
            else if(currplantile&& currplantile.id==tile.id){
                gameover=true;
                alert("Game Over! Your score is "+score);
            }
        });
        document.getElementById("board").appendChild(tile);


    }
    setInterval(setmole,2000);
    setInterval(setplantile,3000);
 
    
}
function getRandomtile(){
    
     let num=Math.floor(Math.random()*9);
     return num.toString();
}
function setmole(){
    if(currmoletile){
        currmoletile.innerHTML="";
    }
    let mole=document.createElement("img");
    mole.src="monty-mole.png";
    let num=getRandomtile();
    if(currplantile&& currplantile.id==num){
        return;
    }
    currmoletile=document.getElementById(num);
    currmoletile.appendChild(mole);
}
function setplantile(){
    music.play();
    if(currplantile){
        currplantile.innerHTML="";
    }
    let plant=document.createElement("img");
    plant.src="piranha-plant.png";
    let num=getRandomtile();
    if(currmoletile&& currmoletile.id==num){
        return;
    }
    currplantile=document.getElementById(num);
    currplantile.appendChild(plant);
}