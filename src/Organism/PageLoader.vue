<template>
  <transition name="fade">
    <div
      v-if="elementVisible"
      class="fixed top-0 flex min-h-screen w-full items-end justify-center overflow-hidden bg-[#201f1f]"
    >
      <div class="absolute inset-0 z-30 bg-black opacity-80" />

      <div class="w-full">
        <div class="mx-auto max-w-4xl">
          <img src="/11.png" alt="" class="relative z-50 w-full" />
        </div>
        <div class="absolute top-0 bottom-0 w-full">
          <img
            src="/bg.gif"
            alt=""
            class="relative z-20 h-full w-full object-cover"
          />
        </div>
        <a
          href="#content"
          class="absolute left-1/2 bottom-10 flex w-16 -translate-x-1/2 animate-bounce items-center justify-center"
          ><img src="/scroll-down.svg" alt=""
        /></a>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      elementVisible: false,
    };
  },

  mounted() {
    setTimeout(() => {
      this.elementVisible = false;
    }, 2500);
  },
};
</script>
