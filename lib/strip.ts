
export type Position2D = {x: number, y: number}

export abstract class StripBase {
	NUM_LEDS: number;
	Mode = "";
	Lights: number[] = [];
    Positions: Position2D[] = [];

	abstract Clear(): void;

	/**
	 * Clear all LED's back to 0x00000 and render
	 */
	Stop() {
		this.Mode = "STOP";
		this.SetStripColor(0);
		this.Render();
	};

	/**
	 * Set a single color for all LED's
	 */
	SetStripColor(color) {
		for (var i = 0; i < this.NUM_LEDS; i++) {
			this.Lights[i] = color;
		}
		this.Render();
	};

	/**
	 * Render the current state of the LED strip
	 */
	abstract Render(): void;
	
	GetPosition2D(light: number): Position2D {
		if(light < this.Positions.length) {
		return this.Positions[light];
		}
			return {x:0, y:0};
	}
}

