<script lang="ts" setup>
import useStore from '@/store/index';
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

// 暗黑模式
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <div>
    Home

    <button soumns-btn-dfl color="#fff" @click="toggleDark()">Change</button>
  </div>
</template>

<style scoped lang="scss"></style>
