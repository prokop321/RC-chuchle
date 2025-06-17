<template>
  <NuxtLink
    :to="`/kurzy/${course.id}`"
    class="flex max-w-96 flex-col gap-6 rounded-3xl border-2 border-fill px-6 py-8 shadow-sm transition hover:border-secondary hover:shadow-lg"
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
        <p v-if="course.lector">{{ course.lector }}</p>
      </div>
    </div>
    <h4 class="text-primary underline">Zjistit více ></h4>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  course: ICourse;
}>();
</script>
