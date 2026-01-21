<template>
  <section class="section" id="mvv">
    <div class="container">
      <h2 class="h2">Missão, Visão e Valores</h2>

      <div class="grid">
        <div class="glass card" v-for="(item, i) in blocos" :key="i">
          <h3 class="t">{{ item.titulo }}</h3>
          <p class="p">{{ item.descricao }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MissaoVisao",
  data() {
    return {
      blocos: [
        {
          titulo: "Missão",
          descricao:
            "Oferecer inteligência de crédito personalizada, eficiente e precisa, promovendo decisões seguras e assertivas.",
        },
        {
          titulo: "Visão",
          descricao:
            "Ser referência nacional em motores de crédito inteligentes, reconhecida pela inovação e impacto nos resultados.",
        },
        {
          titulo: "Valores",
          descricao:
            "Compromisso com performance, ética, segurança e tecnologia de ponta, entregando soluções com excelência.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.grid{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
  margin-top: 18px;
}

.card{
  padding: 20px;
  border-radius: 20px;
}

.t{
  margin: 0 0 8px 0;
  color: var(--blue);
  font-weight: 950;
}

.p{
  margin: 0;
  line-height: 1.7;
  color: rgba(10,37,64,0.82);
  font-weight: 650;
}
</style>