<template>
  <HomeHero />
  <HomeEvents />

  <HomeAbout />

  <section class="flex justify-center px-4 py-16">
    <Newsletter class="w-full max-w-7xl" />
  </section>
</template>
<script setup lang="ts">
definePageMeta({
  fixedNav: true,
});
</script>
