<template>
  <div class="todo-list text-center mg20">
    <h3 class="mg10">Todo List</h3>
    <div class="flex flex-center">
      <input ref="todoinput" v-focus="200" v-model="addTodoName" />
      <van-button @click="addTodoAction" size="small" type="primary">
        新增清单
      </van-button>
    </div>
    <div>
      <h3 class="mg10">任务清单</h3>
      <van-cell-group>
        <van-cell :key="item.id" v-for="item in undoneTodoList">
          <template #title>
            <span>---{{ item.name }}---</span>
          </template>
          <template #right-icon>
            <van-button @click="doneTodo(item)" size="small" type="success"
              >已完成</van-button
            >
            <van-button
              @click="delTodoAction(item, true)"
              size="small"
              type="danger"
              >删除</van-button
            >
          </template>
        </van-cell>
      </van-cell-group>
    </div>
    <div class="done-todo-area">
      <h3 class="mg10">已完成的任务清单</h3>
      <van-cell-group>
        <van-cell :key="item.id" v-for="item in completedTodoList">
          <template #title>
            <span>---{{ item.name }}---</span>
          </template>
          <template #right-icon>
            <van-button
              @click="delTodoAction(item, false)"
              size="small"
              type="danger"
              >删除</van-button
            >
          </template>
        </van-cell>
      </van-cell-group>
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