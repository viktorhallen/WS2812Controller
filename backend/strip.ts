import { StripBase } from "../lib/strip";

/**
 * Put your number of LED's here
 */
var NUM_LEDS = 1000;
var ws281x = require("rpi-ws281x-native");

export class Strip extends StripBase {
	
	constructor() {
		super();
		this.NUM_LEDS = NUM_LEDS;
		ws281x.init(NUM_LEDS);
	}

	Clear() {
		ws281x.reset();
	}

	/**
	 * Render the current state of the LED strip
	 */
	Render() {
		const tmp: number[] = [];
		for (var i = 0; i < NUM_LEDS; i++) {
			if (i > NUM_LEDS) break;
			tmp[i] = this.Lights[i];
		}

		ws281x.render(tmp);
	};
}

export default new Strip();
