var canvas = document.getElementById('monCanvas');
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(0,0,401,401);
ctx.fillStyle  = "blue";
ctx.fill();
ctx.stroke();

//
ctx.beginPath();
ctx.moveTo(20,200);
ctx.lineTo(120,200);
ctx.lineTo(120,350);
ctx.quadraticCurveTo(130,400,140,350);
ctx.lineTo(140,300);
ctx.quadraticCurveTo(160,290,170,300);
ctx.lineTo(170,350);
ctx.quadraticCurveTo(180,400,190,350);
ctx.lineTo(190,200);
ctx.lineTo(290,200);
ctx.quadraticCurveTo(320,190,280,185);
ctx.lineTo(190,185);
ctx.fillStyle = "black";
ctx.fill();
// dernier bras
ctx.beginPath();
ctx.moveTo(20,200);
ctx.quadraticCurveTo(0,190,20,185);
ctx.lineTo(200,185);
ctx.fillStyle = "black";
ctx.fill();
// tete
ctx.beginPath();
ctx.arc(155, 160, 40, 0, 2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();
// Yeux
ctx.beginPath();
ctx.arc(140, 155, 7, 0, 2*Math.PI);
ctx.arc(170, 155, 7, 0, 2*Math.PI);
ctx.fillStyle = "white";
ctx.fill();
// pupilles
ctx.beginPath();
ctx.arc(140, 155, 4, 0, 2*Math.PI);
ctx.arc(170, 155, 4, 0, 2*Math.PI);
ctx.fillStyle = "black";
ctx.fill();
// bouche
ctx.beginPath();
ctx.moveTo(170,170);
ctx.lineTo(140,170);
ctx.quadraticCurveTo(155,200,170,170);
ctx.strokeStyle = "white";
ctx.stroke();
ctx.fillStyle = "pink";
ctx.fill();

ctx.beginPath();
ctx.moveTo(155,170);
ctx.lineTo(155,180);
ctx.strokeStyle = "black";
ctx.stroke();
