var plants;

function skipDay(){}

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
			world += ary[y][x];
		}
		ary[y][101] = "<br>";
		world += ary[y][101];
	}
	document.getElementById("world").innerHTML = world;
}

function addPlants(){

}