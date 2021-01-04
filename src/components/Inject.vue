<template>
  <p>provide/inject: {{ user }}</p>
  <van-field v-model="user" label="user" placeholder="user" />
  <van-field v-model="userCopy" label="userCopy" placeholder="userCopy" />
  <!-- <p>provide/inject: {{ user_1 }}</p> -->
  <van-field v-model.number="count" label="count" placeholder="watch count" />
  <van-field v-model="name" label="name" placeholder="watch name" />
</template>

<script lang="ts">
import { defineComponent, inject, ref, reactive, watch, toRefs, computed } from "vue";

export default defineComponent({
  name: "Inject",
  setup() {
    const user = ref(inject("user"));
    const userCopy = ref(("user_1"));
    const state = reactive({ count: 0, name: "lang" });

    // watch(
    //   user, (newValue, oldValue) => {
    // 	console.log(`原值为${oldValue}`)
    // 	console.log(`新值为${newValue}`)
    // })

    watch(
      [() => state.count, () => state.name, user],
      ([newCount, newName, newUser], [oldvCount, oldvName, oldUser]) => {
        console.log("旧的 count 值", oldvCount); // 旧的 count 值
        console.log("新的 count 值", newCount); // 新的 count 值
        console.log("旧的 name 值", oldvName); // 旧的 name 值
        console.log("新的 name 值", newName); // 新的 name 值
        console.log("旧的 user 值", oldUser); // 旧的 user 值
        console.log("新的 user 值", newUser); // 新的 user 值
      }
    );

    return {
      user,
      userCopy,
      ...toRefs(state),
    };
  },
});
</script>