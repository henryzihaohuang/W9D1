Function.prototype.inherits = function(parent){
    function Surrogate(){};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate ();
    this.prototype.constructor = this;
}


function MovingObject() {
}

MovingObject.prototype.moves= function() {
    console.log("LEFT!");
};

function Ship() { 
}

Ship.prototype.honks = function () {
    console.log("HONK!");
};

Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);