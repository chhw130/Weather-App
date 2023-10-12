import { defineStore } from 'pinia';

interface LoadingStoreState {
  isLoading: boolean;
}

export const useLoadingStore = defineStore('loading', {
  state: (): LoadingStoreState => {
    return { isLoading: false };
  },

  actions: {
    updateLoading() {
      this.isLoading = !this.isLoading;
    },
  },
});
