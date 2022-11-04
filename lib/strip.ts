import { isGloballyWhitelisted } from "@vue/shared";
import { getTransitionRawChildren } from "vue";
import common from "./animations/common";

export type Position2D = { x: number, y: number }

export abstract class StripBase {
	NUM_LEDS: number;
	Mode = "";
	Lights: number[] = [];
	Positions: Position2D[] = [];
	private BoundingBox: { min: Position2D, max: Position2D } | null = null;

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
		if (light < this.Positions.length) {
			const nonNormalized = this.Positions[light];
			if (this.BoundingBox) {
				return {
					x: common.map_range(nonNormalized.x, this.BoundingBox.min.x, this.BoundingBox.max.x, 0, 1),
					y: common.map_range(nonNormalized.y, this.BoundingBox.min.y, this.BoundingBox.max.y, 0, 1),
				}
			}
			return nonNormalized;
		}
		return { x: this.BoundingBox?.min.x ?? 0, y: this.BoundingBox?.min.y ?? 0 };
	}

	NormalizePositions(): void {
		if (this.Positions.length == 0) { return; }
		const x = this.Positions.map(d => d.x);
		const y = this.Positions.map(d => d.y);
		this.BoundingBox =
		{
			min: {
				x: Math.min(...x),
				y: Math.min(...y),
			},
			max: {
				x: Math.max(...x),
				y: Math.max(...y),
			}
		}
	}
}

