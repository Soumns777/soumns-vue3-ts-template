<script lang="ts" setup>
import { reactive, ref } from 'vue';

import useStore from '@/store/index';
import { storeToRefs } from 'pinia';
import { useEverything } from '@/store/index';
console.log(useEverything().User, 'useEverything 💙💛');

const store = useStore().User;

// 异步调用
store.changeName({
  name: 'yoona',
  age: 23,
});

const { user, firstName, nextName } = storeToRefs(store);
console.log(user, '💙💛 get-pinia');
</script>

<template>
  <div>Home</div>
</template>

<style scoped lang="scss"></style>
