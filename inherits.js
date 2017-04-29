Function.prototype.inherits = function(Superclass){
  this.prototype = Object.create(Superclass.prototype);
  this.prototype.constructor = this;
};


function MovingObject (moving) {
  this.moving = moving;
}
MovingObject.prototype.fast = function() {console.log("fast");};

function Ship (shape) {
  this.shape = shape;
}
Ship.inherits(MovingObject);
Ship.prototype.pew = function() {console.log("pew pew");};

function Asteroid (size) {
  this.size = size;
}
Asteroid.inherits(MovingObject);
Asteroid.prototype.crash = function(){ console.log("crash");};
