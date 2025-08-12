<template>
  <Page
    v-if="event"
    :title="[
      { text: 'Akce', link: '/akce' },
      { text: event.title || 'Bez názvu', link: event.id },
    ]"
  >
    <div class="flex flex-col gap-4 pt-6 lg:flex-row">
      <Gallery
        v-if="event && event.images && event.images.length > 0"
        :images="event.images"
        :alt-text="`${event.title} úvodní fotka`"
        variant="event"
      />
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-1">
          <h3 class="text-2xl" v-if="event.date">
            {{ getDateSting(event.date) }}
          </h3>
          <h3 class="text-2xl">{{ event.location }}</h3>
        </div>

        <VueMarkdown
          v-if="event.description"
          :source="event.description"
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
const { events } = storeToRefs(mainStore);

const eventId = useRoute().params.id as string;

const event = computed<IEvent | undefined>(() => {
  if (events.value === "error") return undefined;
  return events.value[eventId];
});
</script>
