var plants = new Array();
/* グローバル変数plantsを初期化 */
for(var y = 0; y < 30; y++){
	plants[y] = new Array();
	for(var x = 0; x < 101; x++){
		plants[y][x] = ".";
	}
	plants[y][101] = "";
}

var animals = new Array();
/* グローバル変数animalsを初期化 */
for(var y = 0; y < 30; y++){
	animals[y] = new Array();
	for(var x = 0; x < 101; x++){
		animals[y][x] = ".";
	}
	animals[y][101] = "";
}
animals[15][50] = "M";

function skipDay(){
	updateWorld();
	drawWorld();
}

function updateWorld(){
	addPlants();
}

function drawWorld(){
	
	var world = "";
	var ary = new Array();

	for(var y = 0; y < 30; y++){
		ary[y] = new Array();
		for(var x = 0; x < 101; x++){
			ary[y][x] = ".";
			
			if(plants[y][x] == "*"){
				ary[y][x] = "*";
			}
			
			if(animals[y][x] == "M"){
				ary[y][x] = "M";
			}
			
			world += ary[y][x];
		}
		ary[y][101] = "<br>";
		world += ary[y][101];
	}
	document.getElementById("world").innerHTML = world;
}

function addPlants(){

	var rndX = Math.floor(Math.random() * 100);
	var rndY = Math.floor(Math.random() * 30);
	
	if(plants[rndY][rndX] == "."){
		plants[rndY][rndX] = "*";
	}
	else{
		addPlants();
	}
	
	rndX = Math.floor(Math.random() * 10);
	rndY = Math.floor(Math.random() * 10);	
	plants[rndY + 10][rndX + 45] = "*";
}
