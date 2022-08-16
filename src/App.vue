<script setup>
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
import ContactUs from './components/ContactUs.vue';
import CardItem from './components/CardItem.vue';

</script>

<template>
  <div>
    <NavBar />
    <router-view v-slot="{Component}">
      <transition mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
    <ContactUs />
    <FooterSection />
  </div>
</template>

<style scoped>
  .v-enter-from {
    opacity: 0;
    transform: translateX(100px);
  }

  .v-enter-active,
  .v-leave-active{
    transition: all 0.3s ease-in;
  }

  .v-leave-to {
    opacity: 0;
    transform: translateX(-100px);
  }

    
</style>
