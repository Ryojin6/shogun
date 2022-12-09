<template>
  <div class="mx-auto max-w-6xl text-center">
    <div class="md:text-xl 2xl:text-2xl">{{ subtitle }}</div>
    <h2
      class="linear-wipe text-xl font-bold md:text-2xl xl:text-3xl 2xl:text-4xl"
    >
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
};
</script>
