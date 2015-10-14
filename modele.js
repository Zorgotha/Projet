module.exports.x = 100;

function point(x,y){
	this.x=x;
	this.y=y;
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

function snake(x,y,x1,y1){
	//this.corps = new circle[];
	this.direction = new vector(new point(x,y),new point(x1,y1));
}

module.exports.vector = vector;
module.exports.point = point;
module.exports.circle = circle;
module.exports.snake = snake;
