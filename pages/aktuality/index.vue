<template>
  <Page :title="[{ link: '/aktuality', text: 'Aktuality' }]">
    <PostGrid />
  </Page>
</template>

<script setup lang="ts">
// No filtering needed - just show all posts sorted by newest first
</script>
