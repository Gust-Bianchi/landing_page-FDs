<template>
  <section class="section" id="porque" style="position: relative;">
    <div class="container">
      <h2 class="h2">Por que escolher a <span class="accent">Fields</span></h2>

      <div class="grid">
        <div class="glass card" v-for="(item, i) in items" :key="i" v-reveal="{ delay: i * 90 }">
          <div class="icon" aria-hidden="true">{{ item.icon }}</div>
          <h3 class="title">{{ item.title }}</h3>
          <p class="desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>

    <div class="glow" aria-hidden="true"></div>
  </section>
</template>

<script>
export default {
  name: "DiferenciaisBlock",
  data() {
    return {
      items: [
        {
          icon: "🔒",
          title: "Segurança",
          desc: "Reduza seu risco com controle de acesso, estabilidade e proteção a dados sensíveis.",
        },
        {
          icon: "⚡",
          title: "Eficiência",
          desc: "Concessão de crédito mais rápida e eficiente: análises em até 10 segundos.",
        },
        {
          icon: "💸",
          title: "Custos",
          desc: "Reduza seus custos diretos e indiretos automatizando seu processo.",
        },
        {
          icon: "🧠",
          title: "Tecnologia",
          desc: "Automação, integração via API, rastreabilidade das decisões.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.card{
  padding: 20px;
  border-radius: 20px;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}

.card:hover{
  transform: perspective(900px) rotateX(2deg) rotateY(-2deg) translateY(-2px);
  border-color: rgba(31,95,145,0.30);
  box-shadow: 0 18px 52px rgba(31,95,145,0.22);
}

.icon{
  width: 46px;
  height: 46px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(31,95,145,0.10);
  border: 1px solid rgba(31,95,145,0.18);
  margin-bottom: 12px;
  font-size: 1.2rem;
}

.title{
  margin: 0 0 8px 0;
  color: var(--blue);
  font-weight: 950;
  letter-spacing: -0.01em;
}

.desc{
  margin: 0;
  line-height: 1.65;
  color: rgba(10,37,64,0.82);
  font-weight: 650;
}

.glow{
  position: absolute;
  width: 760px;
  height: 760px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(31,95,145,0.12) 0%, rgba(31,95,145,0) 60%);
  top: -320px;
  right: -320px;
  filter: blur(100px);
  pointer-events: none;
  z-index: 0;
}
</style>