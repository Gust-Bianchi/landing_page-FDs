<template>
  <footer class="footer">
    <div class="container wrap">
      <div class="info">
        <img src="/img/logo-fields.png" alt="Gestão Fields" />
        <p>© 2026 Gestão Fields. Todos os direitos reservados.</p>
      </div>

      <nav class="links" aria-label="Links do rodapé">
        <a href="#inicio">Início</a>
        <a href="#bv">Integração</a>
        <a href="#sobre">Quem somos</a>
        <a href="#porque">Por que a Fields</a>
        <a href="#produtos">Produtos</a>
        <a href="#contato">Demonstração</a>
      </nav>
    </div>
  </footer>
</template>

<script>
export default { name: "FooterSection" };
</script>

<style scoped>
.footer{
  padding: 24px 0; /* menor e mais clean */
  background: var(--white);
  border-top: 1px solid rgba(31,95,145,0.14);
}

.wrap{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.info img{
  height: 36px;
  display: block;
}

.info p{
  margin: 6px 0 0 0;
  opacity: 0.75;
  color: rgba(10,37,64,0.78);
  font-weight: 650;
}

.links{
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.links a{
  text-decoration: none;
  color: var(--text);
  font-weight: 900;
  transition: color .2s ease;
}

.links a:hover{ color: var(--blue); }

@media (max-width: 840px){
  .wrap{ flex-direction: column; align-items: flex-start; }
}
</style>