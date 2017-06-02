const testData = {
  "response": {
    "version": "0.1",
    "termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
    "features": {
      "forecast": 1,
      "conditions": 1,
      "hourly10day": 1,
      "forecast10day": 1
    }
  },
  "current_observation": {
    "image": {
      "url": "http://icons.wxug.com/graphics/wu2/logo_130x80.png",
      "title": "Weather Underground",
      "link": "http://www.wunderground.com"
    },
    "display_location": {
      "full": "Littleton, CO",
      "city": "Littleton",
      "state": "CO",
      "state_name": "Colorado",
      "country": "US",
      "country_iso3166": "US",
      "zip": "80120",
      "magic": "1",
      "wmo": "99999",
      "latitude": "39.59999847",
      "longitude": "-105.01000214",
      "elevation": "1652.9"
    },
    "observation_location": {
      "full": "W Caley Ave, Littleton, Colorado",
      "city": "W Caley Ave, Littleton",
      "state": "Colorado",
      "country": "US",
      "country_iso3166": "US",
      "latitude": "39.602062",
      "longitude": "-104.991730",
      "elevation": "5495 ft"
    },
    "estimated": {},
    "station_id": "KCOLITTL214",
    "observation_time": "Last Updated on June 2, 12:57 PM MDT",
    "observation_time_rfc822": "Fri, 02 Jun 2017 12:57:37 -0600",
    "observation_epoch": "1496429857",
    "local_time_rfc822": "Fri, 02 Jun 2017 12:58:12 -0600",
    "local_epoch": "1496429892",
    "local_tz_short": "MDT",
    "local_tz_long": "America/Denver",
    "local_tz_offset": "-0600",
    "weather": "Mostly Cloudy",
    "temperature_string": "80.5 F (26.9 C)",
    "temp_f": 80.5,
    "temp_c": 26.9,
    "relative_humidity": "31%",
    "wind_string": "From the NNE at 3.0 MPH",
    "wind_dir": "NNE",
    "wind_degrees": 23,
    "wind_mph": 3,
    "wind_gust_mph": 0,
    "wind_kph": 4.8,
    "wind_gust_kph": 0,
    "pressure_mb": "1012",
    "pressure_in": "29.90",
    "pressure_trend": "-",
    "dewpoint_string": "48 F (9 C)",
    "dewpoint_f": 48,
    "dewpoint_c": 9,
    "heat_index_string": "NA",
    "heat_index_f": "NA",
    "heat_index_c": "NA",
    "windchill_string": "NA",
    "windchill_f": "NA",
    "windchill_c": "NA",
    "feelslike_string": "80.5 F (26 C)",
    "feelslike_f": "80.5",
    "feelslike_c": "26",
    "visibility_mi": "10.0",
    "visibility_km": "16.1",
    "solarradiation": "--",
    "UV": "7",
    "precip_1hr_string": "0.00 in ( 0 mm)",
    "precip_1hr_in": "0.00",
    "precip_1hr_metric": " 0",
    "precip_today_string": "0.00 in (0 mm)",
    "precip_today_in": "0.00",
    "precip_today_metric": "0",
    "icon": "mostlycloudy",
    "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
    "forecast_url": "http://www.wunderground.com/US/CO/Littleton.html",
    "history_url": "http://www.wunderground.com/weatherstation/WXDailyHistory.asp?ID=KCOLITTL214",
    "ob_url": "http://www.wunderground.com/cgi-bin/findweather/getForecast?query=39.602062,-104.991730",
    "nowcast": ""
  },
  "forecast": {
    "txt_forecast": {
      "date": "11:59 AM MDT",
      "forecastday": [
        {
          "period": 0,
          "icon": "tstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/tstorms.gif",
          "title": "Friday",
          "fcttext": "Thunderstorms likely. High 78F. Winds N at 10 to 15 mph. Chance of rain 80%.",
          "fcttext_metric": "Mixed clouds and sun with scattered thunderstorms. High around 25C. Winds N at 15 to 25 km/h. Chance of rain 60%.",
          "pop": "80"
        },
        {
          "period": 1,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Friday Night",
          "fcttext": "Some passing clouds. A stray shower or thunderstorm is possible. Low 51F. Winds WNW at 5 to 10 mph.",
          "fcttext_metric": "Clear to partly cloudy. A stray shower or thunderstorm is possible. Low 11C. Winds NW at 10 to 15 km/h.",
          "pop": "20"
        },
        {
          "period": 2,
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "title": "Saturday",
          "fcttext": "Partly cloudy skies. A stray shower or thunderstorm is possible. High 78F. Winds NNE at 5 to 10 mph.",
          "fcttext_metric": "A few clouds early, otherwise mostly sunny. A stray shower or thunderstorm is possible. High 26C. Winds NNE at 10 to 15 km/h.",
          "pop": "20"
        },
        {
          "period": 3,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Saturday Night",
          "fcttext": "Partly cloudy skies. A stray shower or thunderstorm is possible. Low 52F. Winds SSE at 5 to 10 mph.",
          "fcttext_metric": "Partly cloudy skies. A stray shower or thunderstorm is possible. Low 11C. Winds SSE at 10 to 15 km/h.",
          "pop": "20"
        },
        {
          "period": 4,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Sunday",
          "fcttext": "Except for a few afternoon clouds, mainly sunny. A stray shower or thunderstorm is possible. High 84F. Winds E at 5 to 10 mph.",
          "fcttext_metric": "Sunshine and some clouds. A stray shower or thunderstorm is possible. High 29C. Winds E at 10 to 15 km/h.",
          "pop": "20"
        },
        {
          "period": 5,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Sunday Night",
          "fcttext": "Clear. Low 56F. Winds SSW at 5 to 10 mph.",
          "fcttext_metric": "Partly cloudy skies. A stray shower or thunderstorm is possible. Low 13C. Winds SW at 10 to 15 km/h.",
          "pop": "20"
        },
        {
          "period": 6,
          "icon": "chancetstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
          "title": "Monday",
          "fcttext": "Sunny skies during the morning hours. Scattered showers and thunderstorms developing in the afternoon. High near 85F. Winds NNW at 5 to 10 mph. Chance of rain 50%.",
          "fcttext_metric": "Sunny early. Scattered thunderstorms developing later in the day. High 29C. Winds NNW at 10 to 15 km/h. Chance of rain 50%.",
          "pop": "50"
        },
        {
          "period": 7,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Monday Night",
          "fcttext": "Partly cloudy. Low 57F. Winds SW at 5 to 10 mph.",
          "fcttext_metric": "A few clouds. Low 14C. Winds SW at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 8,
          "icon": "chancetstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
          "title": "Tuesday",
          "fcttext": "Partial cloudiness early, with scattered showers and thunderstorms in the afternoon. High 78F. Winds N at 5 to 10 mph. Chance of rain 60%.",
          "fcttext_metric": "Partly cloudy in the morning followed by scattered thunderstorms in the afternoon. High 26C. Winds N at 10 to 15 km/h. Chance of rain 60%.",
          "pop": "60"
        },
        {
          "period": 9,
          "icon": "nt_chancetstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
          "title": "Tuesday Night",
          "fcttext": "Scattered thunderstorms during the evening, then partly cloudy overnight. Low around 55F. Winds WSW at 5 to 10 mph. Chance of rain 60%.",
          "fcttext_metric": "Scattered thunderstorms in the evening. Partly cloudy skies overnight. Low 13C. Winds WSW at 10 to 15 km/h. Chance of rain 60%.",
          "pop": "60"
        },
        {
          "period": 10,
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "title": "Wednesday",
          "fcttext": "Partly cloudy. A stray shower or thunderstorm is possible. High 82F. Winds NNE at 5 to 10 mph.",
          "fcttext_metric": "Partly cloudy skies. A stray shower or thunderstorm is possible. High 28C. Winds NNE at 10 to 15 km/h.",
          "pop": "20"
        },
        {
          "period": 11,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Wednesday Night",
          "fcttext": "Some clouds early will give way to generally clear conditions overnight. Low 56F. Winds SW at 5 to 10 mph.",
          "fcttext_metric": "Partly cloudy skies. Low 14C. Winds SW at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 12,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Thursday",
          "fcttext": "Except for a few afternoon clouds, mainly sunny. High near 85F. Winds NNW at 5 to 10 mph.",
          "fcttext_metric": "Sunshine and some clouds. High around 30C. Winds NNW at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 13,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Thursday Night",
          "fcttext": "A few clouds. Low 57F. Winds WSW at 5 to 10 mph.",
          "fcttext_metric": "Partly cloudy. Low 14C. Winds WSW at 10 to 15 km/h.",
          "pop": "10"
        },
        {
          "period": 14,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Friday",
          "fcttext": "Mostly sunny skies. High 89F. Winds NE at 5 to 10 mph.",
          "fcttext_metric": "Mostly sunny skies. High 32C. Winds NE at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 15,
          "icon": "nt_clear",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
          "title": "Friday Night",
          "fcttext": "A mostly clear sky. Low 58F. Winds SW at 5 to 10 mph.",
          "fcttext_metric": "Mainly clear. Low 14C. Winds SW at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 16,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Saturday",
          "fcttext": "Except for a few afternoon clouds, mainly sunny. High 89F. Winds W at 5 to 10 mph.",
          "fcttext_metric": "Sunshine and clouds mixed. High 32C. Winds W at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 17,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Saturday Night",
          "fcttext": "A few clouds. Low 57F. Winds SW at 5 to 10 mph.",
          "fcttext_metric": "A few clouds. Low 14C. Winds WSW at 10 to 15 km/h.",
          "pop": "0"
        },
        {
          "period": 18,
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "title": "Sunday",
          "fcttext": "Sunshine and some clouds. High 88F. Winds NNW at 10 to 15 mph.",
          "fcttext_metric": "Sunny, along with a few afternoon clouds. High 31C. Winds NNW at 10 to 15 km/h.",
          "pop": "20"
        },
        {
          "period": 19,
          "icon": "nt_partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
          "title": "Sunday Night",
          "fcttext": "A few clouds from time to time. Low near 55F. Winds W at 5 to 10 mph.",
          "fcttext_metric": "A few clouds. Low 13C. Winds W at 10 to 15 km/h.",
          "pop": "20"
        }
      ]
    },
    "simpleforecast": {
      "forecastday": [
        {
          "date": {
            "epoch": "1496451600",
            "pretty": "7:00 PM MDT on June 02, 2017",
            "day": 2,
            "month": 6,
            "year": 2017,
            "yday": 152,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Fri",
            "weekday": "Friday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 1,
          "high": {
            "fahrenheit": "84",
            "celsius": "29"
          },
          "low": {
            "fahrenheit": "51",
            "celsius": "11"
          },
          "conditions": "Thunderstorm",
          "icon": "tstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/tstorms.gif",
          "skyicon": "",
          "pop": 80,
          "qpf_allday": {
            "in": 0.04,
            "mm": 1
          },
          "qpf_day": {
            "in": 0.04,
            "mm": 1
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "N",
            "degrees": 354
          },
          "avewind": {
            "mph": 12,
            "kph": 19,
            "dir": "N",
            "degrees": 354
          },
          "avehumidity": 49,
          "maxhumidity": 73,
          "minhumidity": 30
        },
        {
          "date": {
            "epoch": "1496538000",
            "pretty": "7:00 PM MDT on June 03, 2017",
            "day": 3,
            "month": 6,
            "year": 2017,
            "yday": 153,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Sat",
            "weekday": "Saturday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 2,
          "high": {
            "fahrenheit": "78",
            "celsius": "26"
          },
          "low": {
            "fahrenheit": "52",
            "celsius": "11"
          },
          "conditions": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 10,
            "kph": 16,
            "dir": "NNE",
            "degrees": 15
          },
          "avewind": {
            "mph": 9,
            "kph": 14,
            "dir": "NNE",
            "degrees": 15
          },
          "avehumidity": 56,
          "maxhumidity": 82,
          "minhumidity": 32
        },
        {
          "date": {
            "epoch": "1496624400",
            "pretty": "7:00 PM MDT on June 04, 2017",
            "day": 4,
            "month": 6,
            "year": 2017,
            "yday": 154,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Sun",
            "weekday": "Sunday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 3,
          "high": {
            "fahrenheit": "84",
            "celsius": "29"
          },
          "low": {
            "fahrenheit": "56",
            "celsius": "13"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 10,
            "kph": 16,
            "dir": "E",
            "degrees": 81
          },
          "avewind": {
            "mph": 7,
            "kph": 11,
            "dir": "E",
            "degrees": 81
          },
          "avehumidity": 47,
          "maxhumidity": 82,
          "minhumidity": 21
        },
        {
          "date": {
            "epoch": "1496710800",
            "pretty": "7:00 PM MDT on June 05, 2017",
            "day": 5,
            "month": 6,
            "year": 2017,
            "yday": 155,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Mon",
            "weekday": "Monday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 4,
          "high": {
            "fahrenheit": "85",
            "celsius": "29"
          },
          "low": {
            "fahrenheit": "57",
            "celsius": "14"
          },
          "conditions": "Chance of a Thunderstorm",
          "icon": "chancetstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
          "skyicon": "",
          "pop": 50,
          "qpf_allday": {
            "in": 0.03,
            "mm": 1
          },
          "qpf_day": {
            "in": 0.03,
            "mm": 1
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 10,
            "kph": 16,
            "dir": "NNW",
            "degrees": 348
          },
          "avewind": {
            "mph": 9,
            "kph": 14,
            "dir": "NNW",
            "degrees": 348
          },
          "avehumidity": 41,
          "maxhumidity": 62,
          "minhumidity": 23
        },
        {
          "date": {
            "epoch": "1496797200",
            "pretty": "7:00 PM MDT on June 06, 2017",
            "day": 6,
            "month": 6,
            "year": 2017,
            "yday": 156,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Tue",
            "weekday": "Tuesday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 5,
          "high": {
            "fahrenheit": "78",
            "celsius": "26"
          },
          "low": {
            "fahrenheit": "55",
            "celsius": "13"
          },
          "conditions": "Chance of a Thunderstorm",
          "icon": "chancetstorms",
          "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
          "skyicon": "",
          "pop": 60,
          "qpf_allday": {
            "in": 0.17,
            "mm": 4
          },
          "qpf_day": {
            "in": 0.07,
            "mm": 2
          },
          "qpf_night": {
            "in": 0.09,
            "mm": 2
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 10,
            "kph": 16,
            "dir": "N",
            "degrees": 358
          },
          "avewind": {
            "mph": 9,
            "kph": 14,
            "dir": "N",
            "degrees": 358
          },
          "avehumidity": 52,
          "maxhumidity": 72,
          "minhumidity": 37
        },
        {
          "date": {
            "epoch": "1496883600",
            "pretty": "7:00 PM MDT on June 07, 2017",
            "day": 7,
            "month": 6,
            "year": 2017,
            "yday": 157,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Wed",
            "weekday": "Wednesday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 6,
          "high": {
            "fahrenheit": "82",
            "celsius": "28"
          },
          "low": {
            "fahrenheit": "56",
            "celsius": "13"
          },
          "conditions": "Partly Cloudy",
          "icon": "partlycloudy",
          "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 10,
            "kph": 16,
            "dir": "NNE",
            "degrees": 18
          },
          "avewind": {
            "mph": 7,
            "kph": 11,
            "dir": "NNE",
            "degrees": 18
          },
          "avehumidity": 54,
          "maxhumidity": 82,
          "minhumidity": 30
        },
        {
          "date": {
            "epoch": "1496970000",
            "pretty": "7:00 PM MDT on June 08, 2017",
            "day": 8,
            "month": 6,
            "year": 2017,
            "yday": 158,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Thu",
            "weekday": "Thursday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 7,
          "high": {
            "fahrenheit": "85",
            "celsius": "29"
          },
          "low": {
            "fahrenheit": "57",
            "celsius": "14"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 10,
            "kph": 16,
            "dir": "NNW",
            "degrees": 332
          },
          "avewind": {
            "mph": 8,
            "kph": 13,
            "dir": "NNW",
            "degrees": 332
          },
          "avehumidity": 43,
          "maxhumidity": 66,
          "minhumidity": 23
        },
        {
          "date": {
            "epoch": "1497056400",
            "pretty": "7:00 PM MDT on June 09, 2017",
            "day": 9,
            "month": 6,
            "year": 2017,
            "yday": 159,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Fri",
            "weekday": "Friday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 8,
          "high": {
            "fahrenheit": "89",
            "celsius": "32"
          },
          "low": {
            "fahrenheit": "58",
            "celsius": "14"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 10,
            "kph": 16,
            "dir": "NE",
            "degrees": 42
          },
          "avewind": {
            "mph": 9,
            "kph": 14,
            "dir": "NE",
            "degrees": 42
          },
          "avehumidity": 33,
          "maxhumidity": 54,
          "minhumidity": 13
        },
        {
          "date": {
            "epoch": "1497142800",
            "pretty": "7:00 PM MDT on June 10, 2017",
            "day": 10,
            "month": 6,
            "year": 2017,
            "yday": 160,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Sat",
            "weekday": "Saturday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 9,
          "high": {
            "fahrenheit": "89",
            "celsius": "32"
          },
          "low": {
            "fahrenheit": "57",
            "celsius": "14"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 0,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 10,
            "kph": 16,
            "dir": "W",
            "degrees": 265
          },
          "avewind": {
            "mph": 9,
            "kph": 14,
            "dir": "W",
            "degrees": 265
          },
          "avehumidity": 28,
          "maxhumidity": 45,
          "minhumidity": 13
        },
        {
          "date": {
            "epoch": "1497229200",
            "pretty": "7:00 PM MDT on June 11, 2017",
            "day": 11,
            "month": 6,
            "year": 2017,
            "yday": 161,
            "hour": 19,
            "min": "00",
            "sec": 0,
            "isdst": "1",
            "monthname": "June",
            "monthname_short": "Jun",
            "weekday_short": "Sun",
            "weekday": "Sunday",
            "ampm": "PM",
            "tz_short": "MDT",
            "tz_long": "America/Denver"
          },
          "period": 10,
          "high": {
            "fahrenheit": "88",
            "celsius": "31"
          },
          "low": {
            "fahrenheit": "55",
            "celsius": "13"
          },
          "conditions": "Clear",
          "icon": "clear",
          "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
          "skyicon": "",
          "pop": 20,
          "qpf_allday": {
            "in": 0,
            "mm": 0
          },
          "qpf_day": {
            "in": 0,
            "mm": 0
          },
          "qpf_night": {
            "in": 0,
            "mm": 0
          },
          "snow_allday": {
            "in": 0,
            "cm": 0
          },
          "snow_day": {
            "in": 0,
            "cm": 0
          },
          "snow_night": {
            "in": 0,
            "cm": 0
          },
          "maxwind": {
            "mph": 15,
            "kph": 24,
            "dir": "NNW",
            "degrees": 329
          },
          "avewind": {
            "mph": 10,
            "kph": 16,
            "dir": "NNW",
            "degrees": 329
          },
          "avehumidity": 27,
          "maxhumidity": 42,
          "minhumidity": 13
        }
      ]
    }
  },
  "hourly_forecast": [
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "2",
        "mday_padded": "02",
        "yday": "152",
        "isdst": "1",
        "epoch": "1496430000",
        "pretty": "1:00 PM MDT on June 02, 2017",
        "civil": "1:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "78",
        "metric": "26"
      },
      "dewpoint": {
        "english": "44",
        "metric": "7"
      },
      "condition": "Overcast",
      "icon": "cloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/cloudy.gif",
      "fctcode": "4",
      "sky": "80",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "23"
      },
      "wx": "Cloudy",
      "uvi": "6",
      "humidity": "30",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "78",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "24",
      "mslp": {
        "english": "29.83",
        "metric": "1010"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "2",
        "mday_padded": "02",
        "yday": "152",
        "isdst": "1",
        "epoch": "1496433600",
        "pretty": "2:00 PM MDT on June 02, 2017",
        "civil": "2:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "76",
        "metric": "24"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "80",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "13"
      },
      "wx": "Isolated Thunderstorms",
      "uvi": "5",
      "humidity": "35",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "76",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "34",
      "mslp": {
        "english": "29.83",
        "metric": "1010"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "2",
        "mday_padded": "02",
        "yday": "152",
        "isdst": "1",
        "epoch": "1496437200",
        "pretty": "3:00 PM MDT on June 02, 2017",
        "civil": "3:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "75",
        "metric": "24"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "70",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "N",
        "degrees": "356"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "6",
      "humidity": "36",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "75",
        "metric": "24"
      },
      "qpf": {
        "english": "0.02",
        "metric": "1"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "39",
      "mslp": {
        "english": "29.83",
        "metric": "1010"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "2",
        "mday_padded": "02",
        "yday": "152",
        "isdst": "1",
        "epoch": "1496440800",
        "pretty": "4:00 PM MDT on June 02, 2017",
        "civil": "4:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "75",
        "metric": "24"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "74",
      "wspd": {
        "english": "12",
        "metric": "19"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "341"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "4",
      "humidity": "37",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "75",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "58",
      "mslp": {
        "english": "29.84",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "2",
        "mday_padded": "02",
        "yday": "152",
        "isdst": "1",
        "epoch": "1496444400",
        "pretty": "5:00 PM MDT on June 02, 2017",
        "civil": "5:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "69",
        "metric": "21"
      },
      "dewpoint": {
        "english": "49",
        "metric": "9"
      },
      "condition": "Thunderstorm",
      "icon": "tstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/tstorms.gif",
      "fctcode": "15",
      "sky": "81",
      "wspd": {
        "english": "12",
        "metric": "19"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "332"
      },
      "wx": "Thunderstorms",
      "uvi": "2",
      "humidity": "50",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "69",
        "metric": "21"
      },
      "qpf": {
        "english": "0.02",
        "metric": "1"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "70",
      "mslp": {
        "english": "29.88",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "2",
        "mday_padded": "02",
        "yday": "152",
        "isdst": "1",
        "epoch": "1496448000",
        "pretty": "6:00 PM MDT on June 02, 2017",
        "civil": "6:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67",
        "metric": "19"
      },
      "dewpoint": {
        "english": "49",
        "metric": "9"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "69",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "343"
      },
      "wx": "Isolated Thunderstorms",
      "uvi": "1",
      "humidity": "51",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "34",
      "mslp": {
        "english": "29.89",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "2",
        "mday_padded": "02",
        "yday": "152",
        "isdst": "1",
        "epoch": "1496451600",
        "pretty": "7:00 PM MDT on June 02, 2017",
        "civil": "7:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67",
        "metric": "19"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "68",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "330"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "50",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.89",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "2",
        "mday_padded": "02",
        "yday": "152",
        "isdst": "1",
        "epoch": "1496455200",
        "pretty": "8:00 PM MDT on June 02, 2017",
        "civil": "8:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "65",
        "metric": "18"
      },
      "dewpoint": {
        "english": "49",
        "metric": "9"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "66",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "NW",
        "degrees": "324"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "57",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "65",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.91",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "2",
        "mday_padded": "02",
        "yday": "152",
        "isdst": "1",
        "epoch": "1496458800",
        "pretty": "9:00 PM MDT on June 02, 2017",
        "civil": "9:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63",
        "metric": "17"
      },
      "dewpoint": {
        "english": "49",
        "metric": "9"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
      "fctcode": "3",
      "sky": "74",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "N",
        "degrees": "350"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "61",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "24",
      "mslp": {
        "english": "29.93",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "2",
        "mday_padded": "02",
        "yday": "152",
        "isdst": "1",
        "epoch": "1496462400",
        "pretty": "10:00 PM MDT on June 02, 2017",
        "civil": "10:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61",
        "metric": "16"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
      "fctcode": "3",
      "sky": "66",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "334"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "66",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "21",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "2",
        "mday_padded": "02",
        "yday": "152",
        "isdst": "1",
        "epoch": "1496466000",
        "pretty": "11:00 PM MDT on June 02, 2017",
        "civil": "11:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "59",
        "metric": "15"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "57",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NW",
        "degrees": "306"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "73",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "59",
        "metric": "15"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "30.0",
        "metric": "1016"
      }
    },
    {
      "FCTTIME": {
        "hour": "0",
        "hour_padded": "00",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496469600",
        "pretty": "12:00 AM MDT on June 03, 2017",
        "civil": "12:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "58",
        "metric": "14"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "29",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "W",
        "degrees": "267"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "76",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "58",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "6",
      "mslp": {
        "english": "30.01",
        "metric": "1016"
      }
    },
    {
      "FCTTIME": {
        "hour": "1",
        "hour_padded": "01",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496473200",
        "pretty": "1:00 AM MDT on June 03, 2017",
        "civil": "1:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "56",
        "metric": "13"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "6",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "W",
        "degrees": "265"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "80",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "56",
        "metric": "13"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "7",
      "mslp": {
        "english": "30.02",
        "metric": "1017"
      }
    },
    {
      "FCTTIME": {
        "hour": "2",
        "hour_padded": "02",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496476800",
        "pretty": "2:00 AM MDT on June 03, 2017",
        "civil": "2:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "55",
        "metric": "13"
      },
      "dewpoint": {
        "english": "49",
        "metric": "9"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "6",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "W",
        "degrees": "267"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "82",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "55",
        "metric": "13"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "8",
      "mslp": {
        "english": "30.01",
        "metric": "1016"
      }
    },
    {
      "FCTTIME": {
        "hour": "3",
        "hour_padded": "03",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496480400",
        "pretty": "3:00 AM MDT on June 03, 2017",
        "civil": "3:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "54",
        "metric": "12"
      },
      "dewpoint": {
        "english": "49",
        "metric": "9"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "10",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "W",
        "degrees": "268"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "82",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "54",
        "metric": "12"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "8",
      "mslp": {
        "english": "30.03",
        "metric": "1017"
      }
    },
    {
      "FCTTIME": {
        "hour": "4",
        "hour_padded": "04",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496484000",
        "pretty": "4:00 AM MDT on June 03, 2017",
        "civil": "4:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "53",
        "metric": "12"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "12",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "W",
        "degrees": "280"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "82",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "53",
        "metric": "12"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "5",
      "mslp": {
        "english": "30.03",
        "metric": "1017"
      }
    },
    {
      "FCTTIME": {
        "hour": "5",
        "hour_padded": "05",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496487600",
        "pretty": "5:00 AM MDT on June 03, 2017",
        "civil": "5:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "52",
        "metric": "11"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "20",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "WNW",
        "degrees": "301"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "82",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "52",
        "metric": "11"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "4",
      "mslp": {
        "english": "30.05",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "6",
        "hour_padded": "06",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496491200",
        "pretty": "6:00 AM MDT on June 03, 2017",
        "civil": "6:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "52",
        "metric": "11"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "24",
      "wspd": {
        "english": "3",
        "metric": "5"
      },
      "wdir": {
        "dir": "NW",
        "degrees": "316"
      },
      "wx": "Mostly Sunny",
      "uvi": "0",
      "humidity": "81",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "52",
        "metric": "11"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "4",
      "mslp": {
        "english": "30.08",
        "metric": "1019"
      }
    },
    {
      "FCTTIME": {
        "hour": "7",
        "hour_padded": "07",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496494800",
        "pretty": "7:00 AM MDT on June 03, 2017",
        "civil": "7:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "56",
        "metric": "13"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "32",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "334"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "73",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "56",
        "metric": "13"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "30.1",
        "metric": "1019"
      }
    },
    {
      "FCTTIME": {
        "hour": "8",
        "hour_padded": "08",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496498400",
        "pretty": "8:00 AM MDT on June 03, 2017",
        "civil": "8:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60",
        "metric": "16"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "21",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "343"
      },
      "wx": "Mostly Sunny",
      "uvi": "1",
      "humidity": "64",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "30.11",
        "metric": "1020"
      }
    },
    {
      "FCTTIME": {
        "hour": "9",
        "hour_padded": "09",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496502000",
        "pretty": "9:00 AM MDT on June 03, 2017",
        "civil": "9:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "64",
        "metric": "18"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "31",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "N",
        "degrees": "357"
      },
      "wx": "Partly Cloudy",
      "uvi": "3",
      "humidity": "57",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "64",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "30.11",
        "metric": "1020"
      }
    },
    {
      "FCTTIME": {
        "hour": "10",
        "hour_padded": "10",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496505600",
        "pretty": "10:00 AM MDT on June 03, 2017",
        "civil": "10:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "66",
        "metric": "19"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "29",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "N",
        "degrees": "0"
      },
      "wx": "Mostly Sunny",
      "uvi": "5",
      "humidity": "52",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "66",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "30.11",
        "metric": "1020"
      }
    },
    {
      "FCTTIME": {
        "hour": "11",
        "hour_padded": "11",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496509200",
        "pretty": "11:00 AM MDT on June 03, 2017",
        "civil": "11:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "68",
        "metric": "20"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "30",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "20"
      },
      "wx": "Partly Cloudy",
      "uvi": "7",
      "humidity": "48",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "68",
        "metric": "20"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "30.09",
        "metric": "1019"
      }
    },
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496512800",
        "pretty": "12:00 PM MDT on June 03, 2017",
        "civil": "12:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "71",
        "metric": "22"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "30",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "15"
      },
      "wx": "Partly Cloudy",
      "uvi": "9",
      "humidity": "43",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "71",
        "metric": "22"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "30.07",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496516400",
        "pretty": "1:00 PM MDT on June 03, 2017",
        "civil": "1:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "72",
        "metric": "22"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "30",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "26"
      },
      "wx": "Partly Cloudy",
      "uvi": "9",
      "humidity": "39",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "72",
        "metric": "22"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "30.05",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496520000",
        "pretty": "2:00 PM MDT on June 03, 2017",
        "civil": "2:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "74",
        "metric": "23"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "22",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "30"
      },
      "wx": "Mostly Sunny",
      "uvi": "9",
      "humidity": "37",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "74",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "30.02",
        "metric": "1017"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496523600",
        "pretty": "3:00 PM MDT on June 03, 2017",
        "civil": "3:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "75",
        "metric": "24"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "15",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "30"
      },
      "wx": "Sunny",
      "uvi": "7",
      "humidity": "35",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "75",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "30.0",
        "metric": "1016"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496527200",
        "pretty": "4:00 PM MDT on June 03, 2017",
        "civil": "4:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "76",
        "metric": "24"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "12",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "25"
      },
      "wx": "Sunny",
      "uvi": "5",
      "humidity": "32",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "76",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496530800",
        "pretty": "5:00 PM MDT on June 03, 2017",
        "civil": "5:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "75",
        "metric": "24"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "13",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "34"
      },
      "wx": "Sunny",
      "uvi": "3",
      "humidity": "35",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "75",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.97",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496534400",
        "pretty": "6:00 PM MDT on June 03, 2017",
        "civil": "6:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "75",
        "metric": "24"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "39",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "51"
      },
      "wx": "Partly Cloudy",
      "uvi": "1",
      "humidity": "35",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "75",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.96",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496538000",
        "pretty": "7:00 PM MDT on June 03, 2017",
        "civil": "7:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "73",
        "metric": "23"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "34",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "58"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "38",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "73",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496541600",
        "pretty": "8:00 PM MDT on June 03, 2017",
        "civil": "8:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "69",
        "metric": "21"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "36",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "70"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "44",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "69",
        "metric": "21"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "30.0",
        "metric": "1016"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496545200",
        "pretty": "9:00 PM MDT on June 03, 2017",
        "civil": "9:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67",
        "metric": "19"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "36",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "E",
        "degrees": "92"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "49",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "30.03",
        "metric": "1017"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496548800",
        "pretty": "10:00 PM MDT on June 03, 2017",
        "civil": "10:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "64",
        "metric": "18"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "36",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "ESE",
        "degrees": "104"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "57",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "64",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "30.05",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "3",
        "mday_padded": "03",
        "yday": "153",
        "isdst": "1",
        "epoch": "1496552400",
        "pretty": "11:00 PM MDT on June 03, 2017",
        "civil": "11:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61",
        "metric": "16"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "37",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SE",
        "degrees": "146"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "61",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "30.07",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "0",
        "hour_padded": "00",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496556000",
        "pretty": "12:00 AM MDT on June 04, 2017",
        "civil": "12:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "59",
        "metric": "15"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "7",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "S",
        "degrees": "173"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "67",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "59",
        "metric": "15"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "30.07",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "1",
        "hour_padded": "01",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496559600",
        "pretty": "1:00 AM MDT on June 04, 2017",
        "civil": "1:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "58",
        "metric": "14"
      },
      "dewpoint": {
        "english": "49",
        "metric": "9"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "7",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "S",
        "degrees": "173"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "71",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "58",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "4",
      "mslp": {
        "english": "30.06",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "2",
        "hour_padded": "02",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496563200",
        "pretty": "2:00 AM MDT on June 04, 2017",
        "civil": "2:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "57",
        "metric": "14"
      },
      "dewpoint": {
        "english": "49",
        "metric": "9"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "3",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "S",
        "degrees": "177"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "74",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "57",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "4",
      "mslp": {
        "english": "30.05",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "3",
        "hour_padded": "03",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496566800",
        "pretty": "3:00 AM MDT on June 04, 2017",
        "civil": "3:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "55",
        "metric": "13"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "1",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "S",
        "degrees": "180"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "78",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "55",
        "metric": "13"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "5",
      "mslp": {
        "english": "30.04",
        "metric": "1017"
      }
    },
    {
      "FCTTIME": {
        "hour": "4",
        "hour_padded": "04",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496570400",
        "pretty": "4:00 AM MDT on June 04, 2017",
        "civil": "4:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "54",
        "metric": "12"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "2",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "S",
        "degrees": "179"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "79",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "54",
        "metric": "12"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "5",
      "mslp": {
        "english": "30.04",
        "metric": "1017"
      }
    },
    {
      "FCTTIME": {
        "hour": "5",
        "hour_padded": "05",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496574000",
        "pretty": "5:00 AM MDT on June 04, 2017",
        "civil": "5:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "53",
        "metric": "12"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "2",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "S",
        "degrees": "179"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "82",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "53",
        "metric": "12"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "6",
      "mslp": {
        "english": "30.03",
        "metric": "1017"
      }
    },
    {
      "FCTTIME": {
        "hour": "6",
        "hour_padded": "06",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496577600",
        "pretty": "6:00 AM MDT on June 04, 2017",
        "civil": "6:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "53",
        "metric": "12"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "3",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "S",
        "degrees": "181"
      },
      "wx": "Sunny",
      "uvi": "0",
      "humidity": "82",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "53",
        "metric": "12"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "5",
      "mslp": {
        "english": "30.03",
        "metric": "1017"
      }
    },
    {
      "FCTTIME": {
        "hour": "7",
        "hour_padded": "07",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496581200",
        "pretty": "7:00 AM MDT on June 04, 2017",
        "civil": "7:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "56",
        "metric": "13"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "1",
      "wspd": {
        "english": "3",
        "metric": "5"
      },
      "wdir": {
        "dir": "S",
        "degrees": "188"
      },
      "wx": "Sunny",
      "uvi": "0",
      "humidity": "73",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "56",
        "metric": "13"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "30.03",
        "metric": "1017"
      }
    },
    {
      "FCTTIME": {
        "hour": "8",
        "hour_padded": "08",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496584800",
        "pretty": "8:00 AM MDT on June 04, 2017",
        "civil": "8:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "62",
        "metric": "17"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "1",
      "wspd": {
        "english": "3",
        "metric": "5"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "198"
      },
      "wx": "Sunny",
      "uvi": "1",
      "humidity": "58",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "62",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "30.01",
        "metric": "1016"
      }
    },
    {
      "FCTTIME": {
        "hour": "9",
        "hour_padded": "09",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496588400",
        "pretty": "9:00 AM MDT on June 04, 2017",
        "civil": "9:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "68",
        "metric": "20"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "2",
      "wspd": {
        "english": "2",
        "metric": "3"
      },
      "wdir": {
        "dir": "S",
        "degrees": "186"
      },
      "wx": "Sunny",
      "uvi": "3",
      "humidity": "45",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "68",
        "metric": "20"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "30.0",
        "metric": "1016"
      }
    },
    {
      "FCTTIME": {
        "hour": "10",
        "hour_padded": "10",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496592000",
        "pretty": "10:00 AM MDT on June 04, 2017",
        "civil": "10:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "72",
        "metric": "22"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "2",
      "wspd": {
        "english": "3",
        "metric": "5"
      },
      "wdir": {
        "dir": "SSE",
        "degrees": "162"
      },
      "wx": "Sunny",
      "uvi": "5",
      "humidity": "39",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "72",
        "metric": "22"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.97",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "11",
        "hour_padded": "11",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496595600",
        "pretty": "11:00 AM MDT on June 04, 2017",
        "civil": "11:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "76",
        "metric": "24"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "1",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "E",
        "degrees": "100"
      },
      "wx": "Sunny",
      "uvi": "7",
      "humidity": "34",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "76",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.95",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496599200",
        "pretty": "12:00 PM MDT on June 04, 2017",
        "civil": "12:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "78",
        "metric": "26"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "30",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "57"
      },
      "wx": "Partly Cloudy",
      "uvi": "9",
      "humidity": "29",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "78",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.92",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496602800",
        "pretty": "1:00 PM MDT on June 04, 2017",
        "civil": "1:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80",
        "metric": "27"
      },
      "dewpoint": {
        "english": "42",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "32",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "51"
      },
      "wx": "Partly Cloudy",
      "uvi": "9",
      "humidity": "26",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.9",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496606400",
        "pretty": "2:00 PM MDT on June 04, 2017",
        "civil": "2:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "82",
        "metric": "28"
      },
      "dewpoint": {
        "english": "41",
        "metric": "5"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "35",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "50"
      },
      "wx": "Partly Cloudy",
      "uvi": "9",
      "humidity": "24",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "82",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.87",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496610000",
        "pretty": "3:00 PM MDT on June 04, 2017",
        "civil": "3:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "82",
        "metric": "28"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "36",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "45"
      },
      "wx": "Partly Cloudy",
      "uvi": "7",
      "humidity": "21",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "82",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.84",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496613600",
        "pretty": "4:00 PM MDT on June 04, 2017",
        "civil": "4:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "83",
        "metric": "28"
      },
      "dewpoint": {
        "english": "38",
        "metric": "3"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "36",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "31"
      },
      "wx": "Partly Cloudy",
      "uvi": "5",
      "humidity": "21",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "83",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.82",
        "metric": "1010"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496617200",
        "pretty": "5:00 PM MDT on June 04, 2017",
        "civil": "5:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "82",
        "metric": "28"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "35",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "31"
      },
      "wx": "Partly Cloudy",
      "uvi": "3",
      "humidity": "22",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "82",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.81",
        "metric": "1009"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496620800",
        "pretty": "6:00 PM MDT on June 04, 2017",
        "civil": "6:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "81",
        "metric": "27"
      },
      "dewpoint": {
        "english": "40",
        "metric": "4"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "34",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "44"
      },
      "wx": "Partly Cloudy",
      "uvi": "1",
      "humidity": "23",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "81",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.81",
        "metric": "1009"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496624400",
        "pretty": "7:00 PM MDT on June 04, 2017",
        "civil": "7:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "79",
        "metric": "26"
      },
      "dewpoint": {
        "english": "42",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "36",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "55"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "27",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "79",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.83",
        "metric": "1010"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496628000",
        "pretty": "8:00 PM MDT on June 04, 2017",
        "civil": "8:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "75",
        "metric": "24"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "9",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "56"
      },
      "wx": "Sunny",
      "uvi": "0",
      "humidity": "35",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "75",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.85",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496631600",
        "pretty": "9:00 PM MDT on June 04, 2017",
        "civil": "9:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "70",
        "metric": "21"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "9",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "49"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "70",
        "metric": "21"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.88",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496635200",
        "pretty": "10:00 PM MDT on June 04, 2017",
        "civil": "10:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67",
        "metric": "19"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "8",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "N",
        "degrees": "353"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "46",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.9",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "4",
        "mday_padded": "04",
        "yday": "154",
        "isdst": "1",
        "epoch": "1496638800",
        "pretty": "11:00 PM MDT on June 04, 2017",
        "civil": "11:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "66",
        "metric": "19"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "7",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "230"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "48",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "66",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.91",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "0",
        "hour_padded": "00",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496642400",
        "pretty": "12:00 AM MDT on June 05, 2017",
        "civil": "12:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "65",
        "metric": "18"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "8",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "212"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "49",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "65",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.92",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "1",
        "hour_padded": "01",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496646000",
        "pretty": "1:00 AM MDT on June 05, 2017",
        "civil": "1:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63",
        "metric": "17"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "10",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "210"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "53",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.92",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "2",
        "hour_padded": "02",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496649600",
        "pretty": "2:00 AM MDT on June 05, 2017",
        "civil": "2:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61",
        "metric": "16"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "8",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "203"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "55",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.91",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "3",
        "hour_padded": "03",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496653200",
        "pretty": "3:00 AM MDT on June 05, 2017",
        "civil": "3:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60",
        "metric": "16"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "9",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "197"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "58",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.91",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "4",
        "hour_padded": "04",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496656800",
        "pretty": "4:00 AM MDT on June 05, 2017",
        "civil": "4:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "58",
        "metric": "14"
      },
      "dewpoint": {
        "english": "44",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "8",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "193"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "60",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "58",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.91",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "5",
        "hour_padded": "05",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496660400",
        "pretty": "5:00 AM MDT on June 05, 2017",
        "civil": "5:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "57",
        "metric": "14"
      },
      "dewpoint": {
        "english": "44",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "7",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "200"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "61",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "57",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.92",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "6",
        "hour_padded": "06",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496664000",
        "pretty": "6:00 AM MDT on June 05, 2017",
        "civil": "6:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "57",
        "metric": "14"
      },
      "dewpoint": {
        "english": "44",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "6",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "199"
      },
      "wx": "Sunny",
      "uvi": "0",
      "humidity": "62",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "57",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.92",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "7",
        "hour_padded": "07",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496667600",
        "pretty": "7:00 AM MDT on June 05, 2017",
        "civil": "7:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61",
        "metric": "16"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "0",
      "wspd": {
        "english": "3",
        "metric": "5"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "207"
      },
      "wx": "Sunny",
      "uvi": "0",
      "humidity": "58",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.92",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "8",
        "hour_padded": "08",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496671200",
        "pretty": "8:00 AM MDT on June 05, 2017",
        "civil": "8:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67",
        "metric": "19"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "0",
      "wspd": {
        "english": "3",
        "metric": "5"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "223"
      },
      "wx": "Sunny",
      "uvi": "1",
      "humidity": "46",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.91",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "9",
        "hour_padded": "09",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496674800",
        "pretty": "9:00 AM MDT on June 05, 2017",
        "civil": "9:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "73",
        "metric": "23"
      },
      "dewpoint": {
        "english": "44",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "0",
      "wspd": {
        "english": "2",
        "metric": "3"
      },
      "wdir": {
        "dir": "W",
        "degrees": "281"
      },
      "wx": "Sunny",
      "uvi": "3",
      "humidity": "35",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "73",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.89",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "10",
        "hour_padded": "10",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496678400",
        "pretty": "10:00 AM MDT on June 05, 2017",
        "civil": "10:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "78",
        "metric": "26"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "3",
      "wspd": {
        "english": "3",
        "metric": "5"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "330"
      },
      "wx": "Sunny",
      "uvi": "5",
      "humidity": "31",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "78",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.88",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "11",
        "hour_padded": "11",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496682000",
        "pretty": "11:00 AM MDT on June 05, 2017",
        "civil": "11:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "81",
        "metric": "27"
      },
      "dewpoint": {
        "english": "44",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "9",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "65"
      },
      "wx": "Sunny",
      "uvi": "7",
      "humidity": "27",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "81",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.85",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496685600",
        "pretty": "12:00 PM MDT on June 05, 2017",
        "civil": "12:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "83",
        "metric": "28"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "13",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "41"
      },
      "wx": "Sunny",
      "uvi": "9",
      "humidity": "24",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "83",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.83",
        "metric": "1010"
      }
    },
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496689200",
        "pretty": "1:00 PM MDT on June 05, 2017",
        "civil": "1:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "84",
        "metric": "29"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "41",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "44"
      },
      "wx": "Partly Cloudy",
      "uvi": "9",
      "humidity": "24",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "84",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.8",
        "metric": "1009"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496692800",
        "pretty": "2:00 PM MDT on June 05, 2017",
        "civil": "2:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "84",
        "metric": "29"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "42",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "24"
      },
      "wx": "Partly Cloudy",
      "uvi": "9",
      "humidity": "24",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "84",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.78",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496696400",
        "pretty": "3:00 PM MDT on June 05, 2017",
        "civil": "3:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "84",
        "metric": "29"
      },
      "dewpoint": {
        "english": "42",
        "metric": "6"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "50",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "N",
        "degrees": "11"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "7",
      "humidity": "23",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "84",
        "metric": "29"
      },
      "qpf": {
        "english": "0.02",
        "metric": "1"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "47",
      "mslp": {
        "english": "29.77",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496700000",
        "pretty": "4:00 PM MDT on June 05, 2017",
        "civil": "4:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "83",
        "metric": "28"
      },
      "dewpoint": {
        "english": "42",
        "metric": "6"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "35",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "334"
      },
      "wx": "Isolated Thunderstorms",
      "uvi": "5",
      "humidity": "24",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "83",
        "metric": "28"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "33",
      "mslp": {
        "english": "29.77",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496703600",
        "pretty": "5:00 PM MDT on June 05, 2017",
        "civil": "5:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "82",
        "metric": "28"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "55",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "334"
      },
      "wx": "Partly Cloudy",
      "uvi": "3",
      "humidity": "25",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "82",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.79",
        "metric": "1009"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496707200",
        "pretty": "6:00 PM MDT on June 05, 2017",
        "civil": "6:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80",
        "metric": "27"
      },
      "dewpoint": {
        "english": "44",
        "metric": "7"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "59",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "NW",
        "degrees": "327"
      },
      "wx": "Partly Cloudy",
      "uvi": "1",
      "humidity": "28",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.81",
        "metric": "1009"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496710800",
        "pretty": "7:00 PM MDT on June 05, 2017",
        "civil": "7:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "77",
        "metric": "25"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "56",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "SSE",
        "degrees": "156"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "32",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "77",
        "metric": "25"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.84",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496714400",
        "pretty": "8:00 PM MDT on June 05, 2017",
        "civil": "8:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "73",
        "metric": "23"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "70",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "214"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "39",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "73",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.87",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496718000",
        "pretty": "9:00 PM MDT on June 05, 2017",
        "civil": "9:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "69",
        "metric": "21"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
      "fctcode": "3",
      "sky": "77",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "235"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "45",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "69",
        "metric": "21"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.89",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496721600",
        "pretty": "10:00 PM MDT on June 05, 2017",
        "civil": "10:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67",
        "metric": "19"
      },
      "dewpoint": {
        "english": "49",
        "metric": "9"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
      "fctcode": "3",
      "sky": "70",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "W",
        "degrees": "273"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "52",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.91",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "5",
        "mday_padded": "05",
        "yday": "155",
        "isdst": "1",
        "epoch": "1496725200",
        "pretty": "11:00 PM MDT on June 05, 2017",
        "civil": "11:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "65",
        "metric": "18"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "57",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "247"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "57",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "65",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "4",
      "mslp": {
        "english": "29.93",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "0",
        "hour_padded": "00",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496728800",
        "pretty": "12:00 AM MDT on June 06, 2017",
        "civil": "12:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63",
        "metric": "17"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "49",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "230"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "62",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.94",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "1",
        "hour_padded": "01",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496732400",
        "pretty": "1:00 AM MDT on June 06, 2017",
        "civil": "1:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "62",
        "metric": "17"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "46",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "223"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "64",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "62",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.93",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "2",
        "hour_padded": "02",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496736000",
        "pretty": "2:00 AM MDT on June 06, 2017",
        "civil": "2:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61",
        "metric": "16"
      },
      "dewpoint": {
        "english": "49",
        "metric": "9"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "44",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "227"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "65",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.92",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "3",
        "hour_padded": "03",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496739600",
        "pretty": "3:00 AM MDT on June 06, 2017",
        "civil": "3:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60",
        "metric": "16"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "42",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "226"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "65",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.93",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "4",
        "hour_padded": "04",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496743200",
        "pretty": "4:00 AM MDT on June 06, 2017",
        "civil": "4:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "59",
        "metric": "15"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "40",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "226"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "65",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "59",
        "metric": "15"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.94",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "5",
        "hour_padded": "05",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496746800",
        "pretty": "5:00 AM MDT on June 06, 2017",
        "civil": "5:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "58",
        "metric": "14"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "38",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "223"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "65",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "58",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.95",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "6",
        "hour_padded": "06",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496750400",
        "pretty": "6:00 AM MDT on June 06, 2017",
        "civil": "6:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "58",
        "metric": "14"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "36",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "222"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "66",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "58",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.97",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "7",
        "hour_padded": "07",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496754000",
        "pretty": "7:00 AM MDT on June 06, 2017",
        "civil": "7:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61",
        "metric": "16"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "31",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "250"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "61",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "8",
        "hour_padded": "08",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496757600",
        "pretty": "8:00 AM MDT on June 06, 2017",
        "civil": "8:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67",
        "metric": "19"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "23",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "NW",
        "degrees": "325"
      },
      "wx": "Mostly Sunny",
      "uvi": "1",
      "humidity": "48",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.99",
        "metric": "1016"
      }
    },
    {
      "FCTTIME": {
        "hour": "9",
        "hour_padded": "09",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496761200",
        "pretty": "9:00 AM MDT on June 06, 2017",
        "civil": "9:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "71",
        "metric": "22"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "21",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "N",
        "degrees": "354"
      },
      "wx": "Mostly Sunny",
      "uvi": "3",
      "humidity": "40",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "71",
        "metric": "22"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "23",
      "mslp": {
        "english": "30.0",
        "metric": "1016"
      }
    },
    {
      "FCTTIME": {
        "hour": "10",
        "hour_padded": "10",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496764800",
        "pretty": "10:00 AM MDT on June 06, 2017",
        "civil": "10:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "74",
        "metric": "23"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "47",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "N",
        "degrees": "356"
      },
      "wx": "Partly Cloudy",
      "uvi": "5",
      "humidity": "38",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "74",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "23",
      "mslp": {
        "english": "30.0",
        "metric": "1016"
      }
    },
    {
      "FCTTIME": {
        "hour": "11",
        "hour_padded": "11",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496768400",
        "pretty": "11:00 AM MDT on June 06, 2017",
        "civil": "11:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "76",
        "metric": "24"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "50",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "22"
      },
      "wx": "Partly Cloudy",
      "uvi": "7",
      "humidity": "37",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "76",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "23",
      "mslp": {
        "english": "29.99",
        "metric": "1016"
      }
    },
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496772000",
        "pretty": "12:00 PM MDT on June 06, 2017",
        "civil": "12:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "77",
        "metric": "25"
      },
      "dewpoint": {
        "english": "49",
        "metric": "9"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "50",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "18"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "9",
      "humidity": "38",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "77",
        "metric": "25"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "40",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496775600",
        "pretty": "1:00 PM MDT on June 06, 2017",
        "civil": "1:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "77",
        "metric": "25"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "50",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "25"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "9",
      "humidity": "38",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "77",
        "metric": "25"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "41",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496779200",
        "pretty": "2:00 PM MDT on June 06, 2017",
        "civil": "2:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "77",
        "metric": "25"
      },
      "dewpoint": {
        "english": "51",
        "metric": "11"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "50",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "22"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "9",
      "humidity": "40",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "77",
        "metric": "25"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "42",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496782800",
        "pretty": "3:00 PM MDT on June 06, 2017",
        "civil": "3:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "77",
        "metric": "25"
      },
      "dewpoint": {
        "english": "51",
        "metric": "11"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "61",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "15"
      },
      "wx": "Mostly Cloudy",
      "uvi": "6",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "77",
        "metric": "25"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496786400",
        "pretty": "4:00 PM MDT on June 06, 2017",
        "civil": "4:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "77",
        "metric": "25"
      },
      "dewpoint": {
        "english": "51",
        "metric": "11"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/mostlycloudy.gif",
      "fctcode": "3",
      "sky": "63",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "344"
      },
      "wx": "Mostly Cloudy",
      "uvi": "4",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "77",
        "metric": "25"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496790000",
        "pretty": "5:00 PM MDT on June 06, 2017",
        "civil": "5:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "76",
        "metric": "24"
      },
      "dewpoint": {
        "english": "51",
        "metric": "11"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "49",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "345"
      },
      "wx": "Partly Cloudy",
      "uvi": "3",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "76",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.97",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496793600",
        "pretty": "6:00 PM MDT on June 06, 2017",
        "civil": "6:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "76",
        "metric": "24"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "66",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "N",
        "degrees": "0"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "1",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "76",
        "metric": "24"
      },
      "qpf": {
        "english": "0.04",
        "metric": "1"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "58",
      "mslp": {
        "english": "29.97",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496797200",
        "pretty": "7:00 PM MDT on June 06, 2017",
        "civil": "7:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "73",
        "metric": "23"
      },
      "dewpoint": {
        "english": "51",
        "metric": "11"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "75",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "344"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "46",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "73",
        "metric": "23"
      },
      "qpf": {
        "english": "0.04",
        "metric": "1"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "58",
      "mslp": {
        "english": "30.0",
        "metric": "1016"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496800800",
        "pretty": "8:00 PM MDT on June 06, 2017",
        "civil": "8:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "69",
        "metric": "21"
      },
      "dewpoint": {
        "english": "53",
        "metric": "12"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/chancetstorms.gif",
      "fctcode": "14",
      "sky": "86",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NW",
        "degrees": "305"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "58",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "69",
        "metric": "21"
      },
      "qpf": {
        "english": "0.04",
        "metric": "1"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "58",
      "mslp": {
        "english": "30.06",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496804400",
        "pretty": "9:00 PM MDT on June 06, 2017",
        "civil": "9:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "65",
        "metric": "18"
      },
      "dewpoint": {
        "english": "53",
        "metric": "12"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "88",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "W",
        "degrees": "280"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "64",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "65",
        "metric": "18"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "43",
      "mslp": {
        "english": "30.1",
        "metric": "1019"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496808000",
        "pretty": "10:00 PM MDT on June 06, 2017",
        "civil": "10:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63",
        "metric": "17"
      },
      "dewpoint": {
        "english": "53",
        "metric": "12"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "80",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "W",
        "degrees": "275"
      },
      "wx": "Scattered Thunderstorms",
      "uvi": "0",
      "humidity": "69",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63",
        "metric": "17"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "44",
      "mslp": {
        "english": "30.1",
        "metric": "1019"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "6",
        "mday_padded": "06",
        "yday": "156",
        "isdst": "1",
        "epoch": "1496811600",
        "pretty": "11:00 PM MDT on June 06, 2017",
        "civil": "11:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Tuesday",
        "weekday_name_night": "Tuesday Night",
        "weekday_name_abbrev": "Tue",
        "weekday_name_unlang": "Tuesday",
        "weekday_name_night_unlang": "Tuesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "62",
        "metric": "17"
      },
      "dewpoint": {
        "english": "53",
        "metric": "12"
      },
      "condition": "Chance of a Thunderstorm",
      "icon": "chancetstorms",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
      "fctcode": "14",
      "sky": "62",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "246"
      },
      "wx": "Isolated Thunderstorms",
      "uvi": "0",
      "humidity": "72",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "62",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "30",
      "mslp": {
        "english": "30.08",
        "metric": "1019"
      }
    },
    {
      "FCTTIME": {
        "hour": "0",
        "hour_padded": "00",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496815200",
        "pretty": "12:00 AM MDT on June 07, 2017",
        "civil": "12:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61",
        "metric": "16"
      },
      "dewpoint": {
        "english": "53",
        "metric": "12"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "52",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "223"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "75",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "6",
      "mslp": {
        "english": "30.07",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "1",
        "hour_padded": "01",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496818800",
        "pretty": "1:00 AM MDT on June 07, 2017",
        "civil": "1:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60",
        "metric": "16"
      },
      "dewpoint": {
        "english": "53",
        "metric": "12"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "43",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "224"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "77",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "6",
      "mslp": {
        "english": "30.07",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "2",
        "hour_padded": "02",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496822400",
        "pretty": "2:00 AM MDT on June 07, 2017",
        "civil": "2:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "59",
        "metric": "15"
      },
      "dewpoint": {
        "english": "52",
        "metric": "11"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "32",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "235"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "78",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "59",
        "metric": "15"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "6",
      "mslp": {
        "english": "30.07",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "3",
        "hour_padded": "03",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496826000",
        "pretty": "3:00 AM MDT on June 07, 2017",
        "civil": "3:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "58",
        "metric": "14"
      },
      "dewpoint": {
        "english": "52",
        "metric": "11"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "27",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "237"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "81",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "58",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "6",
      "mslp": {
        "english": "30.07",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "4",
        "hour_padded": "04",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496829600",
        "pretty": "4:00 AM MDT on June 07, 2017",
        "civil": "4:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "57",
        "metric": "14"
      },
      "dewpoint": {
        "english": "51",
        "metric": "11"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "28",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "233"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "81",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "57",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "7",
      "mslp": {
        "english": "30.07",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "5",
        "hour_padded": "05",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496833200",
        "pretty": "5:00 AM MDT on June 07, 2017",
        "civil": "5:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "56",
        "metric": "13"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "30",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "231"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "82",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "56",
        "metric": "13"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "7",
      "mslp": {
        "english": "30.08",
        "metric": "1019"
      }
    },
    {
      "FCTTIME": {
        "hour": "6",
        "hour_padded": "06",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496836800",
        "pretty": "6:00 AM MDT on June 07, 2017",
        "civil": "6:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "56",
        "metric": "13"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "31",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "234"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "81",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "56",
        "metric": "13"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "7",
      "mslp": {
        "english": "30.08",
        "metric": "1019"
      }
    },
    {
      "FCTTIME": {
        "hour": "7",
        "hour_padded": "07",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496840400",
        "pretty": "7:00 AM MDT on June 07, 2017",
        "civil": "7:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "59",
        "metric": "15"
      },
      "dewpoint": {
        "english": "52",
        "metric": "11"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "32",
      "wspd": {
        "english": "3",
        "metric": "5"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "239"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "76",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "59",
        "metric": "15"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "5",
      "mslp": {
        "english": "30.08",
        "metric": "1019"
      }
    },
    {
      "FCTTIME": {
        "hour": "8",
        "hour_padded": "08",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496844000",
        "pretty": "8:00 AM MDT on June 07, 2017",
        "civil": "8:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "64",
        "metric": "18"
      },
      "dewpoint": {
        "english": "52",
        "metric": "11"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "32",
      "wspd": {
        "english": "3",
        "metric": "5"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "255"
      },
      "wx": "Partly Cloudy",
      "uvi": "1",
      "humidity": "64",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "64",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "30.07",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "9",
        "hour_padded": "09",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496847600",
        "pretty": "9:00 AM MDT on June 07, 2017",
        "civil": "9:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "70",
        "metric": "21"
      },
      "dewpoint": {
        "english": "51",
        "metric": "11"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "33",
      "wspd": {
        "english": "3",
        "metric": "5"
      },
      "wdir": {
        "dir": "WNW",
        "degrees": "287"
      },
      "wx": "Partly Cloudy",
      "uvi": "3",
      "humidity": "51",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "70",
        "metric": "21"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "30.06",
        "metric": "1018"
      }
    },
    {
      "FCTTIME": {
        "hour": "10",
        "hour_padded": "10",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496851200",
        "pretty": "10:00 AM MDT on June 07, 2017",
        "civil": "10:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "73",
        "metric": "23"
      },
      "dewpoint": {
        "english": "51",
        "metric": "11"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "52",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "328"
      },
      "wx": "Partly Cloudy",
      "uvi": "5",
      "humidity": "46",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "73",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "30.04",
        "metric": "1017"
      }
    },
    {
      "FCTTIME": {
        "hour": "11",
        "hour_padded": "11",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496854800",
        "pretty": "11:00 AM MDT on June 07, 2017",
        "civil": "11:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "77",
        "metric": "25"
      },
      "dewpoint": {
        "english": "51",
        "metric": "11"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "48",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "39"
      },
      "wx": "Partly Cloudy",
      "uvi": "7",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "77",
        "metric": "25"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "30.02",
        "metric": "1017"
      }
    },
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496858400",
        "pretty": "12:00 PM MDT on June 07, 2017",
        "civil": "12:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "79",
        "metric": "26"
      },
      "dewpoint": {
        "english": "51",
        "metric": "11"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "46",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "32"
      },
      "wx": "Partly Cloudy",
      "uvi": "9",
      "humidity": "37",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "79",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "24",
      "mslp": {
        "english": "30.0",
        "metric": "1016"
      }
    },
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496862000",
        "pretty": "1:00 PM MDT on June 07, 2017",
        "civil": "1:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80",
        "metric": "27"
      },
      "dewpoint": {
        "english": "49",
        "metric": "9"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "47",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "49"
      },
      "wx": "Partly Cloudy",
      "uvi": "9",
      "humidity": "35",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "24",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496865600",
        "pretty": "2:00 PM MDT on June 07, 2017",
        "civil": "2:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80",
        "metric": "27"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "49",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "50"
      },
      "wx": "Partly Cloudy",
      "uvi": "9",
      "humidity": "33",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "24",
      "mslp": {
        "english": "29.96",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496869200",
        "pretty": "3:00 PM MDT on June 07, 2017",
        "civil": "3:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80",
        "metric": "27"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "52",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "54"
      },
      "wx": "Partly Cloudy",
      "uvi": "6",
      "humidity": "31",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.94",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496872800",
        "pretty": "4:00 PM MDT on June 07, 2017",
        "civil": "4:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80",
        "metric": "27"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "53",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "29"
      },
      "wx": "Partly Cloudy",
      "uvi": "4",
      "humidity": "30",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "15",
      "mslp": {
        "english": "29.92",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496876400",
        "pretty": "5:00 PM MDT on June 07, 2017",
        "civil": "5:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80",
        "metric": "27"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "34",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "21"
      },
      "wx": "Partly Cloudy",
      "uvi": "3",
      "humidity": "30",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.91",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496880000",
        "pretty": "6:00 PM MDT on June 07, 2017",
        "civil": "6:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80",
        "metric": "27"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "35",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "E",
        "degrees": "80"
      },
      "wx": "Partly Cloudy",
      "uvi": "1",
      "humidity": "30",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.9",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496883600",
        "pretty": "7:00 PM MDT on June 07, 2017",
        "civil": "7:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "77",
        "metric": "25"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "37",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "73"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "34",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "77",
        "metric": "25"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.91",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496887200",
        "pretty": "8:00 PM MDT on June 07, 2017",
        "civil": "8:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "73",
        "metric": "23"
      },
      "dewpoint": {
        "english": "49",
        "metric": "9"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "39",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "S",
        "degrees": "188"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "42",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "73",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.92",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496890800",
        "pretty": "9:00 PM MDT on June 07, 2017",
        "civil": "9:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "70",
        "metric": "21"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "40",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "200"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "49",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "70",
        "metric": "21"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.94",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496894400",
        "pretty": "10:00 PM MDT on June 07, 2017",
        "civil": "10:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67",
        "metric": "19"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "38",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "234"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "55",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.95",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "7",
        "mday_padded": "07",
        "yday": "157",
        "isdst": "1",
        "epoch": "1496898000",
        "pretty": "11:00 PM MDT on June 07, 2017",
        "civil": "11:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Wednesday",
        "weekday_name_night": "Wednesday Night",
        "weekday_name_abbrev": "Wed",
        "weekday_name_unlang": "Wednesday",
        "weekday_name_night_unlang": "Wednesday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "65",
        "metric": "18"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "33",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "242"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "60",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "65",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.97",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "0",
        "hour_padded": "00",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496901600",
        "pretty": "12:00 AM MDT on June 08, 2017",
        "civil": "12:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63",
        "metric": "17"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "26",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "241"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "64",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.97",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "1",
        "hour_padded": "01",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496905200",
        "pretty": "1:00 AM MDT on June 08, 2017",
        "civil": "1:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61",
        "metric": "16"
      },
      "dewpoint": {
        "english": "50",
        "metric": "10"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "19",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "232"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "65",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "2",
        "hour_padded": "02",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496908800",
        "pretty": "2:00 AM MDT on June 08, 2017",
        "civil": "2:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60",
        "metric": "16"
      },
      "dewpoint": {
        "english": "49",
        "metric": "9"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "11",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "230"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "65",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "4",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "3",
        "hour_padded": "03",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496912400",
        "pretty": "3:00 AM MDT on June 08, 2017",
        "civil": "3:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "59",
        "metric": "15"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "7",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "229"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "66",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "59",
        "metric": "15"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "4",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "4",
        "hour_padded": "04",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496916000",
        "pretty": "4:00 AM MDT on June 08, 2017",
        "civil": "4:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "58",
        "metric": "14"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "6",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "227"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "66",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "58",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "4",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "5",
        "hour_padded": "05",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496919600",
        "pretty": "5:00 AM MDT on June 08, 2017",
        "civil": "5:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "57",
        "metric": "14"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "6",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "228"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "65",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "57",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "4",
      "mslp": {
        "english": "29.99",
        "metric": "1016"
      }
    },
    {
      "FCTTIME": {
        "hour": "6",
        "hour_padded": "06",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496923200",
        "pretty": "6:00 AM MDT on June 08, 2017",
        "civil": "6:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "58",
        "metric": "14"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "7",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "227"
      },
      "wx": "Sunny",
      "uvi": "0",
      "humidity": "63",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "58",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.98",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "7",
        "hour_padded": "07",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496926800",
        "pretty": "7:00 AM MDT on June 08, 2017",
        "civil": "7:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "62",
        "metric": "17"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "7",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "237"
      },
      "wx": "Sunny",
      "uvi": "0",
      "humidity": "58",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "62",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.97",
        "metric": "1015"
      }
    },
    {
      "FCTTIME": {
        "hour": "8",
        "hour_padded": "08",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496930400",
        "pretty": "8:00 AM MDT on June 08, 2017",
        "civil": "8:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "68",
        "metric": "20"
      },
      "dewpoint": {
        "english": "48",
        "metric": "9"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "7",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "248"
      },
      "wx": "Sunny",
      "uvi": "1",
      "humidity": "48",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "68",
        "metric": "20"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.95",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "9",
        "hour_padded": "09",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496934000",
        "pretty": "9:00 AM MDT on June 08, 2017",
        "civil": "9:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "73",
        "metric": "23"
      },
      "dewpoint": {
        "english": "47",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "7",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "W",
        "degrees": "270"
      },
      "wx": "Sunny",
      "uvi": "3",
      "humidity": "39",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "73",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.93",
        "metric": "1014"
      }
    },
    {
      "FCTTIME": {
        "hour": "10",
        "hour_padded": "10",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496937600",
        "pretty": "10:00 AM MDT on June 08, 2017",
        "civil": "10:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "76",
        "metric": "24"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "8",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "NW",
        "degrees": "307"
      },
      "wx": "Sunny",
      "uvi": "5",
      "humidity": "34",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "76",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.9",
        "metric": "1013"
      }
    },
    {
      "FCTTIME": {
        "hour": "11",
        "hour_padded": "11",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496941200",
        "pretty": "11:00 AM MDT on June 08, 2017",
        "civil": "11:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80",
        "metric": "27"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "9",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "14"
      },
      "wx": "Sunny",
      "uvi": "7",
      "humidity": "29",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.88",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496944800",
        "pretty": "12:00 PM MDT on June 08, 2017",
        "civil": "12:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "82",
        "metric": "28"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "11",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "21"
      },
      "wx": "Sunny",
      "uvi": "9",
      "humidity": "26",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "82",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.87",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496948400",
        "pretty": "1:00 PM MDT on June 08, 2017",
        "civil": "1:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "83",
        "metric": "28"
      },
      "dewpoint": {
        "english": "42",
        "metric": "6"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "14",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "32"
      },
      "wx": "Sunny",
      "uvi": "9",
      "humidity": "24",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "83",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.86",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496952000",
        "pretty": "2:00 PM MDT on June 08, 2017",
        "civil": "2:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "83",
        "metric": "28"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "20",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "19"
      },
      "wx": "Mostly Sunny",
      "uvi": "9",
      "humidity": "24",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "83",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.85",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496955600",
        "pretty": "3:00 PM MDT on June 08, 2017",
        "civil": "3:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "84",
        "metric": "29"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "25",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "N",
        "degrees": "353"
      },
      "wx": "Mostly Sunny",
      "uvi": "7",
      "humidity": "24",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "84",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.84",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496959200",
        "pretty": "4:00 PM MDT on June 08, 2017",
        "civil": "4:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "84",
        "metric": "29"
      },
      "dewpoint": {
        "english": "42",
        "metric": "6"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "29",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NW",
        "degrees": "308"
      },
      "wx": "Mostly Sunny",
      "uvi": "5",
      "humidity": "23",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "84",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.83",
        "metric": "1010"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496962800",
        "pretty": "5:00 PM MDT on June 08, 2017",
        "civil": "5:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "82",
        "metric": "28"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "34",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "329"
      },
      "wx": "Partly Cloudy",
      "uvi": "3",
      "humidity": "25",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "82",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.82",
        "metric": "1010"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496966400",
        "pretty": "6:00 PM MDT on June 08, 2017",
        "civil": "6:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "81",
        "metric": "27"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "37",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "N",
        "degrees": "355"
      },
      "wx": "Partly Cloudy",
      "uvi": "1",
      "humidity": "27",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "81",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.83",
        "metric": "1010"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496970000",
        "pretty": "7:00 PM MDT on June 08, 2017",
        "civil": "7:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "78",
        "metric": "26"
      },
      "dewpoint": {
        "english": "44",
        "metric": "7"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "38",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "N",
        "degrees": "9"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "31",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "78",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.84",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496973600",
        "pretty": "8:00 PM MDT on June 08, 2017",
        "civil": "8:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "73",
        "metric": "23"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "37",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "W",
        "degrees": "272"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "38",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "73",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.86",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496977200",
        "pretty": "9:00 PM MDT on June 08, 2017",
        "civil": "9:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "69",
        "metric": "21"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "34",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "219"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "43",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "69",
        "metric": "21"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.87",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496980800",
        "pretty": "10:00 PM MDT on June 08, 2017",
        "civil": "10:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67",
        "metric": "19"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "31",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "240"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "47",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.87",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "8",
        "mday_padded": "08",
        "yday": "158",
        "isdst": "1",
        "epoch": "1496984400",
        "pretty": "11:00 PM MDT on June 08, 2017",
        "civil": "11:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Thursday",
        "weekday_name_night": "Thursday Night",
        "weekday_name_abbrev": "Thu",
        "weekday_name_unlang": "Thursday",
        "weekday_name_night_unlang": "Thursday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "65",
        "metric": "18"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "27",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "238"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "49",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "65",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.88",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "0",
        "hour_padded": "00",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1496988000",
        "pretty": "12:00 AM MDT on June 09, 2017",
        "civil": "12:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "64",
        "metric": "18"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "25",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "236"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "52",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "64",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "6",
      "mslp": {
        "english": "29.88",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "1",
        "hour_padded": "01",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1496991600",
        "pretty": "1:00 AM MDT on June 09, 2017",
        "civil": "1:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63",
        "metric": "17"
      },
      "dewpoint": {
        "english": "46",
        "metric": "8"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "22",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "232"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "53",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.88",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "2",
        "hour_padded": "02",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1496995200",
        "pretty": "2:00 AM MDT on June 09, 2017",
        "civil": "2:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "62",
        "metric": "17"
      },
      "dewpoint": {
        "english": "45",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "19",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "232"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "53",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "62",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.88",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "3",
        "hour_padded": "03",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1496998800",
        "pretty": "3:00 AM MDT on June 09, 2017",
        "civil": "3:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60",
        "metric": "16"
      },
      "dewpoint": {
        "english": "44",
        "metric": "7"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "18",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "227"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "54",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.88",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "4",
        "hour_padded": "04",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497002400",
        "pretty": "4:00 AM MDT on June 09, 2017",
        "civil": "4:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "59",
        "metric": "15"
      },
      "dewpoint": {
        "english": "42",
        "metric": "6"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "18",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "225"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "53",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "59",
        "metric": "15"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.89",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "5",
        "hour_padded": "05",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497006000",
        "pretty": "5:00 AM MDT on June 09, 2017",
        "civil": "5:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "58",
        "metric": "14"
      },
      "dewpoint": {
        "english": "41",
        "metric": "5"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "20",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "225"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "53",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "58",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.89",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "6",
        "hour_padded": "06",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497009600",
        "pretty": "6:00 AM MDT on June 09, 2017",
        "civil": "6:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "59",
        "metric": "15"
      },
      "dewpoint": {
        "english": "40",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "20",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "227"
      },
      "wx": "Mostly Sunny",
      "uvi": "0",
      "humidity": "51",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "59",
        "metric": "15"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.89",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "7",
        "hour_padded": "07",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497013200",
        "pretty": "7:00 AM MDT on June 09, 2017",
        "civil": "7:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "62",
        "metric": "17"
      },
      "dewpoint": {
        "english": "42",
        "metric": "6"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "20",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "236"
      },
      "wx": "Mostly Sunny",
      "uvi": "0",
      "humidity": "47",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "62",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.87",
        "metric": "1012"
      }
    },
    {
      "FCTTIME": {
        "hour": "8",
        "hour_padded": "08",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497016800",
        "pretty": "8:00 AM MDT on June 09, 2017",
        "civil": "8:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "68",
        "metric": "20"
      },
      "dewpoint": {
        "english": "43",
        "metric": "6"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "20",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "247"
      },
      "wx": "Mostly Sunny",
      "uvi": "1",
      "humidity": "40",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "68",
        "metric": "20"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.85",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "9",
        "hour_padded": "09",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497020400",
        "pretty": "9:00 AM MDT on June 09, 2017",
        "civil": "9:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "74",
        "metric": "23"
      },
      "dewpoint": {
        "english": "42",
        "metric": "6"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "18",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "W",
        "degrees": "261"
      },
      "wx": "Sunny",
      "uvi": "3",
      "humidity": "32",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "74",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.84",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "10",
        "hour_padded": "10",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497024000",
        "pretty": "10:00 AM MDT on June 09, 2017",
        "civil": "10:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "78",
        "metric": "26"
      },
      "dewpoint": {
        "english": "41",
        "metric": "5"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "16",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "W",
        "degrees": "273"
      },
      "wx": "Sunny",
      "uvi": "5",
      "humidity": "27",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "78",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.82",
        "metric": "1010"
      }
    },
    {
      "FCTTIME": {
        "hour": "11",
        "hour_padded": "11",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497027600",
        "pretty": "11:00 AM MDT on June 09, 2017",
        "civil": "11:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "82",
        "metric": "28"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "13",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "19"
      },
      "wx": "Sunny",
      "uvi": "7",
      "humidity": "22",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "82",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.8",
        "metric": "1009"
      }
    },
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497031200",
        "pretty": "12:00 PM MDT on June 09, 2017",
        "civil": "12:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "85",
        "metric": "29"
      },
      "dewpoint": {
        "english": "35",
        "metric": "2"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "12",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "29"
      },
      "wx": "Sunny",
      "uvi": "9",
      "humidity": "17",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "85",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.78",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497034800",
        "pretty": "1:00 PM MDT on June 09, 2017",
        "civil": "1:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "86",
        "metric": "30"
      },
      "dewpoint": {
        "english": "32",
        "metric": "0"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "12",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "56"
      },
      "wx": "Sunny",
      "uvi": "9",
      "humidity": "15",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "86",
        "metric": "30"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497038400",
        "pretty": "2:00 PM MDT on June 09, 2017",
        "civil": "2:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "86",
        "metric": "30"
      },
      "dewpoint": {
        "english": "32",
        "metric": "0"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "13",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "71"
      },
      "wx": "Sunny",
      "uvi": "9",
      "humidity": "14",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "86",
        "metric": "30"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.74",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497042000",
        "pretty": "3:00 PM MDT on June 09, 2017",
        "civil": "3:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "87",
        "metric": "31"
      },
      "dewpoint": {
        "english": "31",
        "metric": "-1"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "16",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "76"
      },
      "wx": "Sunny",
      "uvi": "7",
      "humidity": "13",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "87",
        "metric": "31"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.73",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497045600",
        "pretty": "4:00 PM MDT on June 09, 2017",
        "civil": "4:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "87",
        "metric": "31"
      },
      "dewpoint": {
        "english": "32",
        "metric": "0"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "20",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "ENE",
        "degrees": "72"
      },
      "wx": "Mostly Sunny",
      "uvi": "5",
      "humidity": "14",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "87",
        "metric": "31"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.71",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497049200",
        "pretty": "5:00 PM MDT on June 09, 2017",
        "civil": "5:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "86",
        "metric": "30"
      },
      "dewpoint": {
        "english": "34",
        "metric": "1"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "24",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "NE",
        "degrees": "55"
      },
      "wx": "Mostly Sunny",
      "uvi": "3",
      "humidity": "16",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "86",
        "metric": "30"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.71",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497052800",
        "pretty": "6:00 PM MDT on June 09, 2017",
        "civil": "6:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "84",
        "metric": "29"
      },
      "dewpoint": {
        "english": "36",
        "metric": "2"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "26",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "E",
        "degrees": "87"
      },
      "wx": "Mostly Sunny",
      "uvi": "1",
      "humidity": "18",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "84",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.7",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497056400",
        "pretty": "7:00 PM MDT on June 09, 2017",
        "civil": "7:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "81",
        "metric": "27"
      },
      "dewpoint": {
        "english": "37",
        "metric": "3"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "26",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "E",
        "degrees": "87"
      },
      "wx": "Mostly Sunny",
      "uvi": "0",
      "humidity": "21",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "81",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.71",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497060000",
        "pretty": "8:00 PM MDT on June 09, 2017",
        "civil": "8:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "76",
        "metric": "24"
      },
      "dewpoint": {
        "english": "40",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "25",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "SSE",
        "degrees": "155"
      },
      "wx": "Mostly Sunny",
      "uvi": "0",
      "humidity": "27",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "76",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.72",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497063600",
        "pretty": "9:00 PM MDT on June 09, 2017",
        "civil": "9:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "72",
        "metric": "22"
      },
      "dewpoint": {
        "english": "40",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "22",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "222"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "31",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "72",
        "metric": "22"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.74",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497067200",
        "pretty": "10:00 PM MDT on June 09, 2017",
        "civil": "10:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "69",
        "metric": "21"
      },
      "dewpoint": {
        "english": "41",
        "metric": "5"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "18",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "236"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "36",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "69",
        "metric": "21"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "9",
        "mday_padded": "09",
        "yday": "159",
        "isdst": "1",
        "epoch": "1497070800",
        "pretty": "11:00 PM MDT on June 09, 2017",
        "civil": "11:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Friday",
        "weekday_name_night": "Friday Night",
        "weekday_name_abbrev": "Fri",
        "weekday_name_unlang": "Friday",
        "weekday_name_night_unlang": "Friday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67",
        "metric": "19"
      },
      "dewpoint": {
        "english": "40",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "15",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "231"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "36",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.77",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "0",
        "hour_padded": "00",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497074400",
        "pretty": "12:00 AM MDT on June 10, 2017",
        "civil": "12:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "66",
        "metric": "19"
      },
      "dewpoint": {
        "english": "40",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "13",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "228"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "39",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "66",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.78",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "1",
        "hour_padded": "01",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497078000",
        "pretty": "1:00 AM MDT on June 10, 2017",
        "civil": "1:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "64",
        "metric": "18"
      },
      "dewpoint": {
        "english": "40",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "14",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "225"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "64",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.78",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "2",
        "hour_padded": "02",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497081600",
        "pretty": "2:00 AM MDT on June 10, 2017",
        "civil": "2:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63",
        "metric": "17"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "15",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "225"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.79",
        "metric": "1009"
      }
    },
    {
      "FCTTIME": {
        "hour": "3",
        "hour_padded": "03",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497085200",
        "pretty": "3:00 AM MDT on June 10, 2017",
        "civil": "3:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61",
        "metric": "16"
      },
      "dewpoint": {
        "english": "38",
        "metric": "3"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "15",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "223"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "42",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.78",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "4",
        "hour_padded": "04",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497088800",
        "pretty": "4:00 AM MDT on June 10, 2017",
        "civil": "4:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60",
        "metric": "16"
      },
      "dewpoint": {
        "english": "37",
        "metric": "3"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "17",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "222"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "43",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.78",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "5",
        "hour_padded": "05",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497092400",
        "pretty": "5:00 AM MDT on June 10, 2017",
        "civil": "5:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "59",
        "metric": "15"
      },
      "dewpoint": {
        "english": "37",
        "metric": "3"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "18",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "219"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "44",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "59",
        "metric": "15"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.77",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "6",
        "hour_padded": "06",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497096000",
        "pretty": "6:00 AM MDT on June 10, 2017",
        "civil": "6:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "59",
        "metric": "15"
      },
      "dewpoint": {
        "english": "38",
        "metric": "3"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "19",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "221"
      },
      "wx": "Sunny",
      "uvi": "0",
      "humidity": "45",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "59",
        "metric": "15"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.77",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "7",
        "hour_padded": "07",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497099600",
        "pretty": "7:00 AM MDT on June 10, 2017",
        "civil": "7:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63",
        "metric": "17"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "21",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "227"
      },
      "wx": "Mostly Sunny",
      "uvi": "0",
      "humidity": "42",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.75",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "8",
        "hour_padded": "08",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497103200",
        "pretty": "8:00 AM MDT on June 10, 2017",
        "civil": "8:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "68",
        "metric": "20"
      },
      "dewpoint": {
        "english": "40",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "23",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "243"
      },
      "wx": "Mostly Sunny",
      "uvi": "1",
      "humidity": "36",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "68",
        "metric": "20"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.72",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "9",
        "hour_padded": "09",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497106800",
        "pretty": "9:00 AM MDT on June 10, 2017",
        "civil": "9:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "74",
        "metric": "23"
      },
      "dewpoint": {
        "english": "38",
        "metric": "3"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "25",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "256"
      },
      "wx": "Mostly Sunny",
      "uvi": "3",
      "humidity": "28",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "74",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.69",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "10",
        "hour_padded": "10",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497110400",
        "pretty": "10:00 AM MDT on June 10, 2017",
        "civil": "10:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "78",
        "metric": "26"
      },
      "dewpoint": {
        "english": "37",
        "metric": "3"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "27",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "W",
        "degrees": "271"
      },
      "wx": "Mostly Sunny",
      "uvi": "5",
      "humidity": "23",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "78",
        "metric": "26"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.66",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "11",
        "hour_padded": "11",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497114000",
        "pretty": "11:00 AM MDT on June 10, 2017",
        "civil": "11:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "82",
        "metric": "28"
      },
      "dewpoint": {
        "english": "35",
        "metric": "2"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "29",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "N",
        "degrees": "11"
      },
      "wx": "Mostly Sunny",
      "uvi": "7",
      "humidity": "19",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "82",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.64",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497117600",
        "pretty": "12:00 PM MDT on June 10, 2017",
        "civil": "12:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "85",
        "metric": "29"
      },
      "dewpoint": {
        "english": "32",
        "metric": "0"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "31",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "348"
      },
      "wx": "Partly Cloudy",
      "uvi": "9",
      "humidity": "15",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "85",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.62",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497121200",
        "pretty": "1:00 PM MDT on June 10, 2017",
        "civil": "1:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "87",
        "metric": "31"
      },
      "dewpoint": {
        "english": "31",
        "metric": "-1"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "34",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "30"
      },
      "wx": "Partly Cloudy",
      "uvi": "9",
      "humidity": "13",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "87",
        "metric": "31"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.61",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497124800",
        "pretty": "2:00 PM MDT on June 10, 2017",
        "civil": "2:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "87",
        "metric": "31"
      },
      "dewpoint": {
        "english": "31",
        "metric": "-1"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "36",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "W",
        "degrees": "280"
      },
      "wx": "Partly Cloudy",
      "uvi": "9",
      "humidity": "14",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "87",
        "metric": "31"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.61",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497128400",
        "pretty": "3:00 PM MDT on June 10, 2017",
        "civil": "3:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "87",
        "metric": "31"
      },
      "dewpoint": {
        "english": "31",
        "metric": "-1"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "39",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "221"
      },
      "wx": "Partly Cloudy",
      "uvi": "7",
      "humidity": "13",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "87",
        "metric": "31"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.6",
        "metric": "1002"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497132000",
        "pretty": "4:00 PM MDT on June 10, 2017",
        "civil": "4:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "88",
        "metric": "31"
      },
      "dewpoint": {
        "english": "31",
        "metric": "-1"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "42",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "244"
      },
      "wx": "Partly Cloudy",
      "uvi": "5",
      "humidity": "13",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "88",
        "metric": "31"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.59",
        "metric": "1002"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497135600",
        "pretty": "5:00 PM MDT on June 10, 2017",
        "civil": "5:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "86",
        "metric": "30"
      },
      "dewpoint": {
        "english": "33",
        "metric": "1"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "44",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "248"
      },
      "wx": "Partly Cloudy",
      "uvi": "3",
      "humidity": "15",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "86",
        "metric": "30"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "4",
      "mslp": {
        "english": "29.59",
        "metric": "1002"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497139200",
        "pretty": "6:00 PM MDT on June 10, 2017",
        "civil": "6:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "84",
        "metric": "29"
      },
      "dewpoint": {
        "english": "34",
        "metric": "1"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "47",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "228"
      },
      "wx": "Partly Cloudy",
      "uvi": "1",
      "humidity": "16",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "84",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.59",
        "metric": "1002"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497142800",
        "pretty": "7:00 PM MDT on June 10, 2017",
        "civil": "7:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "81",
        "metric": "27"
      },
      "dewpoint": {
        "english": "36",
        "metric": "2"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "49",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "211"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "20",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "81",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.6",
        "metric": "1002"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497146400",
        "pretty": "8:00 PM MDT on June 10, 2017",
        "civil": "8:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "77",
        "metric": "25"
      },
      "dewpoint": {
        "english": "38",
        "metric": "3"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "54",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "SSW",
        "degrees": "214"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "24",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "77",
        "metric": "25"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.62",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497150000",
        "pretty": "9:00 PM MDT on June 10, 2017",
        "civil": "9:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "73",
        "metric": "23"
      },
      "dewpoint": {
        "english": "38",
        "metric": "3"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "59",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "SW",
        "degrees": "222"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "28",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "73",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.63",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497153600",
        "pretty": "10:00 PM MDT on June 10, 2017",
        "civil": "10:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "70",
        "metric": "21"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
      "fctcode": "3",
      "sky": "64",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "244"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "32",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "70",
        "metric": "21"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.64",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "10",
        "mday_padded": "10",
        "yday": "160",
        "isdst": "1",
        "epoch": "1497157200",
        "pretty": "11:00 PM MDT on June 10, 2017",
        "civil": "11:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Saturday",
        "weekday_name_night": "Saturday Night",
        "weekday_name_abbrev": "Sat",
        "weekday_name_unlang": "Saturday",
        "weekday_name_night_unlang": "Saturday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "67",
        "metric": "19"
      },
      "dewpoint": {
        "english": "38",
        "metric": "3"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
      "fctcode": "3",
      "sky": "67",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "240"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "35",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "67",
        "metric": "19"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.66",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "0",
        "hour_padded": "00",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497160800",
        "pretty": "12:00 AM MDT on June 11, 2017",
        "civil": "12:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "65",
        "metric": "18"
      },
      "dewpoint": {
        "english": "38",
        "metric": "3"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
      "fctcode": "3",
      "sky": "69",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "237"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "37",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "65",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.67",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "1",
        "hour_padded": "01",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497164400",
        "pretty": "1:00 AM MDT on June 11, 2017",
        "civil": "1:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63",
        "metric": "17"
      },
      "dewpoint": {
        "english": "37",
        "metric": "3"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
      "fctcode": "3",
      "sky": "66",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "239"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "38",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.67",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "2",
        "hour_padded": "02",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497168000",
        "pretty": "2:00 AM MDT on June 11, 2017",
        "civil": "2:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "62",
        "metric": "17"
      },
      "dewpoint": {
        "english": "37",
        "metric": "3"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "55",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "238"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "39",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "62",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.68",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "3",
        "hour_padded": "03",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497171600",
        "pretty": "3:00 AM MDT on June 11, 2017",
        "civil": "3:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "60",
        "metric": "16"
      },
      "dewpoint": {
        "english": "36",
        "metric": "2"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "42",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "237"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "60",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.69",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "4",
        "hour_padded": "04",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497175200",
        "pretty": "4:00 AM MDT on June 11, 2017",
        "civil": "4:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "59",
        "metric": "15"
      },
      "dewpoint": {
        "english": "36",
        "metric": "2"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "28",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "239"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "59",
        "metric": "15"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.7",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "5",
        "hour_padded": "05",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497178800",
        "pretty": "5:00 AM MDT on June 11, 2017",
        "civil": "5:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "58",
        "metric": "14"
      },
      "dewpoint": {
        "english": "35",
        "metric": "2"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "17",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "242"
      },
      "wx": "Clear",
      "uvi": "0",
      "humidity": "42",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "58",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.71",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "6",
        "hour_padded": "06",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497182400",
        "pretty": "6:00 AM MDT on June 11, 2017",
        "civil": "6:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "59",
        "metric": "15"
      },
      "dewpoint": {
        "english": "35",
        "metric": "2"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "11",
      "wspd": {
        "english": "4",
        "metric": "6"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "244"
      },
      "wx": "Sunny",
      "uvi": "0",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "59",
        "metric": "15"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.71",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "7",
        "hour_padded": "07",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497186000",
        "pretty": "7:00 AM MDT on June 11, 2017",
        "civil": "7:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63",
        "metric": "17"
      },
      "dewpoint": {
        "english": "36",
        "metric": "2"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "12",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "W",
        "degrees": "261"
      },
      "wx": "Sunny",
      "uvi": "0",
      "humidity": "37",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.7",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "8",
        "hour_padded": "08",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497189600",
        "pretty": "8:00 AM MDT on June 11, 2017",
        "civil": "8:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "69",
        "metric": "21"
      },
      "dewpoint": {
        "english": "36",
        "metric": "2"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "14",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "W",
        "degrees": "272"
      },
      "wx": "Sunny",
      "uvi": "1",
      "humidity": "30",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "69",
        "metric": "21"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.69",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "9",
        "hour_padded": "09",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497193200",
        "pretty": "9:00 AM MDT on June 11, 2017",
        "civil": "9:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "74",
        "metric": "23"
      },
      "dewpoint": {
        "english": "35",
        "metric": "2"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "15",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "WNW",
        "degrees": "294"
      },
      "wx": "Sunny",
      "uvi": "3",
      "humidity": "24",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "74",
        "metric": "23"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.68",
        "metric": "1005"
      }
    },
    {
      "FCTTIME": {
        "hour": "10",
        "hour_padded": "10",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497196800",
        "pretty": "10:00 AM MDT on June 11, 2017",
        "civil": "10:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "77",
        "metric": "25"
      },
      "dewpoint": {
        "english": "35",
        "metric": "2"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "14",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "WNW",
        "degrees": "304"
      },
      "wx": "Sunny",
      "uvi": "5",
      "humidity": "21",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "77",
        "metric": "25"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.66",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "11",
        "hour_padded": "11",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497200400",
        "pretty": "11:00 AM MDT on June 11, 2017",
        "civil": "11:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "81",
        "metric": "27"
      },
      "dewpoint": {
        "english": "33",
        "metric": "1"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "16",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "18"
      },
      "wx": "Sunny",
      "uvi": "7",
      "humidity": "18",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "81",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.65",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497204000",
        "pretty": "12:00 PM MDT on June 11, 2017",
        "civil": "12:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "83",
        "metric": "28"
      },
      "dewpoint": {
        "english": "31",
        "metric": "-1"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "19",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "N",
        "degrees": "8"
      },
      "wx": "Sunny",
      "uvi": "9",
      "humidity": "15",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "83",
        "metric": "28"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "10",
      "mslp": {
        "english": "29.64",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "13",
        "hour_padded": "13",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497207600",
        "pretty": "1:00 PM MDT on June 11, 2017",
        "civil": "1:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "85",
        "metric": "29"
      },
      "dewpoint": {
        "english": "29",
        "metric": "-2"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/clear.gif",
      "fctcode": "1",
      "sky": "24",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "26"
      },
      "wx": "Mostly Sunny",
      "uvi": "9",
      "humidity": "14",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "85",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "9",
      "mslp": {
        "english": "29.64",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "14",
        "hour_padded": "14",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497211200",
        "pretty": "2:00 PM MDT on June 11, 2017",
        "civil": "2:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "86",
        "metric": "30"
      },
      "dewpoint": {
        "english": "29",
        "metric": "-2"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "31",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "16"
      },
      "wx": "Partly Cloudy",
      "uvi": "9",
      "humidity": "13",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "86",
        "metric": "30"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "9",
      "mslp": {
        "english": "29.63",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "15",
        "hour_padded": "15",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497214800",
        "pretty": "3:00 PM MDT on June 11, 2017",
        "civil": "3:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "86",
        "metric": "30"
      },
      "dewpoint": {
        "english": "29",
        "metric": "-2"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "39",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NNW",
        "degrees": "341"
      },
      "wx": "Partly Cloudy",
      "uvi": "7",
      "humidity": "13",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "86",
        "metric": "30"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "10",
      "mslp": {
        "english": "29.63",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "16",
        "hour_padded": "16",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497218400",
        "pretty": "4:00 PM MDT on June 11, 2017",
        "civil": "4:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "86",
        "metric": "30"
      },
      "dewpoint": {
        "english": "30",
        "metric": "-1"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "49",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "NW",
        "degrees": "313"
      },
      "wx": "Partly Cloudy",
      "uvi": "5",
      "humidity": "13",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "86",
        "metric": "30"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "11",
      "mslp": {
        "english": "29.63",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "17",
        "hour_padded": "17",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497222000",
        "pretty": "5:00 PM MDT on June 11, 2017",
        "civil": "5:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "85",
        "metric": "29"
      },
      "dewpoint": {
        "english": "31",
        "metric": "-1"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "59",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "NW",
        "degrees": "326"
      },
      "wx": "Partly Cloudy",
      "uvi": "3",
      "humidity": "14",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "85",
        "metric": "29"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "12",
      "mslp": {
        "english": "29.63",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "18",
        "hour_padded": "18",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497225600",
        "pretty": "6:00 PM MDT on June 11, 2017",
        "civil": "6:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "83",
        "metric": "28"
      },
      "dewpoint": {
        "english": "32",
        "metric": "0"
      },
      "condition": "Chance of Rain",
      "icon": "chancerain",
      "icon_url": "http://icons.wxug.com/i/c/k/chancerain.gif",
      "fctcode": "12",
      "sky": "70",
      "wspd": {
        "english": "10",
        "metric": "16"
      },
      "wdir": {
        "dir": "NW",
        "degrees": "325"
      },
      "wx": "Few Showers",
      "uvi": "1",
      "humidity": "16",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "83",
        "metric": "28"
      },
      "qpf": {
        "english": "0.01",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "30",
      "mslp": {
        "english": "29.63",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "19",
        "hour_padded": "19",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497229200",
        "pretty": "7:00 PM MDT on June 11, 2017",
        "civil": "7:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80",
        "metric": "27"
      },
      "dewpoint": {
        "english": "33",
        "metric": "1"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "51",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "WNW",
        "degrees": "299"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "18",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "24",
      "mslp": {
        "english": "29.63",
        "metric": "1003"
      }
    },
    {
      "FCTTIME": {
        "hour": "20",
        "hour_padded": "20",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497232800",
        "pretty": "8:00 PM MDT on June 11, 2017",
        "civil": "8:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "75",
        "metric": "24"
      },
      "dewpoint": {
        "english": "36",
        "metric": "2"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/partlycloudy.gif",
      "fctcode": "2",
      "sky": "59",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "WNW",
        "degrees": "286"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "24",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "75",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "24",
      "mslp": {
        "english": "29.66",
        "metric": "1004"
      }
    },
    {
      "FCTTIME": {
        "hour": "21",
        "hour_padded": "21",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497236400",
        "pretty": "9:00 PM MDT on June 11, 2017",
        "civil": "9:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "72",
        "metric": "22"
      },
      "dewpoint": {
        "english": "38",
        "metric": "3"
      },
      "condition": "Mostly Cloudy",
      "icon": "mostlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
      "fctcode": "3",
      "sky": "62",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "W",
        "degrees": "267"
      },
      "wx": "Mostly Cloudy",
      "uvi": "0",
      "humidity": "29",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "72",
        "metric": "22"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "24",
      "mslp": {
        "english": "29.7",
        "metric": "1006"
      }
    },
    {
      "FCTTIME": {
        "hour": "22",
        "hour_padded": "22",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497240000",
        "pretty": "10:00 PM MDT on June 11, 2017",
        "civil": "10:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "68",
        "metric": "20"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "59",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "W",
        "degrees": "279"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "35",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "68",
        "metric": "20"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "24",
      "mslp": {
        "english": "29.73",
        "metric": "1007"
      }
    },
    {
      "FCTTIME": {
        "hour": "23",
        "hour_padded": "23",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "11",
        "mday_padded": "11",
        "yday": "161",
        "isdst": "1",
        "epoch": "1497243600",
        "pretty": "11:00 PM MDT on June 11, 2017",
        "civil": "11:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Sunday",
        "weekday_name_night": "Sunday Night",
        "weekday_name_abbrev": "Sun",
        "weekday_name_unlang": "Sunday",
        "weekday_name_night_unlang": "Sunday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "65",
        "metric": "18"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "55",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "WNW",
        "degrees": "285"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "38",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "65",
        "metric": "18"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "24",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "0",
        "hour_padded": "00",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "12",
        "mday_padded": "12",
        "yday": "162",
        "isdst": "1",
        "epoch": "1497247200",
        "pretty": "12:00 AM MDT on June 12, 2017",
        "civil": "12:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63",
        "metric": "17"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "51",
      "wspd": {
        "english": "9",
        "metric": "14"
      },
      "wdir": {
        "dir": "W",
        "degrees": "276"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "42",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "1",
      "mslp": {
        "english": "29.79",
        "metric": "1009"
      }
    },
    {
      "FCTTIME": {
        "hour": "1",
        "hour_padded": "01",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "12",
        "mday_padded": "12",
        "yday": "162",
        "isdst": "1",
        "epoch": "1497250800",
        "pretty": "1:00 AM MDT on June 12, 2017",
        "civil": "1:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "61",
        "metric": "16"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "52",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "W",
        "degrees": "271"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "44",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "61",
        "metric": "16"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "2",
      "mslp": {
        "english": "29.83",
        "metric": "1010"
      }
    },
    {
      "FCTTIME": {
        "hour": "2",
        "hour_padded": "02",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "12",
        "mday_padded": "12",
        "yday": "162",
        "isdst": "1",
        "epoch": "1497254400",
        "pretty": "2:00 AM MDT on June 12, 2017",
        "civil": "2:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "59",
        "metric": "15"
      },
      "dewpoint": {
        "english": "38",
        "metric": "3"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "46",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "W",
        "degrees": "268"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "45",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "59",
        "metric": "15"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.84",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "3",
        "hour_padded": "03",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "12",
        "mday_padded": "12",
        "yday": "162",
        "isdst": "1",
        "epoch": "1497258000",
        "pretty": "3:00 AM MDT on June 12, 2017",
        "civil": "3:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "58",
        "metric": "14"
      },
      "dewpoint": {
        "english": "38",
        "metric": "3"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "39",
      "wspd": {
        "english": "8",
        "metric": "13"
      },
      "wdir": {
        "dir": "W",
        "degrees": "260"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "48",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "58",
        "metric": "14"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.85",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "4",
        "hour_padded": "04",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "12",
        "mday_padded": "12",
        "yday": "162",
        "isdst": "1",
        "epoch": "1497261600",
        "pretty": "4:00 AM MDT on June 12, 2017",
        "civil": "4:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "56",
        "metric": "13"
      },
      "dewpoint": {
        "english": "37",
        "metric": "3"
      },
      "condition": "Partly Cloudy",
      "icon": "partlycloudy",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
      "fctcode": "2",
      "sky": "32",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "258"
      },
      "wx": "Partly Cloudy",
      "uvi": "0",
      "humidity": "49",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "56",
        "metric": "13"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.85",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "5",
        "hour_padded": "05",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "12",
        "mday_padded": "12",
        "yday": "162",
        "isdst": "1",
        "epoch": "1497265200",
        "pretty": "5:00 AM MDT on June 12, 2017",
        "civil": "5:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "56",
        "metric": "13"
      },
      "dewpoint": {
        "english": "37",
        "metric": "3"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "26",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "255"
      },
      "wx": "Mostly Clear",
      "uvi": "0",
      "humidity": "51",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "56",
        "metric": "13"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "3",
      "mslp": {
        "english": "29.85",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "6",
        "hour_padded": "06",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "12",
        "mday_padded": "12",
        "yday": "162",
        "isdst": "1",
        "epoch": "1497268800",
        "pretty": "6:00 AM MDT on June 12, 2017",
        "civil": "6:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "56",
        "metric": "13"
      },
      "dewpoint": {
        "english": "38",
        "metric": "3"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "21",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "249"
      },
      "wx": "Mostly Sunny",
      "uvi": "0",
      "humidity": "50",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "56",
        "metric": "13"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.84",
        "metric": "1011"
      }
    },
    {
      "FCTTIME": {
        "hour": "7",
        "hour_padded": "07",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "12",
        "mday_padded": "12",
        "yday": "162",
        "isdst": "1",
        "epoch": "1497272400",
        "pretty": "7:00 AM MDT on June 12, 2017",
        "civil": "7:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "59",
        "metric": "15"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "17",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "WSW",
        "degrees": "254"
      },
      "wx": "Sunny",
      "uvi": "0",
      "humidity": "48",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "59",
        "metric": "15"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.83",
        "metric": "1010"
      }
    },
    {
      "FCTTIME": {
        "hour": "8",
        "hour_padded": "08",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "12",
        "mday_padded": "12",
        "yday": "162",
        "isdst": "1",
        "epoch": "1497276000",
        "pretty": "8:00 AM MDT on June 12, 2017",
        "civil": "8:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "63",
        "metric": "17"
      },
      "dewpoint": {
        "english": "39",
        "metric": "4"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "14",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "W",
        "degrees": "261"
      },
      "wx": "Sunny",
      "uvi": "1",
      "humidity": "41",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "63",
        "metric": "17"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.81",
        "metric": "1009"
      }
    },
    {
      "FCTTIME": {
        "hour": "9",
        "hour_padded": "09",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "12",
        "mday_padded": "12",
        "yday": "162",
        "isdst": "1",
        "epoch": "1497279600",
        "pretty": "9:00 AM MDT on June 12, 2017",
        "civil": "9:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "68",
        "metric": "20"
      },
      "dewpoint": {
        "english": "37",
        "metric": "3"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "12",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "WNW",
        "degrees": "285"
      },
      "wx": "Sunny",
      "uvi": "3",
      "humidity": "32",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "68",
        "metric": "20"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.79",
        "metric": "1009"
      }
    },
    {
      "FCTTIME": {
        "hour": "10",
        "hour_padded": "10",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "12",
        "mday_padded": "12",
        "yday": "162",
        "isdst": "1",
        "epoch": "1497283200",
        "pretty": "10:00 AM MDT on June 12, 2017",
        "civil": "10:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "72",
        "metric": "22"
      },
      "dewpoint": {
        "english": "36",
        "metric": "2"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "10",
      "wspd": {
        "english": "5",
        "metric": "8"
      },
      "wdir": {
        "dir": "NW",
        "degrees": "305"
      },
      "wx": "Sunny",
      "uvi": "5",
      "humidity": "26",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "72",
        "metric": "22"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.78",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "11",
        "hour_padded": "11",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "12",
        "mday_padded": "12",
        "yday": "162",
        "isdst": "1",
        "epoch": "1497286800",
        "pretty": "11:00 AM MDT on June 12, 2017",
        "civil": "11:00 AM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "AM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "76",
        "metric": "24"
      },
      "dewpoint": {
        "english": "34",
        "metric": "1"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "10",
      "wspd": {
        "english": "7",
        "metric": "11"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "29"
      },
      "wx": "Sunny",
      "uvi": "7",
      "humidity": "22",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "76",
        "metric": "24"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.76",
        "metric": "1008"
      }
    },
    {
      "FCTTIME": {
        "hour": "12",
        "hour_padded": "12",
        "min": "00",
        "min_unpadded": "0",
        "sec": "0",
        "year": "2017",
        "mon": "6",
        "mon_padded": "06",
        "mon_abbrev": "Jun",
        "mday": "12",
        "mday_padded": "12",
        "yday": "162",
        "isdst": "1",
        "epoch": "1497290400",
        "pretty": "12:00 PM MDT on June 12, 2017",
        "civil": "12:00 PM",
        "month_name": "June",
        "month_name_abbrev": "Jun",
        "weekday_name": "Monday",
        "weekday_name_night": "Monday Night",
        "weekday_name_abbrev": "Mon",
        "weekday_name_unlang": "Monday",
        "weekday_name_night_unlang": "Monday Night",
        "ampm": "PM",
        "tz": "",
        "age": "",
        "UTCDATE": ""
      },
      "temp": {
        "english": "80",
        "metric": "27"
      },
      "dewpoint": {
        "english": "33",
        "metric": "1"
      },
      "condition": "Clear",
      "icon": "clear",
      "icon_url": "http://icons.wxug.com/i/c/k/nt_clear.gif",
      "fctcode": "1",
      "sky": "10",
      "wspd": {
        "english": "6",
        "metric": "10"
      },
      "wdir": {
        "dir": "NNE",
        "degrees": "14"
      },
      "wx": "Sunny",
      "uvi": "9",
      "humidity": "18",
      "windchill": {
        "english": "-9999",
        "metric": "-9999"
      },
      "heatindex": {
        "english": "-9999",
        "metric": "-9999"
      },
      "feelslike": {
        "english": "80",
        "metric": "27"
      },
      "qpf": {
        "english": "0.0",
        "metric": "0"
      },
      "snow": {
        "english": "0.0",
        "metric": "0"
      },
      "pop": "0",
      "mslp": {
        "english": "29.75",
        "metric": "1007"
      }
    }
  ]
}

export default testData;
