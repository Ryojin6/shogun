<template>
  <div class="relative w-full">
    <hooper
      group="group1"
      class="focus:outline-none h-full"
      :wheel-control="false"
      :infinite-scroll="true"
      :settings="hooperSettings"
    >
      <slide> <img src="/images/11.jpg" class="w-full" alt="" /> </slide
      ><slide>
        <img src="/images/1.jpg" class="w-full" alt="" />
      </slide>
      <slide> <img src="/images/2.jpg" class="w-full" alt="" /> </slide
      ><slide>
        <img src="/images/3.jpg" class="w-full" alt="" />
      </slide>
      <slide>
        <img src="/images/9.jpg" class="w-full" alt="" />
      </slide>
      <slide>
        <img src="/images/13.jpg" class="w-full" alt="" />
      </slide>
    </hooper>
    <hooper
      ref="carousel"
      class="focus:outline-none h-full"
      :wheel-control="false"
      :infinite-scroll="true"
      :settings="hooperSettings"
      group="group1"
    >
      <slide> <img src="/images/4.jpg" class="w-full" alt="" /> </slide
      ><slide>
        <img src="/images/5.jpg" class="w-full" alt="" />
      </slide>
      <slide> <img src="/images/7.jpg" class="w-full" alt="" /> </slide
      ><slide>
        <img src="/images/8.jpg" class="w-full" alt="" />
      </slide>
      <slide>
        <img src="/images/10.jpg" class="w-full" alt="" />
      </slide>
      <slide>
        <img src="/images/12.jpg" class="w-full" alt="" />
      </slide>
      <slide>
        <img src="/images/14.jpg" class="w-full" alt="" />
      </slide>
    </hooper>
    <div
      class="md:pin-y-center absolute bottom-0 mx-auto w-full md:bottom-auto"
    >
      <div class="flex items-center justify-between">
        <button @click.prevent="slidePrev">
          <AtomIconNext class="w-8 rotate-180 transform lg:w-12" inverted />
        </button>

        <button type="button" @click.prevent="slideNext">
          <AtomIconNext class="w-8 lg:w-12" inverted />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  props: {
    noPaginate: {
      type: Boolean,
      default: false,
    },
    mintSlider: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      carouselData: 0,
      mintSetting: {
        itemsToShow: 1,

        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 1,
          },
          1000: {
            itemsToShow: 2,
          },
        },
      },
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 2,
          },
          1000: {
            itemsToShow: 4,
            pagination: 'fraction',
          },
        },
      },
    };
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    },
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
  },
};
</script>

<style media="screen">
.hooper {
  height: 100%;
}
.hooper-indicator {
  @apply border-2 border-solid border-white bg-transparent;
}
.hooper-pagination {
  @apply py-2;
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  @apply border-white bg-white;
}
.hooper-indicator {
  @apply h-3 w-3 rounded-full;
}
</style>
