<template>
  <section class="section" id="produtos" style="position: relative;">
    <div class="container">
      <h2 class="h2">Produtos</h2>
      <p class="lead">
        Enriqueça sua decisão de crédito com dados do <span class="accent">Cadastro Positivo</span>.
      </p>

      <div class="grid">
        <div class="glass card" v-for="(prod, i) in produtos" :key="prod.nome" v-reveal="{ delay: i * 90 }">
          <div class="top">
            <h3 class="name">{{ prod.nome }}</h3>
          </div>

          <ul class="list">
            <li v-for="(it, i) in prod.itens" :key="i">{{ it }}</li>
          </ul>
        </div>
      </div>

      <div class="glass closing">
        <h3 class="closingTitle">Tudo o que você precisa saber para vender mais e melhor.</h3>
        <p class="closingText">
          Tenha acesso as informações negativas, mais as informações positivas. Com eles você pode analisar
          a pontualidade de pagamento dos consumidores e definir os melhores prazos de sua negociação para
          tomar as melhores decisões para o negócio.
        </p>
      </div>
    </div>

    <div class="glow" aria-hidden="true"></div>
  </section>
</template>

<script>
export default {
  name: "ServicosSection",
  data() {
    return {
      produtos: [
        {
          nome: "Acerta Essencial",
          itens: [
            "Informações Cadastrais",
            "Score",
            "Informações Restritivas",
            "Informações Comportamentais",
            "Inteligência Analítica",
          ],
        },
        {
          nome: "Acerta Mais",
          itens: [
            "Acerta Essencial +",
            "Recomendação de Negócio BoaVista",
            "Participações em Empresas",
            "Participação em Falência",
            "Renda Presumida",
          ],
        },
        {
          nome: "Define Risco",
          itens: [
            "Informações Cadastrais Básicas",
            "Score",
            "Informações Restritivas",
            "Informações Comportamentais",
            "Inteligência Analítica",
          ],
        },
        {
          nome: "Define Negócio",
          itens: [
            "Define Risco +",
            "Informações Cadastrais com Quadro Societário com flag de restrição dos sócios",
            "Participações em outras Empresas com flag de restrição",
            "Participação dos sócios em outras em empresas com flag de restrição",
            "Inteligência Analítica: Sugestão de Negócio BoaVista",
            "Ações cíveis",
            "RJ e Falências empresariais",
            "Limite de Crédito",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.lead{
  margin: 0 0 18px 0;
  font-size: 1.08rem;
  line-height: 1.65;
  color: rgba(10,37,64,0.82);
  font-weight: 650;
  max-width: 72ch;
}

.grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
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

.top{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.name{
  margin: 0;
  color: var(--blue);
  font-weight: 950;
  letter-spacing: -0.01em;
  font-size: 1.18rem;
}

.list{
  margin: 0;
  padding-left: 18px;
}

.list li{
  margin-bottom: 8px;
  line-height: 1.55;
  color: rgba(10,37,64,0.82);
  font-weight: 650;
}

.closing{
  margin-top: 22px;
  padding: 22px;
  border-radius: 22px;
  background: rgba(31,95,145,0.08);
  border: 1px solid rgba(31,95,145,0.18);
}

.closingTitle{
  margin: 0 0 10px 0;
  color: var(--text);
  font-weight: 950;
  letter-spacing: -0.01em;
}

.closingText{
  margin: 0;
  line-height: 1.7;
  color: rgba(10,37,64,0.82);
  font-weight: 650;
}

.glow{
  position: absolute;
  width: 760px;
  height: 760px;
  border-radius: 999px;
  bottom: -380px;
  left: -340px;
  filter: blur(110px);
  pointer-events: none;
  z-index: 0;
}
</style>
