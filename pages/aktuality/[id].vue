<template>
  <Page
    v-if="post"
    :title="[
      { text: 'Aktuality', link: '/aktuality' },
      { text: post.title || 'Bez názvu', link: post.id },
    ]"
  >
    <div class="flex flex-col gap-4 pt-6 lg:flex-row">
      <Gallery
        v-if="post && post.images && post.images.length > 0"
        :images="post.images"
        :alt-text="`${post.title} úvodní fotka`"
        variant="event"
      />
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-1">
          <h3 class="text-text-transparent text-xl" v-if="post.timestamp">
            {{ getDateSting(post.timestamp) }}
          </h3>
        </div>

        <VueMarkdown
          v-if="post.text"
          :source="post.text"
          class="markdown-content text-justify"
        />
      </div>
    </div>
  </Page>
</template>

<script setup lang="ts">
import VueMarkdown from "vue-markdown-render";
import { useMainStore } from "~/store/main";

const mainStore = useMainStore();
const { posts } = storeToRefs(mainStore);

const postId = useRoute().params.id as string;

const post = computed<IPost | undefined>(() => {
  if (posts.value === "error") return undefined;
  return posts.value[postId];
});
</script>
