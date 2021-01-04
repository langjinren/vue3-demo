<template>
  <div class="wrapper">
    <!-- <transition name="van-fade">
      <router-view />
    </transition> -->
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>

    <van-tabbar route placeholder v-show="showFooter">
      <van-tabbar-item replace to="/" icon="home-o">Home</van-tabbar-item>
      <van-tabbar-item replace to="/about" icon="search">About</van-tabbar-item>
      <van-tabbar-item replace to="/todoList" icon="friends-o">ToDo</van-tabbar-item>
      <van-tabbar-item replace to="/luckdraw" icon="setting-o">LuckDraw</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "App",
  setup(props, context) {
    const showFooter = ref(false)
    const route = useRoute()
    const plus = computed({
      // 取值函数
      get: () => showFooter.value,
      // 赋值函数
      set: val => showFooter.value = val
    })
    plus.value = route.path.split("/").length < 3;
    return {
      showFooter
    }
  }
});
</script>