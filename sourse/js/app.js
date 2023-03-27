const App = {
  data() {
    return {
      timers: [
        {time: 160},
        {time: 1532},
        {time: 5415},
        {time: 4833}]
    }
  },

  methods: {
    addTimer() {
      this.timers.push({
        time: 0,
        interval: null,
      });
    },
    
    formatTime(time) {
      const hours = Math.floor(time/3600)
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      return `${hours ? hours.toString().padStart(2) + ':' : ''}${hours ? minutes.toString().padStart(2, "0") + ':' : minutes ? minutes.toString().padStart(2) + ':' : ''}${hours ? seconds.toString().padStart(2, "0") : minutes ? seconds.toString().padStart(2, "0") : seconds ? seconds.toString().padStart(2) : '0'}`;
    }
  }
}

const app = Vue.createApp(App).mount('#app')