<template>
  <Transition name="fade">
    <div
      v-if="popUpContent"
      class="fixed inset-0 z-40 flex size-full items-center justify-center bg-black/90 p-4"
    >
      <div class="rounded-xl bg-background px-2 py-5 md:px-5">
        <div class="flex max-w-xl flex-col gap-5">
          <h3 class="text-center text-5xl">{{ popUpContent.title }}</h3>

          <div class="flex flex-col items-start gap-2">
            <img
              v-if="popUpContent.images && popUpContent.images.length > 0"
              :src="imageURLCreator(popUpContent.images![0])"
              :alt="popUpContent.title || 'Pop-up image'"
              class="max-h-96 w-full rounded-lg object-cover"
            />
            <VueMarkdown
              v-if="popUpContent.text"
              :source="
                popUpContent.text.length > 400
                  ? popUpContent.text.slice(0, 400) + '...'
                  : popUpContent.text
              "
              class="markdown-content mt-2 text-justify"
            />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <Button
            @click="mainStore.closePopup(popUpContent.id)"
            :href="'/aktuality/' + popUpContent.id"
            class="w-full"
            >Dozvědět se více</Button
          >
          <Button
            color="secondary"
            class="w-full"
            @click="mainStore.closePopup(popUpContent.id)"
            >Zavřít</Button
          >
        </div>
      </div>
    </div>
  </Transition>
</template>

<script lang="ts" setup>
import VueMarkdown from "vue-markdown-render";

const mainStore = useMainStore();
const { popUpContent } = storeToRefs(mainStore);
</script>
