<template>
  <div
    class="flex h-96 w-full max-w-80 flex-col gap-4 rounded-3xl border-2 border-fill px-6 py-6 shadow-sm transition hover:border-secondary hover:shadow-lg"
  >
    <img
      :src="imageURLCreator(lector.photos[0])"
      alt="Foto lektora"
      class="h-40 w-full rounded-lg object-cover"
      v-if="lector.photos && lector.photos.length"
    />
    <div class="flex flex-1 flex-col gap-2">
      <h3 class="text-xl font-semibold">{{ lector.name }}</h3>
      <p
        class="flex-1 overflow-hidden text-sm text-gray-600"
        style="
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          line-clamp: 3;
        "
      >
        {{ lector.description }}
      </p>
    </div>
    <Button :to="`/lektor/${lector.id}`" color="primary">
      Zjistit více >
    </Button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  lector: LektoriItem;
}>();
</script>
