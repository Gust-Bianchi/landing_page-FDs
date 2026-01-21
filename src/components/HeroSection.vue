<template>
  <section class="hero" id="inicio">
    <!-- Background tech -->
    <div class="bg" aria-hidden="true">
      <div class="glow g1"></div>
      <div class="glow g2"></div>
      <div class="grid"></div>
      <!-- fade para não “marcar” a troca de setor -->
      <div class="fade-bottom"></div>
    </div>

    <div class="container wrap">
      <!-- LEFT -->
      <div class="left">
        <div class="pill glass">
          <span class="dot"></span>
          <span>Motor de decisão • Integração via API</span>
        </div>

        <h1>
          Aprove mais crédito em <span class="accent">segundos</span> com um
          motor de decisão <span class="accent">automático</span>.
        </h1>

        <p class="lead">
          Reduza a inadimplência em até <strong>30%</strong> com dados confiáveis,
          modelos robustos de risco e rastreabilidade completa das decisões.
        </p>

        <div class="actions">
          <a class="btn-primary" href="#contato">Agende uma demonstração gratuita</a>
          <a class="btn-ghost" href="#produtos">Ver produtos</a>
        </div>

        <!-- MÉTRICAS (apenas 2 caixas) -->
        <div class="metrics">
  <div class="glass metric">
    <span class="label">
      Análises de crédito em até <strong>10 segundos.</strong>
    </span>
    <span class="desc">
      Retorno rápido para decisões automatizadas em tempo real.
    </span>
  </div>

  <div class="glass metric">
    <span class="label">
      Redução de inadimplência de até <strong>30%.</strong>
    </span>
    <span class="desc">
      Mais precisão nas aprovações e maior controle de risco.
    </span>
  </div>
</div>

      </div>

      <!-- RIGHT / FORM -->
      <div class="right" id="contato">
        <div class="glass panel glass-strong">
          <div class="panelHead">
            <div>
              <h3>Agende uma demonstração</h3>
              <p>Preencha os dados e nossa equipe entra em contato.</p>
            </div>
          </div>

          <form class="form" @submit.prevent="onSubmit">
            <div class="row">
              <label for="nome">Nome</label>
              <input
                id="nome"
                v-model.trim="form.nome"
                type="text"
                required
                placeholder="Seu nome completo"
              />
            </div>

            <div class="row">
              <label for="cpf">CPF</label>
              <input
                id="cpf"
                v-model="form.cpf"
                @input="form.cpf = maskCpf(form.cpf)"
                inputmode="numeric"
                required
                placeholder="000.000.000-00"
              />
            </div>

            <div class="row">
              <label for="cnpj">CNPJ</label>
              <input
                id="cnpj"
                v-model="form.cnpj"
                @input="form.cnpj = maskCnpj(form.cnpj)"
                inputmode="numeric"
                required
                placeholder="00.000.000/0000-00"
              />
            </div>

            <div class="row">
              <label for="email">E-mail corporativo</label>
              <input
                id="email"
                v-model.trim="form.email"
                type="email"
                required
                placeholder="voce@empresa.com"
              />
            </div>

            <small v-if="error" class="error">{{ error }}</small>

            <button class="submit" type="submit">
              Quero agendar
            </button>

            <p class="hint">
              * CPF e CNPJ são obrigatórios para validação.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const onlyDigits = v => (v || "").replace(/\D/g, "");

export default {
  name: "HeroSection",
  data() {
    return {
      form: { nome: "", cpf: "", cnpj: "", email: "" },
      error: "",
    };
  },
  methods: {
    maskCpf(v) {
      const d = onlyDigits(v).slice(0, 11);
      return d
        .replace(/^(\d{3})(\d)/, "$1.$2")
        .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})$/, "$1.$2.$3-$4");
    },
    maskCnpj(v) {
      const d = onlyDigits(v).slice(0, 14);
      return d
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3/$4")
        .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d{1,2})$/, "$1.$2.$3/$4-$5");
    },
    onSubmit() {
      const cpfDigits = onlyDigits(this.form.cpf);
      const cnpjDigits = onlyDigits(this.form.cnpj);

      if (cpfDigits.length !== 11) {
        this.error = "CPF inválido. Preencha corretamente.";
        return;
      }
      if (cnpjDigits.length !== 14) {
        this.error = "CNPJ inválido. Preencha corretamente.";
        return;
      }

      this.error = "";
      alert("Dados enviados com sucesso! Entraremos em contato.");

      this.form = { nome: "", cpf: "", cnpj: "", email: "" };
    },
  },
};
</script>

