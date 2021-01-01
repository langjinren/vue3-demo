<template>
  <div class="home text-center">
    <header
      v-pin:[direction]="pinPadding"
      style="width: 100%; text-align: center"
      class="max640"
    >
      <p>
        Stick me
        <span class="text-color">{{ pinPadding }}</span>
        px from the {{ direction }} of the page
      </p>
    </header>

    <p class="mg20 text-color">{{ time }}</p>

    <img alt="Vue logo" src="../assets/logo.png" />
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
    <p class="mg10 text-color">以下是自定义全局组件</p>
    <div class="mg-b20">
      <lang-button @click="handleClick()">自定义全局按钮</lang-button>
    </div>
    <div class="mg-b20">
      <lang-select />
    </div>
    <div class="mg-b20 flex flex-center">
      自定义指令：
      <input
        type="range"
        min="0"
        max="500"
        v-model="pinPadding"
        style="z-index: 9"
      />
    </div>
    <Button type="success" @click="showToast">更改字体颜色</Button>
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { defineComponent, onMounted, onBeforeUnmount, ref } from "vue";
import { Button, Dialog, Toast } from "vant";
import HelloWorld from "../components/HelloWorld.vue";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
    Button,
  },
  setup() {
    const direction = ref<string>("top");
    const pinPadding = ref<number>(0);
    const time = ref<string>("");
    const timer = ref<number>(0);
    const color = ref<string>("red");
    const city = ref<Array<string>>([]);

    const showToast = () => {
      Toast("字体颜色已改蓝色");
      color.value = "blue";
    };

    const handleClick = () => {
      Dialog({
        title: "标题",
        message: "这是一个全局按钮组件",
      });
    };

    const initTime = () => {
      time.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
      timer.value = setInterval(() => {
        time.value = dayjs().format("YYYY-MM-DD HH:mm:ss");
      }, 1000);
    };

    onMounted(() => {
      initTime();
    });

    onBeforeUnmount(() => {
      clearInterval(timer.value);
    });

    return {
      direction,
      pinPadding,
      color,
      city,
      time,
      showToast,
      handleClick,
      initTime
    };
  },
});
</script>

