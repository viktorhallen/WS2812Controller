/*******************************
	animation control
*******************************/
var common = require("./common.js");
var name = "control.js";

function control() {
	this.Stop = function (args, strip) {
		strip.Stop();
		console.log("Stopped strip");
	};
}

module.exports = new control();
