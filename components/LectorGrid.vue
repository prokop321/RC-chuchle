<template>
  <div v-if="lektori === 'error'" class="flex w-full justify-center px-4">
    <div class="flex w-full max-w-7xl flex-col items-center gap-4 py-8">
      <h3>Nastal problém během načítání lektorů 😬</h3>
      <p>Zkus stránku načíst znova nebo ji zkontroluj později</p>
    </div>
  </div>

  <div v-else-if="loaded" class="flex w-full justify-center px-4">
    <div class="flex w-full max-w-7xl flex-col gap-8 py-8">
      <div
        class="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <Lector
          v-for="lektor in Object.values(lektori)"
          :key="lektor.id"
          :lector="lektor"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "~/store/main";

const mainStore = useMainStore();

const { lektori, loaded } = storeToRefs(mainStore);
</script>
