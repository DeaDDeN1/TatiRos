const tatiros = document.getElementById("TatiRos");
const flower = document.getElementById("flower");

let rec = 0;
let rec1 = 0;
let over = 1;

document.addEventListener("keydown", function(event){
	if (over == 1){over = 0; rec = 0;}
	jump();
	flower.classList.add("flower")
});

function jump(){
	if (tatiros.classList != "jump"){
		tatiros.classList.add("jump");
	}
	setTimeout( function(){
		tatiros.classList.remove("jump")
	}, 500);
}

let isAlive = setInterval (function(){
	let tatiTop = parseInt(window.getComputedStyle(TatiRos).getPropertyValue("top"));
	let flowerLeft = parseInt(window.getComputedStyle(flower).getPropertyValue("left"));

	if (flowerLeft < 50 && flowerLeft > 0 && tatiTop >= 140){
		alert("Танюша нашла свой цветок :3");
		record();
		flower.classList.remove("flower");

	} else if (over == 0) {rec = rec + 1; document.getElementById("rec").value = "Ваш счёт: " + rec;}
}, 10)

function record(){
	if (rec > rec1){
		rec1 = rec;
		over = 1;
		document.getElementById("rec").value = "Ваш счёт: " + rec;
		document.getElementById("rec1").value = " Ваш рекорд: " + rec;
	}
}