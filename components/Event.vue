<template>
  <div
    v-if="event"
    class="flex justify-center border-2 border-text px-6 py-8 sm:justify-start"
  >
    <div class="flex h-full flex-col gap-6 sm:w-auto sm:flex-row">
      <img
        v-if="event.images && event.images.length > 0"
        :src="imageURLCreator(event.images[0])"
        :alt="event.title + ' úvodní fotka'"
        class="size-64 object-cover sm:size-48"
      />
      <div class="flex max-w-full flex-1 flex-col justify-center gap-4">
        <div class="flex flex-col gap-1">
          <h3>
            {{ event.title }}
          </h3>
          <div class="flex flex-col">
            <p class="text-lg" v-if="event.date">
              {{ getDateSting(event.date) }}
            </p>
            <p class="text-lg" v-if="event.location">{{ event.location }}</p>
          </div>
        </div>
        <div class="flex">
          <Button :href="'/akce/' + event.id" color="secondary"
            >Zjistit více</Button
          >
        </div>
      </div>
    </div>
  </div>

  <div
    v-else-if="skeleton"
    class="flex flex-col items-center gap-6 border-2 border-text px-6 py-8 sm:flex-row"
  >
    <div class="size-48 bg-fill object-cover"></div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  event?: IEvent;
  skeleton?: boolean;
}>();
</script>
