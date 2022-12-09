<template>
  <nav class="text-white xl:w-full">
    <div class="z-40 flex h-full w-full items-center">
      <div
        class="custom-transition textSmall z-30 hidden w-full items-center justify-end space-x-6 font-bold xl:flex xl:space-x-10"
      >
        <AtomSiteMenuItem
          v-for="item in links"
          :key="item.label"
          :item="item"
          class="py-10 font-bold transition-all duration-300 ease-in-out scrolled:py-8"
        />
      </div>
      <transition name="slide-fade">
        <div
          v-if="toggled"
          class="absolute inset-0 top-32 z-50 flex h-screen w-full flex-col space-y-4 xl:shadow-xl"
          @click="toggled = !toggled"
        >
          <AtomSiteMenuItem
            v-for="item in links"
            :key="item.label"
            :item="item"
            class="text-white xl:hidden"
          />
        </div>
      </transition>
      <button
        class="focus:outline-none relative z-50 block xl:hidden"
        @click="toggled = !toggled"
      >
        <AtomIconHamburger :class="{ 'open text-white': toggled }" />
      </button>
    </div>

    <div
      class="fixed inset-0 h-full w-full transition-all duration-500 ease-in-out xl:hidden"
    />
  </nav>
</template>

<script>
export default {
  props: {
    inverted: {
      type: Boolean,
      default: false,
    },

    homepage: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      links: [
        {
          label: 'Lorem',
          link: '',
        },
        {
          label: 'Lorem2',
          link: '',
        },
        {
          label: 'Lorem3',
          link: '',
        },
        {
          label: 'Lorem4',
          link: '',
        },
        {
          label: 'Lorem5',
          link: '',
        },
      ],
      toggled: false,
      toggleSearch: false,
    };
  },
  methods: {
    closeMenu() {
      this.toggled = false;
    },
  },
};
</script>
