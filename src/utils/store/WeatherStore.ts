import { defineStore } from 'pinia';

export const useWeatherStore = defineStore('weather', {
  state: () => {
    return { weatherData: [] };
  },

  actions: {
    fetchWeather(state) {
      this.weatherData = state;
    },
  },
});
