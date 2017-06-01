class ApiCrosswalk  {
  constructor(obj) {
    this.current = {
      date: 'May 31st, 2017',
      city: obj.current_observation.display_location.full,
      state: obj.current_observation.display_location.state,
      zip: obj.current_observation.display_location.zip,
      weather: obj.current_observation.weather,
      temp: obj.current_observation.temp_f,
      icon: obj.current_observation.icon,
      summary: obj.forecast.txt_forecast.forecastday[0].fcttext,
      high: obj.forecast.simpleforecast.forecastday[0].high.fahrenheit,
      low: obj.forecast.simpleforecast.forecastday[0].low.fahrenheit,
    };
    this.hourly = obj.hourly_forecast.map(e => {
      return {
        hour: e.FCTTIME.civil,
        condition: e.condition,
        icon: e.icon,
        temp: e.temp.english,
      };
    });
    this.daily = obj.forecast.simpleforecast.forecastday.map(e => {
      return {
        weekday: e.date.weekday,
        date: `${e.date.monthname} ${e.date.day}, ${e.date.year}`,
        high: e.high.fahrenheit,
        low: e.low.fahrenheit,
        icon: e.icon,
        condition: e.conditions,
      };
    });
  }
}

export default ApiCrosswalk;