<style scoped>
.hero{
  position: relative;
  overflow: hidden;
  background: var(--white);
  padding-top:100px;
  padding-bottom:80px;
}

/* BACKGROUND */
.bg{ position:absolute; inset:0; z-index:0; }

.glow{
  position:absolute;
  width: 820px;
  height: 820px;
  border-radius: 999px;
  filter: blur(120px);
  pointer-events:none;
}
.g1{
  top:-320px; left:-340px;
  background: radial-gradient(circle, rgba(31,95,145,0.18), rgba(31,95,145,0) 62%);
}
.g2{
  bottom:-360px; right:-380px;
  background: radial-gradient(circle, rgba(31,95,145,0.14), rgba(31,95,145,0) 62%);
}

/* grid tech */
.grid{
  position:absolute; inset:0;
  background-image:
    linear-gradient(to right, rgba(31,95,145,0.06) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(31,95,145,0.06) 1px, transparent 1px);
  background-size: 56px 56px;
  mask-image: radial-gradient(circle at 45% 30%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 72%);
  opacity: 0.55;
  pointer-events:none;
}

/* REMOVE “marca azul” no final: fade branco por cima do background */
.fade-bottom{
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 120px;
  background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
  pointer-events: none;
}

/* LAYOUT */
.wrap{
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 22px;
}

.left{ padding-top: 6px; }

.pill{
  display:inline-flex;
  align-items:center;
  gap: 10px;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(31,95,145,0.07);
  border: 1px solid rgba(31,95,145,0.18);
  font-weight: 900;
  color: rgba(10,37,64,0.78);
  margin-bottom: 14px;
}

.dot{
  width: 10px; height: 10px;
  border-radius: 999px;
  background: var(--blue);
  box-shadow: 0 0 0 4px rgba(31,95,145,0.16);
}

h1{
  margin: 0 0 14px 0;
  font-size: clamp(2.2rem, 4.2vw, 3.6rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  font-weight: 950;
}

.lead{
  margin-bottom: 18px;
  font-size: 1.08rem;
  line-height: 1.65;
  color: rgba(10,37,64,0.82);
}

.actions{
  display:flex;
  gap: 12px;
  margin-bottom: 18px;
  flex-wrap: wrap;
}

.btn-primary{
  padding: 14px 18px;
  border-radius: 999px;
  background: var(--blue);
  color:#fff;
  font-weight: 950;
  text-decoration:none;
}

.btn-ghost{
  padding: 14px 18px;
  border-radius: 999px;
  border: 2px solid rgba(31,95,145,0.28);
  color: var(--blue);
  text-decoration:none;
  font-weight: 950;
}

/* MÉTRICAS agora 2 colunas */
.metrics{
  display:grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  max-width: 520px; /* fica mais elegante e alinhado */
}

.metric{
  padding: 14px;
  border-radius: 18px;
}

.kpi{ font-size:1.35rem; font-weight:950; }
.label{ font-weight:900; opacity:.75; }
.desc{ font-size:.92rem; opacity:.8; }

/* FORM */
.panel{
  padding: 22px;
  border-radius: 24px;
}

.panelHead{
  display:flex;
  justify-content: space-between;
  margin-bottom: 14px;
}

.form{ display:flex; flex-direction: column; gap: 12px; }

.row{ display:flex; flex-direction: column; gap: 7px; }

input{
  height: 48px;
  border-radius: 14px;
  border: 1px solid rgba(31,95,145,0.22);
  padding: 0 14px;
  background: rgba(255,255,255,0.9);
}

.submit{
  height: 50px;
  border-radius: 14px;
  background: var(--blue);
  color:#fff;
  font-weight:950;
  border:none;
  cursor: pointer;
}

.error{
  color: var(--blue);
  font-weight: 900;
}

.hint{
  font-size:.9rem;
  opacity:.7;
}

@media (max-width: 980px){
  .wrap{ grid-template-columns: 1fr; }
  .metrics{ grid-template-columns: 1fr; max-width: 100%; }
}
</style>