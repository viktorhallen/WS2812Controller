/*******************************
	animation control
*******************************/
import common from "./common";

function control() {
	let name = "control.js";
	this.Stop = function (args, strip) {
		strip.Stop();
		console.log("Stopped strip");
	};
}

export default new control();
