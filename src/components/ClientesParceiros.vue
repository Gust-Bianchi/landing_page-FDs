<template>
  <section class="section" id="clientes">
    <div class="container">
      <h2 class="h2">Clientes & Parceiros</h2>
      <div class="glass rail">
        <div class="track" :style="{ transform: `translateX(${x}px)` }">
          <div class="item" v-for="(logo, i) in looped" :key="i">
            <img :src="logo.src" :alt="logo.nome" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ClientesParceiros",
  data() {
    return {
      x: 0,
      raf: null,
      speed: 0.35,
      logos: [
        { nome: "Logo 1", src: "/img/logo1.svg" },
        { nome: "Logo 2", src: "/img/logo2.svg" },
        { nome: "Logo 3", src: "/img/logo3.svg" },
        { nome: "Logo 4", src: "/img/logo4.svg" },
        { nome: "Logo 5", src: "/img/logo5.svg" },
        { nome: "Logo 6", src: "/img/logo6.svg" },
      ],
    };
  },
  computed: {
    looped() {
      return [...this.logos, ...this.logos, ...this.logos];
    },
  },
  mounted() {
    this.tick = this.tick.bind(this);
    this.tick();
  },
  beforeUnmount() {
    cancelAnimationFrame(this.raf);
  },
  methods: {
    tick() {
      this.x -= this.speed;
      const w = 220 * this.logos.length; // largura aproximada (não precisa exata)
      if (Math.abs(this.x) >= w) this.x = 0;
      this.raf = requestAnimationFrame(this.tick);
    },
  },
};
</script>

<style scoped>
.rail{
  overflow:hidden;
  border-radius: 22px;
  padding: 14px;
  background: rgba(31,95,145,0.06);
  border: 1px solid rgba(31,95,145,0.16);
  margin-top: 18px;
}

.track{
  display:flex;
  gap: 14px;
  will-change: transform;
}

.item{
  width: 180px;
  height: 120px;
  border-radius: 18px;
  background: rgba(255,255,255,0.65);
  border: 1px solid rgba(31,95,145,0.16);
  display:flex;
  align-items:center;
  justify-content:center;
  flex-shrink: 0;
}

.item img{
  max-width: 120px;
  max-height: 70px;
  object-fit: contain;
}

.note{
  margin: 10px 0 0;
  opacity: 0.7;
  font-weight: 650;
}
code{ font-weight: 900; }
</style>