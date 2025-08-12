<template>
  <div
    v-if="postsToShow.length || !loaded"
    class="grid grid-cols-1 gap-4 py-4 lg:grid-cols-2"
  >
    <Post v-if="!loaded" v-for="el in 6" :key="el" :skeleton="true" />

    <Post
      v-else-if="postsToShow.length"
      v-for="post in postsToShow"
      :key="post.id"
      :post="post"
    />
  </div>
  <template v-else>
    <div
      v-if="posts === 'error'"
      class="flex w-full flex-col items-center gap-4 py-8"
    >
      <h3>Nastal problém během načítání aktualit 😬</h3>
      <p>Zkus stránku načíst znova nebo ji zkontroluj později</p>
    </div>
    <div
      v-else-if="postsToShow.length === 0"
      class="flex w-full flex-col items-center gap-4 py-8"
    >
      <p class="w-full py-8">Žádné aktuality k zobrazení</p>
    </div>
  </template>
</template>

<script lang="ts" setup>
import { useMainStore } from "~/store/main";

const mainStore = useMainStore();
const { posts, loaded } = storeToRefs(mainStore);

const postsToShow = computed<IPost[]>(() => {
  if (posts.value === "error") return [];

  let filteredPosts = Object.values(posts.value);

  // Sort by timestamp (newest first)
  filteredPosts.sort((a, b) => {
    if (!a.timestamp) return 1;
    if (!b.timestamp) return -1;
    return b.timestamp - a.timestamp;
  });

  return filteredPosts;
});
</script>
