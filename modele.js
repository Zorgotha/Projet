module.exports.x = 100;

function point(x,y){
	this.x=x;
	this.y=y;
	this.toString = function(){
		return 'x: ' + this.x + ' y: '+ this.y;
	};
}

function vector(a,b){
	this.a = new point(a.x,a.y);
	this.b = new point(b.x, b.y);
	this.longueur = function(){
		var x = a.x - b.x;
		var y  = a.y - b.y;
		return Math.sqrt(x*x + y*y);
	};
}

function circle(x , y, rayon){
	this.centre = new point(x,y);
	this.rayon = rayon;
}

function snake(count){
	this.tabCorps = [];
	this.direction = function(a,b){
		this.direction = new vector(a,b)
	}
	this.tete = function(x,y,r){
		this.tete = new circle(x,y,r);
	}

	this.corps = function(x,y,r){
		for(var i=1; i<= count; i++){
			this.tabCorps[i] = new circle(x-i,y-i, r);
		}
	}
}

module.exports.vector = vector;
module.exports.point = point;
module.exports.circle = circle;
module.exports.snake = snake;
