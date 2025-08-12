<template>
  <Page
    :title="[
      { text: 'Lektoři', link: '/lektori' },
      {
        text: lector.name || '',
      },
    ]"
  >
    <div class="flex flex-col gap-6 pt-6 lg:flex-row">
      <Gallery
        v-if="lector.photos && lector.photos.length > 0"
        :images="lector.photos"
        :alt-text="`Foto ${lector.name}`"
      />
      <div class="flex flex-col gap-4 lg:flex-1">
        <h1 class="text-4xl font-bold">{{ lector.name }}</h1>
        <div class="prose max-w-none">
          <p class="text-lg leading-relaxed">{{ lector.description }}</p>
        </div>
      </div>
    </div>
  </Page>
</template>

<script lang="ts" setup>
import { useMainStore } from "~/store/main";

const lectorID = useRoute().params.id as string;

const mainStore = useMainStore();
const { lektori } = storeToRefs(mainStore);

const lector = computed<LektoriItem>(() => {
  const lector =
    lektori.value !== "error" ? lektori.value[lectorID] : undefined;

  if (!lector)
    return {
      id: lectorID,
      name: "",
      description: "",
      photos: [],
    };

  return lector;
});
</script>
