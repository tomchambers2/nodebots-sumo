var five = require("johnny-five"), 
    board = new five.Board();

board.on("ready", function() {

  var motor = new five.Motor([3, 2]);

  // Start the motor at maximum speed, wait 2 seconds and stop.
  motor.start(255);

});
