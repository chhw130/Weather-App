import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
  state: () => {
    return { isLoading: false };
  },

  actions: {
    updateLoading() {
      this.isLoading = !this.isLoading;
    },
  },
});
