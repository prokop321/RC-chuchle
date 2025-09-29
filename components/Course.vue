<template>
  <NuxtLink
    :to="`/kurz/${course.id}`"
    class="group flex flex-col gap-2 rounded-3xl border-2 border-fill p-4 shadow-sm transition hover:border-secondary hover:shadow-lg"
  >
    <img
      :src="imageURLCreator(course.images[0])"
      class="max-h-32 w-full rounded-lg object-cover"
      alt="Obrázek kurzu"
      v-if="course.images && course.images.length"
    />
    <div class="flex flex-col gap-1">
      <h3 class="text-xl">{{ course.title }}</h3>
      <div class="flex flex-wrap items-center">
        <p v-if="course.schedule" class="mr-2">
          {{ dayTimeToString(course.schedule?.start) }} -
          {{ dayTimeToString(course.schedule.end) }}
        </p>
        <NuxtLink
          v-if="lektorId && lektorName"
          :to="`/lektor/${lektorId}`"
          class="mb-2 text-secondary underline"
        >
          {{ lektorName }}
        </NuxtLink>
      </div>
    </div>
    <h4 class="-mt-2 ml-1 text-primary underline">
      Zjistit více<span
        class="ml-1 inline-block transition-transform group-hover:translate-x-0.5"
        >></span
      >
    </h4>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { useMainStore } from "~/store/main";

const props = defineProps<{
  course: ICourse;
}>();

const mainStore = useMainStore();
const { lektori, loaded } = storeToRefs(mainStore);

const lektorId = computed(() => {
  if (!props.course.lector) return null;

  if (typeof props.course.lector === "string") {
    return props.course.lector;
  } else if (
    Array.isArray(props.course.lector) &&
    props.course.lector.length > 0
  ) {
    return props.course.lector[0].id;
  }

  return null;
});

const lektorName = computed(() => {
  if (!loaded.value || !lektorId.value || lektori.value === "error")
    return null;

  const lektor = lektori.value[lektorId.value];
  return lektor?.name || null;
});
</script>
