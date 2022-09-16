<script setup lang="ts">
  import { reactive, computed } from '@vue/reactivity';
  import Diode from "../components/Diode.vue";
  import Strip from '../lib/strip';
  //import rainbow from '../../../animations/rainbow';
  
  import control from '../../../lib/animations/control';
  import dance from '../../../lib/animations/dance';
  import fade from '../../../lib/animations/fade';
  import rainbow from '../../../lib/animations/rainbow';
  import twinkle from '../../../lib/animations/twinkle';
  import xmas from '../../../lib/animations/xmas';
  const strip = reactive(new Strip())
  const modes = [
    {name: "Stop", fn: control.Stop.bind(control)},
    {name: "Dance", fn: dance.GoDance.bind(dance)},
    {name: "Fade", fn: fade.GoFade2.bind(fade)},
    {name: "Rainbow", fn: rainbow.GoRainbow.bind(rainbow)},
    {name: "Twinkle", fn: twinkle.GoTwinkle.bind(twinkle)},
    {name: "XMAS", fn: xmas.GoXmas1.bind(xmas)},
  ]
  
  </script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      
    <button v-for="mode in modes" @click="mode.fn('', strip)">{{mode.name}}</button>
    snabbt!
    <input type="number" v-model="strip.NUM_LEDS" />
    mode: {{strip.Mode}}
    <div class="diodes"><Diode v-for="diode in strip.Lights" :color="diode ?? 0" /></div>
  </div>
    </div>
</template>

<style scoped lang="scss">
  .diodes {
    display: flex;
    flex-wrap: wrap;
    column-gap: 0.2em;
    row-gap: 0.2em;
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
