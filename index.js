var five = require("johnny-five");
var keypress = require("keypress");

// Set up keypress
keypress(process.stdin);

// Initialize a new Board object
var board = new five.Board();

board.on("ready", function() {
  // Create two servos, on pins 9 and 10
  //var motorRight = new five.Motor([3, 2]);

	// var motorRight = new five.Motor({
 //    pins: {
 //      pwm: 2,
 //      //dir: 2,
 //      //brake: 9
 //    }
 //  });

  var motorRight = new five.Motor([3,12,9]); //maps to M1

  var motorLeft = new five.Motor([6,13,8]); //

  // Set up stdin to work correctly with the REPL
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.setRawMode(true);

  // When keys are pressed...
  process.stdin.on("keypress", function(ch, key) {
    if (!key) {
      return;
    }
    //FORWARD
    if (key.name === "w") {
    	console.log('pressed w');
      motorRight.start(255);
      motorLeft.start(255);
    } 
    //LEFT
    if (key.name === "a") {
      // Change 0 to whatever degree is "right"
      motorLeft.stop();
      motorRight.start(255);
    }
    //RIGHT
    if (key.name === "d") {
      // Change 0 to whatever degree is "left"
      motorRight.stop();
      motorLeft.start(255);
    } 
    //STOP
    if (key.name === "s") {
      motorLeft.stop();
      motorRight.stop();
    }
  });
});