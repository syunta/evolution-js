var plants = new Array();
/* グローバル変数plantsを初期化 */
for(var y = 0; y < 30; y++){
	plants[y] = new Array();
	for(var x = 0; x < 101; x++){
		plants[y][x] = "&nbsp;";
	}
	plants[y][101] = "";
}

var animals = new Array();
/* グローバル変数animalsを初期化 */
animals[0] = new createAnimals(50, 15, 3);

/* 動物の関数 */
function createAnimals(x, y, direction){
	this.x = x;
	this.y = y;
	this.direction = direction;
}

function move(animals){
	switch(animals[0].direction){
		case 0:
			if(animals[0].x == 0){
				animals[0].x = 99;
			}else if(animals[0].y == 0){
				animals[0].y = 29;
			}else{
				animals[0].x -= 1;
				animals[0].y -= 1;
			}
			break;
		case 1:
			if(animals[0].y == 0){
				animals[0].y = 29;
			}else{
				animals[0].y -= 1;
			}
			break;
		case 2:
			if(animals[0].x == 99){
				animals[0].x = 0;
			}else if(animals[0].y == 0){
				animals[0].y = 29;
			}else{
				animals[0].x += 1;
				animals[0].y -= 1;
			}
			break;
		case 3:
			if(animals[0].x == 99){
				animals[0].x = 0;
			}else{
				animals[0].x += 1;
			}
			break;
		case 4:
			if(animals[0].x == 0){
				animals[0].x = 99;
			}else if(animals[0].y == 0){
				animals[0].y = 29;
			}else{
				animals[0].x += 1;
				animals[0].y += 1;
			}
			break;
		case 5:
			if(animals[0].y == 29){
				animals[0].y = 0;
			}else{
				animals[0].y += 1;
			}
			break;
		case 6:
			if(animals[0].x == 0){
				animals[0].x = 99;
			}else if(animals[0].y == 29){
				animals[0].y = 0;
			}else{
				animals[0].x -= 1;
				animals[0].y += 1;
			}
			break;
		case 7:
			if(animals[0].x == 0){
				animals[0].x = 99;
			}else{
				animals[0].x -= 1;
			}
			break;
	}	
}

/* シミュレーションの関数 */
function skipDay(){
	updateWorld();
	drawWorld();
}

function updateWorld(){
	addPlants();
	move(animals);
}

/* 世界の関数 */
function drawWorld(){
	
	var world = "";
	var ary = new Array();

	for(var y = 0; y < 30; y++){
		ary[y] = new Array();
		for(var x = 0; x < 101; x++){
			ary[y][x] = "&nbsp;";
			
			if(plants[y][x] == "*"){
				ary[y][x] = "*";
			}
			
			if(animals[0].x == x && animals[0].y == y){
				ary[y][x] = "M";
			}
			
			world += ary[y][x];
		}
		ary[y][101] = "<br>";
		world += ary[y][101];
	}
	document.getElementById("world").innerHTML = world;
}

/* 植物の関数 */
function addPlants(){

	var rndX = Math.floor(Math.random() * 100);
	var rndY = Math.floor(Math.random() * 30);
	
	if(plants[rndY][rndX] == "&nbsp;"){
		plants[rndY][rndX] = "*";
	}
	else{
		addPlants();
	}
	
	rndX = Math.floor(Math.random() * 10);
	rndY = Math.floor(Math.random() * 10);	
	plants[rndY + 10][rndX + 45] = "*";
}