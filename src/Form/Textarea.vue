<template>
  <div class="tma-textarea group">
    <textarea
      :id="formId"
      placeholder=" "
      :type="type"
      class="peer"
      :class="inputClass"
      v-bind="$attrs"
      @input="$emit('input', $event.target.value)"
    />
    <label :for="formId" :class="labelClass"><slot /></label>
  </div>
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
  },
  data() {
    const compId = id;
    id += 1;
    return { compId };
  },
  computed: {
    formId() {
      return this.id || `textarea-${this.compId}`;
    },
  },
};
</script>

<style>
/* These all use :where() so that additional classes automatically win out in
 * the cascade */

/* Base styles */
:where(.tma-textarea) {
  @apply relative;
  margin-top: var(--tma-input-default-heading-space);
}

:where(.tma-textarea textarea) {
  @apply outline-none w-full border-b-2;
  border-bottom-color: var(--tma-input-border-colour);
}

:where(.tma-textarea) textarea {
  @apply pt-1.5;
}

:where(.tma-textarea label) {
  @apply absolute left-0 -top-3.5 text-sm transition-all;
  color: var(--tma-input-label-colour);
}

/* Invalid styles */
:where(.tma-textarea textarea:invalid:not(:placeholder-shown)) {
  border-bottom-color: var(--tma-input-invalid-border-colour);
}

:where(.tma-textarea textarea:invalid:not(:placeholder-shown) + label) {
  color: var(--tma-input-invalid-label-colour);
}

/* Placeholder shown styles */
:where(.tma-textarea textarea:placeholder-shown + label) {
  @apply top-2 text-base;
  color: var(--tma-input-placeholder-colour);
}

/* Focus styles */
:where(.tma-textarea textarea:focus) {
  border-bottom-color: var(--tma-input-focus-border-colour);
}

:where(.tma-textarea textarea):focus-visible {
  @apply outline-none;
}

:where(.tma-textarea textarea:focus + label) {
  @apply -top-3.5 text-sm;
  color: var(--tma-input-focus-label-colour);
}

/* Invalid + focus styles */
:where(.tma-textarea textarea:focus:invalid:not(:placeholder-shown) + label) {
  color: var(--tma-input-invalid-label-colour);
}
</style>
