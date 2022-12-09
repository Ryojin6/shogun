<template>
  <label class="tma-radio group" :class="labelClass">
    <input
      :id="formId"
      type="radio"
      class="peer"
      :class="inputClass"
      :value="inputValue"
      :checked="value === inputValue"
      v-bind="$attrs"
      @change="$emit('input', inputValue)"
    />

    <slot />
  </label>
</template>

<script>
let id = 1;

export default {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default: '',
    },
    labelClass: {
      type: String,
      default: '',
    },
    inputClass: {
      type: String,
      default: '',
    },
    value: {
      type: [Boolean, String, Number],
      default: null,
    },
    inputValue: {
      type: [Boolean, String, Number],
      default: null,
    },
  },
  data() {
    const compId = id;
    id += 1;
    return { compId };
  },
  computed: {
    formId() {
      return this.id || `radio-${this.compId}`;
    },
  },
};
</script>

<style>
:where(.tma-radio) {
  @apply inline-flex items-center;
}

:where(.tma-radio) input {
  /* This is mostly copied from the forms plugin as :checked was not working */
  appearance: none;
  padding: 0;
  color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  user-select: none;
  flex-shrink: 0;
  height: theme('spacing.4');
  aspect-ratio: 1 / 1;
  color: var(--tma-input-selected-colour);
  background-color: #fff;
  border-color: var(--tma-input-border-colour);
  border-width: theme('borderWidth.DEFAULT');
  border-radius: 100%;
  margin-right: theme('spacing[1.5]');
}

:where(.tma-radio) input:where(:focus) {
  @apply outline-none ring-2 ring-offset-2 ring-offset-white;
  --tw-ring-color: var(--tma-input-focus-border-colour);
}

:where(.tma-radio) input:where(:checked) {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: var(--tma-white-dot);
}

:where(.tma-radio) input:where(.dark-dot:checked) {
  background-image: var(--tma-black-dot);
}
</style>
