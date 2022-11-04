import { StripBase } from "../../lib/strip";

export default class Strip extends StripBase {
    NUM_LEDS: number;
    Mode: string = "";
    Lights: number[] = [];

    constructor(numLeds: number = 10) {
        super();
        this.NUM_LEDS = numLeds;
    }

    Clear() {}

    public Render() {
        this.Lights = this.Lights.slice(0,this.NUM_LEDS);
    }


}