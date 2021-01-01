<template>
  <p>
    provide/inject: {{user}}
  </p>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";

export default defineComponent({
  name: "Inject",
  setup() {
    const user = ref(inject('user'))
    console.log(inject('user'))
    return {
      user
    }
  }
});
</script>