<template>
  <button class="lang-button">
    <slot>按钮</slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LangButton"
});
</script>

<style lang="stylus" scoped>
.lang-button {
  border: none;
  outline: 0;
  padding: 8px 12px;
  border-radius: 5px;
  color: #FFF;
  background-color: #409EFF;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  -webkit-transition: .1s;
  transition: .1s;
  font-weight: 500;
}
</style>