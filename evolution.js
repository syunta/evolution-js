/* テスト用 */
function test(){
	var test = "";
	for(var i = 0; i < 8; i++){
		test += " " + animal.genom[i].toString();
	}
	
	test += ":  direction:" + animal.direction.toString()
	document.getElementById("test").innerText = test;
}

function createRnd(a){
	return Math.floor(Math.random() * a)
}

/* 植物の関数 */
var plants = new Array();
/* グローバル変数plantsを初期化 */
for(var y = 0; y < 30; y++){
	plants[y] = new Array();
	for(var x = 0; x < 100; x++){
		plants[y][x] = false;
	}
}

function addPlants(){
	plants[createRnd(30)][createRnd(100)] = true;
	plants[createRnd(10) + 10][createRnd(10) + 45] = true;
}

/* 動物の関数 */
var animals = new Array();
/* グローバル変数animalsを初期化 */
animal = new Animal(50, 15, createRnd(8));

//////// Animalクラス //////////
function Animal(x, y, direction){
	this.x = x;
	this.y = y;
	this.direction = direction;
	
	this.genom = new Array(8);
	this.genom[0] = 1;
	this.genom[1] = 10;
	this.genom[2] = 1;
	this.genom[3] = 1;
	this.genom[4] = 1;
	this.genom[5] = 1;
	this.genom[6] = 1;
	this.genom[7] = 1;
/*	for(var i = 0; i < this.genom.length; i++){
		this.genom[i] = (createRnd(10) + 1);
	}*/
}
////////////////////////////////

eat(animal){
	
}

function turn(animal){
	var denominator = "";
	
	for(var i = 0; i < animal.genom.length; i++){
		for(var j = 0; j < animal.genom[i]; j++){
			denominator += i;
		}
	}
	var rndDirection = denominator.charAt(createRnd(denominator.length));
	animal.direction = parseInt(rndDirection);
	
	var turn = "";
	turn += rndDirection + "  " + denominator.length + "  "+denominator;
	document.getElementById("turn").innerText = turn;
}

function move(animal){
	function animalMove(x,y){
		animal.x += x;
		animal.y += y;
	}
	switch(animal.direction){
		case 0:
			animalMove(-1,-1)
			break;
		case 1:
			animalMove(0,-1)
			break;
		case 2:
			animalMove(+1,-1)
			break;
		case 3:
			animalMove(+1,0)
			break;
		case 4:
			animalMove(+1,+1)
			break;
		case 5:
			animalMove(0,+1)
			break;
		case 6:
			animalMove(-1,+1)
			break;
		case 7:
			animalMove(-1,0)
			break;
	}
	if(animal.x > 99){
		animal.x = 0;
	}else if(animal.x < 0){
		animal.x = 99;
	}
	
	if(animal.y > 29){
		animal.y = 0;
	}else if(animal.y < 0){
		animal.y = 29
	}
}

/* シミュレーションの関数 */
function skipDay(){
	updateWorld();
	drawWorld();
}

function updateWorld(){
	addPlants();
	turn(animal);
	move(animal);
	eat(animal);
	test();/* テスト用 */
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