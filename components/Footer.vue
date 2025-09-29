<template>
  <footer class="bottom-0 mt-24 flex w-full justify-center bg-fill px-4">
    <div
      class="flex w-full max-w-7xl flex-wrap items-start justify-between gap-12 py-8 md:gap-24"
    >
      <div>
        <NuxtLink to="/#uvod" class="flex items-center gap-3 py-4">
          <img src="/logo_icon.svg" class="h-16" />
          <h2>Rodinné centrum Chuchle</h2>
        </NuxtLink>
        <div class="mt-1 flex flex-col gap-1">
          <p>Starochuchelská 7/20</p>
          <p>Klubovna K8, Kazínská 8</p>
          <p>Praha 5 – Velká Chuchle 159 00</p>
          <p>IČO: 03438554</p>
        </div>
      </div>
      <div id="kontakt" class="flex flex-col gap-3 sm:gap-5">
        <h3>Kontakt</h3>
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <div class="flex flex-col">
              <NuxtLink
                class="text-secondary underline"
                to="mailto:rcchuchle@gmail.com"
              >
                rcchuchle@gmail.com
              </NuxtLink>
              <NuxtLink
                class="text-secondary underline"
                to="mailto:info@rcchuchle.cz"
              >
                info@rcchuchle.cz
              </NuxtLink>
            </div>
            <div class="flex flex-col gap-1">
              <p>Tel: 721 558 568 - Eva Ness</p>
              <p>Tel: 737 659 813 - Katka Míroková</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-1">
        <ul class="flex flex-wrap gap-3 sm:flex-col">
          <li v-for="page in pages">
            <NuxtLink class="text-lg text-secondary underline" :to="page.to">
              {{ page.text }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const pages = [
  { text: "Domů", to: "/#uvod" },
  { text: "Akce", to: "/akce" },
  { text: "Kurzy", to: "/kurzy" },
  { text: "Lektoři", to: "/lektori" },
  { text: "O nás", to: "/o-nas" },
  { text: "Aktuality", to: "/aktuality" },
];
</script>
