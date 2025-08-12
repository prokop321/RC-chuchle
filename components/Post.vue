<template>
  <div
    v-if="post"
    class="flex justify-center rounded-3xl border-2 border-fill px-6 py-8 shadow-sm transition hover:border-secondary hover:shadow-lg sm:justify-start"
  >
    <div class="flex h-full flex-col gap-6 sm:w-auto sm:flex-row">
      <img
        v-if="post.images && post.images.length > 0"
        :src="imageURLCreator(post.images[0])"
        :alt="post.title + ' úvodní fotka'"
        class="size-64 rounded-lg object-cover sm:size-48"
      />
      <div class="flex max-w-full flex-1 flex-col justify-center gap-4">
        <div class="flex flex-col gap-1">
          <h3>
            {{ post.title }}
          </h3>
          <div class="flex flex-col">
            <p class="text-text-transparent text-lg" v-if="post.timestamp">
              {{ getDateSting(post.timestamp) }}
            </p>
          </div>
          <p class="text-text-transparent line-clamp-3" v-if="post.text">
            {{ post.text }}
          </p>
        </div>
        <div class="flex">
          <Button :href="'/aktuality/' + post.id" color="secondary"
            >Přečíst více</Button
          >
        </div>
      </div>
    </div>
  </div>

  <div
    v-else-if="skeleton"
    class="flex flex-col items-center gap-6 rounded-3xl border-2 border-fill px-6 py-8 shadow-sm sm:flex-row"
  >
    <div class="size-48 rounded-lg bg-fill object-cover"></div>
    <div class="flex flex-1 flex-col gap-4">
      <div class="h-6 w-3/4 rounded bg-fill"></div>
      <div class="h-4 w-1/2 rounded bg-fill"></div>
      <div class="h-4 w-full rounded bg-fill"></div>
      <div class="h-4 w-4/5 rounded bg-fill"></div>
      <div class="h-10 w-32 rounded bg-fill"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  post?: IPost;
  skeleton?: boolean;
}>();
</script>
