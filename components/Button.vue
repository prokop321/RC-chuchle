<template>
  <component
    :is="component"
    v-bind="componentProps"
    :class="buttonClasses"
    class="header-font flex h-14 items-center justify-center rounded-xl p-4 text-center transition"
  >
    <slot />
  </component>
</template>

<script lang="ts" setup>
interface Props {
  to?: string;
  href?: string;
  color?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  color: "primary",
  disabled: false,
});

// Determine which component to render
const component = computed(() => {
  if (props.to || props.href) return resolveComponent("NuxtLink");
  return "button";
});

// Generate props based on component type
const componentProps = computed(() => {
  if (props.to) {
    return { to: props.to };
  }
  if (props.href) {
    return { href: props.href };
  }
  return { type: "button" };
});

// Generate classes based on color variant
const buttonClasses = computed(() => {
  const classes: Record<string, boolean> = {};

  switch (props.color) {
    case "primary":
      classes["bg-primary"] = true;
      classes["text-background"] = true;
      classes["hover:bg-primaryDark"] = !props.disabled;
      break;

    case "secondary":
      classes["border-4"] = true;
      classes["border-primary"] = true;
      classes["text-primary"] = true;
      classes["bg-background"] = true;
      classes["hover:text-primaryDark"] = !props.disabled;
      classes["hover:!bg-fill"] = !props.disabled;
      classes["hover:border-primaryDark"] = !props.disabled;
      break;

    case "tertiary":
      classes["text-primary"] = true;
      classes["bg-background"] = true;
      classes["hover:text-primaryDark"] = !props.disabled;
      classes["hover:!bg-fill"] = !props.disabled;
      break;
  }

  // Add disabled state
  if (props.disabled) {
    classes["opacity-50"] = true;
    classes["cursor-not-allowed"] = true;
    classes["pointer-events-none"] = true;
  }

  return classes;
});
</script>
