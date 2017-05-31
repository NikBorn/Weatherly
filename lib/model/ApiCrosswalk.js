class ApiCrosswalk  {
  constructor(obj) {
    this.date = 'May 31st, 2017';
    this.city = obj.current_observation.display_location.full;
    this.state = obj.current_observation.display_location.state;
    this.zip = obj.current_observation.display_location.zip;
    this.weather = obj.current_observation.weather;
    this.temp = obj.current_observation.temp_f;
    this.icon = obj.current_observation.icon;
    // this.summary = obj.forecast.txt_forecast.forecast_day[0].fcttext;
    // this.high = obj.forecast.simple_forecast.forecast_day[0].high.fahrenheit;
    // this.low = obj.forecast.simple_forecast.forecast_day[0].low.fahrenheit;
    
  }
}


export default ApiCrosswalk
