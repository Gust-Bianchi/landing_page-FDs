<template>
  <section class="section" id="sobre" style="position: relative;">
    <div class="container">
      <div class="glass wrap" v-reveal>
        <h2 class="h2">Quem somos</h2>

        <p class="p">
          Você terá acesso a dados confiáveis e modelos robustos de gestão de risco permitindo aprovações
          em tempo real, redução de fraudes e uma experiência fluida para o cliente final.
        </p>

        <p class="p">
          Motor de Decisão Oficialmente Integrado à Equifax/Boa Vista, uma das maiores empresas globais em dados,
          tecnologia e análise de crédito, o que garante acesso às informações mais completas e estratégicas do mercado.
        </p>

        <p class="p">
          Tecnologia de ponta e flexibilidade operacional para entregar controle em seus processos de crédito,
          assegurando eficiência, escalabilidade e confiabilidade em cada decisão.
        </p>
      </div>
    </div>

    <div class="glow" aria-hidden="true"></div>
  </section>
</template>

<script>
export default {
  name: "SobreEmpresa",
};
</script>

<style scoped>
.wrap{
  padding: 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.p{
  margin: 0;
  line-height: 1.7;
  color: rgba(10,37,64,0.82);
  font-weight: 650;
}

.glow{
  position: absolute;
  width: 620px;
  height: 620px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(31,95,145,0.12) 0%, rgba(31,95,145,0) 62%);
  bottom: -280px;
  right: -260px;
  filter: blur(90px);
  pointer-events: none;
  z-index: 0;
}
</style>
