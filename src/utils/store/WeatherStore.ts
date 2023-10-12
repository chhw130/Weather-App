import { defineStore } from 'pinia';
import { WeatherType } from '../axiosSetting/axios';

export const useWeatherStore = defineStore('weather', {
  state: () => {
    return { weatherData: [] };
  },
  actions: {
    updateWeather(state: WeatherType[] | void) {
      this.weatherData = state;
    },
  },
});
