<template>
  <section
    class="z-10 flex-shrink-0"
    :class="{
      'pt-0': tp === '0',
      'pt-10': tp === 'small',
      'pt-12 md:pt-24 xl:pt-40': tp === 'large',
      'pb-0': bp === '0',
      'pb-10': bp === 'small',
      'pb-12 md:pb-24 xl:pb-40': bp === 'large',
      'px-4 xl:px-12 ': !fullWidth,
    }"
  >
    <slot />
  </section>
</template>

<script>
export default {
  props: {
    bgColour: {
      type: String,
      default: '',
    },
    tp: {
      type: String,
      default: '',
    },
    bp: {
      type: String,
      default: '',
    },
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
