<template>
  <div class="todo-list">
    <h3 class="mg10">Todo List</h3>
    <van-field
      v-model="addTodoName"
      :autofocus="true"
      center
      clearable
      placeholder="Todo List"
    >
      <template #button>
        <van-button size="small" type="primary" @click="addTodoAction">新增清单</van-button>
      </template>
    </van-field>
    <div>
      <h3 class="mg10">任务清单</h3>
      <van-swipe-cell
       v-for="(item, index) of undoneTodoList"
       :key="item.id"
       >
        <van-cell
        :border="false"
        :title="item.name"
        :value="index == 0 ? '往左划' : ''"
        />
        <template #right>
          <van-button square type="danger" text="删除" @click="delTodoAction(item, true)"/>
          <van-button square type="primary" text="完成" @click="doneTodo(item)"/>
        </template>
      </van-swipe-cell>
    </div>
    <div class="done-todo-area">
      <h3 class="mg10">已完成的任务清单</h3>
      <van-swipe-cell
       v-for="item_1 in completedTodoList"
       :key="item_1.id"
       >
        <van-cell
        :border="false"
        :title="item_1.name"
        />
        <template #right>
          <van-button square type="danger" text="删除" @click="delTodoAction(item, false)"/>
        </template>
      </van-swipe-cell>
    </div>
    <div class="mg10">
      <van-button @click="goAddress" block type="primary">地址列表</van-button>
    </div>
    <div class="mg10 mg-t20">
      <van-button @click="goChat" block type="primary">聊天室</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, getCurrentInstance } from "vue";
import router from "../router";

export default defineComponent({
  name: "ToDoList",
  setup() {
    // this调用
    const CurrentInstance = getCurrentInstance();

    const addTodoName = ref(""); // input 绑定值

    // 清单列表
    const undoneTodoList = reactive([
      {
        id: Date.now(),
        name: "吃饭",
      },
    ]);

    // 已完成的清单列表
    const completedTodoList = reactive([
      {
        id: Date.now(),
        name: "睡觉",
      },
    ]);

    const addTodoAction = () => {
      if (addTodoName.value === "")
        return (CurrentInstance?.refs?.todoinput as HTMLInputElement).focus();
      // if (addTodoName.value === "") return todoinput.focus();
      const obj = {
        id: Date.now(),
        name: addTodoName.value,
      };
      undoneTodoList.push(obj);
      addTodoName.value = "";
    };

    const delTodoAction = (item: { id: number }, todo: boolean) => {
      if (todo) {
        undoneTodoList.splice(
          undoneTodoList.findIndex((i) => i.id === item.id),
          1
        );
      } else {
        completedTodoList.splice(
          completedTodoList.findIndex((i) => i.id === item.id),
          1
        );
      }
    };

    const doneTodo = (item: { id: number; name: string }) => {
      undoneTodoList.splice(
        undoneTodoList.findIndex((i) => i.id === item.id),
        1
      );
      completedTodoList.push(item);
    };

    function goAddress() {
      router.push("/address/list");
    }

    function goChat() {
      router.push("/chat/list");
    }

    return {
      addTodoName,
      addTodoAction,
      delTodoAction,
      doneTodo,
      undoneTodoList,
      completedTodoList,
      goAddress,
      goChat
    };
  },
});
</script>