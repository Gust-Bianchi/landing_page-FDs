<template>
  <div class="overlay-scrollbar" aria-hidden="true">
    <div class="thumb" :style="thumbStyle"></div>
  </div>
</template>

<script>
export default {
  name: "OverlayScrollbar",
  data() {
    return { thumbHeight: 0, thumbTop: 0 };
  },
  computed: {
    thumbStyle() {
      return {
        height: this.thumbHeight + "px",
        transform: `translateY(${this.thumbTop}px)`,
      };
    },
  },
  mounted() {
    this.update();
    this.onScroll = this.update.bind(this);
    this.onResize = this.update.bind(this);
    window.addEventListener("scroll", this.onScroll, { passive: true });
    window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    update() {
      const h = window.innerHeight;
      const doc = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      const ratio = h / doc;
      const thumbH = Math.max(Math.round(h * ratio), 32);
      const maxScroll = doc - h;
      const scroll = window.scrollY || window.pageYOffset || 0;
      const maxTop = h - thumbH;
      const top = maxScroll ? Math.round((scroll / maxScroll) * maxTop) : 0;
      this.thumbHeight = thumbH;
      this.thumbTop = top;
    },
  },
};
</script>

<style scoped>
.overlay-scrollbar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 12px;
  z-index: 2147483647; /* acima de tudo */
  pointer-events: none; /* visual apenas */
}
.overlay-scrollbar .thumb {
  position: absolute;
  left: 2px;
  right: 2px;
  background: rgba(31,95,145,0.78);
  border-radius: 999px;
  transition: height 120ms linear, transform 120ms linear;
  box-shadow: 0 0 6px rgba(31,95,145,0.28);
}
</style>
