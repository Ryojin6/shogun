<template>
  <label class="tma-checkbox group" :class="labelClass">
    <input
      :id="formId"
      type="checkbox"
      class="peer"
      :class="inputClass"
      :value="inputValue"
      :checked="checked"
      v-bind="$attrs"
      @change="change"
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
      type: [Boolean, String, Number, Array],
      default: null,
    },
    inputValue: {
      type: [Boolean, String, Number],
      default: null,
    },
    trueValue: {
      type: [Boolean, String, Number],
      default: true,
    },
    falseValue: {
      type: [Boolean, String, Number],
      default: false,
    },
  },
  data() {
    const compId = id;
    id += 1;
    return { compId };
  },
  computed: {
    formId() {
      return this.id || `checkbox-${this.compId}`;
    },
    checked() {
      if (Array.isArray(this.value)) {
        return this.value.includes(this.inputValue);
      }

      if (this.trueValue === true) {
        return !!this.value;
      }

      return this.value === this.trueValue;
    },
  },
  methods: {
    change($event) {
      if (Array.isArray(this.value)) {
        if ($event.target.checked) {
          this.$emit('input', this.value.concat([this.inputValue]));
        } else {
          const i = this.value.indexOf(this.inputValue);
          this.$emit(
            'input',
            this.value.slice(0, i).concat(this.value.slice(i + 1)),
          );
        }
      } else {
        const value = $event.target.checked ? this.trueValue : this.falseValue;
        this.$emit('input', value);
      }
    },
  },
};
</script>

<style>
:where(.tma-checkbox) {
  @apply inline-flex items-center;
}

:where(.tma-checkbox) input {
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
  border-radius: theme('borderRadius.none');
  margin-right: theme('spacing[1.5]');
}

:where(.tma-checkbox) input:where(:focus) {
  @apply outline-none ring-2 ring-offset-2 ring-offset-white;
  --tw-ring-color: var(--tma-input-focus-border-colour);
}

:where(.tma-checkbox) input:where(:checked) {
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: var(--tma-white-check);
}

:where(.tma-checkbox) input:where(.dark-check:checked) {
  background-image: var(--tma-black-check);
}
</style>
