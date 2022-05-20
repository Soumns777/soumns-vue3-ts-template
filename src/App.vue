<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useStore } from '@/store/user';
import { storeToRefs } from 'pinia';

const store = useStore();

const { user, firstName, nextName } = storeToRefs(store);
console.log(user, firstName, nextName, '💙💛 pinia');
</script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="scss"></style>
