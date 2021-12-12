const useStore = defineStore('demo', {
  state: () => ({
    counter: 0,
    clicks: 0,
  }),
  getters: {
    getCounter: (state) => state.counter,
    getClicks: (state) => state.clicks,
  },
  actions: {
    add() {
      this.counter++;
      this.clicks++;
    },
    sub() {
      this.counter--;
      this.clicks++;
    },
    reset() {
      this.counter = 0;
      this.clicks = 0;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        storage: localStorage,
      },
    ],
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}

export default useStore;
