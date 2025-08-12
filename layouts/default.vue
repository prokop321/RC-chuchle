<template>
  <div class="flex min-h-screen flex-col">
    <Nav  />

    <div class="flex-1">
      <slot />
    </div>

    <Footer mode="vsestranost" />
  </div>
</template>
