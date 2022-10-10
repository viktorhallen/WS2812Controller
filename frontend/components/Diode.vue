<script setup lang="ts">
    defineProps<{
      color: number|null
    }>()
    </script>
    
    <template>
      <div class="diode" :style="{'background-color': '#'+('000000' + color?.toString(16).toUpperCase()).slice(-6)}">
      </div>
    </template>
    
    <style scoped>
    .diode {
      width: 1em;
      height: 1em;
    }
    </style>
    