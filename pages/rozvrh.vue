<template>
  <Page :title="[{ text: 'Rozvrh', link: '/rozvrh' }]" :padding="false">
    <template #noPadding>
      <CourseSchedule />
    </template>
  </Page>
</template>

<script lang="ts" setup></script>
