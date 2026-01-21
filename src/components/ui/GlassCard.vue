<template>
  <div class="glass card-tilt" :class="{ 'glass-strong': strong }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "GlassCard",
  props: {
    strong: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
/* estilo vem do theme.css (glass, card-tilt) */
</style>