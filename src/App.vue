<template>
  <div id="app" class="global-background">
    <SiteHeader />

    <main>
      <HeroSection />
      <EquifaxSection />
      <SobreEmpresa />
      <DiferenciaisBlock />
      <ServicosSection />
      <ClientesParceiros />
      <MissaoVisao />
      <CTASection />
    </main>

    <FooterSection />
    <WhatsAppFloat />

    <!-- Barra de rolagem visual fixa (overlay) -->

  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import HeroSection from "@/components/HeroSection.vue";
import EquifaxSection from "@/components/EquifaxSection.vue";
import SobreEmpresa from "@/components/SobreEmpresa.vue";
import DiferenciaisBlock from "@/components/DiferenciaisBlock.vue";
import ServicosSection from "@/components/ServicosSection.vue";
import ClientesParceiros from "@/components/ClientesParceiros.vue";
import MissaoVisao from "@/components/MissaoVisao.vue";
import CTASection from "@/components/CTASection.vue";
import FooterSection from "@/components/FooterSection.vue";
import WhatsAppFloat from "@/components/WhatsAppFloat.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    HeroSection,
    EquifaxSection,
    SobreEmpresa,
    DiferenciaisBlock,
    ServicosSection,
    ClientesParceiros,
    MissaoVisao,
    CTASection,
    FooterSection,
    WhatsAppFloat,
  
  },
};
</script>
<style>
.global-background {
  position: relative;
  background: var(--white);
  min-height: 100vh;
  overflow-x: hidden;
  overflow-y: visible; /* body é quem deve rolar */

  /* trava layout: footer sempre no final, sem “vazio” */
  display: flex;
  flex-direction: column;
}

main{
  flex: 1;
}
</style>