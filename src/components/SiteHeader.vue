<template>
  <header class="site-header">
    <div class="container header-wrap">
      <div class="logos">
        <div class="logo">
          <img src="/img/logo-fields.png" alt="Gestão Fields" />
        </div>

        <span class="divider" aria-hidden="true"></span>

        <div class="logo logo-bv">
          <img src="/img/logo-equifax.png" alt="BV" />
        </div>
      </div>

      <nav :class="{ open: menuOpen }" aria-label="Navegação">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#bv">Integração</a></li>
          <li><a href="#sobre">Quem somos</a></li>
          <li><a href="#porque">Por que a Fields</a></li>
          <li><a href="#produtos">Produtos</a></li>
        </ul>
      </nav>

      <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="Abrir menu">
        ☰
      </button>
    </div>
  </header>
</template>

<script>
export default {
  name: "SiteHeader",
  data() {
    return { menuOpen: false };
  },
};
</script>

<style scoped>
.site-header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  padding: 0.95rem 1.5rem;

  /* vidro branco */
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border-bottom: 1px solid rgba(31,95,145,0.14);
}

.header-wrap{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap: 16px;
}

.logos{
  display:flex;
  align-items:center;
  gap: 14px;
}

/* PADRÃO ÚNICO PARA AS DUAS LOGOS */
/* padrão para todas */
.logo img{
  height: 36px;
  max-width: 160px;
  object-fit: contain;
  display: block;
  filter: brightness(0); /* preto */
}

/* Equifax um pouco maior para equilibrar */
.logo-bv img{
  height: 42px;          /* maior que a Fields */
  max-width: 190px;
}


/* divisor ajustado ao novo tamanho */
.divider{
  width: 1px;
  height: 30px;
  background: rgba(31,95,145,0.22);
}


.divider{
  width: 1px;
  height: 26px;
  background: rgba(31,95,145,0.22);
}

nav ul{
  display:flex;
  gap: 1.6rem;
  list-style:none;
  margin:0;
  padding:0;
}

nav a{
  color: var(--text);
  text-decoration:none;
  font-weight: 900;
  font-size: 1rem;
  transition: color .25s ease;
}

nav a:hover{ color: var(--blue); }

.menu-toggle{
  display:none;
  background:none;
  border:none;
  font-size:2rem;
  color: var(--text);
  cursor:pointer;
}

@media (max-width: 768px){
  nav{
    position:absolute;
    top: 100%;
    left: 0;
    width: 100%;
    display:none;

    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);

    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(31,95,145,0.14);
  }

  nav.open{ display:block; }
  nav ul{ flex-direction: column; gap: 1rem; }
  .menu-toggle{ display:block; }
}
</style>