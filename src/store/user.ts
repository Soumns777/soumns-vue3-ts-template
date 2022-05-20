import { defineStore } from 'pinia';

interface IPerson {
  name: string;
  age: number;
}

export const useStore = defineStore('user', {
  // arrow function recommended for full type inference
  state: () => {
    return {
      user: {
        name: 'iu',
        age: 18,
      },
    };
  },
  getters: {
    firstName: () => 'stephen',
    nextName: () => 'curry',
  },
  actions: {
    changeName(user: IPerson) {
      this.user = user;
      console.log('🌈 pinia响应式actions', this.user);
    },
  },
});
