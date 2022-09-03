
var obrazki = [
	
	'<img src="obrazy/mirostowice/ciapa.jpg" width="300" height="200" />',
	'<img src="obrazy/mirostowice/drzewo.jpg" width="300" height="200" />',
	'<img src="obrazy/mirostowice/innyKot.jpg" width="300" height="200" />',
	'<img src="obrazy/mirostowice/kamienie.jpg" width="300" height="200" />',
	'<img src="obrazy/mirostowice/kimaja.jpg" width="300" height="200" />',
	'<img src="obrazy/mirostowice/saba.jpg" width="300" height="200" />'
	
]



function pokazObrazek() {
	
	var indeks;
	var los = Math.random();
	
	if (los < 0.16) {indeks = 0;}
	if (los >= 0.16 && los < 0.33) {indeks = 1;}
	if (los >= 0.33 && los < 0.5) {indeks = 2;}
	if (los >= 0.5 && los < 0.67) {indeks = 3;}
	if (los >= 0.67 && los < 0.83) {indeks = 4;}
	if (los >= 0.83) {indeks = 5;}
	
	var miejsceNaObrazek = document.getElementById("fotka");
	//miejsceNaObrazek.innerHTML = '<img src="images/dziwny2.jpg" width="300" height="200" />';
	miejsceNaObrazek.innerHTML = obrazki[indeks];
}

function ukryjObrazek() {
	
	var miejsceNaObrazek = document.getElementById("fotka");
	miejsceNaObrazek.innerHTML = "";
	
}

var el1 = document.getElementById("wlacznik");
el1.addEventListener('click',pokazObrazek,false);

var el2 = document.getElementById("wylacznik");
el2.addEventListener('click',ukryjObrazek,false);



