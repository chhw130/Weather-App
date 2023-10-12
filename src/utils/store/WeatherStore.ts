import { defineStore } from 'pinia';

export const useWeatherStore = defineStore('weather', {
  state: () => {
    return { weatherData: [] };
  },
  actions: {
    updateWeather(state: WeatherType[]) {
      this.weatherData = state;
    },
  },
});
