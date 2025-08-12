<template>
  <Page :title="[{ text: 'Lektoři', link: '/lektori' }]" :padding="false">
    <template #noPadding>
      <LectorGrid />
    </template>
  </Page>
</template>

<script lang="ts" setup></script>
