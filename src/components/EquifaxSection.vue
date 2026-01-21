<template>
  <section class="section equifax" id="bv">
    <div class="fade-top" aria-hidden="true"></div>

    <div class="container">
      <div class="glass card" v-reveal>
        <!-- TEXTO -->
        <div class="left">
          <h2 class="h2">
            Motor de Decisão Oficialmente Integrado à
            <span class="accent">Equifax / Boa Vista</span>
          </h2>

          <p class="p">
            Nosso Motor de Decisão conta com integração oficial à Equifax/Boa Vista, uma das maiores e
            mais respeitadas empresas globais em dados, tecnologia e inteligência analítica para crédito.
          </p>

          <p class="p">
            Essa integração garante acesso a uma base completa de informações, combinando dados cadastrais,
            comportamentais, positivos e restritivos, permitindo análises mais profundas, seguras e consistentes
            em todo o processo de concessão.
          </p>

          <p class="p">
            Com dados confiáveis e um motor automatizado, sua operação reduz riscos e melhora a qualidade das
            aprovações, mantendo rastreabilidade e padronização em cada decisão — do onboarding ao limite final.
          </p>

          <p class="p">
            O resultado é mais agilidade para o time, mais previsibilidade para o negócio e uma experiência mais
            fluida para o cliente final, com decisões rápidas e alinhadas à sua política de crédito.
          </p>
        </div>

        <!-- SOQUETE (vazio) PARA LOGO -->
        <div class="right">
  <div class="logo-socket">
    <img
      src="/img/logo-equifax.png"
      alt="Equifax"
      class="equifax-logo"
    />
  </div>
</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "EquifaxSection",
};
</script>

<style scoped>
.equifax{
  position: relative;
  overflow: hidden;
  background: var(--white);
}

/* suaviza transição com o hero (evita linha) */
.fade-top{
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,1));
  pointer-events: none;
  z-index: 1;
}

.card{
  position: relative;
  z-index: 2;
  padding: 30px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

/* TEXTO */
.left{
  flex: 1.65;
}

.p{
  margin: 0 0 14px 0;
  line-height: 1.7;
  color: rgba(10,37,64,0.82);
  font-weight: 650;
  max-width: 84ch;
}

/* SOQUETE VAZIO */
.right{
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}/* SOQUETE DA LOGO */

/* SOQUETE DA LOGO */
.logo-socket{
  width: 420px;
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* LOGO */
.equifax-logo{
  width: 100%;
  height: 100%;
  max-width: 420px;     /* controla o tamanho máximo */
  max-height: 180px;
  object-fit: contain;
  margin-top: 100;
}

/* MOBILE */
@media (max-width: 980px){
  .card{
    flex-direction: column;
    align-items: stretch;
  }

  .right{
    justify-content: center;
  }

  .logo-socket{
    width: 100%;
    height: 140px;      /* ajusta como você quiser */
    margin-top: 190px;   /* espaçamento normal entre texto e logo */
  }

  .equifax-logo{
    max-width: 260px;   /* evita ficar gigante no celular */
    max-height: 140px;
  }
}

/* MOBILE */
@media (max-width: 980px){
  .logo-socket{
    width: 100%;
    height: 160px;
  }
}
</style>
