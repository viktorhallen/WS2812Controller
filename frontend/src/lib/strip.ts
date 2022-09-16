export default class Strip {
    NUM_LEDS = 10;
    Mode: string = "";
    Lights: number[] = [];

    public Render() {
        this.Lights = this.Lights.slice(0,this.NUM_LEDS);
    }
}