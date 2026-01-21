<template>
  <section class="section cta" id="contato">
    <div class="container">
      <div class="glass box">
        <div class="content">
          <h2 class="h2">
            Pronto para transformar suas decisões de crédito?
          </h2>

          <p class="p">
            Automatize sua análise de risco, reduza a inadimplência e ganhe mais
            agilidade com um Motor de Decisão integrado às principais bases de
            dados do mercado.
          </p>
        </div>

        <div class="actions">
          <a href="#inicio" class="btn-primary">
            Agendar demonstração gratuita
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CTASection",
};
</script>

<style scoped>
.cta{
  position: relative;
  overflow: hidden;
  background: var(--white);
}

/* BOX PADRÃO — MESMO TAMANHO DOS OUTROS */
.box{
  width: 100%;
  padding: 30px 32px;          /* igual Equifax / Quem Somos */
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

/* TEXTO */
.content{
  max-width: 720px;
}

.p{
  margin: 0;
  line-height: 1.7;
  color: rgba(10,37,64,0.82);
  font-weight: 650;
}

/* AÇÕES */
.actions{
  flex-shrink: 0;
}

.btn-primary{
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 52px;
  padding: 0 26px;
  border-radius: 999px;

  background: var(--blue);
  color: #fff;
  font-weight: 950;
  text-decoration: none;

  transition: transform .2s ease, box-shadow .2s ease;
}

.btn-primary:hover{
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(31,95,145,0.35);
}

/* MOBILE */
@media (max-width: 900px){
  .box{
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
