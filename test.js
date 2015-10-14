var modele = require('./modele');

var pt = modele.point;
var pnt = new pt(3,4);
console.log(pnt);

var pnt2 = new pt(5,6);

var cercle = modele.circle;
var c1 = new cercle(3,4,10);
console.log(c1);

var vecteur = modele.vector;
var v = new vecteur(pnt,pnt2);

console.log(vecteur);
console.log(v);
console.log(v.longueur());

var snake = modele.snake;
var s = new snake(1,2,3,4);
console.log(s);

