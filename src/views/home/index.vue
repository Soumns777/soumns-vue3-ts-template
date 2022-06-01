<script lang="ts" setup>
import { reactive, ref } from 'vue';

import useStore from '@/store/index';
import { storeToRefs } from 'pinia';
import { useEverything } from '@/store/index';

import { login } from '@/services/request';

console.log(useEverything().User, 'useEverything 💙💛');

const store = useStore().User;

// 异步调用
store.changeName({
  name: 'yoona',
  age: 23,
});

const { user, firstName, nextName } = storeToRefs(store);
console.log(user, '💙💛 get-pinia');

// 调用接口
login({
  name: 'iu',
  age: 19,
}).then((res) => console.log(res, '💙💛 res data '));
</script>

<template>
  <div>Home</div>
</template>

<style scoped lang="scss"></style>
