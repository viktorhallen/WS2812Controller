/*******************************
	rainbow animations
*******************************/
import type { StripBase } from "../strip";
import common from "./common";
import { Animation } from "./common";

export class Basic2D extends Animation {
	NAME = "basic2d.js";
	RainbowOffset = 0;
	rainbowSpeed = 1000 / 30;

	GoRainbow(args, strip): void {
		strip.Mode = this.NAME + "rainbow";
		console.log("Going rainbow mode.");
		this.RainbowTick(args, strip);
	};

	RainbowTick(args, strip: StripBase): void {
		var _this = this;
		for (var i = 0; i < strip.NUM_LEDS; i++) {
			const {x,y} = strip.GetPosition2D(i);
			strip.Lights[i] = common.colorWheel((this.RainbowOffset + x*100) % 256);
		}

		this.RainbowOffset = (this.RainbowOffset + 1) % 256;

		strip.Render();

		setTimeout(function () {
			if (strip.Mode == _this.NAME + "rainbow") {
				_this.RainbowTick(args, strip);
			} else {
				this.RainbowOffset = 0;
			}
		}, this.rainbowSpeed);
	};

	RainbowSpeed(args, strip): void {
		var val = parseInt(args.speed);
		var mappedVal = common.map_range(val, 0, 100, 50, 5);
		if (typeof mappedVal === "number") {
			this.rainbowSpeed = mappedVal;
			console.log("New rainbow speed: " + this.rainbowSpeed);
		} else {
			this.rainbowSpeed = 1000 / 30;
		}
	};
}

export default new Basic2D();
