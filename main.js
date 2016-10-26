function randInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}



for (var i= 1; i<=500; i++){
	var stars = document.createElement("img");
	stars.src = "animated-stars.gif";
stars.style.width = "200px";
stars.style.margin = "0px auto";
stars.style.opacity="20%";
stars.style.position= "absolute";
stars.style.width= randInt(50, 100) + "px";
stars.style.top= randInt(1, 100) + "vh";
stars.style.left= randInt(1, 100) + "vw";
stars.style.transform= "rotate(" + randInt(20, 140) + "deg)";
stars.style.zIndex="-20";



document.body.appendChild(stars);
}



