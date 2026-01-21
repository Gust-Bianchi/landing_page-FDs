<template>
  <a
    href="https://wa.me/5511999999999"
    target="_blank"
    rel="noopener"
    class="whatsapp-float"
    aria-label="Fale conosco no WhatsApp"
  >
    <img
      src="/img/whatsapp.png"
      alt="WhatsApp"
      class="whatsapp-icon"
    />
  </a>
</template>

<script>
export default {
  name: "WhatsappFloat",
};
</script>

<style scoped>
.whatsapp-float{
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 999;

  width: 56px;
  height: 56px;
  aspect-ratio: 1 / 1;
  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--blue);
  box-shadow: 0 10px 30px rgba(31,95,145,0.35);

  padding: 0;
  border: none;
  text-decoration: none;
}

/* IMAGEM DO WHATSAPP */
.whatsapp-icon{
  width: 26px;
  height: 26px;
  object-fit: contain;

  /* deixa branca se o PNG for verde */
  filter: brightness(0) invert(1);
}

.whatsapp-float:hover{
  transform: translateY(-3px);
  box-shadow: 0 14px 36px rgba(31,95,145,0.45);
  opacity: 0.96;
}

/* mobile */
@media (max-width: 768px){
  .whatsapp-float{
    right: 18px;
    bottom: 18px;
    width: 54px;
    height: 54px;
  }
}
</style>