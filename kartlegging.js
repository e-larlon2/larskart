let canvas = document.getElementById("myCanvas"); //henter id-elemente
let ctx = canvas.getContext("2d");

ctx.beginPath(); 
ctx.font = "40px Arial"; //størelse og type på skriften
ctx.lineWidth = 5; //bredde på linjen


//Teoribygget
ctx.moveTo(1900, 100); //kordinatene x og y aksen
ctx.lineTo(1900, 800); //lage streker fra x og y aksen
ctx.lineTo(1650, 800);
ctx.lineTo(1650, 100);
ctx.lineTo(1900, 100);
ctx.fillStyle = "#FFCF96"; //gir rect farge
ctx.fillRect(1650, 100, 250, 700); //tegner en rektangel
ctx.fillStyle = "black"; // gir tekst farge
ctx.fillText("Teoribygget", 1660, 350); //tekst i kordinat x og y

//stasjoner
ctx.fillStyle = "red";
ctx.fillRect(1680, 500, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("8", 1695, 540);

ctx.fillStyle = "red";
ctx.fillRect(1680, 140, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("9", 1695, 180);

ctx.fillStyle = "red";
ctx.fillRect(1820, 160, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("10", 1820, 200);


//Hall 1
ctx.moveTo(1500, 200);
ctx.lineTo(1350, 200);
ctx.lineTo(1350, 100);
ctx.lineTo(500, 100); 
ctx.lineTo(500, 400);
ctx.lineTo(1500, 400);
ctx.lineTo(1500, 200);
ctx.fillStyle = "#FFCF96";
ctx.fillRect(500, 100, 850, 300);
ctx.fillRect(1350, 200, 150, 200);
ctx.fillStyle = "black";
ctx.fillText("Hall 1", 880, 350);

//stasjoner
ctx.fillStyle = "red";
ctx.fillRect(590, 200, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("4", 605, 240);

ctx.fillStyle = "red";
ctx.fillRect(790, 200, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("5", 805, 240);

ctx.fillStyle = "red";
ctx.fillRect(990, 200, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("4", 1005, 240);

ctx.fillStyle = "red";
ctx.fillRect(1190, 200, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("6", 1205, 240);

ctx.fillStyle = "red";
ctx.fillRect(1380, 280, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("7", 1395, 320);


//Hall 2
ctx.moveTo(1350, 500);
ctx.lineTo(500, 500);
ctx.lineTo(500, 750);
ctx.lineTo(1350, 750);
ctx.lineTo(1350, 500);
ctx.fillStyle = "#FFCF96";
ctx.fillRect(500, 500, 850, 250);
ctx.fillStyle = "black";
ctx.fillText("Hall 2", 780, 570);

//stasjoner
ctx.fillStyle = "red";
ctx.fillRect(590, 600, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("2", 605, 640);

ctx.fillStyle = "red";
ctx.fillRect(960, 600, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("3", 975, 640);

ctx.fillStyle = "red";
ctx.fillRect(1160, 600, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("3", 1175, 640);


//Skur
ctx.moveTo(350, 100);
ctx.lineTo(350, 320);
ctx.lineTo(170, 320);
ctx.lineTo(170, 100);
ctx.lineTo(350, 100);
ctx.fillStyle = "#FFCF96";
ctx.fillRect(170, 100, 180, 220);
ctx.fillStyle = "black";
ctx.fillText("Skur", 220, 200);


//Hall 3
ctx.moveTo(320, 500);
ctx.lineTo(100, 500);
ctx.lineTo(100, 900);
ctx.lineTo(320, 900);
ctx.lineTo(320, 500);
ctx.fillStyle = "#FFCF96";
ctx.fillRect(100, 500, 220, 400);
ctx.fillStyle = "black";
ctx.fillText("Hall 3", 160, 700);

//stasjon
ctx.fillStyle = "red";
ctx.fillRect(170, 560, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("1", 185, 600);


//strek for å skille tegningene ifra
ctx.moveTo(2050, 10);
ctx.lineTo(2050, 1900);
ctx.moveTo(20, 1000);
ctx.lineTo(2050, 1000);


//1. etg i teoribygget 
ctx.moveTo(2100, 100);
ctx.lineTo(2900, 100);
ctx.lineTo(2900, 450);
ctx.lineTo(2100, 450);
ctx.lineTo(2100, 100);
ctx.fillStyle = "#FFCF96";
ctx.fillRect(2100, 100, 800, 350);
ctx.fillStyle = "white";
ctx.fillRect(2300, 50, 400, 50);
ctx.fillStyle = "black";
ctx.fillText("1. etg i teoribygget", 2350, 85);


//insiden i tegningen 1. etg
ctx.moveTo(2300, 200);
ctx.arc(2200, 200, 100, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fillText("Kantinen", 2130, 200);

ctx.moveTo(2585, 380);
ctx.arc(2420, 340, 110, 0, 2 * Math.PI);
ctx.fillText("Vg1 Elektro", 2320, 350);
ctx.fillStyle = "white";
ctx.fillRect(2580, 360, 200, 50);
ctx.fillStyle = "black";
ctx.fillText("Rom v101", 2590, 400);

ctx.moveTo(2740, 245);
ctx.arc(2595, 210, 110, 0, 2 * Math.PI);
ctx.fillText("Vg2 Elektro", 2495, 220);
ctx.fillStyle = "white";
ctx.fillRect(2700, 240, 200, 50);
ctx.fillStyle = "black";
ctx.fillText("Rom v105", 2710, 280);

//2. etg i teoribygget
ctx.moveTo(2900, 600);
ctx.lineTo(2900, 950);
ctx.lineTo(2100, 950);
ctx.lineTo(2100, 600);
ctx.lineTo(2900, 600);
ctx.fillStyle = "#FFCF96";
ctx.fillRect(2100, 600, 800, 350);
ctx.fillStyle = "white";
ctx.fillRect(2300, 550, 400, 50);
ctx.fillStyle = "black";
ctx.fillText("2. etg i teoribygget", 2350, 585);


//insiden i tegningen 2. etg
ctx.moveTo(2300, 850);
ctx.arc(2200, 850, 80, 0, 2 * Math.PI);
ctx.fillText("SSR", 2160, 860);
ctx.fillStyle = "white";
ctx.fillRect(2300, 820, 250, 50);
ctx.fillStyle = "black";
ctx.fillText("Rom v203 A", 2310, 860);


//3. etg i teoribygget
ctx.moveTo(2900, 1100);
ctx.lineTo(2900, 1450);
ctx.lineTo(2100, 1450);
ctx.lineTo(2100, 1100);
ctx.lineTo(2900, 1100);
ctx.fillStyle = "#FFCF96";
ctx.fillRect(2100, 1100, 800, 350);
ctx.fillStyle = "white";
ctx.fillRect(2300, 1050, 400, 50);
ctx.fillStyle = "black";
ctx.fillText("3. etg i teoribygget", 2350, 1085);


//insiden i tegningen 3. etg
ctx.moveTo(2300, 1200);
ctx.arc(2200, 1200, 80, 0, 2 * Math.PI);
ctx.fillText("1IMA", 2150, 1210);
ctx.fillStyle = "white";
ctx.fillRect(2300, 1170, 200, 50);
ctx.fillStyle = "black";
ctx.fillText("Rom v303", 2310, 1210);

//start
ctx.fillStyle = "green";
ctx.fillRect(1380, 650, 30, 30);
ctx.fillStyle = "white";
ctx.fillText("Start", 1380, 630)

//infotelt
ctx.moveTo(1380, 900);
ctx.lineTo(1380, 700);
ctx.lineTo(1520, 700);
ctx.lineTo(1520, 900);
ctx.lineTo(1380, 900);
ctx.fillStyle = "white";
ctx.fillRect(1380, 700, 140, 200);
ctx.fillStyle = "black";
ctx.fillText("Infotelt", 1390, 800)


//hvor stasjonene er
ctx.fillStyle = "white";
ctx.fillRect(10, 1050, 2000, 800);

// 1
ctx.fillStyle = "red";
ctx.fillRect(30, 1100, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("1", 45, 1140);
ctx.fillStyle = "black";
ctx.fillText("grunnkompetasne", 100, 1140);

// 2
ctx.fillStyle = "red";
ctx.fillRect(30, 1200, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("2", 45, 1240);
ctx.fillStyle = "black";
ctx.fillText("Teknologi- og Industri fag", 100, 1240);

// 3
ctx.fillStyle = "red";
ctx.fillRect(30, 1300, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("3", 45, 1340);
ctx.fillStyle = "black";
ctx.fillText("Elektro & datateknologi", 100, 1340);

// 4
ctx.fillStyle = "red";
ctx.fillRect(30, 1400, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("4", 45, 1440);
ctx.fillStyle = "black";
ctx.fillText("Bygg- og anleggsteknikk", 100, 1440);

// 5
ctx.fillStyle = "red";
ctx.fillRect(730, 1100, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("5", 745, 1140);
ctx.fillStyle = "black";
ctx.fillText("Køyretøy", 800, 1140);

// 6
ctx.fillStyle = "red";
ctx.fillRect(730, 1200, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("6", 745, 1240);
ctx.fillStyle = "black";
ctx.fillText("Industriteknologi", 800, 1240);

// 7
ctx.fillStyle = "red";
ctx.fillRect(730, 1300, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("7", 745, 1340);
ctx.fillStyle = "black";
ctx.fillText("Automasjon", 800, 1340);

// 8
ctx.fillStyle = "red";
ctx.fillRect(730, 1400, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("8", 745, 1440);
ctx.fillStyle = "black";
ctx.fillText("Vg1 Elektro 1.etg", 800, 1420);
ctx.fillText("Vg2 Elektro 1.etg", 800, 1470);

//9
ctx.fillStyle = "red";
ctx.fillRect(1230, 1100, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("9", 1245, 1140);
ctx.fillStyle = "black";
ctx.fillText("SSR 2.etg Kafe (gratis vafler/kaffe/saft)", 1300, 1140);

// 10
ctx.fillStyle = "red";
ctx.fillRect(1230, 1200, 50, 50);
ctx.fillStyle = "white";
ctx.fillText("10", 1230, 1240);
ctx.fillStyle = "black";
ctx.fillText("Informasjonsteknologi", 1300, 1220);
ctx.fillText("og medieproduksjon 3.etg", 1300, 1260);

//linje
ctx.moveTo(20, 1500);
ctx.lineTo(2000, 1500);

//tekst
ctx.fillText("Dette er et kart over skolen med stasjoner dere kan besøke. Det til høyre vise insiden av teoribygget", 50, 1600)
ctx.fillText("Ha en fin dag videre :)", 700, 1700)

ctx.stroke();