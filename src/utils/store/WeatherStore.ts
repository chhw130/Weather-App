import { defineStore } from 'pinia';
import { WeatherType } from '../axiosSetting/axios';

interface WeatherStoreState {
  weatherData: WeatherType[];
}

export const useWeatherStore = defineStore('weather', {
  state: (): WeatherStoreState => {
    return { weatherData: [] };
  },
  actions: {
    updateWeather(state: WeatherType[] | void) {
      this.weatherData = state;
    },
    initWeather() {
      this.weatherData = [];
    },
  },
});
