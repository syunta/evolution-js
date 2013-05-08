/* テスト用 */

function test(animal){
	
	var test = "";
	for(var cnt in animals){
		test += "animals[" + cnt + "]:";
		for(var i = 0; i < 8; i++){
			test += " " + animals[cnt].genom[i].toString();
		}
		test += ":  direction:" + animals[cnt].direction.toString() + " vitality:" +animals[cnt].vitality + "\n";
		document.getElementById("test").innerText = test;
	}
}
/* 乱数生成 */
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
/* 最初の動物を生成 */
var genomOrigin = new Array(8);
for(var i = 0; i < 8; i++){
	genomOrigin[i] = (createRnd(10)+1);
}
animals[0] = new Animal(50, 15, createRnd(8), 200, genomOrigin);

//////// Animalクラス //////////
function Animal(x, y, direction, vitality, genomData){
	this.x = x;
	this.y = y;
	this.direction = direction;

	this.genom = new Array(8);
	for(var i = 0; i < this.genom.length; i++){
		this.genom[i] = (genomData[i]);
	}

	this.vitality = vitality;
}
////////////////////////////////

function reproduce(animal){
	if(animal.vitality >= 200){
		animal.vitality = Math.floor(animal.vitality / 2);
		
		/* 突然変異 */
		var genomNum = createRnd(8);
		var genomMutated = new Array(8);
		for(var i = 0; i < 8; i++){
			genomMutated[i] = animal.genom[i];
		}
		
		var mutation = animal.genom[genomNum];
		mutation += (createRnd(3) - 1);
		genomMutated[genomNum] = mutation;
		
		/* 新しい動物の誕生 */
		animals[animals.length] = 
		new Animal(animal.x, animal.y, createRnd(8), animal.vitality, genomMutated);
	}
}

function die(id){
	animals.splice(id,1);
}

function eat(animal){
	var x = animal.x;
	var y = animal.y;

	if(plants[y][x] == true){
		animal.vitality += 80;
		plants[y][x] = false;
	}
}

function turn(animal){
	var denominator = 0;

	for(var i = 0; i < 8; i++){
		denominator += animal.genom[i];
	}

	var rndNum = createRnd(denominator) + 1;
	var a = 0;

	for(var i = 0; i < 8; i++){
		a += animal.genom[i];
		if(rndNum <= a){
			animal.direction = i;
			break;
		}
	}
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
	animal.vitality -= 1;
}

/* シミュレーションの関数 */
function skipDay(){
	
	var simulation = 1;
	if(window.inputBox.value != ""){
		simulation = window.inputBox.value;
	}
	
	for(var i = 0; i < parseInt(simulation); i++){
		updateWorld();
		drawWorld();
	}

}

function updateWorld(){
	var cnt = 0;
	for(cnt in animals){
		if(animals[cnt].vitality == 0){
			die(cnt);
		}
	}
	for(cnt in animals){
		turn(animals[cnt]);
	}
	for(cnt in animals){
		move(animals[cnt]);
	}
	for(cnt in animals){
		eat(animals[cnt]);
	}
	for(cnt in animals){
		reproduce(animals[cnt]);
	}
	addPlants();

	test(animals[0]);/* テスト用 */
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
			
			var cnt = 0;
			for(cnt in animals){
				if(animals[cnt].x == x && animals[cnt].y == y){
					ary[y][x] = "M";
				}
			}
			
			world += ary[y][x];
		}
		ary[y][100] = "\n";
		world += ary[y][100];
	}
	document.getElementById("world").innerText = world;
}