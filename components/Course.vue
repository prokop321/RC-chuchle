<template>
  <NuxtLink
    :to="`/kurz/${course.id}`"
    class="group flex max-w-96 flex-col gap-6 rounded-3xl border-2 border-fill px-6 py-8 shadow-sm transition hover:border-secondary hover:shadow-lg"
  >
    <img
      :src="imageURLCreator(course.images[0])"
      alt="Obrázek kurzu"
      v-if="course.images && course.images.length"
    />
    <div class="flex flex-col gap-1">
      <h3 class="text-2xl">{{ course.title }}</h3>
      <div>
        <p v-if="course.schedule">
          {{ dayTimeToString(course.schedule?.start) }} -
          {{ dayTimeToString(course.schedule.end) }}
        </p>
        <NuxtLink
          v-if="lektorId && lektorName"
          :to="`/lektor/${lektorId}`"
          class="text-secondary underline"
        >
          {{ lektorName }}
        </NuxtLink>
      </div>
    </div>
    <h4 class="text-primary underline">
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
