function createRnd(a){
	return Math.floor(Math.random() * a)
}

var plants = new Array();
/* グローバル変数plantsを初期化 */
for(var y = 0; y < 30; y++){
	plants[y] = new Array();
	for(var x = 0; x < 100; x++){
		plants[y][x] = false;
	}
}

/* 植物の関数 */
function addPlants(){
	plants[createRnd(30)][createRnd(100)] = true;
	plants[createRnd(10) + 10][createRnd(10) + 45] = true;
}

var animals = new Array();
/* グローバル変数animalsを初期化 */
animal = new Animal(50, 15, 3);

//////// Animalクラス //////////
/* 動物の関数 */
function Animal(x, y, direction){
	this.x = x;
	this.y = y;
	this.direction = direction;
}
////////////////////////////////

function move(animal){
	switch(animal.direction){
		case 0:
			if(animal.x == 0){
				animal.x = 99;
			}else if(animal[0].y == 0){
				animal.y = 29;
			}else{
				animal.x -= 1;
				animal.y -= 1;
			}
			break;
		case 1:
			if(animal.y == 0){
				animal.y = 29;
			}else{
				animal.y -= 1;
			}
			break;
		case 2:
			if(animal.x == 99){
				animal.x = 0;
			}else if(animal.y == 0){
				animal.y = 29;
			}else{
				animal.x += 1;
				animal.y -= 1;
			}
			break;
		case 3:
			if(animal.x == 99){
				animal.x = 0;
			}else{
				animal.x += 1;
			}
			break;
		case 4:
			if(animal.x == 0){
				animal.x = 99;
			}else if(animal.y == 0){
				animal.y = 29;
			}else{
				animal.x += 1;
				animal.y += 1;
			}
			break;
		case 5:
			if(animal.y == 29){
				animal.y = 0;
			}else{
				animal.y += 1;
			}
			break;
		case 6:
			if(animal.x == 0){
				animal.x = 99;
			}else if(animal.y == 29){
				animal.y = 0;
			}else{
				animal.x -= 1;
				animal.y += 1;
			}
			break;
		case 7:
			if(animal.x == 0){
				animal.x = 99;
			}else{
				animal.x -= 1;
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
	move(animal);
}

/* 世界の関数 */
function drawWorld(){

	var world = "";
	var ary = new Array();

	for(var y = 0; y < 30; y++){
		ary[y] = new Array();
		for(var x = 0; x < 100; x++){
			ary[y][x] = " ";

			if(plants[y][x] == true){
				ary[y][x] = "*";
			}

			if(animal.x == x && animal.y == y){
				ary[y][x] = "M";
			}

			world += ary[y][x];
		}
		ary[y][100] = "\n";
		world += ary[y][100];
	}
	document.getElementById("world").innerText = world;
}