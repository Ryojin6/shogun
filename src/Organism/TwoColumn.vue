<template>
  <AtomAnimate>
    <div
      class="flex flex-col items-center px-4 lg:flex-row lg:space-x-16"
      :class="{ 'lg:flex-row-reverse lg:space-x-reverse': reverse }"
    >
      <div class="glow lg:w-1/2">
        <img :src="image" alt="" />
      </div>
      <div class="flex flex-col pt-16 lg:w-1/2 lg:pt-0">
        <h2 v-if="subheading" class="textSmall mb-8 uppercase">
          {{ subheading }}
        </h2>
        <h3 class="textLarge font-bold uppercase">
          {{ title }}
        </h3>
        <div
          class="textSmall prose-white prose pt-6 text-white"
          v-html="description"
        />
      </div>
    </div>
  </AtomAnimate>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: '',
    },
    subheading: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    buttonTitle: {
      type: String,
      default: '',
    },
    secondLink: {
      type: String,
      default: '',
    },
    secondButtonTitle: {
      type: String,
      default: '',
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
