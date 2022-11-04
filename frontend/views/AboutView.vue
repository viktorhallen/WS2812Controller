<script setup lang="ts">
import { reactive, computed } from '@vue/reactivity';
import Diode from "../components/Diode.vue";
import Strip from '../lib/strip';
//import rainbow from '../../../animations/rainbow';

import control from '@lib/animations/control';
import dance from '@lib/animations/dance';
import fade from '@lib/animations/fade';
import rainbow from '@lib/animations/rainbow';
import twinkle from '@lib/animations/twinkle';
import xmas from '@lib/animations/xmas';
import basic2d from '@lib/animations/basic2d';
const strip = reactive(new Strip(25));
strip.Positions = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 2, y: 0 },
  { x: 3, y: 0 },
  { x: 4, y: 0 },
  { x: 0, y: 1 },
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
  { x: 4, y: 1 },
  { x: 0, y: 2 },
  { x: 1, y: 2 },
  { x: 2, y: 2 },
  { x: 3, y: 2 },
  { x: 4, y: 2 },
  { x: 0, y: 3 },
  { x: 1, y: 3 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 4, y: 3 },
  { x: 0, y: 4 },
  { x: 1, y: 4 },
  { x: 2, y: 4 },
  { x: 3, y: 4 },
  { x: 4, y: 4 },
]
strip.NormalizePositions();
const modes = [
  { name: "Stop", fn: control.Stop.bind(control) },
  { name: "Dance", fn: dance.GoDance.bind(dance) },
  { name: "Fade", fn: fade.GoFade2.bind(fade) },
  { name: "Rainbow", fn: rainbow.GoRainbow.bind(rainbow) },
  { name: "Twinkle", fn: twinkle.GoTwinkle.bind(twinkle) },
  { name: "XMAS", fn: xmas.GoXmas1.bind(xmas) },
  { name: "Basic2D", fn: basic2d.GoRainbow.bind(basic2d) }
]
basic2d.GoRainbow('', strip); // just for debug maybe?

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>

      <button v-for="mode in modes" @click="mode.fn('', strip)">{{ mode.name }}</button>
      snabbt!
      <input type="number" v-model="strip.NUM_LEDS" />
      mode: {{ strip.Mode }}
      <div class="diodes">
        <Diode v-for="diode in strip.Lights" :color="diode ?? 0" />
      </div>
      positions:
      <div v-for="diode in strip.Positions">
        x: <input type="number" v-model="diode.x" />
        y: <input type="number" v-model="diode.y" />
      </div>
      <button @click="strip.Positions.push({})">+</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.diodes {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.2em;
  row-gap: 0.2em;

  &>* {
    width: 19%;
    height: 100px;
  }
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
