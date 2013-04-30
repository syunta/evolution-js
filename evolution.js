var plants;

function skipDay(){}

function updateWorld(){
	addPlants();
}

function drawWorld(){
	
	var world = "";
	var ary = new Array();

	for(var i = 0; i < 30; i++){
		ary[i] = new Array();
		for(var j = 0; j < 101; j++){
			ary[i][j] = ".";
			world += ary[i][j];
		}
		ary[i][101] = "<br>";
		world += ary[i][101];
	}
	document.getElementById("world").innerHTML = world;
}

function addPlants(){
	
}