<template>
  <Page :title="[{ text: 'Kurzy', link: '/kurzy' }]" :padding="false">
    <template #noPadding>
      <CourseSchedule />
    </template>
  </Page>
</template>

<script lang="ts" setup></script>
