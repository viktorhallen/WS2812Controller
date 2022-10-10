import { StripBase } from "../../lib/strip";

export default class Strip extends StripBase {
    NUM_LEDS = 10;
    Mode: string = "";
    Lights: number[] = [];

    Clear() {}

    public Render() {
        this.Lights = this.Lights.slice(0,this.NUM_LEDS);
    }


}