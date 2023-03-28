const App = {
  data() {
    return {
      timers: [
        {time: 160, isRunning: false},
        {time: 1532, isRunning: false},
        {time: 5415, isRunning: false},
        {time: 4833, isRunning: false}]
    }
  },

  methods: {
    addTimer() {
      this.timers.push({
        time: 0,
        interval: null,
      });
    },

    startTimer(timer) {
      if (!timer.interval) {
        timer.interval = setInterval(() => {
          timer.time += 1;
          timer.isRunning = true;
          
        }, 1000);
      }
    },

    pauseTimer(timer) {
      clearInterval(timer.interval);
      timer.interval = null;
      timer.isRunning = false;
    },

    resetTimer(timer) {
      timer.time = 0;
      clearInterval(timer.interval);
      timer.interval = null;
      timer.isRunning = false;
    },

    formatTime(time) {
      const hours = Math.floor(time/3600)
      const minutes = Math.floor((time % 3600) / 60);
      const seconds = time % 60;
      return `${hours ? hours.toString().padStart(2) + ':' : ''}${hours ? minutes.toString().padStart(2, "0") + ':' : minutes ? minutes.toString().padStart(2) + ':' : ''}${hours ? seconds.toString().padStart(2, "0") : minutes ? seconds.toString().padStart(2, "0") : seconds ? seconds.toString().padStart(2) : '0'}`;
    },

  }
}

const app = Vue.createApp(App).mount('#app')